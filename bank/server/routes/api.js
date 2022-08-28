const express = require("express");
const router = express.Router();
const Transactions = require("../model/transaction");

router.get("/transactions", function (req, res) {
  Transactions.find({}, function (err, transactions) {
    res.send(transactions);
  });
});

router.post("/transaction", function (req, res) {
  const newTransaction = req.body;
  console.log(newTransaction);
  const transaction = new Transactions({
    Amount: newTransaction.Amount,
    Vendor: newTransaction.Vendor,
    Category: newTransaction.Category,
  });
  transaction.save();
  res.end();
});

router.delete("/transaction/:id", function (req, res) {
  const transactionId = req.params.id;
  Transactions.findByIdAndDelete(transactionId, function (err, res) {
    console.log("The transaction has been deleted");
  });
  res.end();
});

router.get('/breakdown' , async (req,res) => {
    let amountOfCategories = await Transactions.aggregate([
        { $group: {_id: '$Category', amount: { $sum: '$Amount' } } },
      ]);
      
      res.send(amountOfCategories)
})

module.exports = router;
