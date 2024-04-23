import express from "express";
import { AddPdf, GetAllPdf } from "../controllers/pdfContoller.js";

const router = express.Router();

router.post("/addPDF", AddPdf);
router.get("/getAllOrder",  GetAllPdf);



export default router;


