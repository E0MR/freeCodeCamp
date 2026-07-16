"""

Pig Latin Converter

Given a string, convert it to Pig Latin using the following rules:
  If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
  If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
  Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".

Tests:
  pig_latin("universe") should return "universeway".
  pig_latin("hello") should return "ellohay".
  pig_latin("hello universe") should return "ellohay universeway".
  pig_latin("Hello universe") should return "Ellohay universeway".
  pig_latin("Pig Latin is fun") should return "Igpay Atinlay isway unfay".
  pig_latin("The quick brown fox jumped over the lazy dog") should return "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".

"""


def pig_latin(str):
    vowels = ["a", "e", "i", "o", "u"]
    strings = str.split(" ")
    result = []
    for string in strings:
        isToUpperCase = string[0].upper() == string[0]
        if string[0] in vowels:
            result.append(string + "way")
        else:
            for char in string:
                if string[0] not in vowels:
                    string = (string + char)[1:]
            temp = (
                (string[0].upper() + (string + "ay")[1:].lower())
                if isToUpperCase
                else (string + "ay")
            )
            result.append(temp)

    return " ".join(result)


print(pig_latin("universe"))  # "universeway".
print(pig_latin("hello"))  # "ellohay".
print(pig_latin("hello universe"))  # "ellohay universeway".
print(pig_latin("Hello universe"))  # "Ellohay universeway".
print(pig_latin("Pig Latin is fun"))  # "Igpay Atinlay isway unfay".
print(
    pig_latin("The quick brown fox jumped over the lazy dog")
)  # "Ethay uickqay ownbray oxfay umpedjay overway ethay azylay ogday".
