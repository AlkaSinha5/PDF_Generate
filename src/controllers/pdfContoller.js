
import asyncHandler from "express-async-handler";

import PDF from "../models/pdfModel.js";
import { addPDF, deletePDF, getPDF, getPDFById, updatePDF} from "../services/pdfService.js";

export const AddPdf = asyncHandler(async (req, res) => {
 const pdf = await addPDF(req, res);
//  const Pdf = await readPdf(req, res);
});

export const GetAllPdf = asyncHandler(async (req, res) => {
const result = await getPDF(req,res);
  
});

export const GetPDFById= asyncHandler(async (req, res) => {
  const result = await getPDFById(req,res);
    
  });

export const UpdatePDF = asyncHandler(async (req, res) => {
    const result = await updatePDF(req,res);
      
    });
    
export const DeletePDF = asyncHandler(async (req, res) => {
      const result = await deletePDF(req,res);
        
      });



// export const Pdf = asyncHandler(async (req, res) => {
//   try {
    
//     const pdfId = req.params.id;
//     const url = `http://localhost:4000/receipts/order_receipt_${pdfId}.pdf`
//    res.send({url});
//     //res.status(200).send({ success });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });





