export const convertApiData = data => {
  if (!data) {
    return [];
  }
  let result = [];
  for (const dataItem in data) {
    const convertedData = data[dataItem].map(item => ({
      name: item.name,
      estimatedDiameter: item.estimated_diameter.meters.estimated_diameter_max,
      closeApproachDate: covertDateFormat(
        item.close_approach_data[0].close_approach_date,
        ' ',
        true,
      ),
      missDistance: {
        kilometers: changeNumberFormat(
          item.close_approach_data[0].miss_distance.kilometers,
        ),
        lunar: changeNumberFormat(
          item.close_approach_data[0].miss_distance.lunar,
        ),
      },
      isPotentialHazardous: item.is_potentially_hazardous_asteroid,
      id: item.id,
    }));
    result = result.concat(convertedData);
  }
  result.sort((a, b) => {
    const firstDate = new Date(a.closeApproachDate).getTime();
    const secondDate = new Date(b.closeApproachDate).getTime();
    return firstDate - secondDate;
  });
  return result;
};

export const covertDateFormat = (date, separator, withWord = false) => {
  if (!date) {
    return null;
  }
  const newDate = new Date(date);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  if (!withWord) {
    const year = newDate.getFullYear();
    const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
    const day = ('0' + newDate.getDate()).slice(-2);
    return `${year}${separator}${month}${separator}${day}`;
  }

  const formatter = new Intl.DateTimeFormat('ru-RU', options);
  return formatter.format(newDate);
};

export const changeNumberFormat = number => {
  if (typeof number === 'string') {
    number = parseFloat(number);
  }
  const options = { style: 'decimal', maximumFractionDigits: 0 };
  return number.toLocaleString('ru-RU', options);
};
