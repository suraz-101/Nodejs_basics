const pdfkit = require("pdfkit"); //importing pdfkit package
const fs = require("fs"); // importing file system package

const createPdf = (text, textFont, imagePath) => {
  const pdfDocument = new pdfkit(); // creating an instance of pdfkit
  pdfDocument.pipe(fs.createWriteStream("document.pdf")); // saving the pdf file as document.pdf using fs createWriteStream method

  // embeding the font, setting font size and rendering some text to the doucemnt
  pdfDocument
    .fontSize(textFont)
    .text(text, 100, 100)
    .fillColor("blue")
    .text("Click Here", {
      link: "https://en.wikipedia.org/wiki/Pokhara",
      underline: true,
    });
  //   pdfDocument.text("click here.").link("https://ntb.gov.np/pokhara");

  //   adding image to the pdf document
  pdfDocument.image(imagePath, {
    fit: [250, 300],
    align: "center", // aligning the image at the center
    valign: "center",
  });

  // we can also create another page using following codes
  pdfDocument
    .addPage()
    .fontSize(50)
    .text("This is the another page of the pdf ", 100, 100);

  //finalising the pdf file
  pdfDocument.end();
};

module.exports = { createPdf }; // exporting the method which can be accessed vai other files

//Generating invoice code
// const createInvoice = (invoice, filename) => {
//   const pdf = new pdfkit();
//   pdf.pipe(fs.createWriteStream(filename));
//   const date = new Date();

//   const shipping = invoice.shipping;
//   const generateUsersInformation = () => {
//     pdf
//       .text(`Invoice Number: ${invoice.invoice_number}`, 50, 200)
//       .text(
//         `Invoice Date: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
//         50,
//         215
//       )
//       .text(`Balance Due: ${invoice.subtotal - invoice.paid}`, 50, 130)
//       .text(shipping.name, 300, 200)
//       .text(shipping.address, 300, 215)
//       .text(
//         `${shipping.city}, ${shipping.state}, ${shipping.country}`,
//         300,
//         130
//       );
//   };
//   function generateTableRow(pdf, y, c1, c2, c3, c4, c5) {
//     pdf
//       .fontSize(10)
//       .text(c1, 50, y)
//       .text(c2, 150, y)
//       .text(c3, 280, y, { width: 90, align: "right" })
//       .text(c4, 370, y, { width: 90, align: "right" })
//       .text(c5, 0, y, { align: "right" });
//   }
//   const generateProductInformation = () => {
//     let i,
//       invoiceTableTop = 330;

//     for (i = 0; i < invoice.items.length; i++) {
//       const item = invoice.items[i];
//       const position = invoiceTableTop + (i + 1) * 30;
//       generateTableRow(
//         pdf,
//         position,
//         item.item,
//         item.description,
//         item.amount / item.quantity,
//         item.quantity,
//         item.amount
//       );
//     }
//   };

//   generateUsersInformation();
//   generateProductInformation();
//   pdf.end();
//   //   return creater;
//   const res = "invoice generated successfully";
//   console.log(res);
// };

// module.exports = { createInvoice };
