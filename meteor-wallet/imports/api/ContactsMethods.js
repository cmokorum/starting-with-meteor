import { ContactsCollection } from "./ContactsCollection";

Meteor.methods({
  async 'contacts.insert'({ name, email, imageUrl }) {
    if(!name) {
        throw new Meteor.Error("Name is required.")
    }
    // Usa insertAsync para Meteor 3+
    return await ContactsCollection.insertAsync({ name, email, imageUrl });
  }
});