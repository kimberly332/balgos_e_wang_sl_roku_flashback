const express = require("express");
const router = express.Router();
const connect = require("../config/sqlConfig"); // sql connection

// /api
router.get("/", (req, res) => {
    res.json({ status: "success", data: "you hit the api route" });
});

// // /api/:media   ->    get all movies/tvshows/music
// //     :media: movies / tvshows / music
// router.get("/:media", (req, res) => {
//     connect.getConnection(function(err, connection) {
//         if (err) throw err; // not connected!
       
//         // Use the connection
//         const query = `SELECT * FROM tbl_${req.params.media}`;
//         connection.query(query, function (error, rows) {
//             // When done with the connection, release it.
//             connection.release();
        
//             // Handle error after the release.
//             if (error) {
//                 res.status(404).json({ status: "failure", data: `cant retrieve all ${req.params.media}` });
//                 throw error;
//             }

//             res.status(200).json({ status: "success", data: rows });
//         });
//     });
// })

// // /api/:media/:level  ->    get all movies/tvshows/music under the given level
// //     :media: movies / tvshows / music
// //     :level: 0 / 1
// router.get("/:media/:level", (req, res) => {
//     connect.getConnection(function(err, connection) {
//         if (err) throw err; // not connected!
       
//         // Use the connection
//         const query = `SELECT * FROM tbl_${req.params.media} WHERE level <= ${req.params.level}`;
//         connection.query(query, function (error, rows) {
//             // When done with the connection, release it.
//             connection.release();
        
//             // Handle error after the release.
//             if (error) {
//                 res.status(404).json({ status: "failure", data: `cant retrieve all ${req.params.media} under level ${req.params.level}` });
//                 throw error;
//             }

//             res.status(200).json({ status: "success", data: rows });
//         });
//     });
// })

// /api/:mediaType/:level  ->    get all movies/tvshows/music under the given level
//     :mediaType: movies / tvshows / music
//     :level: 0 / 1
router.get("/:mediaType/:level", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        const query = `SELECT * FROM tbl_${req.params.mediaType} WHERE level <= ${req.params.level}`;
        connection.query(query, function (error, rows) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: `cant retrieve all ${req.params.mediaType} under level ${req.params.level}` });
                throw error;
            }

            res.status(200).json({ status: "success", data: rows });
        });
    });
})

//  /api/:mediaType/detail/:id    ->    get a specific movie/tvshow/music with the given id 
//     :mediaType: movies / tvshows / music
//     :id: 1 / 2 / 3 ...
//      eg: api/movies/detail/1, api/tvshows/detail/20, api/music/detail/3 etc.
router.get("/:mediaType/level/:level/detail/:id", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        let query = "";

        if (req.params.level === "0") {
            query = `SELECT * FROM tbl_${req.params.mediaType} WHERE id=${req.params.id} AND level=${req.params.level}`;
        } else {
            query = `SELECT * FROM tbl_${req.params.mediaType} WHERE id=${req.params.id}`;
        }

        // console.log(query);
        connection.query(query, function (error, row) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json({ status: "failure", data: `cant retrieve ${req.params.mediaType} with id ${req.params.id} level ${req.params.level}` });
                throw error;
            }
        
            res.status(200).json({ status: "success", data: row[0] });
        });
    });
})

//  /api/:mediaType/:level/time/:year    ->    get movies/tvshows/music within the given time period under specific level
//     :mediaType: movies / tvshows / music
//     :level: 0 / 1
//     :year: 1930 / 1940 / 1950 ...
//     eg: api/movies/time/1930, api/tvshows/time/1940, api/music/time/1950 etc.
router.get("/:mediaType/:level/time/:year", (req, res) => {
    connect.getConnection(function(err, connection) {

        if (err) throw err; // not connected!
       
        // Use the connection
        const lo = req.params.year;
        const hi = parseInt(req.params.year) + 10;
        const level = req.params.level;
        // console.log(typeof hi);
        const query = `
        SELECT * FROM tbl_${req.params.mediaType} 
        WHERE year >= ${lo} AND year < ${hi} AND level <= ${level}
        `;
        connection.query(query, function (error, rows) {
            // When done with the connection, release it.
            connection.release();
        
            // Handle error after the release.
            if (error) {
                res.status(404).json(
                    { status: "failure", 
                      data: `cant retrieve ${req.params.mediaType} with level ${req.params.level} within time ${req.params.year}` 
                    }
                );
                throw error;
            }
        
            res.status(200).json({ status: "success", data: rows });
        });
    });
})

// ///////////////////////////////////////////////////////////////////////////////////

// //  /api/:media/genre/:filter    ->    get movies/tvshows/musics with the given genre under specific level
// //     :media: movies / tvshows / music
// //     :level: 0 / 1
// //     :filter: pop / r&b / country .... || family / animation / drama ...
// //     eg: api/movies/genre/family, api/tvshows/genre/animation, api/music/genre/pop etc.
// router.get("/:media/:level/genre/:filter", (req, res) => {
//     connect.getConnection(function(err, connection) {

//         if (err) throw err; // not connected!
       
//         // Use the connection
//         const query = `SELECT * FROM tbl_${req.params.media} WHERE genres LIKE '%${req.params.filter}%'`;
//         connection.query(query, function (error, rows) {
//             // When done with the connection, release it.
//             connection.release();
        
//             // Handle error after the release.
//             if (error) {
//                 res.status(404).json(
//                     { status: "failure", 
//                       data: `cant retrieve ${req.params.media} with level ${req.params.level} with genre ${req.params.filter}` 
//                     }
//                 );
//                 throw error;
//             }
        
//             res.status(200).json({ status: "success", data: rows });
//         });
//     });
// })


module.exports = router;