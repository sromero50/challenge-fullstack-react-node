var express = require('express');
var router = express.Router();
const transactionController = require("../controllers/transactionsController")

/*get all transactions */
router.get('/', transactionController.getAll);

/*get one transaction */
router.get('/:id', transactionController.getByID);

/*post transaction */
router.post('/', transactionController.postTransaction);

/*edit transaction */
router.put('/:id', transactionController.editTransaction);

/*delete transaction */
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
