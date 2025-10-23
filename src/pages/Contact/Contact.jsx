import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9adaac83-5932-4440-bb5b-1670d0ffd657");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.querySelector('textarea[name="message"]').placeholder 
      = 'How do I participate in the next event?';
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact-page'>
      {/* Contact Header */}
      <div className="contact-header">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className='contact'>
        <div className="contact-col">
          <h3> Send us a message</h3>
          <p> Feel free to reach out to us through
              the contact form or find our contact
              information below. Your questions, 
              feedback, and suggestions are important 
              as we strive to provide the best experience 
              to our university community.
          </p>
              <ul>
                  <li><img src={mail_icon} alt="mail" />guelph.hsc@gmail.com </li>
              </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
              <label> Your Name </label>
              <input type="text" name='name' placeholder=' John Doe'
              required/>
              <label> Your Email </label>
              <input type="Email" name='email' placeholder='doe@gmail.com'
              required/>
              <label> Write your message here </label>
              <textarea name="message" rows='5' placeholder='How do I participate in the next event?' 
              required> </textarea>
              <button type='submit' className='btn dark-btn'>
                  Submit
              </button>
          </form> 
          <span> {result} </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
