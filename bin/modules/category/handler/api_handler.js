import wrapper from '../../../helpers/utils/wrapper.js';
import query_handler from '../repositories/queries/query_handler.js';
import command_handler from '../repositories/commands/command_handler.js';

  const getAllCategory = async (req, res, next) => {
    query_handler.getAllCategory((err, result) => {
        if (err) {
            wrapper.error(res, err);
        } else {
            wrapper.success(res, 200, 'Categories is Found', result.rows, null)
        }
    })
  }

  const insertCategory = async (req, res, next) => {
    const {category_name, description} = req.body
    command_handler.insertCategory({category_name, description}, (err, result) => {
        if (err) {
            wrapper.error(res, err);
        } else {
            wrapper.success(res, 201, 'A new Category Created Successfully', result.rows, null)
        }
    })
  }

  const updateCategory = async (req, res, next) => {
    const id = req.params.id
    const {category_name, description} = req.body
    command_handler.updateCategory(id, {category_name, description}, (err, result) => {
        if (err) {
            wrapper.error(res, err);
        } else {
            wrapper.success(res, 200, 'Category Updated Successfully', result.rows, null)
        }
    })
  }

  const deleteCategory = async (req, res, next) => {
    const id = req.params.id
    command_handler.deleteCategory(id, (err, result) => {
        if (err) {
            wrapper.error(res, err);
        } else {
            wrapper.success(res, 200, 'Selected Category Data is Deleted Successfully', result.rows, null)
        }
    })
  }

export default {
    getAllCategory,
    insertCategory,
    updateCategory,
    deleteCategory
}