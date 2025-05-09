    // import { Component } from "react";
    // import axios from "axios"; // Required for saving to DB

    // class UserDashboard extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             name: "",
    //             number: "",
    //             dob: "",
    //             selectedDisease: "",
    //             selectedHospital: "",
    //             illnessDuration: "",
    //             bplCard: "",
    //             showForm: true,
    //         };
    //     }

    //     hospitalOptions = {
    //         heart: [
    //             "Jayadeva Institute of Cardiovascular Sciences",
    //             "Victoria Hospital - Cardiology Dept",
    //             "NIMHANS - Cardiac Care Unit"
    //         ],
    //         cancer: [
    //             "Kidwai Memorial Institute of Oncology",
    //             "Victoria Hospital - Oncology Wing",
    //             "Bangalore Medical College Cancer Center"
    //         ],
    //         diabetes: [
    //             "Bowring and Lady Curzon Hospital",
    //             "KC General Hospital",
    //             "Victoria Hospital - Diabetology Dept"
    //         ],
    //         kidney: [
    //             "Institute of Nephro-Urology",
    //             "Victoria Hospital - Nephrology",
    //             "ESI Hospital, Rajajinagar"
    //         ],
    //         respiratory: [
    //             "Rajiv Gandhi Institute of Chest Diseases",
    //             "Victoria Hospital - Pulmonology",
    //             "Bowring Hospital - TB & Chest Dept"
    //         ],
    //         mental: [
    //             "NIMHANS (National Institute of Mental Health and Neurosciences)",
    //             "Bowring Hospital - Psychiatry Dept",
    //             "Victoria Hospital - Mental Health Wing"
    //         ]
    //     };

    //     handleChange = (e) => {
    //         this.setState({ [e.target.name]: e.target.value });
    //     };

    //     handleDiseaseChange = (e) => {
    //         this.setState({ selectedDisease: e.target.value, selectedHospital: "" });
    //     };

    //     handleHospitalChange = (e) => {
    //         this.setState({ selectedHospital: e.target.value });
    //     };

    //     handleNext = () => {
    //         this.setState({ showForm: false });
    //     };

    //     handleEdit = () => {
    //         this.setState({ showForm: true });
    //     };

    //     handleFinalSubmit = async () => {
    //         const {
    //             name, number, dob,
    //             selectedDisease, selectedHospital,
    //             illnessDuration, bplCard
    //         } = this.state;

    //         const data = {
    //             name,
    //             number,
    //             dob,
    //             disease: selectedDisease,
    //             hospital: selectedHospital,
    //             duration: illnessDuration,
    //             bplCard
    //         };

    //         try {
    //             const response = await axios.post("http://localhost:3001/api/save-patient", data);
    //             alert("Data saved successfully!");
    //         } catch (error) {
    //             console.error("Error saving data:", error);
    //             alert("Failed to save data.");
    //         }
    //     };

    //     render() {
    //         const {
    //             name, number, dob, selectedDisease, selectedHospital,
    //             illnessDuration, bplCard, showForm
    //         } = this.state;

    //         const hospitals = this.hospitalOptions[selectedDisease] || [];

    //         return (
    //             <div className="p-4">
    //                 <h2>Patient Registration</h2>

    //                 {showForm ? (
    //                     <div>
    //                         <label>Patient Name:</label>
    //                         <input type="text" name="name" className="form-control mb-2" value={name} onChange={this.handleChange} />

    //                         <label>Patient Number:</label>
    //                         <input type="number" name="number" className="form-control mb-2" value={number} onChange={this.handleChange} />

    //                         <label>DOB:</label>
    //                         <input type="date" name="dob" className="form-control mb-3" value={dob} onChange={this.handleChange} />

    //                         <label>Disease Name:</label>
    //                         <select className="form-select mb-3" name="selectedDisease" value={selectedDisease} onChange={this.handleDiseaseChange}>
    //                             <option value="" disabled>Select Disease</option>
    //                             <option value="heart">Heart</option>
    //                             <option value="cancer">Cancer</option>
    //                             <option value="diabetes">Diabetes</option>
    //                             <option value="kidney">Kidney</option>
    //                             <option value="respiratory">Respiratory</option>
    //                             <option value="mental">Mental Health</option>
    //                         </select>

    //                         {selectedDisease && (
    //                             <>
    //                                 <label>Select Hospital:</label>
    //                                 <select className="form-select mb-3" value={selectedHospital} onChange={this.handleHospitalChange}>
    //                                     <option value="" disabled>Select Hospital</option>
    //                                     {hospitals.map((hospital, index) => (
    //                                         <option key={index} value={hospital}>{hospital}</option>
    //                                     ))}
    //                                 </select>
    //                             </>
    //                         )}

    //                         <label>Illness Duration (in weeks):</label>
    //                         <input type="number" name="illnessDuration" className="form-control mb-3" value={illnessDuration} onChange={this.handleChange} />

    //                         <label>Do you have a BPL Card?</label>
    //                         <select className="form-select mb-3" name="bplCard" value={bplCard} onChange={this.handleChange}>
    //                             <option value="" disabled>-- Select an option --</option>
    //                             <option value="yes">Yes</option>
    //                             <option value="no">No</option>
    //                         </select>

    //                         <button className="btn btn-success mt-3" onClick={this.handleNext}>Next</button>
    //                     </div>
    //                 ) : (
    //                     <div className="border p-4 rounded mt-3">
    //                         <h4>Review Details</h4>
    //                         <p><strong>Name:</strong> {name}</p>
    //                         <p><strong>Phone Number:</strong> {number}</p>
    //                         <p><strong>DOB:</strong> {dob}</p>
    //                         <p><strong>Disease:</strong> {selectedDisease}</p>
    //                         <p><strong>Hospital:</strong> {selectedHospital}</p>
    //                         <p><strong>Illness Duration:</strong> {illnessDuration} weeks</p>
    //                         <p><strong>BPL Card:</strong> {bplCard}</p>

    //                         <button className="btn btn-warning me-2" onClick={this.handleEdit}>Edit</button>
    //                         <button className="btn btn-primary" onClick={this.handleFinalSubmit}>Submit to DB</button>
    //                     </div>
    //                 )}
    //             </div>
    //         );
    //     }
    // }

    // export default UserDashboard;














    import { Component } from "react";
import axios from "axios";

class UserDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            number: "",
            dob: "",
            selectedDisease: "",
            selectedHospital: "",
            illnessDuration: "",
            bplCard: "",
            showForm: true,
        };
    }

    hospitalOptions = {
        heart: [
            "Jayadeva Institute of Cardiovascular Sciences",
            "Victoria Hospital - Cardiology Dept",
            "NIMHANS - Cardiac Care Unit"
        ],
        cancer: [
            "Kidwai Memorial Institute of Oncology",
            "Victoria Hospital - Oncology Wing",
            "Bangalore Medical College Cancer Center"
        ],
        diabetes: [
            "Bowring and Lady Curzon Hospital",
            "KC General Hospital",
            "Victoria Hospital - Diabetology Dept"
        ],
        kidney: [
            "Institute of Nephro-Urology",
            "Victoria Hospital - Nephrology",
            "ESI Hospital, Rajajinagar"
        ],
        respiratory: [
            "Rajiv Gandhi Institute of Chest Diseases",
            "Victoria Hospital - Pulmonology",
            "Bowring Hospital - TB & Chest Dept"
        ],
        mental: [
            "NIMHANS (National Institute of Mental Health and Neurosciences)",
            "Bowring Hospital - Psychiatry Dept",
            "Victoria Hospital - Mental Health Wing"
        ]
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleDiseaseChange = (e) => {
        this.setState({ selectedDisease: e.target.value, selectedHospital: "" });
    };

    handleHospitalChange = (e) => {
        this.setState({ selectedHospital: e.target.value });
    };

    handleNext = () => {
        this.setState({ showForm: false });
    };

    handleEdit = () => {
        this.setState({ showForm: true });
    };

    handleFinalSubmit = async () => {
        const {
            name, number, dob,
            selectedDisease, selectedHospital,
            illnessDuration, bplCard
        } = this.state;

        const data = {
            patient_name: name,
            patient_number: number,
            dob,
            disease_name: selectedDisease,
            hospital: selectedHospital,
            illness_duration_weeks: illnessDuration,
            bpl_card: bplCard
        };

        try {
            const response = await axios.post("http://localhost:8080/api/save-patient", data);
            alert("Data saved successfully!");
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Failed to save data.");
        }
    };

    render() {
        const {
            name, number, dob, selectedDisease, selectedHospital,
            illnessDuration, bplCard, showForm
        } = this.state;

        const hospitals = this.hospitalOptions[selectedDisease] || [];

        return (
            <div className="p-4">
                <h2>Patient Registration</h2>

                {showForm ? (
                    <div>
                        <label>Patient Name:</label>
                        <input type="text" name="name" className="form-control mb-2" value={name} onChange={this.handleChange} required />

                        <label>Patient Number:</label>
                        <input type="number" name="number" className="form-control mb-2" value={number} onChange={this.handleChange} />

                        <label>DOB:</label>
                        <input type="date" name="dob" className="form-control mb-3" value={dob} onChange={this.handleChange} />

                        <label>Disease Name:</label>
                        <select className="form-select mb-3" name="selectedDisease" value={selectedDisease} onChange={this.handleDiseaseChange}>
                            <option value="" disabled>Select Disease</option>
                            <option value="heart">Heart</option>
                            <option value="cancer">Cancer</option>
                            <option value="diabetes">Diabetes</option>
                            <option value="kidney">Kidney</option>
                            <option value="respiratory">Respiratory</option>
                            <option value="mental">Mental Health</option>
                        </select>

                        {selectedDisease && (
                            <>
                                <label>Select Hospital:</label>
                                <select className="form-select mb-3" value={selectedHospital} onChange={this.handleHospitalChange}>
                                    <option value="" disabled>Select Hospital</option>
                                    {hospitals.map((hospital, index) => (
                                        <option key={index} value={hospital}>{hospital}</option>
                                    ))}
                                </select>
                            </>
                        )}

                        <label>Illness Duration (in weeks):</label>
                        <input type="number" name="illnessDuration" className="form-control mb-3" value={illnessDuration} onChange={this.handleChange} />

                        <label>Do you have a BPL Card?</label>
                        <select className="form-select mb-3" name="bplCard" value={bplCard} onChange={this.handleChange}>
                            <option value="" disabled>-- Select an option --</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <button className="btn btn-success mt-3" onClick={this.handleNext}>Next</button>
                    </div>
                ) : (
                    <div className="border p-4 rounded mt-3">
                        <h4>Review Details</h4>
                        <p><strong>Name:</strong> {name}</p>
                        <p><strong>Phone Number:</strong> {number}</p>
                        <p><strong>DOB:</strong> {dob}</p>
                        <p><strong>Disease:</strong> {selectedDisease}</p>
                        <p><strong>Hospital:</strong> {selectedHospital}</p>
                        <p><strong>Illness Duration:</strong> {illnessDuration}</p>
                        <p><strong>BPL Card:</strong> {bplCard}</p>

                        <button className="btn btn-warning me-2" onClick={this.handleEdit}>Edit</button>
                        <button className="btn btn-primary" onClick={this.handleFinalSubmit}>Submit to DB</button>
                    </div>
                )}
            </div>
        );
    }
}

export default UserDashboard;












