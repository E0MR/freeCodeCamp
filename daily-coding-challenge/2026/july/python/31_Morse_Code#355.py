"""

Morse Code

Given a Morse code string, return the decoded message using the following table:
  Code	    Letter	    Code	      Letter
  .-	      A	          -.	        N
  -...	    B	          ---	        O
  -.-.	    C	          .--.	      P
  -..	      D	          --.-	      Q
  .	        E	          .-.	        R
  ..-.	    F	          ...	        S
  --.	      G	          -	          T
  ....	    H	          ..-	        U
  ..	      I	          ...-	      V
  .---	    J	          .--	        W
  -.-	      K	          -..-	      X
  .-..	    L	          -.--	      Y
  --	      M	          --..	      Z
    Letters are separated by a single space
    Words are separated by three spaces

Tests:
  decode_morse("--..") should return "Z".
  decode_morse("... --- ...") should return "SOS".
  decode_morse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--.") should return "FREECODECAMP".
  decode_morse(".... . .-.. .-.. ---   .-- --- .-. .-.. -..") should return "HELLO WORLD".
  decode_morse("- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.") should return "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".

"""


def decode_morse(code):
    morse = {
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
    }

    code_arr = code.strip().split("   ")

    result = [
        "".join(morse.get(letter, "") for letter in phrase.split(" "))
        for phrase in code_arr
    ]

    return " ".join(result)


print(decode_morse("--.."))  # "Z".
print(decode_morse("... --- ..."))  # "SOS".
print(decode_morse("..-. .-. . . -.-. --- -.. . -.-. .- -- .--."))  # "FREECODECAMP".
print(decode_morse(".... . .-.. .-.. ---   .-- --- .-. .-.. -.."))  # "HELLO WORLD".
print(
    decode_morse(
        "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --.",
    ),
)  # "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG".
