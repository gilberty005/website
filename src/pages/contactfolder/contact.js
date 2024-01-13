import React, { useState } from "react";
import "./contact.css";
import { Flex } from '@aws-amplify/ui-react';


export function Contact() {
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   subject: "",
   message: "",
 });


 const handleSubmit = async(e) => {
   e.preventDefault();
   console.log(formData);


   // Create an XMLHttpRequest
   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'http://localhost:3000');
   xhr.setRequestHeader("content-type", "application/json");
   xhr.onload = function () {
     console.log(xhr.responseText);
     if (xhr.responseText === "success") {
       alert("Your message has been delivered!");
       // Clear form inputs
       setFormData({
         name: "",
         email: "",
         subject: "",
         message: "",
       });
     } else {
       alert("Something went wrong");
     }
   };
   xhr.send(JSON.stringify(formData));
 };


 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
 };


 return (
   <>
     <h2 className="gradient__text">Contact</h2>
     <div className="form-container">
       <form onSubmit={handleSubmit} className="contact-form">
         <input
           type="text"
           id="name"
           name="name"
           placeholder="Full name"
           value={formData.name}
           onChange={handleChange}
         />
         <br></br>
         <input
           type="email"
           id="email"
           name="email"
           placeholder="Email"
           value={formData.email}
           onChange={handleChange}
         />
         <br></br>
         <input
           type="text"
           id="subject"
           name="subject"
           placeholder="Subject"
           value={formData.subject}
           onChange={handleChange}
         />
         <br></br>
         <textarea
           id="message"
           name="message"
           cols="30"
           rows="10"
           placeholder="Message"
           value={formData.message}
           onChange={handleChange}
         />
         <br></br>
         <input type="submit" className="submit" value="Send Message" />
       </form>
     </div>
   </>
 );
}