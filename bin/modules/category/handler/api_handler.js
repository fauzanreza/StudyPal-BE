import * as db from '../../../helpers/databases/connection.js'
import wrapper from '../../../helpers/utils/wrapper.js';
import {schema} from '../repositories/queries/query_model.js'
import query_handler from '../repositories/queries/query_handler.js';


const getAllCategory = async (req, res, next) => {
    await db.query(`SELECT * FROM category`, (err, result) => {
        if(!err){
            res.send(result.rows)
        }
    });
    db.releaseClient;
  }

const insertCategory = async (req, res, next) => {
    const {category_name, description} = req.body
    db.query((`INSERT INTO category(category_name, description) VALUES('${category_name}', '${description}')`), (err, result) => {
        if(!err){
            res.send('Insert Success')
        } else {
            res.send(err.message)
        }
    });
    db.releaseClient;
  }

const updateCategory = async (req, res, next) => {
    const {category_name, description} = req.body
    db.query((`UPDATE category SET category_name = '${category_name}', description = '${description}' WHERE id = '${req.params.id}'`), (err, result) => {
        if(!err){
            res.send('Update Success')
        } else {
            res.send(err.message)
        }
    });
    db.releaseClient;
  }

const deleteCategory = async (req, res, next) => {
    db.query((`DELETE FROM category WHERE id = '${req.params.id}'`), (err, result) => {
        if(!err){
            res.send('Delete Success')
        } else {
            res.send(err.message)
        }
    });
    db.releaseClient;
  }


  // ===========================================
  const getnewAllCategory = async (req, res, next) => {
    query_handler.getAllCategory((err, result) => {
        if (err) {
            wrapper.error(res, err);
        } else {
            wrapper.success(res, 200, 'Category Found', result.rows, null)
        }
    })
  }

export default {
    getAllCategory,
    insertCategory,
    updateCategory,
    deleteCategory,
    getnewAllCategory
  }