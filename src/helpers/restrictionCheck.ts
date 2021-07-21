import { PicoPlacaInput } from "../dtos/picoPlacaInput";
import { getPlateLastDigit } from './getPlateLastDigit';
// Restrictions
    // Cannot read

    // Monday 1, 2
    // Tuesday 3, 4
    // Wednesday 5, 6
    // Thursday 7, 8 
    // Friday 9 y 0

    // Weekends anyone...

    // In periods
    // 07:00 - 9:30  /// can road   // 16:00 - 19:30 /// can road

export function restrictionCheck(picoPlacaInput: PicoPlacaInput): boolean {
    let now = new Date(picoPlacaInput.date);
    let day = now.getDay(); // 0 Sunday, 1 Monday ....
    let time = now.toTimeString().split(' ')[0];


    let lastDigit = getPlateLastDigit(picoPlacaInput.plate);
    

    let restrictedDigits = [];
 
    let restrictedPeriods = {
        AM: ['07:00:00', '09:30:00'],
        PM: ['16:00:00', '19:30:00']
    }

    // Set the restrictions by the day
    switch (day) {
        case 1:
            restrictedDigits = [1, 2];
            break;
        case 2:
            restrictedDigits = [3, 4];
            break;
        case 3:
            restrictedDigits = [5, 6];
            break;
        case 4:
            restrictedDigits = [7, 8];
            break;
        case 5:
            restrictedDigits = [9, 0];
            break;
        default:
            return true;
    }

    
    let period = time < '12:00:00' ? 'AM': 'PM';
    let restrictedTime = restrictedPeriods[period];

    let isInPeriod = (time >= restrictedTime[0] && time <= restrictedTime[1]);


    if(isInPeriod){
        let isRestricted = restrictedDigits.includes(Number(lastDigit));
        return !isRestricted
    }else{
        return true;
    }
    
}