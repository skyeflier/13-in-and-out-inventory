const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    // include: [{ model: Product }] CHECK READ ME
  })
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {
    // include: [{ model: Product }]
  })
    // be sure to include its associated Products
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: { id: req.params.id }
  })
    // be sure to include its associated Products
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id }
  })
    // be sure to include its associated Products
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

module.exports = router;
