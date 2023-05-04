require('dotenv').config();
let {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
}) 
let nextEmp = 5

module.exports = {
    getUpcomingAppointments: (req, res) => {
        sequelize.query(`SELECT a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
        FROM cc_appointments AS a
        JOIN cc_emp_appts AS ea ON a.appt_id = ea.appt_id
        JOIN cc_employees AS e ON e.emp_id = ea.emp_id
        JOIN cc_users AS u ON e.user_id = u.user_id
        WHERE a.approved = true AND a.completed = false
        ORDER BY a.date desc;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    approveAppointment: (req, res) => {
        let {apptId} = req.body
    
        sequelize.query(`
        UPDATE cc_appointments
        SET cc_appointments.approved = true
        WHERE appt_id = ${apptId};

        insert into cc_emp_appts (emp_id, appt_id)
        values (${nextEmp}, ${apptId}),
        (${nextEmp + 1}, ${apptId});
        `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
                nextEmp += 2
            })
            .catch(err => console.log(err))
    },
    
    getAllClients: (req,res) => {
        let query = `
        SELECT * FROM cc_users AS u
        JOIN cc_clients AS c
        ON u.user_id = c.user_id;
        `
        sequelize.query(query)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getPendingAppointments: (req, res) => {
        let query = `
        SELECT * FROM "cc_appointments"
        WHERE approved = false
        ORDER BY date DESC
        ;`
        sequelize.query(query)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getPastAppointments: (req, res) => {
        let query = `
            SELECT a.appt_id, a.date, a.service_type, a.notes, u.first_name, u.last_name 
            FROM cc_appointments AS a
            JOIN cc_emp_appts AS ea ON a.appt_id = ea.appt_id
            JOIN cc_employees AS e ON e.emp_id = ea.emp_id
            JOIN cc_users AS u ON e.user_id = u.user_id
            WHERE a.approved = true AND a.completed = true
            ORDER BY a.date DESC;
            `
            sequelize.query(query)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
 
    
    completeAppointment: (req, res) => {
        let {apptId} = req.body
        let query = `
        UPDATE cc_appointments
        SET completed = true
        WHERE appt_id = ${apptId}
        ;`
        sequelize.query(query)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}

