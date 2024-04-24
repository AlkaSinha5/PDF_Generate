import PDF from "../models/pdfModel.js";
import asyncHandler from "express-async-handler";
// import ejs from "ejs";
// import path from "path";
// import * as fs from "fs";
// // import * as html_to_pdf from "html-pdf-node";
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// import html_to_pdf from 'html-to-pdf';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

export const addPDF = asyncHandler(async (req, res) => {
    try {
    const pdf = await PDF.create(req.body);
    // return res
    // const receipt = await readPdf(pdf._id);
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

export const deletePDF = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const success = await PDF.findByIdAndDelete(id);
  if (success) {
    res.status(200).send({ success, message: "PDF deleted successfully." });
  } else {
    res.status(404).send({ error: "PDF not found." });
  }
});

export const getPDFById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const pdf = await PDF.findById(id);
  if (pdf) {
    res.status(200).send(pdf);
  } else {
    res.status(404).send({ error: "PDF not found." });
  }
});

export const updatePDF = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const updatedPDF = await PDF.findByIdAndUpdate(id, updatedData, { new: true });
  if (updatedPDF) {
    res.status(200).send(updatedPDF);
  } else {
    res.status(404).send({ error: "PDF not found." });
  }
});


// export const readPdf = asyncHandler(async (id) => {
//     try {
//       //const user = await checkAdmin(req, res);
  
//       const existingOrder = await PDF.findById(id);

//       // console.log("----------",existingOrder)
  
//       const dateObject = new Date(existingOrder?.date);
  
//       const formattedDate = dateObject.toLocaleDateString("en-GB", {
//         day: "2-digit",
//         month: "2-digit",
//         year: "2-digit",
//       });
  
//     //   const products = existingOrder.products;
  
//     //   const billData = [];
  
//     //   for (const product of products) {
//     //     const p = await Product.findById(product.productId);
  
//     //     billData.push({
//     //       productName: p.ProductName,
//     //       price: p.sellingPrice,
//     //       quantity: product.quantity,
//     //     });
//     //   }
  
//       const pdfData = {
      
//         pdfId:id,
//         no: existingOrder?.no,
//         date: formattedDate,
//         from: existingOrder?.from,
//         to: existingOrder?.to,
//         truckType: existingOrder?.truckType,
//         driver: existingOrder?.driver,
//         truckNo: existingOrder?.truckNo,
//         mobileNumber: existingOrder?.mobileNumber,
//         consigneeName: existingOrder?.consigneeName,
//         consigneeGSTIN: existingOrder?.consigneeGSTIN,
//         description: existingOrder?.description,
//         payment: existingOrder?.payment,
//         numberOfArticles: existingOrder?.numberOfArticles,
//         weightMt: existingOrder?.weightMt,
//         freightRateMt: existingOrder?.freightRateMt,
//         freightAmount: existingOrder?.freightAmount,
//         invoiceNo: existingOrder?.invoiceNo,
//         royalty: existingOrder?.royalty,
//         venue: existingOrder?.venue,
//       };
//       // console.log(pdfData);
//       const { pdfBuffer } = await generatePDFReceipt(pdfData,res);
  
//       return pdfBuffer;
    
//     } catch (e) {
//       console.log(e);
//       throw new Error(e);
//     }
//   });
//   // const generatePDFReceipt = async (dynamicData) => {
//   //   try {
//   //     // console.log(dynamicData)
      
//   //     const html = await ejs.renderFile(
//   //       path.join(__dirname, "../template/pdf.ejs"),
//   //       { data: dynamicData }
//   //     );
//   //     // console.log(html,"hhhhhh")
      

//   //     let options = {
//   //       format: "A4",
//   //       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//   //     };
//   //     const pdfBuffer = await new Promise((resolve, reject) => {
//   //       html_to_pdf
//   //         .generatePdf({ content: html }, options)
//   //         .then((buffer) => {
//   //           // console.log("PDF Buffer:-", buffer);
//   //           resolve(buffer);
//   //         })
//   //         .catch((err) => {
//   //           // console.error(err);
//   //           reject("Error generating PDF");
//   //         });
//   //     });
  
      
//   //     fs.writeFileSync(
//   //       path.join(
//   //         __dirname,
//   //         `../../receipts/order_receipt_${dynamicData.pdfId.toString()}.pdf`
//   //       ),
//   //       pdfBuffer
//   //     );
  
//   //     return { dynamicData, pdfBuffer };
//   //   } catch (e) {
//   //     // console.error(e);
//   //     throw new Error("Error generating or saving PDF");
//   //   } 
//   // };

//   const generatePDFReceipt = async (dynamicData) => {
    
//     try {
//       // Sample data (you can replace this with your dynamic data)
//       // const dynamicData = {
//       //     orderId: '12345',
//       //     email: 'example@example.com',
//       //     phone: '1234567890',
//       //     productName: 'Product Name',
//       //     orderDate: new Date().toLocaleDateString(),
//       //     totalAmount: '$100',
//       //     customerName: 'John Doe',
//       //     date: new Date().toLocaleDateString(),
//       //     status: 'Pending',
//       // };

//       // Render HTML content from EJS template with dynamic data
//       const html = await ejs.renderFile(path.join(__dirname, '../template/pdf.ejs'), { data: dynamicData });

//       // Generate PDF from HTML content
//       const pdfBuffer = await html_to_pdf.generatePdf({ content: html });

//       // Set response headers for PDF file
//       res.setHeader('Content-Type', 'application/pdf');
//       res.setHeader('Content-Disposition', 'attachment; filename="receipt.pdf"');

//       // Send the PDF file as response
//       res.send(pdfBuffer);

//   } catch (error) {
//       console.error('Error generating PDF:', error);
//       res.status(500).send('Error generating PDF');
//   }

  
      
     
//   };