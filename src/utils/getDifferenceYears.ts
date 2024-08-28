export function getDifferenceYears(date1: Date, date2: Date){
    let diffYears = date1.getFullYear() - date2.getFullYear();

    if (
        date1.getMonth() < date2.getMonth() ||
        (date1.getMonth() === date2.getMonth() && date1.getDate() < date2.getDate())
    ) {
        diffYears--;
    }
    
    return diffYears;
}