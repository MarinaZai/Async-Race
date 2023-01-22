export const GenerateRandomColor = (min = 0, max = 255) => {
  const random = () => min + Math.floor(Math.random() * (max - min + 1));

  const red = random();
  const green = random();
  const blue = random();

  return `rgb(${red},${green},${blue})`;
};
