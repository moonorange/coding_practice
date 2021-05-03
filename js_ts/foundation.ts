export const boolToWord = (bool: boolean): string => {
  if (bool) {
    return 'Yes';
  } else {
    return 'No';
  }
};


export const digitize = (n: number): number[] => {
  const str_n = [...String(n)];
  const num_list = str_n.map(x => Number(x));
  return num_list.reverse();
};