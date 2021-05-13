export const generateArrayOfYears = (numberOfYears) => {
  const max = new Date().getFullYear();
  const min = max - numberOfYears;
  const years = [];
  for (let year = max; year >= min; year--) {
    years.push(year);
  }

  return years;
}