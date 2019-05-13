const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../helpers/path')


router.get('/', (req, res, next) => {
  res.render('persons', {
    pageTitle: 'List of persons',
    path: '/persons',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

router.get('/create-person', (req, res, next) => {
  res.render('create-person', {
    pageTitle: 'Create a person',
    path: '/create-person',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
})

module.exports = router;