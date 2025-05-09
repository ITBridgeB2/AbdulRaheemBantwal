


// // import cors from 'cors';
// // import express from 'express';
// // import mysql from 'mysql2/promise';

// // var userapp = express();
// // userapp.use(express.json());
// // userapp.use(express.urlencoded());

// // userapp.use(cors());

// // const db = {
// //     host: "localhost",
// //     user: "root",
// //     password: 'root',
// //     database: 'v3'
// // };

// // // Get user and validate
// // // http://localhost:8080/clone/9663330910/mypass
// // userapp.get("/clone/:mobileNumber/:password", async function (request, response) {
// //     const mobileNumber = request.params.mobileNumber;
// //     const password = request.params.password;
// //     const connection = await mysql.createConnection(db);
// //     const [result] = await connection.execute(
// //         'SELECT * FROM clone WHERE mobileNumber = ? AND password = ?',
// //         [mobileNumber, password]
// //     );
// //     if (result.length == 0)
// //         return response.status(204).json({ message: "User not found" });
// //     else
// //         return response.status(200).json(result[0]); // Return only the first matching user
// // });

// // // Save visitor (user registration)
// // userapp.post("/clone", async function (req, res) {
// //     try {
// //         // Create a connection
// //         const connection = await mysql.createConnection(db);

// //         // Destructure data from request body
// //         const { firstName, lastName, email, mobileNumber, password } = req.body;

// //         // Insert the data into the 'clone' table
// //         const [result] = await connection.execute(
// //             'INSERT INTO clone (firstName, lastName, email, mobileNumber, password) VALUES (?, ?, ?, ?, ?)',
// //             [firstName, lastName, email, mobileNumber, password]
// //         );

// //         // Close the connection
// //         await connection.close();

// //         res.status(201).json({ message: "Data inserted successfully" });
// //     } catch (error) {
// //         console.log('Error Inserting data', error);
// //         res.status(500).json({ error: 'Failed to insert data' });
// //     }
// // });

// // // Save patient information
// // userapp.post('/api/save-patient', async (req, res) => {
// //     const { patient_name, patient_number, dob, disease_name, hospital, illness_duration_weeks, bpl_card } = req.body;

// //     const connection = await mysql.createConnection(db);

// //     // Insert patient data into the 'patients' table
// //     const sql = `
// //         INSERT INTO patient_data (patient_name, patient_number, dob, disease_name, hospital, illness_duration_weeks, bpl_card)
// //         VALUES (?, ?, ?, ?, ?, ?, ?)
// //     `;

// //     try {
// //         const [result] = await connection.execute(sql, [patient_name, patient_number, dob, disease_name, hospital, illness_duration_weeks, bpl_card]);
// //         await connection.close();
// //         res.json({ message: "Patient saved successfully!" });
// //     } catch (err) {
// //         console.error('Error saving patient data:', err);
// //         res.status(500).json({ error: 'Failed to save patient data' });
// //     }
// // });

// // // Start the server
// // userapp.listen(8080, () => {
// //     console.log("Server started on port 8080");
// // });







// import cors from 'cors';
// import express from 'express';
// import mysql from 'mysql2/promise';

// const userapp = express();
// userapp.use(express.json());
// userapp.use(express.urlencoded({ extended: true }));
// userapp.use(cors());

// // MySQL DB config
// const db = {
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "v3"
// };

// // ✅ Login validation
// userapp.get("/clone/:mobileNumber/:password", async (req, res) => {
//     const { mobileNumber, password } = req.params;
//     const connection = await mysql.createConnection(db);
//     const [result] = await connection.execute(
//         'SELECT * FROM clone WHERE mobileNumber = ? AND password = ?',
//         [mobileNumber, password]
//     );
//     await connection.end();
//     if (result.length === 0)
//         return res.status(204).json({ message: "User not found" });
//     return res.status(200).json(result[0]);
// });

// //  User registration
// userapp.post("/clone", async (req, res) => {
//     try {
//         const { firstName, lastName, email, mobileNumber, password } = req.body;
//         const connection = await mysql.createConnection(db);
//         await connection.execute(
//             'INSERT INTO clone (firstName, lastName, email, mobileNumber, password) VALUES (?, ?, ?, ?, ?)',
//             [firstName, lastName, email, mobileNumber, password]
//         );
//         await connection.end();
//         res.status(201).json({ message: "User registered successfully" });
//     } catch (error) {
//         console.error("Error inserting user:", error);
//         res.status(500).json({ error: "Failed to register user" });
//     }
// });

// //  Patient form submission
// userapp.post("/api/save-patient", async (req, res) => {
//     const {
//         patient_name, patient_number, dob,
//         disease_name, hospital, illness_duration_weeks, bpl_card
//     } = req.body;

//     const sql = `
//         INSERT INTO patient_data
//         (patient_name, patient_number, dob, disease_name, hospital, illness_duration_weeks, bpl_card)
//         VALUES (?, ?, ?, ?, ?, ?, ?)
//     `;

//     try {
//         const connection = await mysql.createConnection(db);
//         await connection.execute(sql, [
//             patient_name, patient_number, dob,
//             disease_name, hospital, illness_duration_weeks, bpl_card
//         ]);
//         await connection.end();
//         res.json({ message: "Patient data saved successfully!" });
//     } catch (err) {
//         console.error("Error saving patient data:", err);
//         res.status(500).json({ error: "Failed to save patient data" });
//     }







// // ✅ Start server
// userapp.listen(8080, () => {
//     console.log("Server started on http://localhost:8080");
// });






// -----------------------------------------------------------------------------updated--------------------------------------if not working use other 

import cors from 'cors';
import express from 'express';
import mysql from 'mysql2/promise';

const userapp = express();
userapp.use(express.json());
userapp.use(express.urlencoded({ extended: true }));
userapp.use(cors());

// MySQL DB config
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "v3"
};

// // ✅ Login validation
// userapp.get("/clone/:mobileNumber/:password", async (req, res) => {
//     const { mobileNumber, password } = req.params;
//     const connection = await mysql.createConnection(dbConfig);
//     const [result] = await connection.execute(
//         'SELECT * FROM clone WHERE mobileNumber = ? AND password = ?',
//         [mobileNumber, password]
//     );
//     await connection.end();
//     if (result.length === 0)
//         return res.status(204).json({ message: "User not found" });
//     return res.status(200).json(result[0]);
// });





userapp.get("/clone/:mobileNumber/:password", async (req, res) => {
    const { mobileNumber, password } = req.params;
    const connection = await mysql.createConnection(dbConfig);
    const [result] = await connection.execute(
        'SELECT * FROM clone WHERE mobileNumber = ? AND password = ?',
        [mobileNumber, password]
    );
    await connection.end();

    if (result.length === 0)
        return res.status(401).json({ message: "Invalid mobile number or password" });

    return res.status(200).json(result[0]);
});






// User registration
userapp.post("/clone", async (req, res) => {
    try {
        const { firstName, lastName, email, mobileNumber, password } = req.body;
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(
            'INSERT INTO clone (firstName, lastName, email, mobileNumber, password) VALUES (?, ?, ?, ?, ?)',
            [firstName, lastName, email, mobileNumber, password]
        );
        await connection.end();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
});

// Patient form submission
userapp.post("/api/save-patient", async (req, res) => {
    const {
        patient_name, patient_number, dob,
        disease_name, hospital, illness_duration_weeks, bpl_card
    } = req.body;

    const sql = `
        INSERT INTO patient_data
        (patient_name, patient_number, dob, disease_name, hospital, illness_duration_weeks, bpl_card)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(sql, [
            patient_name, patient_number, dob,
            disease_name, hospital, illness_duration_weeks, bpl_card
        ]);
        await connection.end();
        res.json({ message: "Patient data saved successfully!" });
    } catch (err) {
        console.error("Error saving patient data:", err);
        res.status(500).json({ error: "Failed to save patient data" });
    }
});

// ✅ Fetch all patients for admin
userapp.get("/api/patients", async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [results] = await connection.execute("SELECT * FROM patient_data");
        await connection.end();

        if (results.length === 0) {
            return res.status(404).json({ message: "No patient data found" });
        }
        res.json(results);
    } catch (error) {
        console.error("Error fetching patients:", error);
        res.status(500).json({ error: "Failed to fetch patient data" });
    }
});











userapp.get("/clone/:id", async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [user] = await connection.execute("SELECT * FROM patient_data WHERE id = ?", [userId]);
        await connection.end();

        if (user.length > 0) {
            res.json(user[0]);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to fetch user" });
    }
});



















// Update user details
userapp.put("/clone/:id", async (req, res) => {
    const { id } = req.params;
    const { patient_name, patient_number, dob, disease_name, hospital, illness_duration_weeks, bpl_card } = req.body;

    const connection = await mysql.createConnection(dbConfig);

    try {
        const [result] = await connection.execute(
            'UPDATE patient_data SET patient_name = ?, patient_number = ?, dob = ?, disease_name = ?, hospital = ?, illness_duration_weeks = ?, bpl_card = ? WHERE id = ?',
            [patient_name, patient_number, dob, disease_name, hospital, illness_duration_weeks, bpl_card, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ message: "Error updating user" });
    } finally {
        await connection.end();
    }
});











    




// ✅ Start the server
userapp.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});

