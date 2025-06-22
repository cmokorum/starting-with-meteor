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
        <form>
      <div>
        <label htmlFor="name">Name</label>
        <input 
            id="name"
            value={name}
            type="text" 
            onChange={(e) => setName(e.target.value) } 
        />
      </div>
      <div>
        <label htmlFor="email" >Email</label>
        <input 
            value={email}
            type="email" 
            id='email' 
            onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="imageUrl" >Image URL</label>
        <input 
            value={imageUrl}
            type="text"
            id='imageUrl' 
            onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div>
      <button type="button" onClick={saveContact}>Save Contact</button>
      </div>
    </form>
    )
}