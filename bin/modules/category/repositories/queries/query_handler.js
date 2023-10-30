import * as db from '../../../../helpers/databases/connection.js'

const getAllCategory = async (page, limit, callback) => {
    const offset = (page - 1) * limit;
    try {
        db.query(
            `SELECT * FROM category ORDER BY id OFFSET ${offset} LIMIT ${limit}`,
            (err, result) => {
                if (err) {
                    callback(err, null);
                } else {
                    db.query('SELECT COUNT(*) FROM category', (err, countResult) => {
                        if (err) {
                            callback(err, null);
                        } else {
                            const totalCount = countResult.rows[0].count;
                            const totalPages = Math.ceil(totalCount / limit);
                            callback(null, { rows: result.rows, totalCount, totalPages });
                        }
                    });
                }
            }
        );
        db.releaseClient;
    } catch (err) {
        console.error(err.message);
    }
   
  }

export default {
    getAllCategory
}