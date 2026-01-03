import React, { useState } from "react";
import "./contact.css";
import { submitContactForm } from "../../utils/api";

export function Contact() {
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   subject: "",
   message: "",
 });

 const [charCount, setCharCount] = useState(0);
 const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = async(e) => {
   e.preventDefault();
   setIsSubmitting(true);
   
   try {
     await submitContactForm(formData);
     alert("Your message has been delivered!");
     // Clear form inputs
     setFormData({
       name: "",
       email: "",
       subject: "",
       message: "",
     });
   } catch (error) {
     console.error('Error sending message:', error);
     alert(`Error: ${error.message || 'Your message was unsuccessful. Please try again later.'}`);
   } finally {
     setIsSubmitting(false);
   }
 };

 const handleChange = (e) => {
   const { name, value } = e.target;
   if (name === 'message') {
    if (value.length > 3000) {
      // Optionally, you can provide feedback to the user here
      alert('Message cannot exceed 3000 characters.');
      return;
    }
    setCharCount(value.length);
  }

   setFormData((prevData) => ({
     ...prevData,
     [name]: value,
   }));
 };

 return (
   <>
     <div className = "content-container">
      {/*<Voronoi imageUrl={earth} />*/}
      <div className="form-container">
        <h2 className="gradient__text">Let's Connect!</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
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
            required
          />
          <div style={{ textAlign: 'right', color: 'grey' }}>
            {charCount}/3000
          </div>
          <br></br>
          <input 
            type="submit" 
            className="submit focus-style" 
            value={isSubmitting ? "Sending..." : "Send Message"}
            disabled={isSubmitting}
          />
        </form>
      </div>
     </div>
   </>
 );
}