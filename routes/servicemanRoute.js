import express from "express";
import {ServicemanController} from "../controller/servicemanController.js";

export const servicemanRoute = express.Router('/serviceman')

servicemanRoute.get("/", ServicemanController.findAll)
servicemanRoute.get("/:id/type/:type", ServicemanController.findById)
servicemanRoute.get("/create", ServicemanController.create)

servicemanRoute.get('/error', ServicemanController.error)

servicemanRoute.post('/create', ServicemanController.createNewServiceman)