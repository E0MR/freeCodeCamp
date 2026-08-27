"""

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

"""


def decode(message, shift):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    result = []

    for char in message:
        lower_char = char.lower()
        index = alphabet.find(lower_char)

        if index != -1:
            new_index = (index - shift + 26) % 26
            new_char = alphabet[new_index]
            result.append(new_char.upper() if char.isupper() else new_char)
        else:
            result.append(char)

    return "".join(result)


print(decode("Xlmw mw e wigvix qiwweki.", 4))  # "This is a secret message."
print(decode("Byffi Qilfx!", 20))  # "Hello World!"
print(decode("Zqd xnt njzx?", -1))  # "Are you okay?"
print(decode("oannLxmnLjvy", 9))  # "freeCodeCamp"
