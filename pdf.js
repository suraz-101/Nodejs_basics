// index.js

const pdfLink = require("./pdfConverter/pdf");
const invoice = {
  shipping: {
    name: "Suraj Pandey",
    address: "Lakeside 8 Street Pokhara",
    city: "Pokhara",
  },
  items: [
    {
      item: "T-shirt",
      description: "100% cotten",
      quantity: 2,
      amount: 6000,
    },
    {
      item: "Shoes",
      description: "original Adidas",
      quantity: 1,
      amount: 12000,
    },
  ],
  subtotal: 18000,
  paid: 0,
  invoice_number: 1234,
};

pdfLink.createInvoice(invoice, "invoice.pdf");
