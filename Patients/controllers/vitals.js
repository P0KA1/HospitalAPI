import  { vitalsModel }  from "../models/patients.js"

export const createVitals = (req, res) => {
    let {
        PatientId,
        BloodPressure,
        Tempurature,
        Pulse,
        SP02,
    } = req.body

    const Visit = new vitalsModel()
}
// module.exports = createVitals