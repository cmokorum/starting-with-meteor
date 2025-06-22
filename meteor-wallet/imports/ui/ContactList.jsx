import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const ContactList = () => {
    useTracker(() => {
        Meteor.subscribe('contacts');
    }, []);

    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();
    });

    const deleteContact = (contactId) => {
        ContactsCollection.remove(contactId);
    };

    return (
        <>
            <h3>
                Contact List
            </h3>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id} >
                        <img
                            src={
                                contact.imageUrl &&
                                (contact.imageUrl.startsWith('http') || contact.imageUrl.startsWith('data:image'))
                                    ? contact.imageUrl
                                    : "https://placehold.co/40x40"
                            }
                            alt={contact.name || "Imagen"}
                            style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "20%", marginRight: "8px" }}
                            onError={e => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40"; }}
                        />
                        {contact.name} - {contact.email}
                        <button type="button" onClick={() => deleteContact(contact._id)}>🗑️</button>
                    </li>
                ))}
            </ul>
        </>
    )
}