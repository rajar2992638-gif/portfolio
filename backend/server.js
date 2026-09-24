const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   HOME / TEST ROUTE
========================= */

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio Backend is running successfully",
  });
});

/* =========================
   EMAIL SETUP
========================= */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

/* =========================
   PROJECT REQUEST
========================= */

app.post("/api/project-request", async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobile,
      company,
      projectType,
      budget,
      timeline,
      description,
    } = req.body;

    // Required fields
    if (!fullName || !email || !mobile || !projectType || !description) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Generate request ID
    const requestId = `PR-${Date.now()}`;

    // Send email to Raja
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      replyTo: email,

      subject: `🚀 New Project Request - ${fullName}`,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: auto;
          padding: 25px;
          background: #111;
          color: #fff;
          border-radius: 12px;
        ">

          <h2 style="color: #7c3aed;">
            🚀 New Project Request
          </h2>

          <p>
            Someone has submitted a project request from your portfolio.
          </p>

          <hr style="border-color: #333;" />

          <h3>Project Details</h3>

          <p>
            <strong>Request ID:</strong> ${requestId}
          </p>

          <p>
            <strong>Name:</strong> ${fullName}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Mobile:</strong> ${mobile}
          </p>

          <p>
            <strong>Company:</strong> ${company || "Not provided"}
          </p>

          <p>
            <strong>Project Type:</strong> ${projectType}
          </p>

          <p>
            <strong>Budget:</strong> ${budget || "Not provided"}
          </p>

          <p>
            <strong>Timeline:</strong> ${timeline || "Not provided"}
          </p>

          <h3>Project Description</h3>

          <div style="
            background: #1f1f1f;
            padding: 15px;
            border-radius: 8px;
          ">
            ${description}
          </div>

          <hr style="border-color: #333; margin-top: 25px;" />

          <p style="color: #aaa;">
            Reply directly to this email to contact the client.
          </p>

        </div>
      `,
    });

    console.log(`New project request: ${requestId}`);

    res.status(200).json({
      success: true,
      message: "Project request sent successfully.",
      requestId,
    });

  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send project request.",
    });
  }
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});