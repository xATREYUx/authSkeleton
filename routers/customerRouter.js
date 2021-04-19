const Customer = require("../models/customerModel");
const auth = require("../middleware/auth");
const router = require("express").Router();

router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;
    const newCustomer = new Customer({
      name: name,
    });
    const savedCustomer = await newCustomer.save();
    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;