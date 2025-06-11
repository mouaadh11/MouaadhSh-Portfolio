const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, Service, Message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "My Portfolio <onboarding@resend.dev>",
      to: "mouaadhsahailia@email.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${Service}</p>
        <p><strong>Message:</strong><br/>${Message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
