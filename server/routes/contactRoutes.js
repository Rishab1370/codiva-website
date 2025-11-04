import express from "express";
const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, budget } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required." });
    }

    // ✅ For now, we’ll just log it to verify it’s working
    console.log("📩 New Contact Submission:", { name, email, phone, budget });

    // You can later save to MongoDB here
    res.status(200).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
});

export default router;
