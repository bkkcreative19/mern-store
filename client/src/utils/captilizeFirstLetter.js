export const capitilizeFirstLetter = (string) => {
  const yay = Array.from(string);

  yay[0] = yay[0].toUpperCase();
  return yay.join("");
};
