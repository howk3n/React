export function substringByWordCount(text, wordCount) {
  return text.split(" ").slice(0, wordCount).join(" ");
}
