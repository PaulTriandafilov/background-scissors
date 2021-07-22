import FormData from "form-data";
import formidable from "formidable";
var fs = require("fs");

//set bodyparser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const file = await new Promise((resolve, reject) => {
      const form = new formidable();

      form.parse(req, (err, fields, files) => {
        if (err) reject({ err });
        resolve(files.file);
      });
    });

    const formData = new FormData();
    formData.append("file", fs.createReadStream(file.path));

    const response = await fetch(
      "https://api.massless.io/v1/image/ml/remove-background",
      {
        method: "POST",
        headers: {
          "x-api-key": "RVu8i8KoBDRKRsYcbN3OusYXpt1Vzv1T5XCsaOl6CHx1",
        },
        body: formData,
      }
    );

    if (response.status === 200) {
      const blob = await response.blob();
      var abuffer = await blob.arrayBuffer();

      var buffer = new Buffer(abuffer.byteLength);
      var view = new Uint8Array(abuffer);
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }

      res.status(200).send(buffer);
    } else {
      res.status(400).json({});
    }
  } else {
    // Handle any other HTTP method
  }
}
