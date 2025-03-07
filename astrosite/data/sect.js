const sect = {
  name: "Sect",
  description: "The division of planets into day and night teams that influences their expression and interpretation.",
  descriptionLong: "Sect divides planets into two groups - diurnal (day) and nocturnal (night). A birth chart is considered a day chart if the Sun is above the horizon and a night chart if the Sun is below the horizon. Each planet is expressed more positively and harmiously when it appears in a chart of its own sect but struggles and causes conflict in a chart of the opposite sect.",
  
  diurnal: {
    name: "Diurnal Sect (Day Chart)",
    planets: ["Sun", "Jupiter", "Saturn"],
    description: "The diurnal sect consists of the Sun, Jupiter, and Saturn. These planets function most positively when in a day chart. Jupiter is the Greater Benefic (Benefic of Sect), expressed as expansive growth, wisdom, and abundance. Venus is the Lesser Benefic (Benefic out of Sect), expressed as more restrained harmony and affection. Saturn is the Lesser Malefic (Malefic of Sect), meaning it is expressed as slightly less negative, usually as constructive discipline rather than harsh limitation. Mars is the Greater Malefic (Malefic out of Sect), being the most negative placement, usually expressed as excessive aggression or destructive action. The day sect emphasizes conscious action, rationality, extroversion, and visible manifestation. The greatest blessings in a day chart come from Jupiter, while the greatest struggles come from Mars."
  },
    
  nocturnal: {
    name: "Nocturnal Sect (Night Chart)",
    planets: ["Moon", "Venus", "Mars"],
    description: "The nocturnal sect consists of the Moon, Venus, and Mars. These planets function most positively when in a night chart. Venus is the Greater Benefic (Benefic of Sect), expressed as profound beauty, pleasure, and loving connection. Jupiter is the Lesser Benefic (Benefic out of Sect), expressed as more tempered optimism and fortune. Mars is the Lesser Malefic (Malefic of Sect), meaning it is expressed as slightly less negative, usually as productive energy rather than combative force. Saturn is the Greater Malefic (Malefic out of Sect), being the most negative placement, usually expressed as severe restriction or debilitating fear. The night sect emphasizes subconscious processes, emotion, introversion, and hidden influences. The greatest blessings in a night chart come from Venus, while the greatest struggles come from Saturn."
  },
  
  mercury: {
    description: "Mercury is considered neutral and adaptable, taking on the sect of other planets it closely associates with in the chart.",
    Diurnal: {
      name: "Morning Star",
      description: "When Mercury rises before the Sun (appears in the morning sky), it's considered a morning star (of the diurnal sect). In this position, Mercury takes on day qualities, emphasizing rationality, objectivity, and clear communication. Morning star Mercury tends to be more analytical, forthright, and intellectually assertive, processing information logically and systematically. This placement favors academic pursuits, debate, factual writing, and direct problem-solving approaches, often manifesting as quick-witted, articulate expression with greater detachment and precision.",
      sect: "Diurnal"
    },
    Nocturnal: {
      name: "Evening Star",
      description: "When Mercury sets after the Sun (appears in the evening sky), it's considered an evening star (of the nocturnal sect). In this position, Mercury takes on night qualities, emphasizing intuition, subjectivity, and imaginative thinking. Evening star Mercury tends to be more reflective, receptive, and creatively perceptive, processing information through patterns and associations rather than linear logic. This placement favors artistic expression, empathetic communication, subtle persuasion, and intuitive problem-solving approaches, often manifesting as poetic, metaphorical expression with greater sensitivity to nuance and context.",
      sect: "Nocturnal"
    }
  },
  
  luminary: {
    description: "The luminary of sect (or sect light) refers to the luminary (Sun or Moon) that matches the sect of the chart. In a day chart, the Sun is the luminary of sect; in a night chart, the Moon is the luminary of sect. The luminary of sect gains prominence and typically operates as a more positive influence in the chart.",
    Sun: {
      name: "Sun as Luminary of Sect",
      description: "When the Sun is the luminary of sect (in a day chart), it operates with maximum potency and beneficence. The native's vitality, identity, and life purpose are more clearly expressed and harmoniously integrated. Leadership abilities flourish, and the individual typically displays greater confidence, clarity of purpose, and constructive self-expression. The father or authority figures may have a more positive influence, and the native more easily manifests their authentic self in the world.",
      beneficialQualities: [
        "Enhanced vitality and life force",
        "Clear sense of purpose and direction",
        "Balanced ego expression",
        "Natural leadership abilities",
        "Constructive relationship with authority figures"
      ]
    },
    Moon: {
      name: "Moon as Luminary of Sect",
      description: "When the Moon is the luminary of sect (in a night chart), it functions at its most beneficial and supportive. The native's emotional nature, instinctual responses, and nurturing abilities are strengthened and more balanced. There is typically greater emotional security, stronger intuitive abilities, and a deeper connection to inner rhythms. The mother or maternal figures may have a more positive influence, and the native more easily creates environments that support emotional well-being and comfort.",
      beneficialQualities: [
        "Heightened emotional intelligence and balance",
        "Strong intuitive abilities",
        "Natural nurturing capabilities",
        "Healthy relationship with the feminine principle",
        "Deep sense of emotional security and belonging"
      ]
    }
  }
};

export default sect;
