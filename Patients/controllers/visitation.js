import  { visitationModel } from "../models/patients.js"

export const createVisit = (req, res) => {
    let {
        PatientId,
        Date,
        Time,
        encounterType, 
    } = req.body

    const Visit = new visitationModel()
}
