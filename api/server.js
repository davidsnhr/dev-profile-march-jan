import { Resend } from 'resend';

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_API_KEY);

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Wrong method' });
  }

  try {
    const { name, message, email } = req.body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'davidsnhr@gmail.com',
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(502).json({ error });
  }
};

export default handler;
