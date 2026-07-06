/**
 * Deterministic Dual Color System Constants (Strict 2-Color C+K Offset Print System)
 * Every color has a browser RGB hex value and a print CMYK equivalent.
 * To enable direct 2-color printing, all Magenta (M) and Yellow (Y) channels are set to 0.
 * Colors are built solely using Cyan (C) and Key/Black (K) plates.
 */

export const COLORS = {
  // 1. CORE BRAND COLORS (Primary / Secondary)
  primaryBlue: {
    rgb: "#004D99",
    cmyk: [100, 0, 0, 70] // C + K only
  },
  darkTeal: {
    rgb: "#003380",
    cmyk: [100, 0, 0, 50] // C + K only
  },
  slateBlue: {
    rgb: "#003366",
    cmyk: [100, 0, 0, 70] // C + K only
  },
  mediumSlateBlue: {
    rgb: "#004080",
    cmyk: [100, 0, 0, 50] // C + K only
  },

  // 2. SMART PEDAGOGICAL PHASE COLORS
  sTealGreen: {
    rgb: "#006666",
    cmyk: [80, 0, 0, 20] // C + K only
  },
  mCrimsonRed: {
    rgb: "#1A1A3B",
    cmyk: [30, 0, 0, 70] // C + K only
  },
  aForestGreen: {
    rgb: "#006666",
    cmyk: [80, 0, 0, 20] // C + K only
  },
  rGreyBlue: {
    rgb: "#737373",
    cmyk: [0, 0, 0, 60] // K only
  },
  tDarkCharcoal: {
    rgb: "#002244",
    cmyk: [0, 0, 0, 90] // K only
  },
  introBlue: {
    rgb: "#0066B3",
    cmyk: [100, 0, 0, 50] // C + K only
  },
  secondaryBlue: {
    rgb: "#007ACC",
    cmyk: [100, 0, 0, 50] // C + K only
  },
  brownWarning: {
    rgb: "#404040",
    cmyk: [15, 0, 0, 40] // C + K only
  },
  darkBrown: {
    rgb: "#404040",
    cmyk: [15, 0, 0, 40] // C + K only
  },
  successGreen: {
    rgb: "#006699",
    cmyk: [75, 0, 0, 15] // C + K only
  },
  alertRed: {
    rgb: "#1A1A4D",
    cmyk: [30, 0, 0, 70] // C + K only
  },

  // 3. STRATEGY / INFO BOXES
  softRedBg: {
    rgb: "#F5F5FF",
    cmyk: [0, 0, 0, 8] // K only
  },
  softRedBgAlternative: {
    rgb: "#F5F5FF",
    cmyk: [0, 0, 0, 8]
  },
  softBlueBg: {
    rgb: "#AAD9FF",
    cmyk: [15, 0, 0, 5] // C + K only
  },
  softBlueBgAlternative: {
    rgb: "#DAF0FF",
    cmyk: [15, 0, 0, 5]
  },
  softGreenBg: {
    rgb: "#DDFFF0",
    cmyk: [12, 0, 0, 4] // C + K only
  },
  softGreenBgAlternative: {
    rgb: "#E5FFF5",
    cmyk: [12, 0, 0, 4]
  },
  softYellowBg: {
    rgb: "#FFFCF0",
    cmyk: [0, 0, 0, 6] // K only
  },
  strongBlue: {
    rgb: "#004D99",
    cmyk: [100, 0, 0, 50] // C + K only
  },
  strongBlueAlternative: {
    rgb: "#0066B3",
    cmyk: [100, 0, 0, 50]
  },
  // Red Range
  alertRedRange1: {
    rgb: "#333366",
    cmyk: [30, 0, 0, 70]
  },
  alertRedRange2: {
    rgb: "#111144",
    cmyk: [30, 0, 0, 70]
  },
  alertRedRange3: {
    rgb: "#0D0D33",
    cmyk: [30, 0, 0, 70]
  },
  alertRedRange4: {
    rgb: "#1A1A4D",
    cmyk: [30, 0, 0, 70]
  },
  alertRedRange5: {
    rgb: "#0D0D33",
    cmyk: [30, 0, 0, 70]
  },
  alertRedRange6: {
    rgb: "#1A1A4D",
    cmyk: [30, 0, 0, 70]
  },
  alertRedRange7: {
    rgb: "#333366",
    cmyk: [30, 0, 0, 70]
  },
  alertRedRange8: {
    rgb: "#1A1A3D",
    cmyk: [30, 0, 0, 70]
  },
  // Amber Range
  amberRange1: {
    rgb: "#665500",
    cmyk: [15, 0, 0, 40]
  },
  amberRange2: {
    rgb: "#665500",
    cmyk: [15, 0, 0, 40]
  },
  amberRange3: {
    rgb: "#555500",
    cmyk: [15, 0, 0, 40]
  },
  amberRange4: {
    rgb: "#555500",
    cmyk: [15, 0, 0, 40]
  },
  amberRange5: {
    rgb: "#665500",
    cmyk: [15, 0, 0, 40]
  },
  amberRange6: {
    rgb: "#665500",
    cmyk: [15, 0, 0, 40]
  },
  amberRange7: {
    rgb: "#553300",
    cmyk: [15, 0, 0, 40]
  },
  // Success Range
  successRange1: {
    rgb: "#007777",
    cmyk: [75, 0, 0, 15]
  },
  successRange2: {
    rgb: "#005555",
    cmyk: [75, 0, 0, 15]
  },
  successRange3: {
    rgb: "#006060",
    cmyk: [75, 0, 0, 15]
  },
  successRange4: {
    rgb: "#007A99",
    cmyk: [75, 0, 0, 15]
  },
  successRange5: {
    rgb: "#006666",
    cmyk: [75, 0, 0, 15]
  },

  // 4. BACKGROUNDS
  lightGreyBlue: {
    rgb: "#E0E8F5",
    cmyk: [10, 0, 0, 10]
  },
  // Light Greys
  lightGrey1: {
    rgb: "#F7FAFD",
    cmyk: [0, 0, 0, 5]
  },
  lightGrey2: {
    rgb: "#FCFCFC",
    cmyk: [0, 0, 0, 3]
  },
  lightGrey3: {
    rgb: "#FDFEFE",
    cmyk: [0, 0, 0, 2]
  },
  lightGrey4: {
    rgb: "#FDFEFE",
    cmyk: [0, 0, 0, 2]
  },
  lightGrey5: {
    rgb: "#F3F6FA",
    cmyk: [0, 0, 0, 4]
  },
  lightGrey6: {
    rgb: "#F8FAFC",
    cmyk: [0, 0, 0, 3]
  },
  lightGrey7: {
    rgb: "#EBF0F8",
    cmyk: [0, 0, 0, 5]
  },
  lightGrey8: {
    rgb: "#EFF4FA",
    cmyk: [0, 0, 0, 4]
  },
  lightGrey9: {
    rgb: "#E0F0F0",
    cmyk: [0, 0, 0, 6]
  },
  lightGrey10: {
    rgb: "#F2F5F8",
    cmyk: [0, 0, 0, 4]
  },
  lightGrey11: {
    rgb: "#F4F7FA",
    cmyk: [0, 0, 0, 3]
  },
  // Cream / Yellow
  creamYellow1: {
    rgb: "#FFFDE5",
    cmyk: [0, 0, 0, 6]
  },
  creamYellow2: {
    rgb: "#FFFAF0",
    cmyk: [0, 0, 0, 6]
  },
  creamYellow3: {
    rgb: "#FFFCE0",
    cmyk: [0, 0, 0, 6]
  },
  creamYellow4: {
    rgb: "#FFFFF0",
    cmyk: [0, 0, 0, 6]
  },
  // White
  white1: {
    rgb: "#FFFFFF",
    cmyk: [0, 0, 0, 0]
  },
  white2: {
    rgb: "#FFFFFF",
    cmyk: [0, 0, 0, 0]
  },

  // 5. BORDERS
  mediumGreyBorder: {
    rgb: "#737373",
    cmyk: [0, 0, 0, 60]
  },
  lightGreyBorder1: {
    rgb: "#DDDDDD",
    cmyk: [0, 0, 0, 12]
  },
  lightGreyBorder2: {
    rgb: "#EEEEEE",
    cmyk: [0, 0, 0, 6]
  },
  slateBorder: {
    rgb: "#CCDDEE",
    cmyk: [0, 0, 0, 20]
  },
  darkGreyBorder: {
    rgb: "#667799",
    cmyk: [0, 0, 0, 50]
  },

  // 6. UI / INTERACTIVE
  primaryButtonBlue: {
    rgb: "#0080FF",
    cmyk: [100, 0, 0, 50]
  },
  lightBlueHover: {
    rgb: "#66AAFF",
    cmyk: [100, 0, 0, 50]
  },
  activeBlueBg: {
    rgb: "#C8DDFF",
    cmyk: [15, 0, 0, 5]
  },
  successHover: {
    rgb: "#AAEEDD",
    cmyk: [20, 0, 0, 15]
  },
  dangerHover: {
    rgb: "#E8E8FF",
    cmyk: [0, 0, 0, 15]
  },
  darkUi: {
    rgb: "#00001A",
    cmyk: [0, 0, 0, 90]
  },
  textDark1: {
    rgb: "#333333",
    cmyk: [0, 0, 0, 90]
  },
  textDark2: {
    rgb: "#111111",
    cmyk: [0, 0, 0, 90]
  },
  textDark3: {
    rgb: "#003355",
    cmyk: [0, 0, 0, 90]
  },
  textDark4: {
    rgb: "#333333",
    cmyk: [0, 0, 0, 90]
  },
  textDark5: {
    rgb: "#444444",
    cmyk: [0, 0, 0, 90]
  },
  textDark6: {
    rgb: "#555555",
    cmyk: [0, 0, 0, 60]
  }
};

// Auto-generated lookup map for extremely fast, constant-time runtime lookups.
// Maps lowercased rgb, rgba (alpha=1), and hex strings to their CMYK array.
const lookupMap = new Map();

// Helper to convert hex to RGB string for dual mapping
function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Build the lookup map
Object.values(COLORS).forEach(({ rgb, cmyk }) => {
  const cleanHex = rgb.trim().toLowerCase();
  lookupMap.set(cleanHex, cmyk);

  // Map RGB strings too
  const parsed = hexToRgb(cleanHex);
  if (parsed) {
    const rgbStr = `rgb(${parsed.r}, ${parsed.g}, ${parsed.b})`;
    lookupMap.set(rgbStr, cmyk);
    const rgbaStr = `rgba(${parsed.r}, ${parsed.g}, ${parsed.b}, 1)`;
    lookupMap.set(rgbaStr, cmyk);
  }
});

// Add explicit standard names/colors that might appear
lookupMap.set('white', [0, 0, 0, 0]);
lookupMap.set('transparent', [0, 0, 0, 0]);
lookupMap.set('rgba(0, 0, 0, 0)', [0, 0, 0, 0]);

/**
 * Retrieves the CMYK array [c, m, y, k] for any color string.
 * Returns null if the color is not in the deterministic dual system.
 * @param {string} colorStr 
 * @returns {number[]|null}
 */
export function getStaticCmyk(colorStr) {
  if (!colorStr) return null;
  const normalized = colorStr.trim().toLowerCase().replace(/\s+/g, '');
  
  // Try direct lookup with spaces removed (e.g. "rgb(30,58,95)" instead of "rgb(30, 58, 95)")
  const directMatch = lookupMap.get(normalized);
  if (directMatch) return directMatch;

  // Let's try matching with space padding normalized
  for (const [key, val] of lookupMap.entries()) {
    if (key.replace(/\s+/g, '') === normalized) {
      return val;
    }
  }

  return null;
}
