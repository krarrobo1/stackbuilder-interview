import { PicoPlacaService } from "../services/picoPlaca.service";
import { Request, Response, NextFunction } from 'express';
import { PicoPlacaOutput } from "../dtos/picoPlacaOutput";

export class PicoPlacaController {
    static plateCheck(req: Request, res: Response, next: NextFunction) {
        try {
            const canRoad = PicoPlacaService.canRoad(req.body);
            const message = canRoad ? "You can road!, Drive safe" : "You cannot road! Please take another transport";
            const response: PicoPlacaOutput = {
                canRoad,
                message
            };
            return res.json(response);
        } catch (error) {
            next(error);
        }
    }
}