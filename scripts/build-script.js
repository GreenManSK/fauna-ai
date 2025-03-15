import { readFile, writeFile } from "fs";

readFile("dist/index.html", "utf8", (err, htmlContent) => {
  if (err) {
    console.error("Failed to read index.html:", err);
    return;
  }

  const getTagContent = (tagName) => {
    const regex = new RegExp(
      `<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`,
      "i"
    );
    const match = htmlContent.match(regex);
    return match && match[1] ? match[1].trim() : undefined;
  };

  const styles = getTagContent("style");
  const scripts = getTagContent("script");
  // Create a new file that contains only styles and scripts
  const newContent = `// ==UserScript==
// @name         Fauna AI Avatar
// @namespace    http://tampermonkey.net/
// @version      ${new Date().toISOString()}
// @description  Add Fauna AI Avatar to ChatGPT
// @author       GreenMan
// @match        https://chatgpt.com/*
// @grant        none
// ==/UserScript==
(() => {const styleElement = document.createElement("style");
styleElement.type = "text/css";
styleElement.textContent = \`${styles}\`;
document.head.appendChild(styleElement)})();
${scripts}`;

  // Write the new content to a file
  const outputFilePath = "dist/script.js";
  writeFile(outputFilePath, newContent, (err) => {
    if (err) {
      console.error("Failed to write script.js:", err);
    } else {
      console.log("script.js created successfully!");
    }
  });
});
