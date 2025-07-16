import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Toate câmpurile sunt obligatorii" });
    }

    try {
        console.log("EMAIL ENV:", process.env.GMAIL_USER, process.env.GMAIL_PASS ? "✅ PASS OK" : "❌ NO PASS");

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,  // Gmail-ul tău
        to: process.env.GMAIL_USER,    // Primești emailul la această adresă
        replyTo: email,                // Email-ul utilizatorului
        subject: `Mesaj de la ${name} prin formularul de contact`,
        html: `
          <h3>Ai un mesaj nou!</h3>
          <p><b>Nume:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Mesaj:</b> ${message}</p>
        `,
      });

      return res.status(200).json({ message: "Email trimis cu succes!" });
    } catch (error) {
      console.error("Eroare la trimiterea emailului:", error);
      return res.status(500).json({ error: "Eroare la trimiterea emailului" });
    }
  } else {
    return res.status(405).json({ error: "Metoda nu este permisă" });
  }
}
