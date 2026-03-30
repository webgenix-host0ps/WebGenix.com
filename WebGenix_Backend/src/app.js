import express from "express";
import cors from "cors";
import ticketRoutes from "./routes/ticketRoutes.js";
import userRoutes from "./routes/userRoutes.js";


import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes);

app.get("/test-zammad", async (req, res) => {
  try {
    const response = await fetch(`${process.env.ZAMMAD_URL}/users`, {
      headers: {
        Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    res.json({
      success: true,
      message: "Zammad connected",
      data
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});


app.listen(process.env.PORT, () => {
  console.log("ZAMMAD_URL:", process.env.ZAMMAD_URL);
  console.log("Backend running on port " + process.env.PORT);
});
