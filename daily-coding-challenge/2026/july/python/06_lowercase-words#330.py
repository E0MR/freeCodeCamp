"""

lowercase words

Given a string, return only the words that are entirely lowercase, in their original order and with a space between each word.

Tests:
  get_lowercase_words("hello GOOD world") should return "hello world".
  get_lowercase_words("these are all lowercase") should return "these are all lowercase".
  get_lowercase_words("less is NoT more") should return "less is more".
  get_lowercase_words("DonT eat pizza every OTHER day") should return "eat pizza every day".
  get_lowercase_words("the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog") should return "the quick brown fox jumped over the lazy dog".

"""


def get_lowercase_words(s):
    words = s.split(" ")

    lowercase_words = [word for word in words if word.islower() or word == ""]

    return " ".join(lowercase_words)


print(get_lowercase_words("hello GOOD world"))  # "hello world".
print(get_lowercase_words("these are all lowercase"))  # "these are all lowercase".
print(get_lowercase_words("less is NoT more"))  # "less is more".
print(get_lowercase_words("DonT eat pizza every OTHER day"))  # "eat pizza every day".
print(
    get_lowercase_words(
        "the Super quick AND snEaky brown fox Leapt anD jumped over aNd AROUND the lazy SloW dog",
    ),
)  # "the quick brown fox jumped over the lazy dog".
