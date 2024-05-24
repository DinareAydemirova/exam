const Flower = require("./../models/flowersModel")


const getAllData = async (req, res) => {

  try {
    const flower = await Flower.find()
    res.status(200).send(flower)
  } catch (error) {
    res.status(500).send(error)

  }

}


const postData = async (req, res) => {

  try {
    const obj=req.body
    const newFlower=await Flower(obj)
    newFlower.save()
    res.status(201).send(newFlower)
  } catch (error) {
    res.status(400).send(error)

  }

}

const getDataById = async (req, res) => {

  try {
    const flower=await Flower.findById(req.params.id)

    res.status(200).send(flower)
  } catch (error) {
    res.status(500).send(error)

  }

}

const deleteDataById = async (req, res) => {

  try {
    const flower=await Flower.findByIdAndDelete(req.params.id)

    res.status(200).send(flower)
  } catch (error) {
    res.status(500).send(error)

  }

}

const patchDataById = async (req, res) => {

  try {
    const flower=await Flower.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).send(flower)
  } catch (error) {
    res.status(400).send(error)

  }

}


const putDataById = async (req, res) => {

  try {
    const flower=await Flower.findOneAndReplace({_id:req.params.id}, req.body)

    res.status(200).send(flower)
  } catch (error) {
    res.status(400).send(error)

  }

}

module.exports = { getAllData ,postData, getDataById, deleteDataById, patchDataById, putDataById}