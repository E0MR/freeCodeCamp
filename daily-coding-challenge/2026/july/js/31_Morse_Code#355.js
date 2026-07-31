/*

Morse Code

Given a Morse code string, return the decoded message using the following table:
  Code	    Letter	    Code	    Letter
  .-	    A	        -.	        N
  -...	    B	        ---	        O
  -.-.	    C	        .--.	    P
  -..	    D	        --.-	    Q
  .	        E	        .-.	        R
  ..-.	    F	        ...	        S
  --.	    G	        -	        T
  ....	    H	        ..-	        U
  ..	    I	        ...-	    V
  .---	    J	        .--	        W
  -.-	    K	        -..-	    X
  .-..	    L	        -.--	    Y
  --	    M	        --..	    Z
    Letters are separated by a single space
    Words are separated by three spaces

Tests:
  decodeMorse("--..") should return "Z".
  decodeMorse("... --- ...") should return "SOS".
  decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.") should return "FREECODECAMP".
  decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..") should return "HELLO WORLD".
  decodeMorse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.") should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".

*/

function decodeMorse(code) {
  let morse = {
    ".-": "A",
    "-.": "N",
    "-...": "B",
    "---": "O",
    "-.-.": "C",
    ".--.": "P",
    "-..": "D",
    "--.-": "Q",
    ".": "E",
    ".-.": "R",
    "..-.": "F",
    "...": "S",
    "--.": "G",
    "-": "T",
    "....": "H",
    "..-": "U",
    "..": "I",
    "...-": "V",
    ".---": "J",
    ".--": "W",
    "-.-": "K",
    "-..-": "X",
    ".-..": "L",
    "-.--": "Y",
    "--": "M",
    "--..": "Z",
  };

  let codeArr = code.trim().split("   ");

  let result = codeArr.map((phrase) =>
    phrase
      .split(" ")
      .map((letter) => morse[letter])
      .join(""),
  );

  return result.join(" ");
}

console.log(decodeMorse("--..")); // "Z".
console.log(decodeMorse("... --- ...")); // "SOS".
console.log(decodeMorse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.")); // "FREECODECAMP".
console.log(decodeMorse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")); // "HELLO WORLD".
console.log(
  decodeMorse(
    "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.",
  ),
); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".
