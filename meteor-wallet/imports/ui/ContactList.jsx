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
            <h3 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Contact List
            </h3>
        <ul className="divide-y divide-gray-100">
            {contacts.map(contact => (
                    <li key={contact.email} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img alt="" src={contact.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
                            <div className="min-w-0 flex-auto">
                            <p className="text-sm/6 font-semibold text-gray-900">{contact.name}</p>
                            <p className="mt-1 truncate text-xs/5 text-gray-500">{contact.email}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <button type="button" onClick={() => deleteContact(contact._id)}>🗑️</button>
                            <div className="mt-1 flex items-center gap-x-1.5">
                            </div>
                        </div>
                    </li>
                ))}
            </ul>    
        </>
    )
}

