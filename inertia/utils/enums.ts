export const getEnumOptions = (enumObj: any) => {
  return Object.keys(enumObj)
    .filter((key) => isNaN(Number(key)))
    .map((key) => ({
      label: key,
      value: enumObj[key],
    }))
}
