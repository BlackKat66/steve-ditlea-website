import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const { name, email, phone, message } = data;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER?.replaceAll('"', '').replaceAll("'", ''),
      pass: process.env.SMTP_PASSWORD
    }
  });

  const parsedMessage = message.split('\n').map((paragraph: string) => `<p>${paragraph}</p>`).join('');
 
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_RECIPIENT,
      subject: `New message from ${name}`,
      html: `<p>${name} just sent you an email from your website!</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Phone: </strong> ${phone}</p><br>
        <p><strong>Message: </strong> ${parsedMessage}</p><br>
      `
    });
  } catch (error) {
    console.error(error);

    return new Response("Message failed to send.", {
      status: 500,      
    });
  }

  return new Response("Your email has been sent!", {
    status: 200
  });
};

