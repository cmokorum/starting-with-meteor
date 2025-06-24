import React from "react";
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from "./components/ErrorAlert";
import { SuccessAlert } from "./components/Success";
export const ContactForm = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");
    
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    const showError = ({ message }) => {
      setError(message)
      setTimeout( () => {
        etError("")
      }, 5000);
    }

    const showSuccess = ({ message }) => {
      setSuccess(message);
      setTimeout( () => {
        setSuccess("") 
      }, 5000);
    }
    const saveContact = () => {
        Meteor.call('contacts.insert', { name, email, imageUrl }, (errorResponse) => {
            if (errorResponse) {
              showError({ message: errorResponse.error })
            } else {
                setName("");
                setEmail("");
                setImageUrl("");
                showSuccess({ message: "Contact Save." })
            }
        });
    }
    return (
      <form className="mt-6">
        {error && <ErrorAlert message={error} /> }
        {success && <SuccessAlert message={success} />}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="name"
                  value={name}
                  type="text" 
                  onChange={(e) => setName(e.target.value) } 
                  />
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700" >Email</label>
              <input 
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  type="email" 
                  id='email' 
                  onChange={(e) => setEmail(e.target.value)}/>
            </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700" >Image URL</label>
            <input 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={imageUrl}
                type="text"
                id='imageUrl' 
                onChange={(e) => setImageUrl(e.target.value)}
                />
          </div>
          <div>
          <button
            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
           type="button"
            onClick={saveContact}
            >Save Contact</button>
          </div>
        </div>
      </form>
    )
}