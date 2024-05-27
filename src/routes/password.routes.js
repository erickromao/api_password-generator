const { Router } = require('express')
const PasswordController = require('../controllers/PasswordController')
const passwordRouter = Router()

const passwordController = new PasswordController()

passwordRouter.post("/",passwordController.create)

module.exports = passwordRouter