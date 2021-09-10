const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Exercise Router Get");
  //   try {
  //     //const trainers = await db.Trainer.findAll();
  //     const trainers = await db.Trainer.findAll();

  //     res.json(trainers);
  //   } catch (err) {
  //     console.error(err);
  //     next(err);
  //   }
});

module.exports = router;
