// create-folders.js
const fs = require("fs");
const path = require("path");

const patientEducation = [
  "do-i-need-a-root-canal",
  "i-think-my-gums-are-receding",
  "improve-your-smile-for-senior-pictures",
  "options-for-replacing-missing-teeth",
  "oral-cancer-screening",
  "oral-hygiene-basics",
  "what-can-i-do-to-improve-my-smile",
  "what-do-i-do-if-i-damage-my-dentures",
  "what-should-i-do-if-i-chip-my-tooth",
  "when-is-a-tooth-extraction-necessary",
  "why-are-my-gums-bleeding",
  "will-i-need-a-bone-graft-for-dental-implants",
  "wisdom-teeth-extraction",
  "dental-anxiety",
  "do-i-have-sleep-apnea"
];
const baseDir = path.join(__dirname, "app/temple-tx");

patientEducation.forEach((service) => {
  const dirPath = path.join(baseDir, service);
  const filePath = path.join(dirPath, "page.jsx");

  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });

  const content = `export default function Page() {\n  return <div>${service}</div>;\n}`;
  fs.writeFileSync(filePath, content);
});

console.log("Folders and page.jsx files created.");
