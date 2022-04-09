const sgMail = require("@sendgrid/mail");

const sendEmail = async (options) => {
  sgMail.setApiKey(
    "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"
  );

  let FROM_NAME = "kris";
  let FROM_EMAIL = "bkkcreative18@gmail.com";

  const message = {
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: `<a href=${options.url}><button>Click Here</button></a>`,
  };
  await sgMail.send(message);
};
module.exports = sendEmail;
