export const filterObj = (obj, cb) => {
  const origObj = { ...obj };
  const newObj = {};
  Object.keys(origObj).forEach((key) => {
    if (cb(key)) {
      newObj[key] = origObj[key];
    }
  });
  return newObj;
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
};
