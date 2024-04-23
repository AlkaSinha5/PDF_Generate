import PDF from "../models/pdfModel.js";
import asyncHandler from "express-async-handler";
export const addPDF = asyncHandler(async (req, res) => {
    try {
    const pdf = await PDF.create(req.body);
    // return res
      res.status(201).json({
        success: true,
        data: pdf,
      });
    } catch (error) {
        // return res
      console.error(error.message);
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  });
  

export const getPDF = asyncHandler(async(req, res) => {
    try {
        const success = await PDF.find();

        res.status(200).json({
            success: true,
            data: success
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
});
