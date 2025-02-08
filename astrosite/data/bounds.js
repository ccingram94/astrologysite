const bounds = {
  Aries: {
    description: "Aries is the first sign of the zodiac, known for its initiative and pioneering spirit. Each bound of Aries highlights different aspects of its dynamic and assertive nature.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter's influence bestows Aries with a natural flair for leadership and exploration. Individuals in this bound are confident and assertive in their pursuits, capable of inspiring others through their optimistic outlook and adventurous spirit."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus lends a sense of charm and harmony, encouraging Aries to value beauty and relationships. This influence allows them to balance their dynamic energy with grace, fostering harmonious interactions."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn introduces discipline and responsibility, helping Aries focus their boldness into achievable goals. This bound encourages patience and perseverance, essential for accomplishing long-term objectives."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury adds a touch of curiosity and adaptability, enhancing Aries' ability to learn and convey ideas effectively. This influence promotes quick thinking and versatility in intellectual pursuits."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars emphasizes Aries' inherent drive and courage, fostering a desire to take risks and push boundaries. This bound energizes their pursuits, motivating them to engage actively in achieving their ambitious aims."
      }
    ]
  },
  Taurus: {
    description: "Taurus is known for its steadfastness and love of comfort. Each bound highlights different aspects of Taurus' practical and reliable nature.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Venus",
        traits: ["Practical", "Reliable", "Sensuous"],
        description: "Venus reinforces Taurus' connection to the physical world, enhancing their appreciation for comfort and security. This influence promotes stability and loyalty in relationships and pursuits."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Saturn",
        traits: ["Patient", "Persistent", "Responsible"],
        description: "Saturn introduces patience and persistence, encouraging Taurus to put in the necessary effort to achieve their goals. This bound instills a strong sense of duty and discipline."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Mercury",
        traits: ["Versatile", "Analytical", "Communicative"],
        description: "Mercury enhances Taurus' analytical abilities, promoting versatility in their problem-solving approach. This influence supports clear communication and practical thinking."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Mars",
        traits: ["Confident", "Passionate", "Determined"],
        description: "Mars infuses Taurus with confidence and determination, motivating them to take decisive action. This energy supports their ability to achieve tangible results through focused efforts."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Jupiter",
        traits: ["Optimistic", "Enthusiastic", "Expansive"],
        description: "Jupiter brings an optimistic and expansive outlook, encouraging Taurus to embrace opportunities for growth. This influence supports confidence and a willingness to take calculated risks."
      }
    ]
  },
  Gemini: {
    description: "Gemini is characterized by its quick wit and adaptability. Each bound brings a different dimension to Gemini's communicative and curious nature.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn adds structure to Gemini's dynamic nature, enhancing their ability to focus and achieve goals. This bound encourages disciplined thinking and perseverance."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury strengthens Gemini's natural communicative abilities, fostering curiosity and adaptability. This influence supports their skill in conveying ideas and learning new concepts."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars encourages Gemini's boldness and willingness to explore new territories. This bound empowers them to take actions that push intellectual and social boundaries."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter imbues Gemini with an expansive perspective, promoting optimism and a love for exploration. This influence encourages them to pursue broadening experiences and knowledge."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus adds a layer of charm and affection to Gemini's interactions, enhancing their relationship-building skills. This influence supports harmonious and engaging connections."
      }
    ]
  },
  Cancer: {
    description: "Cancer is known for its nurturing and intuitive qualities. Each bound reveals a different aspect of Cancer's emotional depth and empathetic nature.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars energizes Cancer's nurturing instincts with a desire to take bold actions. This influence encourages protective and dynamic approaches to caring for loved ones."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter enhances Cancer's natural empathy, promoting optimism and emotional growth. This bound supports their ability to nurture meaningful and expansive relationships."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus enriches Cancer's sense of harmony and emotional connection, fostering warmth and affection. This influence supports their ability to create nurturing and loving environments."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn provides Cancer with discipline and structure, helping them turn intuitive insights into practical outcomes. This bound promotes patience and perseverance in caring roles."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury enhances Cancer's communicative abilities, supporting their intuitive nature. This influence encourages them to articulate emotions and intuitions with clarity and empathy."
      }
    ]
  },
  Leo: {
    description: "Leo is characterized by its warmth and exuberance. Each bound adds a different dimension to Leo's inherent leadership and creativity.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter expands Leo's natural charisma, promoting leadership and exuberant self-expression. This influence encourages them to inspire others with their optimism and visionary outlook."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus infuses Leo's creativity with charm and grace, enhancing their ability to attract and cultivate beauty. This bound supports harmonious interactions and aesthetic pursuits."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn introduces discipline to Leo's dynamic nature, fostering responsible leadership and focused creativity. This influence supports their ability to work towards goals with resilience."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury enhances Leo's self-expression and communication skills, encouraging adaptability in creative projects. This influence supports their ability to convey ideas with charm and effectiveness."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars energizes Leo's inherent drive and ambition, promoting action-oriented leadership. This bound enhances their ability to take decisive steps toward achieving creative and ambitious aims."
      }
    ]
  },
  Virgo: {
    description: "Virgo is known for its attention to detail and analytical abilities. Each bound highlights different facets of Virgo's meticulous nature and practical approach.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Venus",
        traits: ["Practical", "Reliable", "Sensuous"],
        description: "Venus emphasizes Virgo's appreciation for detail and harmony in practical matters. This influence supports their ability to create balanced and aesthetically pleasing environments."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Saturn",
        traits: ["Patient", "Persistent", "Responsible"],
        description: "Saturn introduces patience and persistence, encouraging Virgo to achieve their meticulous goals through disciplined effort. This bound promotes structured and responsible problem-solving."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Mercury",
        traits: ["Versatile", "Analytical", "Communicative"],
        description: "Mercury enhances Virgo's natural communication and analytical skills, promoting efficiency and adaptability. This influence supports their ability to convey clear and precise ideas."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Mars",
        traits: ["Confident", "Passionate", "Determined"],
        description: "Mars provides Virgo with confidence and determination, motivating them to take action on analytical insights. This bound encourages them to pursue goals with focus and conviction."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Jupiter",
        traits: ["Optimistic", "Enthusiastic", "Expansive"],
        description: "Jupiter offers Virgo an optimistic outlook, promoting open-mindedness and expansive thinking. This influence supports their pursuit of growth and intellectual exploration."
      }
    ]
  },
  Libra: {
    description: "Libra is characterized by its sense of balance and aesthetic appreciation. Each bound brings a unique perspective to Libra’s diplomatic and harmonious nature.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn provides Libra with the structure needed to achieve balance and fairness in relationships. This influence promotes disciplined approaches to maintaining harmony."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury enhances Libra's ability to connect and communicate effectively, fostering curiosity and adaptability. This influence supports their efforts to bridge differences with diplomacy."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars energizes Libra's pursuit of justice and equality, encouraging decisive actions to foster harmony. This bound empowers them to engage passionately with social causes."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter broadens Libra's perspective, promoting optimism and a love for cultural exploration. This influence supports their pursuit of meaningful and expansive relationships."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus amplifies Libra's inherent charm and appreciation for beauty, enhancing their affinity for harmonious connections. This influence supports their ability to cultivate aesthetic and relational balance."
      }
    ]
  },
  Scorpio: {
    description: "Scorpio is known for its intensity and transformative qualities. Each bound provides a unique lens on Scorpio’s deep emotional and dynamic landscape.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars enhances Scorpio's natural intensity, fostering a dynamic and passionate approach to transformation. This influence supports their ability to push boundaries and engage powerfully."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter broadens Scorpio's vision, encouraging growth through emotional exploration. This bound enhances their capacity to delve into transformative and expansive experiences."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus enriches Scorpio's emotional depth with charm and affection, fostering strong relational bonds. This influence supports their ability to connect deeply and nurture transformation."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn introduces structure to Scorpio's transformative pursuits, promoting disciplined focus. This bound encourages them to achieve deep emotional and personal growth through perseverance."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury fosters Scorpio's ability to articulate complex emotions and insights, enhancing adaptability. This influence supports their pursuit of transformative knowledge and communication."
      }
    ]
  },
  Sagittarius: {
    description: "Sagittarius is characterized by its adventurous and philosophical nature. Each bound highlights distinct elements of Sagittarius’ exploration and wisdom.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter enhances Sagittarius' natural optimism and love for exploration. This influence encourages them to pursue expansive experiences and philosophical understanding."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus adds charm and a love for aesthetics to Sagittarius' exploratory spirit. This bound supports harmonious interactions and the cultivation of beauty in diverse experiences."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn introduces discipline and structure to Sagittarius' adventures, fostering long-term accomplishments. This influence supports responsible pursuits of wisdom and achievement."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury enhances Sagittarius' communicative and explorative nature, promoting adaptability in intellectual pursuits. This bound supports their ability to convey ideas effectively."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars energizes Sagittarius' quest for knowledge, motivating them to embrace bold and dynamic pursuits. This influence supports their fearless approach to exploration and adventure."
      }
    ]
  },
  Capricorn: {
    description: "Capricorn is known for its ambition and disciplined nature. Each bound enhances different aspects of Capricorn’s practical and grounded approach.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Venus",
        traits: ["Practical", "Reliable", "Sensuous"],
        description: "Venus emphasizes Capricorn's appreciation for practical beauty and stability. This influence supports harmonious and balanced approaches to achieving their goals."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Saturn",
        traits: ["Patient", "Persistent", "Responsible"],
        description: "Saturn strengthens Capricorn's disciplined nature, promoting responsible and long-term accomplishments. This bound encourages them to pursue their ambitions with patience and perseverance."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Mercury",
        traits: ["Versatile", "Analytical", "Communicative"],
        description: "Mercury enhances Capricorn's analytical abilities, fostering efficient and versatile problem-solving. This influence supports effective communication and pragmatic thinking."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Mars",
        traits: ["Confident", "Passionate", "Determined"],
        description: "Mars provides Capricorn with confidence and passion, motivating them to take decisive action. This bound supports their ability to achieve tangible results through focused efforts."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Jupiter",
        traits: ["Optimistic", "Enthusiastic", "Expansive"],
        description: "Jupiter expands Capricorn's perspective, supporting a willingness for growth and broadening their horizons. This influence encourages them to embrace opportunities with optimism."
      }
    ]
  },
  Aquarius: {
    description: "Aquarius is characterized by its unique and innovative nature. Each bound highlights distinctive qualities that define Aquarius’ progressive spirit.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn provides Aquarius with structure and discipline, enhancing their focus on innovative and progressive goals. This influence supports responsible approaches to their visionary pursuits."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury fosters Aquarius' intellectual curiosity and communicative skills, promoting adaptability in social and intellectual environments. This bound supports their ability to share innovative ideas effectively."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars energizes Aquarius' unique spirit, encouraging bold and dynamic approaches to new ideas. This influence supports their willingness to take risks and explore uncharted territories."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter expands Aquarius' perspective, promoting optimism and a visionary outlook. This bound enhances their openness to diverse experiences and innovative pursuits."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus enriches Aquarius' sociability and appreciation for beauty, fostering harmonious and aesthetic connections. This influence supports their ability to create balanced and pleasing environments."
      }
    ]
  },
  Pisces: {
    description: "Pisces is known for its empathy and intuitive qualities. Each bound magnifies unique aspects of Pisces’ compassionate and mystical nature.",
    bounds: [
      {
        name: "First Bound",
        degreeRange: "0°-8°",
        ruler: "Mars",
        traits: ["Adventurous", "Bold", "Action-oriented"],
        description: "Mars energizes Pisces' mystical pursuits, encouraging bold exploration and dynamic introspection. This influence supports their ability to engage passionately with spiritual and emotional realms."
      },
      {
        name: "Second Bound",
        degreeRange: "8°-15°",
        ruler: "Jupiter",
        traits: ["Expansive", "Optimistic", "Enthusiastic"],
        description: "Jupiter enhances Pisces' spiritual connection and philosophical exploration. This bound encourages them to embrace expansive and optimistic approaches to their intuitive insights."
      },
      {
        name: "Third Bound",
        degreeRange: "15°-21°",
        ruler: "Venus",
        traits: ["Sensual", "Charming", "Affectionate"],
        description: "Venus deepens Pisces' emotional and relational connections, fostering warmth and charm in their interactions. This influence supports their ability to create harmonious and nurturing environments."
      },
      {
        name: "Fourth Bound",
        degreeRange: "21°-26°",
        ruler: "Saturn",
        traits: ["Disciplined", "Responsible", "Ambitious"],
        description: "Saturn provides structure to Pisces' spiritual endeavors, promoting disciplined and responsible approaches. This bound encourages them to achieve mystical insights through perseverance and focus."
      },
      {
        name: "Fifth Bound",
        degreeRange: "26°-30°",
        ruler: "Mercury",
        traits: ["Communicative", "Adaptable", "Curious"],
        description: "Mercury enhances Pisces' ability to articulate and share intuitive knowledge, promoting curiosity and adaptability. This influence supports their pursuits of communication and intellectual exploration."
      }
    ]
  }
};

export default bounds;
