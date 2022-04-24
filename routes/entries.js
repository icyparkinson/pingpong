const router = require("express").Router()
const entriesController = require("../controllers/entries")

router.get("/", entriesController.getEntry)

router.post("/addEntry", entriesController.addEntry)

router.delete("/deleteEntry", entriesController.deleteEntry)

module.exports = router