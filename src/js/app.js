function compareNumeric(a, b) {
  let res = 0;
  if (a.health > b.health) {
    res = -1;
  } else if (a.health < b.health) {
    res = 1;
  }
  return res;
}

export default function Sort(list) {
  list.sort(compareNumeric);
  return list;
}
