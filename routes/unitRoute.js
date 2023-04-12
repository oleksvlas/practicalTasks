import express from "express";
import {UnitController} from "../controller/unitController.js";

export const unitRoute = express.Router()

unitRoute.get('/:id/type/:type', UnitController.getById)

unitRoute.post('/create', UnitController.create)

