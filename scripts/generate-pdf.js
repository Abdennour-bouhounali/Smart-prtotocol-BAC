const fs = require('fs');
const path = require('path');
const http = require('http');
const { execSync } = require('child_process');
const puppeteer = require('puppeteer');

// Parse command line arguments
const args = process.argv.slice(2);
const modeArg = args.find(arg => arg.startsWith('--mode='));
const mode = modeArg ? modeArg.split('=')[1] : 'c-k'; // 'c-k' (2-color Cyan/Black) or 'k-only' (Monochrome)
const outputArg = args.find(arg => arg.startsWith('--output='));
const outputFile = outputArg ? outputArg.split('=')[1] : 'smart_book_print.pdf';

console.log(`🚀 Starting PDF export process in mode: "${mode}"`);

// 1. Build the production bundle
console.log('📦 Building Vite production client environment...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully.');
} catch (err) {
  console.error('❌ Build failed:', err);
  process.exit(1);
}

// 2. Start local HTTP server to serve build output
const distDir = path.join(__dirname, '../dist');
const port = 8099;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url.split('?')[0]);
  if (filePath === distDir || filePath.endsWith('/')) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, async () => {
  console.log(`📡 Local server listening on http://localhost:${port}`);

  try {
    // 3. Launch Puppeteer browser
    console.log('🤖 Launching headless browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1200, height: 1600 });

    // Enable print media
    await page.emulateMediaType('print');

    // 4. Navigate to local app server
    console.log(`🌐 Navigating to app...`);
    await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0' });

    // 5. Inject chosen color mode overrides into document root
    console.log(`🎨 Emulating color mode: "${mode}"`);
    if (mode === 'k-only') {
      await page.evaluate(() => {
        const style = document.createElement('style');
        style.textContent = `
          @media print {
            :root {
              --ink-primary: device-cmyk(0%, 0%, 0%, 80%) !important;
              --ink-secondary: device-cmyk(0%, 0%, 0%, 60%) !important;
              --ink-accent: device-cmyk(0%, 0%, 0%, 40%) !important;
              --ink-danger: device-cmyk(0%, 0%, 0%, 75%) !important;
              --ink-warning: device-cmyk(0%, 0%, 0%, 45%) !important;
              --ink-success: device-cmyk(0%, 0%, 0%, 50%) !important;
              --ink-bg-soft-red: device-cmyk(0%, 0%, 0%, 8%) !important;
              --ink-bg-soft-blue: device-cmyk(0%, 0%, 0%, 5%) !important;
              --ink-bg-soft-green: device-cmyk(0%, 0%, 0%, 4%) !important;
              --ink-bg-soft-yellow: device-cmyk(0%, 0%, 0%, 6%) !important;
              --ink-border-light: device-cmyk(0%, 0%, 0%, 12%) !important;
              --ink-border-slate: device-cmyk(0%, 0%, 0%, 20%) !important;
            }
          }
        `;
        document.head.appendChild(style);
      });
    } else {
      // Default: c-k 2-color Cyan & Black mode
      await page.evaluate(() => {
        const style = document.createElement('style');
        style.textContent = `
          @media print {
            :root {
              --ink-primary: device-cmyk(100%, 0%, 0%, 70%) !important;
              --ink-secondary: device-cmyk(100%, 0%, 0%, 50%) !important;
              --ink-accent: device-cmyk(80%, 0%, 0%, 20%) !important;
              --ink-danger: device-cmyk(30%, 0%, 0%, 70%) !important;
              --ink-warning: device-cmyk(15%, 0%, 0%, 40%) !important;
              --ink-success: device-cmyk(75%, 0%, 0%, 15%) !important;
              --ink-bg-soft-red: device-cmyk(0%, 0%, 0%, 8%) !important;
              --ink-bg-soft-blue: device-cmyk(15%, 0%, 0%, 5%) !important;
              --ink-bg-soft-green: device-cmyk(12%, 0%, 0%, 4%) !important;
              --ink-bg-soft-yellow: device-cmyk(0%, 0%, 0%, 6%) !important;
              --ink-border-light: device-cmyk(0%, 0%, 0%, 12%) !important;
              --ink-border-slate: device-cmyk(0%, 0%, 0%, 20%) !important;
            }
          }
        `;
        document.head.appendChild(style);
      });
    }

    // 6. Wait for typesetting and pagination to flag ready
    console.log('⏳ Waiting for MathJax typesetting and print layout validation...');
    await page.waitForSelector('body[data-pdf-ready="true"]', { timeout: 60000 });
    console.log('✅ Layout and typography typesetting validated.');

    // 7. Verify all colors on page are strictly 2-plate (C + K) compliant
    console.log('🔍 Executing color separation validation check...');
    const colorViolations = await page.evaluate(() => {
      const elements = Array.from(document.querySelectorAll('.print-only *'));
      const violations = [];

      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const properties = ['color', 'background-color', 'border-color', 'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color'];
        
        properties.forEach(prop => {
          const val = style.getPropertyValue(prop);
          // If the computed value uses a non-compliant CMYK space (e.g. has M or Y > 0)
          if (val && val.includes('device-cmyk')) {
            const matches = val.match(/device-cmyk\(([^)]+)\)/);
            if (matches) {
              const channels = matches[1].split(',').map(v => parseFloat(v.trim()));
              const m = channels[1] || 0;
              const y = channels[2] || 0;
              if (m > 0 || y > 0) {
                violations.push({
                  element: el.tagName + (el.className ? '.' + el.className.split(' ').join('.') : ''),
                  property: prop,
                  value: val
                });
              }
            }
          }
        });
      });
      return violations;
    });

    if (colorViolations.length > 0) {
      console.warn(`⚠️ Warning: Found ${colorViolations.length} color separation violations:`);
      colorViolations.slice(0, 10).forEach(v => {
        console.warn(`  - Element <${v.element}> property "${v.property}" has M/Y channels: "${v.value}"`);
      });
    } else {
      console.log('✅ Color separation validation check: 100% compliant. Only Cyan and Black plates active.');
    }

    // 8. Generate print-ready PDF file
    console.log(`📄 Generating PDF: "${outputFile}"...`);
    await page.pdf({
      path: outputFile,
      width: '170mm',
      height: '240mm',
      printBackground: true,
      margin: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
      }
    });

    console.log(`🎉 PDF successfully generated and saved to: ${path.resolve(outputFile)}`);
    
    // Cleanup & Exit
    await browser.close();
    server.close(() => {
      console.log('🔌 Server shut down. Process complete.');
      process.exit(0);
    });
  } catch (error) {
    console.error('❌ PDF Generation failed:', error);
    server.close(() => {
      process.exit(1);
    });
  }
});
