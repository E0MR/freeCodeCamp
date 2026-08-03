"""

Emoji Translator

Given a string of emojis, return the phrase using the following table:
  Emoji	    Word
  👶	      "baby"
  🐱	      "cat"
  🐕	      "dog"
  🐟	      "fish"
  🥵	      "hot"
  🧊	      "ice"
  🪨	       "rock"
  🦈	      "shark"
  🍲	      "soup"
  ⭐	       "star"

Return the words separated by spaces.

Tests:
  get_emoji_phrase("🪨⭐") should return "rock star".
  get_emoji_phrase("🥵🐕") should return "hot dog".
  get_emoji_phrase("👶🦈") should return "baby shark".
  get_emoji_phrase("⭐🐟") should return "star fish".
  get_emoji_phrase("🧊🧊👶") should return "ice ice baby".
  get_emoji_phrase("🐱🐟🍲") should return "cat fish soup".

"""


def get_emoji_phrase(s):
    emojis = {
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
    }

    return " ".join([emojis.get(emoji, emoji) for emoji in s])


print(get_emoji_phrase("🪨⭐"))  # "rock star"
print(get_emoji_phrase("🥵🐕"))  # "hot dog"
print(get_emoji_phrase("👶🦈"))  # "baby shark"
print(get_emoji_phrase("⭐🐟"))  # "star fish"
print(get_emoji_phrase("🧊🧊👶"))  # "ice ice baby"
print(get_emoji_phrase("🐱🐟🍲"))  # "cat fish soup"
