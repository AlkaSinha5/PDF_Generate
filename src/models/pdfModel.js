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
    consigner:{type: String, required: true},
    consignerGSTIN: { type: String , required: true},
    invoiceNo: { type: String,required: true },
    royalty: { type: String },
    venue: { type: String },
    paymentMethod: { type: String },
    detail: [{
        description: { type: String, required: true },
        noOfArticles: { type: Number },
        weight: { type: Number },
        freightRate: { type: Number },
        freightAmount: { type: Number },
    }],
});

const pdf = mongoose.model('PDF', pdfSchema);

export default pdf;