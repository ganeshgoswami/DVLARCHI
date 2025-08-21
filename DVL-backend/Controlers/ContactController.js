const Contact = require("../modals/Contact");
const nodemailer = require("nodemailer");

// Email Config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // funbeautyfeet@gmail.com
    pass: process.env.EMAIL_PASS, // App password
  },
});

exports.contactForm = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 1. Save to Database
    const newContact = new Contact({ name, phone, email, message });
    await newContact.save();

    // 2. Send Email to Admin (your Gmail)
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`, // always from your Gmail
      to: process.env.ADMIN_EMAIL, // gannugoswami@gmail.com
      subject: "📩 New Contact Form Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending contact form:", error);
    res.status(500).json({ message: "Failed to send contact form", error });
  }
};
