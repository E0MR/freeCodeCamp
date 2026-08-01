"""

Jbelmud Text

Given a string, return a jumbled version of that string where each word is transformed using the following constraints:
  The first and last letters of the words remain in place
  All letters between the first and last letter are sorted alphabetically.
  The input strings will contain no punctuation, and will be entirely lowercase.

Tests:
  jbelmu("hello world") should return "hello wlord".
  jbelmu("i love jumbled text") should return "i love jbelmud text".
  jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
  jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog".

"""


def jbelmu(text):
    words = text.split(" ")
    result_words = []

    for word in words:
        if len(word) == 1:
            result_words.append(word)
        else:
            middle = "".join(sorted(list(word[1:-1])))
            result_words.append(word[0] + middle + word[-1])

    return " ".join(result_words)


print(jbelmu("hello world"))  # "hello wlord"
print(jbelmu("i love jumbled text"))  # "i love jbelmud text"
print(
    jbelmu("freecodecamp is my favorite place to learn to code")
)  # "faccdeeemorp is my faiortve pacle to laern to cdoe"
print(
    jbelmu("the quick brown fox jumps over the lazy dog")
)  # "the qciuk borwn fox jmpus oevr the lazy dog"


"""

def jbelmu(text):
    return " ".join([word if len(word) == 1 else word[0] + "".join(sorted(word[1:-1])) + word[-1] for word in text.split(" ")])

"""
