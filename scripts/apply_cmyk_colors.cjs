/**
 * apply_cmyk_colors.cjs
 * CMYK-safe 2-channel (Any 2 plates) color migration.
 * IRON RULE: Only color values are changed. No content, layout, or logic touched.
 *
 * CONSTRAINT: Every color → max 2 non-zero CMYK channels.
 * Strategy:
 *   Ensure that at least 2 out of the 4 CMYK channels are always zero, 
 *   regardless of which two colors are mixed.
 *
 * RGB derivation: Custom per color profile.
 */
'use strict';
const fs   = require('fs');
const path = require('path');

// ---------------------------------------------------------------------------
// MASTER COLOR MAP  →  { screen: '#RRGGBB', cmyk: [C,M,Y,K] }
// ALL entries: at most 2 non-zero channels
// ---------------------------------------------------------------------------
const MAP = {
  // ── Core brand blues ─────────────────────────────────────────────────────
  '#1e3a5f': { screen:'#004D99', cmyk:[100,0,0,70] },
  '#1a5276': { screen:'#003380', cmyk:[100,0,0,60] },
  '#2c3e50': { screen:'#003366', cmyk:[100,0,0,75] },
  '#34495e': { screen:'#004080', cmyk:[100,0,0,65] },
  '#0f172a': { screen:'#00001A', cmyk:[0,0,0,95]   },
  '#1e293b': { screen:'#003355', cmyk:[100,0,0,80] },
  '#212f3d': { screen:'#002244', cmyk:[100,0,0,82] },

  // ── SMART pedagogical hues ────────────────────────────────────────────────
  '#117a65': { screen:'#006666', cmyk:[80,0,0,20]  },
  '#13806c': { screen:'#006060', cmyk:[80,0,0,25]  },
  '#13bf86': { screen:'#007A99', cmyk:[70,0,0,5]   },
  '#208046': { screen:'#006666', cmyk:[75,0,0,15]  },
  '#1e8449': { screen:'#006666', cmyk:[75,0,0,15]  },
  '#27ae60': { screen:'#006699', cmyk:[75,0,0,10]  },
  '#22c55e': { screen:'#007777', cmyk:[70,0,0,8]   },
  '#16a34a': { screen:'#006666', cmyk:[75,0,0,12]  },
  '#15803d': { screen:'#005555', cmyk:[75,0,0,18]  },
  '#2980b9': { screen:'#0066B3', cmyk:[85,0,0,10]  },
  '#3498db': { screen:'#007ACC', cmyk:[80,0,0,5]   },
  '#5d6d7e': { screen:'#737373', cmyk:[0,0,0,55]   },

  // ── Warning/brown tones → Y+K or M+K (2 plates) ──────────────────────────
  '#784212': { screen:'#784212', cmyk:[0,0,50,70]   },
  '#733f11': { screen:'#733F11', cmyk:[0,0,50,70]   },
  '#78350f': { screen:'#78350F', cmyk:[0,0,60,70]   },
  '#5d4037': { screen:'#5D4037', cmyk:[0,20,0,70]   },

  // ── Danger/red tones → True Reds (M+Y plates) ────────────────────────────
  '#922b21': { screen:'#C0392B', cmyk:[0,90,90,0]   },
  '#8c2a23': { screen:'#C0392B', cmyk:[0,90,90,0]   },
  '#c0392b': { screen:'#C0392B', cmyk:[0,85,85,0]   },
  '#e74c3c': { screen:'#E74C3C', cmyk:[0,80,75,0]   },
  '#ef4444': { screen:'#EF4444', cmyk:[0,80,70,0]   },
  '#dc2626': { screen:'#DC2626', cmyk:[0,85,80,0]   },
  '#b91c1c': { screen:'#B91C1C', cmyk:[0,100,100,0] },
  '#e11d48': { screen:'#E11D48', cmyk:[0,90,50,0]   },
  '#991b1b': { screen:'#B91C1C', cmyk:[0,100,100,0] },
  '#f24949': { screen:'#F24949', cmyk:[0,75,65,0]   },

  // ── Orange / yellow / warning → True Warm tones (M+Y or Y plates) ────────
  '#f0b44c': { screen:'#F0B44C', cmyk:[0,30,80,0]   },
  '#ca8a04': { screen:'#CA8A04', cmyk:[0,40,100,0]  },
  '#f59e0b': { screen:'#F59E0B', cmyk:[0,45,100,0]  },
  '#d97706': { screen:'#D97706', cmyk:[0,55,100,0]  },
  '#d9770b': { screen:'#D97706', cmyk:[0,55,100,0]  },
  '#b45309': { screen:'#B45309', cmyk:[0,65,100,0]  },
  '#e67e22': { screen:'#E67E22', cmyk:[0,50,90,0]   },
  '#f1c40f': { screen:'#F1C40F', cmyk:[0,15,100,0]  },
  '#f29d0c': { screen:'#F29D0C', cmyk:[0,40,100,0]  },
  '#f2b649': { screen:'#F2B649', cmyk:[0,30,80,0]   },
  '#f97316': { screen:'#F97316', cmyk:[0,60,100,0]  },

  // ── Blues UI interactive ──────────────────────────────────────────────────
  '#3b82f6': { screen:'#0080FF', cmyk:[75,0,0,0]   },
  '#0369a1': { screen:'#004D99', cmyk:[90,0,0,30]  },
  '#0284c7': { screen:'#0066B3', cmyk:[85,0,0,15]  },
  '#1e40af': { screen:'#003399', cmyk:[90,0,0,45]  },
  '#1d4ed8': { screen:'#0044BB', cmyk:[85,0,0,25]  },
  '#2563eb': { screen:'#0055CC', cmyk:[80,0,0,15]  },
  '#4338ca': { screen:'#2233AA', cmyk:[70,0,0,30]  },
  '#3730a3': { screen:'#1A2299', cmyk:[72,0,0,35]  },
  '#7c3aed': { screen:'#222266', cmyk:[40,0,0,55]  },
  '#6c3483': { screen:'#111144', cmyk:[30,0,0,65]  },

  // ── Light blue backgrounds ────────────────────────────────────────────────
  '#93c5fd': { screen:'#66AAFF', cmyk:[40,0,0,0]   },
  '#dbeafe': { screen:'#C8DDFF', cmyk:[15,0,0,0]   },
  '#e0f2fe': { screen:'#CCEBFF', cmyk:[12,0,0,0]   },
  '#f0f9ff': { screen:'#E5F5FF', cmyk:[6,0,0,0]    },
  '#eef6ff': { screen:'#DFF0FF', cmyk:[8,0,0,0]    },
  '#eef2ff': { screen:'#DDEEFF', cmyk:[8,0,0,2]    },
  '#f0f4ff': { screen:'#E5F0FF', cmyk:[6,0,0,1]    },
  '#bae6fd': { screen:'#AAD9FF', cmyk:[28,0,0,0]   },
  '#ebf5fb': { screen:'#DAF0FF', cmyk:[10,0,0,0]   },
  '#e0e7ff': { screen:'#D5E5FF', cmyk:[12,0,0,2]   },
  '#f3e8ff': { screen:'#EEE5FF', cmyk:[8,0,0,2]    },

  // ── Green backgrounds → True light green (C+Y) ───────────────────────────
  '#dcfce7': { screen:'#DCFCE7', cmyk:[10,0,15,0]   },
  '#bbf7d0': { screen:'#BBF7D0', cmyk:[20,0,30,0]   },
  '#f0fdf4': { screen:'#F0FDF4', cmyk:[5,0,8,0]     },
  '#eafaf1': { screen:'#EAFAF1', cmyk:[6,0,10,0]    },
  '#e6f2f2': { screen:'#E6F2F2', cmyk:[8,0,5,0]     },

  // ── Red/pink backgrounds → True light red (M+Y) ──────────────────────────
  '#fef2f2': { screen:'#FEF2F2', cmyk:[0,4,3,0]     },
  '#fdf2f2': { screen:'#FEF2F2', cmyk:[0,4,3,0]     },
  '#fee2e2': { screen:'#FEE2E2', cmyk:[0,10,8,0]    },
  '#fecaca': { screen:'#FECACA', cmyk:[0,18,15,0]   },
  '#fff1f2': { screen:'#FFF1F2', cmyk:[0,5,3,0]     },
  '#fff5f5': { screen:'#FFF5F5', cmyk:[0,3,2,0]     },
  '#feb2b2': { screen:'#FEB2B2', cmyk:[0,25,20,0]   },

  // ── Yellow/warm backgrounds → True Yellow (Y only) ───────────────────────
  '#fef9e7': { screen:'#FEF9E7', cmyk:[0,0,10,0]    },
  '#fef3c7': { screen:'#FEF3C7', cmyk:[0,0,15,0]    },
  '#fefce8': { screen:'#FEFCE8', cmyk:[0,0,8,0]     },
  '#fffbeb': { screen:'#FFFBEB', cmyk:[0,0,10,0]    },
  '#fff7ed': { screen:'#FFF7ED', cmyk:[0,0,8,0]     },
  '#fff9db': { screen:'#FFF9DB', cmyk:[0,0,12,0]    },
  '#ffffe6': { screen:'#FFFFE6', cmyk:[0,0,10,0]    },

  // ── Layout neutral backgrounds ────────────────────────────────────────────
  '#e2e8f0': { screen:'#E0E8F5', cmyk:[8,0,0,5]    },
  '#f0f3f4': { screen:'#F2F5F8', cmyk:[4,0,0,3]    },
  '#f4f6f7': { screen:'#F4F7FA', cmyk:[3,0,0,2]    },
  '#f8fafc': { screen:'#F7FAFD', cmyk:[2,0,0,2]    },
  '#f8f9fa': { screen:'#F8FAFC', cmyk:[1,0,0,2]    },
  '#fdfdfd': { screen:'#FDFEFE', cmyk:[0,0,0,1]    },
  '#fdfefe': { screen:'#FDFEFE', cmyk:[0,0,0,1]    },
  '#fcfcfc': { screen:'#FCFCFC', cmyk:[0,0,0,2]    },
  '#eef2f7': { screen:'#EBF0F8', cmyk:[6,0,0,4]    },
  '#f1f5f9': { screen:'#EFF4FA', cmyk:[5,0,0,3]    },
  '#f5f7fa': { screen:'#F3F6FA', cmyk:[4,0,0,2]    },
  '#ffffff': { screen:'#FFFFFF', cmyk:[0,0,0,0]    },
  '#fff':    { screen:'#FFFFFF', cmyk:[0,0,0,0]    },
  '#e0e0e0': { screen:'#E0E0E0', cmyk:[0,0,0,12]   },
  '#ecf0f1': { screen:'#EBF0F2', cmyk:[4,0,0,4]    },

  // ── Borders & lines ───────────────────────────────────────────────────────
  '#7f8c8d': { screen:'#737373', cmyk:[0,0,0,55]   },
  '#ddd':    { screen:'#DDDDDD', cmyk:[0,0,0,13]   },
  '#dddddd': { screen:'#DDDDDD', cmyk:[0,0,0,13]   },
  '#cbd5e1': { screen:'#CCDDEE', cmyk:[8,0,0,10]   },
  '#94a3b8': { screen:'#99AACC', cmyk:[12,0,0,28]  },
  '#64748b': { screen:'#667799', cmyk:[15,0,0,45]  },
  '#bbbbbb': { screen:'#BBBBBB', cmyk:[0,0,0,27]   },
  '#bbb':    { screen:'#BBBBBB', cmyk:[0,0,0,27]   },
  '#eeeeee': { screen:'#EEEEEE', cmyk:[0,0,0,7]    },
  '#eee':    { screen:'#EEEEEE', cmyk:[0,0,0,7]    },
  '#cccccc': { screen:'#CCCCCC', cmyk:[0,0,0,20]   },
  '#ccc':    { screen:'#CCCCCC', cmyk:[0,0,0,20]   },
  '#bdc3c7': { screen:'#BBCCCC', cmyk:[4,0,0,22]   },
  '#aab7c4': { screen:'#AABBCC', cmyk:[8,0,0,22]   },

  // ── Text colors ───────────────────────────────────────────────────────────
  '#333333': { screen:'#333333', cmyk:[0,0,0,80]   },
  '#333':    { screen:'#333333', cmyk:[0,0,0,80]   },
  '#444444': { screen:'#444444', cmyk:[0,0,0,73]   },
  '#444':    { screen:'#444444', cmyk:[0,0,0,73]   },
  '#555555': { screen:'#555555', cmyk:[0,0,0,67]   },
  '#555':    { screen:'#555555', cmyk:[0,0,0,67]   },
  '#111111': { screen:'#111111', cmyk:[0,0,0,93]   },
  '#111':    { screen:'#111111', cmyk:[0,0,0,93]   },
  '#000000': { screen:'#000000', cmyk:[0,0,0,100]  },
  '#334155': { screen:'#334466', cmyk:[25,0,0,73]  },
  '#475569': { screen:'#445566', cmyk:[18,0,0,60]  },
};

// ---------------------------------------------------------------------------
// Sort longest-first to avoid partial substitution (e.g. #eee before #eeeeee)
// ---------------------------------------------------------------------------
const PAIRS = Object.entries(MAP).sort((a,b) => b[0].length - a[0].length);

function getAllFiles(dir, exts) {
  const out = [];
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !['node_modules','images','.git'].includes(e.name))
      out.push(...getAllFiles(full, exts));
    else if (exts.some(x => e.name.endsWith(x)))
      out.push(full);
  }
  return out;
}

function processFile(fp) {
  let src = fs.readFileSync(fp,'utf8');
  const orig = src;
  for (const [old, {screen}] of PAIRS) {
    // Match only standalone hex colors (not inside longer hex strings)
    const re = new RegExp(`(?<![0-9a-fA-F])${old.replace('#','#')}(?![0-9a-fA-F])`, 'gi');
    src = src.replace(re, match => match === match.toUpperCase() ? screen.toUpperCase() : screen);
  }
  if (src !== orig) { fs.writeFileSync(fp,src,'utf8'); return true; }
  return false;
}

// ---------------------------------------------------------------------------
// STEP 1 — Rewrite CSS variables in global.css
// ---------------------------------------------------------------------------
const CSS_FILE = path.resolve(__dirname,'../src/styles/global.css');
let css = fs.readFileSync(CSS_FILE,'utf8');

// Replace :root block
css = css.replace(/:root\s*\{[^}]*\}/s, `:root {
  /* ── CMYK-safe C+K 2-plate system (screen RGB approximations) ── */
  --ink-primary:        #004D99;   /* C100 K70  */
  --ink-secondary:      #003380;   /* C100 K60  */
  --ink-accent:         #006666;   /* C80  K20  */
  --ink-danger:         #1A1A4D;   /* C15  K70  */
  --ink-warning:        #404040;   /* C0   K75  */
  --ink-success:        #006699;   /* C75  K10  */
  --ink-text:           #111111;   /* C0   K93  */
  --ink-muted:          #737373;   /* C0   K55  */
  --ink-bg-page:        #FFFFFF;   /* C0   K0   */
  --ink-bg-muted:       #F7FAFD;   /* C2   K2   */
  --ink-bg-soft-red:    #F5F5FF;   /* C4   K2   */
  --ink-bg-soft-blue:   #AAD9FF;   /* C28  K0   */
  --ink-bg-soft-green:  #DDFFF0;   /* C8   K0   */
  --ink-bg-soft-yellow: #FFFCF0;   /* C0   K3   */
  --ink-border-light:   #DDDDDD;   /* C0   K13  */
  --ink-border-slate:   #CCDDEE;   /* C8   K10  */
}`);

// Replace @media print :root block
css = css.replace(/@media print\s*\{\s*:root\s*\{[^}]*\}\s*\}/s, `@media print {
  :root {
    /* ── CMYK device-cmyk() — max 2 non-zero channels ── */
    --ink-primary:        device-cmyk(100% 0% 0% 70%);
    --ink-secondary:      device-cmyk(100% 0% 0% 60%);
    --ink-accent:         device-cmyk(80%  0% 0% 20%);
    --ink-danger:         device-cmyk(0%   85% 85% 0%);
    --ink-warning:        device-cmyk(0%   50% 100% 0%);
    --ink-success:        device-cmyk(75%  0% 75% 0%);
    --ink-text:           device-cmyk(0%   0% 0% 93%);
    --ink-muted:          device-cmyk(0%   0% 0% 55%);
    --ink-bg-page:        device-cmyk(0%   0% 0% 0%);
    --ink-bg-muted:       device-cmyk(2%   0% 0% 2%);
    --ink-bg-soft-red:    device-cmyk(0%   5% 5% 0%);
    --ink-bg-soft-blue:   device-cmyk(28%  0% 0% 0%);
    --ink-bg-soft-green:  device-cmyk(10%  0% 15% 0%);
    --ink-bg-soft-yellow: device-cmyk(0%   0% 10% 0%);
    --ink-border-light:   device-cmyk(0%   0% 0% 13%);
    --ink-border-slate:   device-cmyk(8%   0% 0% 10%);
  }
}`);

fs.writeFileSync(CSS_FILE, css, 'utf8');
console.log('✅ global.css CSS variables updated');

// ---------------------------------------------------------------------------
// STEP 2 — Replace inline hex colors in all .jsx / .js / .css files
// ---------------------------------------------------------------------------
const SRC = path.resolve(__dirname,'../src');
const files = getAllFiles(SRC, ['.jsx','.js','.css']);
let changed = 0;
for (const f of files) {
  if (processFile(f)) { changed++; console.log(`  ✅ ${path.relative(SRC,f)}`); }
}
console.log(`\n✨ Done. ${changed}/${files.length} files updated.`);

// ---------------------------------------------------------------------------
// STEP 3 — Validate: max 2 non-zero channels
// ---------------------------------------------------------------------------
let ok = true;
for (const [hex,{cmyk:[c,m,y,k]}] of Object.entries(MAP)) {
  if ([c,m,y,k].filter(v=>v>0).length>2) { console.error(`❌ VIOLATION >2ch: ${hex}`); ok=false; }
}
console.log(ok ? '✅ All CMYK entries comply (max 2 channels)' : '❌ Fix violations before print!');
