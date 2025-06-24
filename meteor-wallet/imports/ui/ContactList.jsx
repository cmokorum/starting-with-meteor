import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

export const ContactList = () => {
    const isLoading = useSubscribe('contacts'); // <-- nombre correcto
    const contacts = useFind(() => ContactsCollection.find({}, { sort: { createdAt: -1 } }));

    const deleteContact = (contactId) => {
        Meteor.call('contacts.remove', { contactId });
    };

    if (isLoading()) {
        return <p className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Loading...</p>;
    }

    return (
        <>
            <h3 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Contact List
            </h3>
            <ul className="divide-y divide-gray-100">
                {contacts.map(contact => (
                    <li key={contact._id} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img alt="" src={contact.imageUrl} className="size-12 flex-none rounded-full bg-gray-50" />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm/6 font-semibold text-gray-900">{contact.name}</p>
                                <p className="mt-1 truncate text-xs/5 text-gray-500">{contact.email}</p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <button type="button" onClick={() => deleteContact(contact._id)}>🗑️</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

