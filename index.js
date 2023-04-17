export default (count, words) => {
  if (words.length !== 3) {
    return "";
  }

  const main = Math.abs(count) % 100;

  if (main > 10 && main < 20) {
    return words[2];
  }

  const rest = main % 10;

  if (rest > 1 && rest < 5) {
    return words[1];
  }

  if (rest === 1) {
    return words[0];
  }

  return words[2];
};
