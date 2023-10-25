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

export default {
    getAllCategory
}