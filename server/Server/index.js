const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* LOGIN */
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (
    email === "admin@leadforge.com" &&
    password === "123456"
  ) {
    return res.json({
      success: true,
      user: {
        name: "Nandana",
        role: "Admin",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

/* LEADS */
app.get("/leads", (req, res) => {
  res.json([
    {
      id: 1,
      company: "Tesla",
      status: "New",
      email: "tesla@email.com",
    },
    {
      id: 2,
      company: "Amazon",
      status: "Contacted",
      email: "amazon@email.com",
    },
    {
      id: 3,
      company: "Netflix",
      status: "Proposal",
      email: "netflix@email.com",
    },
  ]);
});

/* PIPELINE */
app.get("/pipeline", (req, res) => {
  res.json({
    New: ["Tesla", "Spotify"],
    Contacted: ["Amazon"],
    Proposal: ["Netflix"],
    Closed: ["Adobe"],
  });
});

/* ANALYTICS */
app.get("/analytics", (req, res) => {
  res.json({
    revenue: "₹4.2L",
    conversionRate: "32%",
    activeClients: 48,
    totalLeads: 128,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});