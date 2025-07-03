import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // 👈 Add this line

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors()); // allows all origins
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL,
      subject: `Contact form from ${name}`,
      text: message,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Keep-alive endpoint
app.get('/api/ping', (req, res) => {
  res.status(200).send('✅ Backend is alive');
});

// Self-ping every 14 minutes
setInterval(() => {
  fetch('https://portfolio-backend-mb8y.onrender.com/api/ping')
    .then(() => console.log('🔁 Self-ping successful:', new Date().toLocaleTimeString()))
    .catch(err => console.error('❌ Self-ping failed:', err));
}, 14 * 60 * 1000);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
