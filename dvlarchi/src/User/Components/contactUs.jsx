import axios from "axios";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {

   const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

    const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/contact`,
      formData,
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    if (response.status === 201) {
      alert("Message sent successfully!");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Error sending message. Please check your connection or try again.");
  } finally {
      setLoading(false);
    }
};


  return (
    <div className="container py-5">
   <div className="contact-card">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
         <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>


      <div className="row">
        {/* Contact Info */}
        <div className="">
          <hr />
          <h4>Contact Information</h4>
          <hr />
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919999999999">+91 7229912333</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:lokesh@example.com">Lokesh@example.com</a>
          </p>
          <p>
            <strong>Address : </strong> 93 , Girraj Nagar , Sogani Marg , patrakar , Mansarover , Jaipur , Rajasthan
            <br />  
            <b>Landmark</b> : Mahima Elenza Circle
            <br />
            <b>Pincode</b> : 302020
          </p>
          <hr />
        </div>

        {/* Google Map */}
        <div className="">
          <hr />
          <h4>Available Here  <FaMapMarkerAlt className="text-red-600 text-xl" /> </h4>
          <hr />
          <div style={{ borderRadius: "12px", overflow: "hidden" }}>
           
            <iframe
            title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.9657366260979!2d75.73642385!3d26.8421318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5401800195b%3A0xb039317178467810!2sPatrakar%20Colony%2C%20Dholai%2C%20Rajasthan%20302020%2C%20India!5e0!3m2!1sen!2snl!4v1754812866273!5m2!1sen!2snl"
             className="map-show"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
