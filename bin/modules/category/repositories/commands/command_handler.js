import * as db from '../../../../helpers/databases/connection.js'

const insertCategory = async (data, callback) => {
    const {category_name, description} = data
    try {
        db.getClient();
        db.query((`INSERT INTO category(category_name, description) VALUES('${category_name}', '${description}') RETURNING *`), (err, result) => {
            callback(err, result);
        });
        db.releaseClient;
    } catch (err) {
        console.error(err.message);
    }
  }

  const updateCategory = async (id, data, callback) => {
    const {category_name, description} = data
    try {
        db.getClient();
        db.query((`UPDATE category SET category_name = '${category_name}', description = '${description}' WHERE id = '${id}' RETURNING *`), (err, result) => {
            callback(err, result);
        });
        db.releaseClient;
    } catch (err) {
        console.error(err.message);
    }
  }

  const deleteCategory = async (id, callback) => {
    try {
        db.getClient();
        db.query((`DELETE FROM category WHERE id = '${id}' RETURNING *`), (err, result) => {
            callback(err, result);
        });
        db.releaseClient;
    } catch (err) {
        console.error(err.message);
    }
  }

export default {
    insertCategory,
    updateCategory,
    deleteCategory
}