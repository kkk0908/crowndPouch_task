const formParser = {};
const formidable = require("formidable");
const formOptions = {
  maxFileSize: 10 * 2000 * 2000,
};

/**
 * This method is used to parse form data.
 *
 *
 * @param {request} request
 * @param {Object} options
 *
 */

formParser.parseForm = (request, options = formOptions) => {
  const form = new formidable.IncomingForm();
  form.maxFileSize = options.maxFileSize;
  return new Promise((resolve, reject) => {
    form.parse(request, (err, fields, files) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      return resolve({ fields, files });
    });
  });
};
