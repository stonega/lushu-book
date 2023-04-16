const visit = require("unist-util-visit");

const timestampPattern =
  /\d+\s+(\d{2}:\d{2}:\d{2}),\d{3} --> (\d{2}:\d{2}:\d{2},\d{3})/g;

function replaceTimestamps(node) {
  node.children.forEach((childNode) => {
    if (timestampPattern.test(childNode.value)) {
      node.children.unshift({
        type: "html",
        value: `<span style="padding: .5rem;  color: white; background: #337ab7; border-radius: 4px; margin-right: 1rem;">${RegExp.$1}</span>`,
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
