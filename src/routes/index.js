const {Router} = require('express')
const passwordRouter = require('./password.routes')
const router = Router()

router.use("/password", passwordRouter)

module.exports = router