import wrapper from '../../../helpers/utils/wrapper.js';
import query_handler from '../repositories/queries/query_handler.js';
import command_handler from '../repositories/commands/command_handler.js';
import validation from '../repositories/commands/command_model.js'
  const getAllCategory = async (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    query_handler.getAllCategory(page, limit,(err, result) => {
        if (err) {
            wrapper.error(res, err);
        } else {
            const data = result.rows;
            const totalCount = parseInt(result.totalCount); // Use totalCount from the modified query.js
            const totalPages = result.totalPages;
            wrapper.success(res, 200, 'Categories is Found', data, { page, limit, totalPages, totalCount })
        }
    })
  }

  const insertCategory = async (req, res, next) => {
    const { error, value } = validation.schema.validate(req.body, {
        abortEarly: false,
      });
    if(error){
        const validationErrorMessage = error.details.map(detail => detail.message).join(', ');
        wrapper.errorValidation(res, 400, 'Validation error: ' + validationErrorMessage);
    } else{
    command_handler.insertCategory(value, (err, result) => {
        if (err) {
            wrapper.error(res, err);
        } else {
            wrapper.success(res, 201, 'A new Category Created Successfully', result.rows, null)
        }
    })};
  }

  const updateCategory = async (req, res, next) => {
    const id = req.params.id
    const { error, value } = validation.schema.validate(req.body, {
        abortEarly: false,
      });
    if(error){
        const validationErrorMessage = error.details.map(detail => detail.message).join(', ');
        wrapper.errorValidation(res, 400, 'Validation error: ' + validationErrorMessage);
    } else{
        command_handler.updateCategory(id, value, (err, result) => {
            if (err) {
                wrapper.error(res, err);
            } else {
                wrapper.success(res, 200, 'Category Updated Successfully', result.rows, null)
            }
        })};
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