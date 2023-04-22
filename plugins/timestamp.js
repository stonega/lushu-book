const visit = require("unist-util-visit");

const timestampPattern =
  /\d+\s+(\d{2}:\d{2}:\d{2}),\d{3} --> (\d{2}:\d{2}:\d{2},\d{3})/g;

function seconds(time) {
  const [hour, min, sec] =  time.split(':')
  return parseInt(hour) * 3600 + parseInt(min)* 60 + parseInt(sec)
}
function replaceTimestamps(node) {
  node.children.forEach((childNode) => {
    if (timestampPattern.test(childNode.value)) {
       const value = childNode.value.replace(
        timestampPattern,
        ""
      );
      node.children.unshift({
        type: "html",
        value: `<button class="timestamp"  data=${seconds(RegExp.$1)}>${RegExp.$1}</button>`,
      });
      node.children.push({
        type: "html",
        value: `<p class="text">${value}</p>`,
      })
      childNode.value = "";
      node.type = 'heading'
      node.depth = '4'
    }
  });
}

module.exports = function srtTimestampPlugin() {
  return function transformer(tree) {
    visit(tree, "paragraph", replaceTimestamps);
  };
};
