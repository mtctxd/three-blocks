const validateColor = (color) => {
  let result = color;

  if (!/^#[0-9A-F]{6}$/i.test(result)) {
    result = result.split('');

    if (result[0] !== '#') {
      result.unshift('#');
    }

    const check = 7 - result.length;

    if (check > 0) {
      for (let i = result.length; i < 7; i++) {
        result[i] = 0;
      }
    }

    result = result.join('');
  }

  return result.toString(16);
};

export default validateColor;
