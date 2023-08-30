export const convertApiData = (data) => {
  if (!data) {
    return [];
  }
  let result = []
  for (const dataTtem in data) {
    const convertedData = data[dataTtem].map((item) => {
      return {
        name: item.name,
        estimatedDiameter:
          item.estimated_diameter.meters.estimated_diameter_max,
        closeApproachDate: item.close_approach_data[0].close_approach_date,
        missDistance: {
          kilometers: item.close_approach_data[0].miss_distance.kilometers,
          lunar: item.close_approach_data[0].miss_distance.lunar,
        },
        isPotentiallHazardous: item.is_potentially_hazardous_asteroid,
      }
    })
    result = result.concat(convertedData)
  }
  result.sort((a,b) => {
    const firstDate = new Date(a.closeApproachDate).getTime();
    const secondDate = new Date(b.closeApproachDate).getTime();
    return firstDate - secondDate;
  })
  return result;
}

export const covertDateFormat = (date, separator) => {
  if (!date) {
    return null
  }
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = ('0' + (newDate.getMonth() + 1)).slice(-2)
  const day = ('0' + newDate.getDate()).slice(-2)

  return `${year}${separator}${month}${separator}${day}`
}