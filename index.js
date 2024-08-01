import fs from "fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
  .prompt([
    {
      name: "url",
      message: "Enter a Text:",
      type: "input",
    },
  ])
  .then((msg) => {
    console.log(msg.url);
    fs.appendFile("url.txt", msg.url + "\n", (err) => {
      /* after successfully generating the qr code we are writing all the url name in the file  */
      if (err) throw err;
      console.log("Written successfully");
    });
    //how to get qr image as jpeg?
    let qr_png = qr.image(msg.url, { type: "svg" });
    qr_png.pipe(fs.createWriteStream("QRcode.svg"));
  });
