const express = require('express')
const router = express.Router()
const entriesController = require('../controllers/entries') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, entriesController.getEntry)

router.post('/addEntry', entriesController.addEntry)

router.delete('/deleteEntry', entriesController.deleteEntry)

module.exports = router