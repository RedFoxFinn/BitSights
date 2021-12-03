
const colors = Object.freeze({
  PRIMARY: [255,204,29],
  SECONDARY: [11,70,25],
  TERTIARY: [17,101,48],
  BACKGROUND: [218,218,218],
  ERR: [205,24,24],
  INFO: [15,44,103],
  WARN: [255,103,1],
  SPECIAL: [174,0,90]
});

export const getColor = (whatFor = 'default') => {
  switch (whatFor) {
  case 'background': return `rgb(${colors.BACKGROUND})`;
  case 'background-alt': return `rgb(${colors.PRIMARY})`;
  case 'header': return `rgb(${colors.SECONDARY})`;
  case 'text': return `rgb(${colors.TERTIARY})`;
  case 'err': return `rgb(${colors.ERR})`;
  case 'warn': return `rgb(${colors.WARN})`;
  case 'info': return `rgb(${colors.INFO})`;
  case 'special': return `rgb(${colors.SPECIAL})`;
  default: return `rgb(${colors.PRIMARY})`;
  }  
};

export const getColorWithAlpha = (whatFor = 'default', alphaLevel = 1.0) => {
  switch (whatFor) {
  case 'background': return `rgb(${colors.BACKGROUND},${alphaLevel})`;
  case 'background-alt': return `rgb(${colors.PRIMARY},${alphaLevel})`;
  case 'header': return `rgb(${colors.SECONDARY},${alphaLevel})`;
  case 'text': return `rgb(${colors.TERTIARY},${alphaLevel})`;
  case 'err': return `rgb(${colors.ERR},${alphaLevel})`;
  case 'warn': return `rgb(${colors.WARN},${alphaLevel})`;
  case 'info': return `rgb(${colors.INFO},${alphaLevel})`;
  case 'special': return `rgb(${colors.SPECIAL},${alphaLevel})`;
  default: return `rgb(${colors.PRIMARY},${alphaLevel})`;
  }  
};