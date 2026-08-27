/*

Message Decoder

Given a secret message string, and an integer representing the number of letters that were used to shift the message to encode it, return the decoded string.
  A positive number means the message was shifted forward in the alphabet.
  A negative number means the message was shifted backward in the alphabet.
  Case matters, decoded characters should retain the case of their encoded counterparts.
  Non-alphabetical characters should not get decoded.

Tests:
  decode("Xlmw mw e wigvix qiwweki.", 4) should return "This is a secret message."
  decode("Byffi Qilfx!", 20) should return "Hello World!"
  decode("Zqd xnt njzx?", -1) should return "Are you okay?"
  decode("oannLxmnLjvy", 9) should return "freeCodeCamp"

*/

function decode(message, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  return message
    .split("")
    .map((char) => {
      let index = alphabet.indexOf(char.toLowerCase());
      let newIndex = (index - shift + 26) % 26;

      if (char.toLowerCase() !== char) {
        console.log(char);
        return alphabet[newIndex].toUpperCase();
      } else if (alphabet.indexOf(char) !== -1) return alphabet[newIndex];

      return char;
    })
    .join("");
}

console.log(decode("Xlmw mw e wigvix qiwweki.", 4)); // "This is a secret message."
console.log(decode("Byffi Qilfx!", 20)); // "Hello World!"
console.log(decode("Zqd xnt njzx?", -1)); // "Are you okay?"
console.log(decode("oannLxmnLjvy", 9)); // "freeCodeCamp"
