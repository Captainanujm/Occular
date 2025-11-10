import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
export const sendContactMail = async (req, res) => {
  try {
    const {
      name,
      email,
      number,
      location,
      gst,
      drugLicense,
      lookingFor,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }

    // Configure transporter
   const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
  port: 587,                    // Must be 587 for Render
  secure: false,                // false = STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // App Password for Gmail
  },
  tls: {
    rejectUnauthorized: false,   // prevents cert errors
  },
  connectionTimeout: 10000,      // 10s
  greetingTimeout: 10000,
  socketTimeout: 10000,
});
    // Email content
    const mailOptions = {
      from: `"${name} (Website Inquiry)" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Inquiry from ${name} - ${lookingFor}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px;">
          <h2 style="color:#dc2626;">New Inquiry from Website</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${number || "N/A"}</p>
          <p><b>Location:</b> ${location || "N/A"}</p>
          <p><b>GST Number:</b> ${gst || "N/A"}</p>
          <p><b>Drug License:</b> ${drugLicense || "N/A"}</p>
          <p><b>Looking For:</b> ${lookingFor}</p>
          <p><b>Message:</b><br>${message}</p>
          <hr style="margin-top:20px"/>
          <p style="font-size:13px; color:gray;">This inquiry was submitted from your website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
