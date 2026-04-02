import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

router.get("/services", async (req, res) => {
  try {
    const userId = req.user?.sub || "test-user";

    // const services = await Service.find({ userId });
    const services = await Service.find({ userId }).sort({ createdAt: -1 });

    res.json(services);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching services");
  }
});

export default router;