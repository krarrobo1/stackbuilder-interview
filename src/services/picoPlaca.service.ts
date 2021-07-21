import { PicoPlacaInput } from '../dtos/picoPlacaInput';
import { restrictionCheck } from '../helpers/restrictionCheck';

export class PicoPlacaService {
    static canRoad(picoPlataInput: PicoPlacaInput): boolean {
        return restrictionCheck(picoPlataInput);
    }
}