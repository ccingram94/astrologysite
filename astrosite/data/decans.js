const decans = {
  Aries: {
    description: "Aries is the first sign of the zodiac, known for its bold and dynamic qualities. Each decan of Aries offers a unique perspective on the sign's inherent energy.",
    decans: [
      {
        name: "First Decan",
        dateRange: "March 21 - March 30",
        ruler: "Mars",
        traits: ["Courageous", "Energetic", "Impulsive"],
        description: "This decan amplifies Aries' natural boldness and enthusiasm, making individuals born under it dynamic leaders with a pioneering spirit...",
        agrippa: "A black man, standing and clothed in a white garment, girdled about, of a great body, with reddish eyes, and great strength, and like one that is angry; signifying boldness, fortitude, loftiness, and shamelessness."
      },
      {
        name: "Second Decan",
        dateRange: "March 31 - April 9",
        ruler: "Sun",
        traits: ["Confident", "Charismatic", "Creative"],
        description: "Ruled by the Sun, this decan imbues Aries with charisma and a strong desire for self-expression...",
        agrippa: "A form of a woman, outwardly clothed with a red garment and under it a white, spreading abroad over her feet; signifying nobleness, height of a Kingdom, and greatness of dominion."
      },
      {
        name: "Third Decan",
        dateRange: "April 10 - April 19",
        ruler: "Venus",
        traits: ["Optimistic", "Adventurous", "Generous"],
        description: "Jupiter's influence brings optimism and a love for adventure...",
        agrippa: "A white man, pale, with reddish hair, clothed with a red garment, carrying a golden bracelet, and holding forth a wooden staff; signifying wit, meekness, joy, and beauty."
      }
    ]
  },
  Taurus: {
    description: "Taurus is known for its earthy and sensual qualities. Each decan highlights different aspects of Taurus' steady and practical nature.",
    decans: [
      {
        name: "First Decan",
        dateRange: "April 20 - April 29",
        ruler: "Mercury",
        traits: ["Stable", "Sensual", "Loyal"],
        description: "Dominated by Mercury, this decan emphasizes Taurus' practical communication...",
        agrippa: "A naked man, an Archer, Harvester, or Husbandman, sowing, ploughing, building, dividing the earth; signifying labor and the practical division of resources."
      },
      {
        name: "Second Decan",
        dateRange: "April 30 - May 9",
        ruler: "Moon",
        traits: ["Practical", "Analytical", "Dependable"],
        description: "The Moon brings emotional depth and intuition to Taurus...",
        agrippa: "A naked man, holding in his hand a key; signifying power, nobility, and dominion over people."
      },
      {
        name: "Third Decan",
        dateRange: "May 10 - May 20",
        ruler: "Saturn",
        traits: ["Determined", "Patient", "Disciplined"],
        description: "Saturn's influence instills discipline and patience...",
        agrippa: "A man with a Serpent and a dart in his hand; signifying necessity, profit, misery, and slavery."
      }
    ]
  },
  Gemini: {
    description: "Gemini is characterized by its quick wit and adaptability...",
    decans: [
      {
        name: "First Decan",
        dateRange: "May 21 - May 31",
        ruler: "Jupiter",
        traits: ["Curious", "Versatile", "Communicative"],
        description: "Ruled by Jupiter, this decan brings expansiveness and a broad perspective...",
        agrippa: "A man in whose hands is a rod, serving another; granting wisdom and knowledge of numbers and arts without profit."
      },
      {
        name: "Second Decan",
        dateRange: "June 1 - June 10",
        ruler: "Mars",
        traits: ["Charming", "Artistic", "Diplomatic"],
        description: "Mars's influence adds a dynamic and energetic edge...",
        agrippa: "A man with a Pipe, and another bowed down digging the earth; signifying agility, labors, and painful searchings."
      },
      {
        name: "Third Decan",
        dateRange: "June 11 - June 20",
        ruler: "Sun",
        traits: ["Innovative", "Eclectic", "Unpredictable"],
        description: "The Sun brings focus on self-expression and creativity...",
        agrippa: "A man seeking for Arms, and a fool holding in his right hand a Bird, and in his left a pipe; signifying boldness, jests, forgetfulness, and unprofitable words."
      }
    ]
  },
  Cancer: {
    description: "Cancer is known for its nurturing and intuitive qualities...",
    decans: [
      {
        name: "First Decan",
        dateRange: "June 21 - July 1",
        ruler: "Venus",
        traits: ["Nurturing", "Sensitive", "Intuitive"],
        description: "With Venus as its ruler, this decan highlights Cancer's love for beauty...",
        agrippa: "The form of a young Virgin adorned with fine clothes and a Crown on her head; signifying sharp senses, subtilty of wit, and love of men."
      },
      {
        name: "Second Decan",
        dateRange: "July 2 - July 11",
        ruler: "Mercury",
        traits: ["Intense", "Transformative", "Resilient"],
        description: "Mercury's influence supports Cancer's ability to communicate deeply...",
        agrippa: "A man clothed in comely apparel, or a man and woman sitting at a table and playing; signifying riches, mirth, and gladness."
      },
      {
        name: "Third Decan",
        dateRange: "July 12 - July 22",
        ruler: "Moon",
        traits: ["Dreamy", "Imaginative", "Compassionate"],
        description: "The Moon deepens emotional connections...",
        agrippa: "A man a Hunter with his lance and horn, bringing out dogs to hunt; signifying contention, pursuit, and brawling."
      }
    ]
  },
  Leo: {
    description: "Leo is characterized by its warmth and exuberance. Each decan adds a different dimension to Leo's inherent leadership and creativity.",
    decans: [
      {
        name: "First Decan",
        dateRange: "July 23 - August 1",
        ruler: "Saturn",
        traits: ["Charismatic", "Generous", "Creative"],
        description: "Ruled by Saturn, this decan emphasizes discipline and structure...",
        agrippa: "A man riding on a Lion; signifying boldness, violence, cruelty, wickedness, lust, and sustained labors."
      },
      {
        name: "Second Decan",
        dateRange: "August 2 - August 11",
        ruler: "Jupiter",
        traits: ["Optimistic", "Adventurous", "Visionary"],
        description: "Jupiter's influence encourages exploration and broad vision...",
        agrippa: "An image with hands uplifted, and a man wearing a crown with an angry appearance, holding a drawn sword in his right hand and a buckler in his left; signifying hidden contentions, unknown victories, and quarrels."
      },
      {
        name: "Third Decan",
        dateRange: "August 12 - August 22",
        ruler: "Mars",
        traits: ["Dynamic", "Ambitious", "Courageous"],
        description: "Mars energizes this decan, imparting a sense of ambition and courage...",
        agrippa: "A young man with a whip, and a sad-looking man of ill aspect; signifying love, society, and the loss of rights to avoid strife."
      }
    ]
  },
  Virgo: {
    description: "Virgo is known for its attention to detail and analytical abilities...",
    decans: [
      {
        name: "First Decan",
        dateRange: "August 23 - September 1",
        ruler: "Sun",
        traits: ["Analytical", "Detail-oriented", "Efficient"],
        description: "Ruled by the Sun, this decan highlights Virgo's meticulousness...",
        agrippa: "A good maiden and a man casting seeds; signifying wealth, ordering diet, plowing, sowing, and peopling."
      },
      {
        name: "Second Decan",
        dateRange: "September 2 - September 11",
        ruler: "Venus",
        traits: ["Disciplined", "Practical", "Responsible"],
        description: "Venus adds a touch of harmony and beauty to this decan...",
        agrippa: "A black man clothed with a skin, and a man with bushy hair holding a bag; signifying gain, wealth, and covetousness."
      },
      {
        name: "Third Decan",
        dateRange: "September 12 - September 22",
        ruler: "Mercury",
        traits: ["Articulate", "Harmonious", "Meticulous"],
        description: "As Mercury's domain, this decan strengthens Virgo's articulation...",
        agrippa: "A white woman, deaf, or an old man leaning on a staff; signifying weakness, infirmity, loss of members, and depopulation."
      }
    ]
  },
  Libra: {
    description: "Libra is characterized by its sense of balance and aesthetic appreciation...",
    decans: [
      {
        name: "First Decan",
        dateRange: "September 23 - October 2",
        ruler: "Moon",
        traits: ["Charming", "Harmonious", "Diplomatic"],
        description: "The Moon gives this decan an emotional and nurturing depth...",
        agrippa: "An angry man holding a pipe, and a man reading a book; signifying the justification and support of the weak or miserable against the powerful and wicked."
      },
      {
        name: "Second Decan",
        dateRange: "October 3 - October 12",
        ruler: "Saturn",
        traits: ["Innovative", "Independent", "Equitable"],
        description: "Saturn enhances Libra's longing for equity and justice...",
        agrippa: "Two furious and wrathful men, and a man in comely garments sitting in a chair; signifying indignation against evil, calm security, and abundance."
      },
      {
        name: "Third Decan",
        dateRange: "October 13 - October 22",
        ruler: "Jupiter",
        traits: ["Communicative", "Intellectual", "Adaptable"],
        description: "Jupiter broadens Libra's understanding and appreciation...",
        agrippa: "A violent man holding a bow, a naked man before him, and another man holding bread in one hand and a cup of wine in the other; signifying wicked lusts, sports, and gluttony."
      }
    ]
  },
  Scorpio: {
    description: "Scorpio is known for its intensity and transformative qualities...",
    decans: [
      {
        name: "First Decan",
        dateRange: "October 23 - November 1",
        ruler: "Mars",
        traits: ["Intense", "Transformative", "Ambitious"],
        description: "Ruled by Mars, this decan embodies Scorpio's passionate drive...",
        agrippa: "A woman of good face and habit, and two men striking her; signifying beauty, strife, treachery, and loss."
      },
      {
        name: "Second Decan",
        dateRange: "November 2 - November 11",
        ruler: "Sun",
        traits: ["Mystical", "Compassionate", "Imaginative"],
        description: "Sun's influence brings vibrancy and a profound sense of self-expression...",
        agrippa: "A naked man, a naked woman, and a man sitting on the ground before two dogs fighting; signifying deceit, treachery, and mischief."
      },
      {
        name: "Third Decan",
        dateRange: "November 12 - November 21",
        ruler: "Venus",
        traits: ["Intuitive", "Emotional", "Sensitive"],
        description: "Venus imbues this decan with a passion for connectivity...",
        agrippa: "A man bowed upon his knees, and a woman striking him with a staff; signifying drunkenness, fornication, wrath, violence, and strife."
      }
    ]
  },
  Sagittarius: {
    description: "Sagittarius is characterized by its adventurous and philosophical nature...",
    decans: [
      {
        name: "First Decan",
        dateRange: "November 22 - December 1",
        ruler: "Mercury",
        traits: ["Optimistic", "Adventurous", "Expansive"],
        description: "Mercury offers a strong desire for knowledge...",
        agrippa: "A man armed with a coat of mail, holding a naked sword; signifying boldness, malice, and liberty."
      },
      {
        name: "Second Decan",
        dateRange: "December 2 - December 11",
        ruler: "Moon",
        traits: ["Dynamic", "Courageous", "Energetic"],
        description: "The Moon's focus on emotion and depth enhances Sagittarian intuition...",
        agrippa: "A weeping woman covered with clothes; signifying sadness and fear for one's body."
      },
      {
        name: "Third Decan",
        dateRange: "December 12 - December 21",
        ruler: "Saturn",
        traits: ["Confident", "Wise", "Charismatic"],
        description: "Saturn brings pragmatism and focus...",
        agrippa: "A man like in color to gold, or an idle man playing with a staff; signifying obstinacy, activeness for evil things, contentions, and mischief."
      }
    ]
  },
  Capricorn: {
    description: "Capricorn is known for its ambition and disciplined nature...",
    decans: [
      {
        name: "First Decan",
        dateRange: "December 22 - December 31",
        ruler: "Jupiter",
        traits: ["Responsible", "Pragmatic", "Disciplined"],
        description: "Jupiter adds an expansive pursuit of goals...",
        agrippa: "A woman and a man carrying full bags; signifying gain, rejoice, and loss through baseness."
      },
      {
        name: "Second Decan",
        dateRange: "January 1 - January 10",
        ruler: "Mars",
        traits: ["Harmonious", "Steady", "Ambitious"],
        description: "Mars fuels Capricorn's innate ambition...",
        agrippa: "Two women and a man looking toward a bird flying in the air; signifying pursuit of the unattainable and searching for the unknown."
      },
      {
        name: "Third Decan",
        dateRange: "January 11 - January 19",
        ruler: "Sun",
        traits: ["Strategic", "Disciplined", "Intellectual"],
        description: "The Sun brings an organized approach...",
        agrippa: "A chaste woman and a banker gathering money on a table; signifying prudence, covetousness, and avarice."
      }
    ]
  },
  Aquarius: {
    description: "Aquarius is characterized by its unique and innovative nature...",
    decans: [
      {
        name: "First Decan",
        dateRange: "January 20 - January 29",
        ruler: "Venus",
        traits: ["Innovative", "Independent", "Visionary"],
        description: "Ruled by Venus, this decan enhances Aquarius' inclination...",
        agrippa: "A prudent man and a woman spinning; signifying thought, labor for gain, poverty, and baseness."
      },
      {
        name: "Second Decan",
        dateRange: "January 30 - February 8",
        ruler: "Mercury",
        traits: ["Communicative", "Intellectual", "Adaptive"],
        description: "Under Mercury's influence, this decan adds intellectual curiosity...",
        agrippa: "A man with a long beard; signifying understanding, meekness, modesty, liberty, and good manners."
      },
      {
        name: "Third Decan",
        dateRange: "February 9 - February 18",
        ruler: "Moon",
        traits: ["Sociable", "Idealistic", "Artistic"],
        description: "The Moon instills an emotional depth...",
        agrippa: "A black and angry man; signifying insolence and impudence."
      }
    ]
  },
  Pisces: {
    description: "Pisces is known for its empathy and intuitive qualities...",
    decans: [
      {
        name: "First Decan",
        dateRange: "February 19 - February 28",
        ruler: "Saturn",
        traits: ["Imaginative", "Compassionate", "Dreamy"],
        description: "Ruled by Saturn, this decan introduces discipline...",
        agrippa: "A man carrying burdens on his shoulders and well-clothed; signifying journeys, change of place, and carefulness of wealth."
      },
      {
        name: "Second Decan",
        dateRange: "March 1 - March 10",
        ruler: "Jupiter",
        traits: ["Emotional", "Intuitive", "Sympathetic"],
        description: "Jupiter's influence expands spiritual and philosophical dimensions...",
        agrippa: "A woman with a good countenance, well adorned; signifying desires for high and great matters."
      },
      {
        name: "Third Decan",
        dateRange: "March 11 - March 20",
        ruler: "Mars",
        traits: ["Transformative", "Mystical", "Regenerative"],
        description: "Mars infuses a dynamic enthusiasm for exploration...",
        agrippa: "A naked man or youth, with a beautiful maiden whose head is adorned with flowers; signifying rest, idleness, delight, and fornication."
      }
    ]
  }
};

export default decans;