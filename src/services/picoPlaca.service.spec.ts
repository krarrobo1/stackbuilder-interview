import { PicoPlacaInput } from "../dtos/picoPlacaInput";
import { PicoPlacaService } from "../services/picoPlaca.service";



test('Can Road plate 8 and day Monday 16:30:00', () =>{
    let input: PicoPlacaInput = {
        date: '2021-07-19 16:30:00',
        plate: 'LBB-998'
    }
    let output = PicoPlacaService.canRoad(input)
    expect(output).toBe(true);
});

test('Cannot road plate 3 and day Tuesday 08:00:00', () =>{
    let input: PicoPlacaInput = {
        date: '2021-07-20 08:00:00',
        plate: 'AAA-993'
    }
    let output = PicoPlacaService.canRoad(input);
    expect(output).toBe(false);
});

test('Cannot road plate 5 and day Wednesday 16:30:00', () =>{
    let input: PicoPlacaInput = {
        date: '2021-07-21 16:30:00',
        plate: 'AAA-995'
    }
    let output = PicoPlacaService.canRoad(input);
    expect(output).toBe(false);
});

test('Can road plate 7 and day Thursday 20:00:00', () =>{
    let input: PicoPlacaInput = {
        date: '2021-07-22 20:00:00',
        plate: 'AAA-997'
    }
    let output = PicoPlacaService.canRoad(input);
    expect(output).toBe(true);
});

test('Cannot road plate 9 an day Friday 16:00:00', () =>{
    let input: PicoPlacaInput = {
        date: '2021-07-23 16:00:00',
        plate: 'AAA-999'
    }
    let output = PicoPlacaService.canRoad(input);
    expect(output).toBe(false);
});

test('Can road plate in 9 an day Saturday 15:00:00', () =>{
    let input: PicoPlacaInput = {
        date: '2021-07-24 15:00:00',
        plate: 'AAA-369'
    }
    let output = PicoPlacaService.canRoad(input);
    expect(output).toBe(true);
});

test('Can road plate 3 an day Sunday 15:00:00', () =>{
    let input: PicoPlacaInput = {
        date: '2021-07-25 15:00:00',
        plate: 'AAA-333'
    }
    let output = PicoPlacaService.canRoad(input);
    expect(output).toBe(true);
});
