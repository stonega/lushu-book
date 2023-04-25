const replacements = [
  {
    from: "陆书",
    to: "路书",
  },
  {
    from: "路书88.com-member",
    to: "luhsu88.com/member",
  },
  {
    from: '曲霞',
    to: '瞿侠'
  }
];

const replace = require("replace-in-file");
const options = replacements.map(({from, to}) => ({
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
