import express from "express";
import pdfRoute from "./pdfRoute.js";

const router =express.Router();


router.use("/pdf",pdfRoute);



export default router;