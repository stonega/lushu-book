const { parse } = require("rss-to-json-text");
const fs = require("fs");
const fetch = require("cross-fetch");

const FEED_URL = "https://feeds.fireside.fm/lushu/rss";

async function main() {
  const response = await fetch(FEED_URL);
  const result = await response.text();
  const feed = await parse(result.toString());
  const items = feed.items;
  items.reverse().forEach((item, index) => {
    console.log(item.title);
    const fileName = `../episodes/${index + 1}.mdx`;
    if (!fs.existsSync(fileName)) {
      const template = `---
sidebar_position: ${index + 1}
audio_url: ${item.enclosures[0].url}
---

# ${item.title}

import { PodPlayer } from "../src/components/pod-player";

<PodPlayer src={frontMatter.audio_url} title={contentTitle} />`;
      fs.writeFileSync(fileName, template);
    }
  });
}

main().catch((error) => console.log(error));
