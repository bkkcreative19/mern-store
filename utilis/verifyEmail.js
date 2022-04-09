const sgMail = require("@sendgrid/mail");

const verifyEmail = async (options) => {
  sgMail.setApiKey(
    "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"
  );

  let FROM_NAME = "kris";
  let FROM_EMAIL = "bkkcreative18@gmail.com";

  const message = {
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html:
      "<div style =" +
      "width:100%; height:100%;  " +
      "><h1 style=" +
      "font-weight:500>Hey, " +
      options.name +
      "<br>Welcome to ShopPonit</h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : " +
      options.code +
      " </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>Sajid Ansari(Owner)</strong></p>",
  };

  const msg = {
    to: options.email,
    from: "bkkcreative17@gmail.com", // Use the email address or domain you verified above
    subject: options.subject,
    text: "and easy to do anywhere, even with Node.js",
    html:
      "<div style =" +
      "width:100%; height:100%;  " +
      "><h1 style=" +
      "font-weight:500>Hey, " +
      options.name +
      "<br>Welcome to ShopPonit</h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : " +
      options.code +
      " </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>Sajid Ansari(Owner)</strong></p>",
  };

  await sgMail.send(msg);
};
module.exports = verifyEmail;
