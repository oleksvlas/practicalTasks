import express from "express";
import {ServicemanController} from "../controller/servicemanController.js";

export const servicemanRoute = express.Router('/serviceman')

servicemanRoute.get("/", ServicemanController.findAll)
servicemanRoute.get("/create", ServicemanController.create)

servicemanRoute.post('/create', ServicemanController.createNewServiceman)