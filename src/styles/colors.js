
const colors = Object.freeze({
  PRIMARY: '#FFCC1D',
  SECONDARY: '#0B4619',
  TERTIARY: '#116530',
  BACKGROUND: '#EBE8CC',
  ERR: '#CD1818',
  INFO: '#0F2C67',
  WARN: '#FF6701'
});

export const getColor = (whatFor = 'default') => {
  switch (whatFor) {
    case 'background': return colors.BACKGROUND;
    case 'background-alt': return colors.PRIMARY;
    case 'header': return colors.SECONDARY;
    case 'text': return colors.TERTIARY;
    case 'err': return colors.ERR;
    case 'warn': return colors.WARN;
    case 'info': return colors.INFO;
    default: return colors.PRIMARY;
  }  
};