export const parseDate = (date: string, countryCode: string): string => {
  const [day, month, year] = date.split('-');

  if (countryCode.toUpperCase() === 'US') {
    return `${month}-${day}-${year}`;
  }

  return date;
};
