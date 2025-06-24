import React, { useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Header } from './Header';

export const App = () => {
  const [view, setView] = useState('contacts'); // 'contacts' o 'add-contacts'

  return (
    <div>
      <Header view={view} setView={setView} />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Meteor Wallet - Galaxy
        </h1>
        {view === 'contacts' && <ContactList />}
        {view === 'add-contacts' && <ContactForm />}
      </div>
    </div>
  );
};
