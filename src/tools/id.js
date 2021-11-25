
export const generateID = (base = 'id', whatFor = 'default') => {
  return `${base}.${whatFor}`;
};