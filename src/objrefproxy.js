export default function orderByProps(obj, strtProps) {
  const arrStart = [];
  const arrEnd = [];
  const sortedKeys = Object.keys(obj).filter((e) => !strtProps.includes(e)).sort();
  for (const prop in obj) {
    if (strtProps.includes(prop)) {
      arrStart[strtProps.indexOf(prop)] = ({ key: prop, value: obj[prop] });
    } else {
      arrEnd[sortedKeys.indexOf(prop)] = ({ key: prop, value: obj[prop] });
    }
  }
  return arrStart.concat(arrEnd);
}
