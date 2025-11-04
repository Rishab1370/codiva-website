import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

// ✅ CORS setup
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Schema + Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  budget: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ POST route to save + email
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, budget } = req.body;

    // Save data in MongoDB
    const newContact = new Contact({ name, email, phone, budget });
    await newContact.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // can also use your admin email
      subject: "We received your project request 🚀",
      text: `Hey ${name},\n\nThanks for reaching out! We received your project request (Budget: ${budget}). We'll get in touch soon!\n\nBest,\nCodiva Systems Team`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "✅ Project submitted & email sent!" });
  } catch (error) {
    console.error("❌ Error submitting contact:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Default route
app.get("/", (req, res) => res.send("Server is running..."));

// ✅ Start server
app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
