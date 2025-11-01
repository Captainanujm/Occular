import nodemailer from "nodemailer";
//qklw pqxw ekhi foqa
export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      location,
      number,
      gst,
      drugLicense,
      lookingFor,
      message,
    } = body;

    // Setup mail transporter (your sender Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email structure
    const mailOptions = {
      from: `"${name} (Website Inquiry)" <${process.env.SMTP_USER}>`,
      replyTo: email, // so Medlock can directly reply to the user
      to: process.env.RECEIVER_EMAIL, // Medlock's official inbox
      subject: `New Inquiry from ${name} - ${lookingFor}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="color:#d32f2f;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${number}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>GST Number:</strong> ${gst}</p>
          <p><strong>Drug License:</strong> ${drugLicense}</p>
          <p><strong>Looking For:</strong> ${lookingFor}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr/>
          <p style="font-size: 12px; color: #666;">
            Sent from Medlock Healthcare Website Contact Form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
