export const dateStringToDate = (dateString: string): Date => {
   //      01/01/2000
    const datePart = dateString
    .split('/')
    .map((value: string): number => {
        return parseInt(value);
    })   //    ['01','01','2000']


    return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};