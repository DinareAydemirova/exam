const express = require("express")
const router = express.Router()
const flowerController=require("./../controllers/flowerController")

router.get("/flowers",flowerController.getAllData )
router.post("/flowers",flowerController.postData )
router.get("/flowers/:id",flowerController.getDataById )
router.delete("/flowers/:id",flowerController.deleteDataById )
router.patch("/flowers/:id",flowerController.patchDataById )
router.put("/flowers/:id",flowerController.putDataById )






module.exports = router