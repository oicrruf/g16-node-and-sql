const isValid = (values) => {
  return Object.keys(values).includes('id');
};

module.exports = { isValid };
