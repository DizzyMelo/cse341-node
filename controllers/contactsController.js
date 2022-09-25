const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const getContacts = async (req, res, next) => {
  if (req.query.id) {
    const contact = await mongodb.getDb().db().collection('contacts').findOne({ _id: new ObjectId(req.query.id) });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contact);
  } else {
    const contactResult = await mongodb.getDb().db().collection('contacts').find();
    contactResult.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
  }
};

module.exports = { getContacts };