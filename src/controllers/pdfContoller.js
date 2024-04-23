
import asyncHandler from "express-async-handler";

import PDF from "../models/pdfModel.js";
import { addPDF, getPDF } from "../services/pdfService.js";

export const AddPdf = asyncHandler(async (req, res) => {
 const order = await addPDF(req, res)
});

export const GetAllPdf = asyncHandler(async (req, res) => {
const result = await getPDF(req,res);
  
});



// export const Orderpdf = asyncHandler(async (req, res) => {
//   try {
    
//     const orderId = req.params.id;
//     const url = `https://inventory-phsl.onrender.com/receipts/order_receipt_${orderId}.pdf`
//    res.send({url});
//     //res.status(200).send({ success });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });





