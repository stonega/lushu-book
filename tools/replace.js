const replacements = {
  陆书: "路书",
  '路书88.com-member': 'luhsu88.com/member'
};

const replace = require("replace-in-file");
const options = Object.entries(replacements).map(([from, to]) => ({
  files: "../episodes/*.mdx",
  from,
  to,
}));

options.forEach((option) => {
  replace(option)
    .then((results) => {
      console.log("Replacement results:", results);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
});
