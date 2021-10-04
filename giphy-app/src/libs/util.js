export const capitalize = ( string ) => {
  return string.replace(/\b\w/g, l => l.toUpperCase());
}
