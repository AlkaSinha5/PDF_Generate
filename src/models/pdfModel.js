import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
    no: { type: String, required: true },
    date: { type: Date, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    truckType: { type: String, required: true },
    driver: { type: String, required: true },
    truckNo: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    consigneeName: { type: String, required: true },
    consigneeGSTIN: { type: String },
    description: { type: String },
    payment: { type: String },
    numberOfArticles: { type: Number },
    weightMt: { type: Number },
    freightRateMt: { type: Number },
    freightAmount: { type: Number },
    invoiceNo: { type: String },
    royalty: { type: String },
    venue: { type: String },
});

const pdf = mongoose.model('PDF', pdfSchema);

export default pdf;
