const visit = require("unist-util-visit");

const timestampPattern =
  /\d+\s+(\d{2}:\d{2}:\d{2}),\d{3} --> (\d{2}:\d{2}:\d{2},\d{3})/g;

function replaceTimestamps(node) {
  node.children.forEach((childNode) => {
    if (timestampPattern.test(childNode.value)) {
      node.children.unshift({
        type: "html",
        value: `<span class="timestamp">${RegExp.$1}</span>`,
      });
      childNode.value = childNode.value.replace(
        timestampPattern,
        ""
      );
    }
  });
}

module.exports = function srtTimestampPlugin() {
  return function transformer(tree) {
    visit(tree, "paragraph", replaceTimestamps);
  };
};
