// https://www.codewars.com/kata/554a44516729e4d80b000012/train/typescript

// First failed attempt cuz of misunderstanding of a problem
export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
  if (startPriceNew <= startPriceOld) {
    return [0, Math.round(startPriceOld - startPriceNew)];
  }
  let saving = 0;
  let month = 0;
  while (startPriceOld + saving < startPriceNew) {
    startPriceOld = startPriceOld - startPriceOld * (percentLossByMonth / 100)
    startPriceNew = startPriceNew - startPriceNew * (percentLossByMonth / 100)
    saving += 1000;
    if (month % 2 == 0) percentLossByMonth += 0.5;
    month++;
  }

  return [month, Math.round((startPriceOld + saving) - startPriceNew)]
}


export function nbMonths2(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
  let saving = 0;
  let month = 0;
  while (startPriceOld + saving < startPriceNew) {
    startPriceOld = startPriceOld - startPriceOld * (percentLossByMonth / 100)
    startPriceNew = startPriceNew - startPriceNew * (percentLossByMonth / 100)
    saving += savingperMonth;
    if (month % 2 == 0) percentLossByMonth += 0.5;
    month++;
  }

  return [month, Math.round((startPriceOld + saving) - startPriceNew)];
}
