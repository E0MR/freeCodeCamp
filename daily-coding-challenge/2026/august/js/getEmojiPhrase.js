/*

Emoji Translator

Given a string of emojis, return the phrase using the following table:
  Emoji	      Word
  👶	      "baby"
  🐱	      "cat"
  🐕	      "dog"
  🐟	      "fish"
  🥵	      "hot"
  🧊	      "ice"
  🪨	       "rock"
  🦈	      "shark"
  🍲	      "soup"
  ⭐	         "star"

Return the words separated by spaces.

Tests:
  getEmojiPhrase("🪨⭐") should return "rock star".
  getEmojiPhrase("🥵🐕") should return "hot dog".
  getEmojiPhrase("👶🦈") should return "baby shark".
  getEmojiPhrase("⭐🐟") should return "star fish".
  getEmojiPhrase("🧊🧊👶") should return "ice ice baby".
  getEmojiPhrase("🐱🐟🍲") should return "cat fish soup".

*/

function getEmojiPhrase(str) {
  let emojis = {
    "👶": "baby",
    "🐱": "cat",
    "🐕": "dog",
    "🐟": "fish",
    "🥵": "hot",
    "🧊": "ice",
    "🪨": "rock",
    "🦈": "shark",
    "🍲": "soup",
    "⭐": "star",
  };

  return Array.from(str)
    .map((emoji) => emojis[emoji] || emoji)
    .join(" ");
}

console.log(getEmojiPhrase("🪨⭐")); // "rock star"
console.log(getEmojiPhrase("🥵🐕")); // "hot dog"
console.log(getEmojiPhrase("👶🦈")); // "baby shark"
console.log(getEmojiPhrase("⭐🐟")); // "star fish"
console.log(getEmojiPhrase("🧊🧊👶")); // "ice ice baby"
console.log(getEmojiPhrase("🐱🐟🍲")); // "cat fish soup"

/*

  return Array.from(str)
    .map(emoji => emojis[emoji] || "")
    .filter(word => word !== "")
    .join(" ");

*/
