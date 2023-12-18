import {Schema, model} from "mongoose"
// import { Visit } from "../controllers/visitation.js"
// import { Patient } from "../controllers/patient.js"
// import { Vitals } from "../controllers/vitals.js"



const patientSchema = new Schema({
    PatientId: String,
    Surname: String,
    otherNames: String,
    Gender: String,
    phoneNumber: String,
    residentialAddress: String,
    emergencyContact: {firstName: String,
        Surname: String,
        contactPhone: String,
        contactRelationshipWithPatient: String,
    },
})

const visitationSchema = new Schema({
    PatientId: String,
    Date: String,
    Time: String,
    encounterType: [{
        type: String,
        enum: ["Emergency", "OPD", "Specialist Care"]
    }]

})

const vitalsSchema = new Schema({
    PatientId: String,
    BloodPressure: String,
    Tempurature: String,
    Pulse: String,
    SP02: String
})

export const visitationModel = model("Visit", visitationSchema)
export const vitalsModel = model("Vitals", vitalsSchema)
export const patientModel = model("Patient", patientSchema)

// module.exports = {visitationModel, vitalsModel, patientModel}