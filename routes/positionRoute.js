import express from "express";
import {PositionsController} from "../controller/positionsController.js";

export const positionRoute = express.Router()

positionRoute.post('/create/unitId/:unitId/type/:type', PositionsController.create)
positionRoute.post('/id/:id/serviceman/type/:type', PositionsController.addServiceman)