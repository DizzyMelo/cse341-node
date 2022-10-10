const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

const collectionName = 'contacts';

const getContacts = async (req, res) => {
  if (req.query.id) {
    const contact = await mongodb.getDb().db().collection(collectionName).findOne({ _id: new ObjectId(req.query.id) });

    if (!contact) {
      res.setHeader('Content-Type', 'application/json');
      res.status(204).json();
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contact);
    }
  } else {
    const contactResult = await mongodb.getDb().db().collection(collectionName).find();
    contactResult.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
  }
};

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const savedContact = await mongodb.getDb().db().collection(collectionName).insertOne(contact);

  if (savedContact.acknowledged) {
    res.status(201).json(savedContact);
  } else {
    res.status(500).json(savedContact.error || 'Something went wrong when trying to create contact.');
  }
}

const updateContact = async (req, res) => {
  const id = new ObjectId(req.params.id);
  
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };

  const updatedContact = await mongodb.getDb().db().collection(collectionName).replaceOne({ _id: id }, contact);
  if (updatedContact.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(updatedContact.error || 'Something went wrong when trying to update contact.');
  }
};

const deleteContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('contacts').remove({ _id: userId }, true);

  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Something went wrong when trying to delete the contact.');
  }
};

module.exports = { getContacts, createContact, updateContact, deleteContact };