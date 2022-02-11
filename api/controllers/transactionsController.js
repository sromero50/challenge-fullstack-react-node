const Transaction = require("../models/transactionModel")

module.exports = {
    getAll: async function (req, res, next) {
      try {
        const response = await Transaction.findAll()
        res.json(response)
  
      } catch (error) {
        next(error)
      }
  
    },
    getByID: async function (req, res, next) {
      try {
  
        const response = await Transaction.findByPk(req.params.id)
        res.json(response)
  
      } catch (error) {
        next(error)
      }
    },
    postTransaction: async function (req, res, next) {
      try {
        const new_transaction = Transaction.create({
          concept: req.body.concept,
          amount: req.body.amount,
          date: req.body.date,
          type: req.body.type
        })
  
        const response = await new_transaction
        res.status(201).json(response)
      } catch (error) {
        
        next(error)
      }
  
    },
    editTransaction: async function (req, res, next) {
      try {
  
        const edit = await Transaction.update({concept: req.body.concept, amount: req.body.amount}, {where: {id: req.params.id}})
        res.json({"msg": "Transaction edited"})
        
      } catch (error) {
        next(error)
      }
    },
    deleteTransaction: async function (req, res, next) {
  
      try {
        const deleted = await Transaction.destroy({ where: {id : req.params.id}});
        res.json({"msg": "Transaction deleted"});
        
      } catch (error) {
        next(error)
      }
  
    }
  }