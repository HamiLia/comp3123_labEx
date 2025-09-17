const capitalize = (str) => {
  const [first, ...rest] = str;
  return `${first.toUpperCase()}${rest.join('')}`;
};

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);