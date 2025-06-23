import React , { useState } from "react"
import { ContactsCollection } from "../api/ContactsCollection";
export const ContactForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveContact = () => {
        ContactsCollection.insert({name,email,imageUrl});
        setName("");
        setEmail("");
        setImageUrl("");
    }
    return (
      <form className="mt-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                  className="mt-1 block w-full border border-gray-300 ronded-md shdow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="name"
                  value={name}
                  type="text" 
                  onChange={(e) => setName(e.target.value) } 
                  />
            </div>
            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700" >Email</label>
              <input 
                  className="mt-1 block w-full border border-gray-300 ronded-md shdow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={email}
                  type="email" 
                  id='email' 
                  onChange={(e) => setEmail(e.target.value)}/>
            </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700" >Image URL</label>
            <input 
                className="mt-1 block w-full border border-gray-300 ronded-md shdow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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