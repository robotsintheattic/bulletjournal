const express = require('express')
const router = express.Router()
const knex = require('../knex')

/* GET all entires_modules */
router.get('/options', (req, res, next) => {
  knex('entries_modules')
    .then((options) => {
      res.send(options)
    })
    .catch((error) => {
      next(error)
    })
})

/* GET one option */
router.get('/options/:id', (req, res, next) => {
  const id = req.params.id

  knex('entries_modules')
    .then((option) => {
      res.send(option)
    })
    .catch((error) => {
      next(error)
    })
})

/* POST one option */
router.post('/options', (req, res, next) => {
  knex('entries_modules')
    .returning(['id', 'entry_id', 'module_id', 'font', 'content'])
    .insert({
      entry_id: req.body.entry_id,
      module_id: req.body.module_id,
      font: req.body.font,
      content: req.body.content
    })
    .then((option) => {
      res.send(option)
    })
    .catch((error) => {
      next(error)
    })
})

/* UPDATE one option */
router.patch('/options/:id', (req, res, next) => {
  const id = req.params.id

  knex('entries_modules')
    .returning(['id', 'entry_id', 'module_id', 'font', 'content'])
    .where('id', id)
    .update({
      entry_id: req.body.entry_id,
      module_id: req.body.module_id,
      font: req.body.font,
      content: req.body.content
    })
    .then((option) => {
      res.send(option)
    })
    .catch((error) => {
      next(error)
    })
})

/* DELETE one option */
router.delete('/options/:id', (req, res, next) => {
  const id = req.params.id

  knex('entries_modules')
    .where('id', id)
    .del()
    .then((option) => {
      res.send(option)
    })
    .catch((error) => {
      next(error)
    })
})

module.exports = router