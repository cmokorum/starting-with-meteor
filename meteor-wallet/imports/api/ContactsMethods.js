import { Meteor } from "meteor/meteor"
import { check } from "meteor/check"
import { ContactsCollection } from "./ContactsCollection";

Meteor.methods({
  async 'contacts.insert'({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    if(!name) {
        throw new Meteor.Error("Name is required.")
    }
    return await ContactsCollection.insertAsync({ name, email, imageUrl, createdAt: new Date() });
  },

  async 'contacts.remove'({ contactId }) {
    check(contactId, String);
    return await ContactsCollection.removeAsync(contactId);
  }
});