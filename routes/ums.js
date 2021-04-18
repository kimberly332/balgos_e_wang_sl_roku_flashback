const express = require("express");
const router = express.Router();
const connect = require("../config/sqlConfig");

router.use(express.json());
router.use(express.urlencoded({extended: false}));

router.get("/", (req, res) => {
    res.json({ status: "success", data: "you hit the ums route" });
});

// ***** Account ***** //

router.post("/admin/login", (req,res) => {

    // form validation
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) { // check empty
        res.status(200).json({ status: "failure", data: "Email and/or Password cannot be empty." });
        return;
    }

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        const query = `SELECT * FROM tbl_accounts WHERE account_email="${email}" AND account_password="${password}"`;
        connection.query(query, function (error, row) {
            connection.release();
        
            if (error) {
                res.status(404).json({ status: "failure", data: `cant retrieve` });
                throw error;
            }

            if(row.length){
                res.status(200).json({ status: "success", data: row[0] });
            } else {
                res.status(200).json({ status: "failure", data: "Email and/or Password is/are wrong" });
            }
        });
    });
     
})

router.post("/admin/check-email", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        const email = req.body.email;
        
        let query = "";

        if (req.headers.customheader === "exclude/self") {
            const accountID = req.body.accountID;
            query = `SELECT * FROM tbl_accounts WHERE account_email="${email}" AND account_id!="${accountID}"`;
        } else {
            query = `SELECT * FROM tbl_accounts WHERE account_email="${email}"`;
        }

        connection.query(query, function (error, rows) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "cant retrive tbl_accounts when check user email's existence" });
                throw error;
            }

            if(rows.length){
                res.status(200).json({ status: "failure", data: "Email is alredy taken by others. Use a different email !" });
                return;
            } else {
                res.status(200).json({ status: "success", data: "Email has not been taken." });
            }

        });
    })

})


router.post("/admin/create-account", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        // const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        let query= `INSERT INTO tbl_accounts (account_id, account_email, account_password) `;
        query += `VALUES (NULL, "${email}", "${password}")`;
        // console.log(query);
        connection.query(query, function (error, row) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "can't create account" });
                throw error;
            }

            res.status(200).json({ status: "success", data: { "account_id" : row.insertId }});
        });
    });
    
})

router.post("/admin/delete-account", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        const accountid = req.body.accountID;

        let query= `DELETE FROM tbl_accounts WHERE account_id=${accountid}`;

        connection.query(query, function (error, row) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "can't delete account" });
                throw error;
            }

            res.status(200).json({ status: "success", data: "delete account successully"});
        });
    });
    
})

router.post("/admin/edit-account", (req,res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        // const username = req.body.username;
        const accountid = req.body.accountID;
        const email = req.body.email;
        const password = req.body.password;

        let query = `
            UPDATE tbl_accounts SET account_email="${email}", account_password="${password}" 
            WHERE account_id=${accountid}
        `;

        connection.query(query, function (error, row) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "can't update account" });
                throw error;
            }

            res.status(200).json({ status: "success", data: "Update account successfully"});
        });
    });
    
})

router.get("/admin/account/:accountid", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        const query = `SELECT account_email FROM tbl_accounts WHERE account_id=${req.params.accountid}`;
        
        connection.query(query, function (error, row) {
            connection.release();
        
            if (error) {
                res.status(404).json({ status: "failure", data: `cant retrieve account info under account id ${req.params.accountid}` });
                throw error;
            }

            if(row.length){
                res.status(200).json({ status: "success", data: row[0] });
            } else {
                res.status(200).json({ status: "failure", data: "no such account id" });
            }
        });
    });
})

// ***** Profile ***** //

router.post("/admin/create-profile", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        const accountID = req.body.accountID;
        const name = req.body.name;
        const pin = req.body.pin;
        const level = req.body.level;
        const avatar = req.body.avatar;

        let query= `INSERT INTO tbl_profiles (profile_id, account_id, profile_name, profile_pin, profile_level, profile_avatar) `;
        query += `VALUES (NULL, "${accountID}", "${name}", "${pin}", "${level}", "${avatar}")`;

        connection.query(query, function (error, row) { 
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "cant create profile" });
                throw error;
            }

            res.status(200).json({ status: "success", data: "Create profile successfully!" });
        });
    });
    
})

router.post("/admin/edit-profile", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        const profileid = req.body.profileID;
        const name = req.body.name;
        const pin = req.body.pin;
        const level = req.body.level;
        const avatar = req.body.avatar;

        let query = `
            UPDATE tbl_profiles 
            SET profile_name="${name}", profile_pin="${pin}", profile_level="${level}", profile_avatar="${avatar}"
            WHERE profile_id=${profileid}
        `;
        
        connection.query(query, function (error, row) { 
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "cant update profile" });
                throw error;
            }

            res.status(200).json({ status: "success", data: "Update profile successfully!" });
        });
    });
    
})

router.post("/admin/delete-profile", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        const profileid = req.body.profileID;

        let query= `DELETE FROM tbl_profiles WHERE profile_id=${profileid}`;
        console.log(query);
        connection.query(query, function (error, row) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "Can't delete profile" });
                throw error;
            }

            res.status(200).json({ status: "success", data: "Delete profile successully"});
        });
    });
    
})

router.post("/admin/check-profile-pin", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        const profileid = req.body.profileID;
        const pin = req.body.pin;

        let query= `SELECT * FROM tbl_profiles WHERE profile_id=${profileid} AND profile_pin=${pin}`;
        connection.query(query, function (error, row) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: "Can't retrieve profile" });
                throw error;
            }

            if(row.length){
                res.status(200).json({ status: "success", data: "Pin is correct. Allow that user in." });
            } else {
                res.status(200).json({ status: "failure", data: "Pin is wrong! Try again!" });
            }
        });
    });
    
})

router.get("/admin/profiles/:accountid", (req,res) => {

    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        const query = `SELECT profile_id, profile_name, profile_level, profile_avatar FROM tbl_profiles WHERE account_id=${req.params.accountid}`;
        // console.log(query);
        connection.query(query, function (error, rows) {
            connection.release();
        
            if (error) {
                res.status(404).json({ status: "failure", data: `cant retrieve all profiles under account id ${req.params.accountid}` });
                throw error;
            }

            if(rows.length){
                res.status(200).json({ status: "success", data: rows });
            } else {
                res.status(200).json({ status: "success", data: [] });
            }
        });
    });
})

module.exports = router;
