import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const ContactsCollection = new Mongo.Collection('contacts');

ContactsCollection.allow({
    insert: () => true,
    remove: () => true,
});

// Agrega esta publicación
if (Meteor.isServer) {
  Meteor.publish('contacts', function () {
    return ContactsCollection.find();
  });
}