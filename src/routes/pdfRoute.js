import express from "express";
import { AddPdf, DeletePDF, GetAllPdf, GetPDFById, UpdatePDF} from "../controllers/pdfContoller.js";


const router = express.Router();

router.post("/addPDF", AddPdf);
router.get("/getAllPDF",  GetAllPdf);
router.delete("/deletePDF/:id", DeletePDF);
router.put("/updatePDF/:id", UpdatePDF );
router.get("/getPDFById/:id", GetPDFById);
// router.get("/Pdf/:id",Pdf);



export default router;


