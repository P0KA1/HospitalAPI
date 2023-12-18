import express from 'express';
import { createPatient } from "../controllers/patient.js";
import { patientModel } from '../models/patients.js';

export const router = express.Router();

router.post("/addPatients", createPatient);

router.get("/getPatient/:id", async (req, res) => {
    let data = await patientModel.findbyId(req.params.id);
    res.json(data);
});

router.get('/getAllPatients', async (req, res) => {
    let data = await patientModel.find();
    res.json(data);
});

router.post("/deletePatient/:id", async (req, res) => {
    patientModel.remove({_id: req.params.id}, function(err){res.send("Internal Server Error", 500)}),
    res.send(200);
});

// module.exports = router;