export function getPlateLastDigit(plate: String): String{
    // AAA-123
    let splitedPlate = plate.split('-');
    let numbers = splitedPlate[1];
    let lastDigit = numbers[numbers.length - 1];

    return lastDigit;
}