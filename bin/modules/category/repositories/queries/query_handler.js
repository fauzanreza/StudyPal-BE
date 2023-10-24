import * as db from '../../../../helpers/databases/connection.js'

const getAllCategory = async (callback) => {
    try {
        db.getClient();
        db.query(`SELECT * FROM category`, (err, result) => {
            callback(err, result);
        });
        db.releaseClient;
    } catch (err) {
        console.error(err.message);
    }
   
  }
//   const getAllCategory = async (req, res, next) => {
//     const recordset = await db.query(`SELECT * FROM category`, (err, result) => {
//         if(!err){
//             res.send(result.rows)
//         }
//     });
//     db.releaseClient;
//     return recordset;
//   }

export default {
    getAllCategory
}