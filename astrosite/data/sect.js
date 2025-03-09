const sect = {
  name: "Sect",
  description: "The division of planets into day and night teams that influences their expression and interpretation.",
  descriptionLong: "Sect divides planets into two groups - diurnal (day) and nocturnal (night). A birth chart is considered a day chart if the Sun is above the horizon and a night chart if the Sun is below the horizon. Each planet is expressed more positively and harmoniously when it appears in a chart of its own sect but struggles and causes conflict in a chart of the opposite sect.",
  
  // About Sect page data
  about: {
    keywords: ["Traditional", "Essential", "Day-Night", "Polarity", "Influence"],
    descriptionLong: "Sect is a fundamental concept in traditional astrology that divides planets into day and night teams, dramatically affecting their expression in your birth chart. Dating back to ancient Hellenistic astrology, this principle recognizes that planets manifest differently depending on whether you were born during daylight or nighttime. Sect explains why the same planet might be positive in one chart but challenging in another.",
    traits: [
      "Fundamental Interpretive Framework",
      "Planetary Teamwork System",
      "Benefic/Malefic Modulator",
      "Day/Night Polarity Expression",
      "Classical Dignity Assessment",
      "Personality Balancing Mechanism"
    ],
    strengths: [
      "Enhances interpretative accuracy",
      "Explains planetary contradictions",
      "Offers practical remediation insights",
      "Creates contextual understanding"
    ],
    challenges: [
      "Requires accurate birth time",
      "Adds complexity to modern readings",
      "Requires historical astrological knowledge",
      "Less commonly applied in contemporary practice"
    ]
  },
  
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
  
  // Luminary (expanded)
  luminary: {
    description: "The luminary of sect (or sect light) refers to the luminary (Sun or Moon) that matches the sect of the chart. In a day chart, the Sun is the luminary of sect; in a night chart, the Moon is the luminary of sect. The luminary of sect gains prominence and typically operates as a more positive influence in the chart.",
    keywords: ["Light", "Leadership", "Vitality", "Visibility", "Core Essence"],
    descriptionLong: "The Luminary, or 'Light of Sect,' is the primary celestial light in your chart based on whether you were born during day or night. In a day chart, the Sun serves as the Luminary; in a night chart, the Moon takes this role. As the dominant light, this planet operates with its full power and represents your essential life force, core identity, and primary mode of self-expression. The Luminary's placement, aspects, and condition provide critical insights into your fundamental character and life direction.",
    traits: [
      "Primary Source of Vitality",
      "Core Identity Indicator",
      "Central Life Purpose",
      "Essential Character Foundation",
      "Primary Visibility Factor",
      "Fundamental Energy Source"
    ],
    strengths: [
      "Operates at full positive potential",
      "Clearly defines personal essence",
      "Provides natural confidence and strength",
      "Creates authentic self-expression"
    ],
    challenges: [
      "May dominate other chart factors",
      "Can create one-dimensional focus",
      "Sometimes indicates areas of pride",
      "May overshadow complementary energies"
    ],
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
  },
  
  // Greater Benefic (new)
  greaterBenefic: {
    keywords: ["Blessing", "Abundance", "Support", "Fortune", "Providence"],
    descriptionLong: "The Greater Benefic represents the most helpful and supportive planetary influence in your chart based on sect. In day charts, Jupiter serves this role; in night charts, Venus takes this position. This planet operates at its full beneficial capacity, bringing significant opportunities, blessings, and support to the areas of life it touches in your chart. The house placement and aspects of your Greater Benefic often indicate where life tends to flow most easily and where you naturally receive abundance and assistance.",
    traits: [
      "Primary Source of Blessings",
      "Natural Gift Provider",
      "Fortune Indicator",
      "Area of Ease and Flow",
      "Support System Creator",
      "Opportunity Attractor"
    ],
    strengths: [
      "Provides significant natural advantages",
      "Creates consistent good fortune",
      "Attracts helpful circumstances",
      "Brings meaningful positive experiences"
    ],
    challenges: [
      "May create overreliance on natural luck",
      "Can lead to excess or complacency",
      "Might cause blessings to be taken for granted",
      "Sometimes leads to exaggeration or overindulgence"
    ],
    Jupiter: {
      name: "Jupiter as Greater Benefic",
      description: "In a day chart, Jupiter serves as the Greater Benefic, operating with maximum expansiveness and benevolence. This placement brings profound wisdom, abundance, opportunity, and growth to the areas of life it touches. Jupiter's natural generosity and optimism are amplified, creating significant advantages through faith, higher learning, travel, and philosophical understanding. The native typically experiences remarkable support through mentors, teachers, and beneficial belief systems.",
      beneficialQualities: [
        "Expansive opportunities and growth",
        "Natural wisdom and philosophical insight",
        "Generous support from authority figures",
        "Abundance and prosperity in related areas",
        "Faith and optimism that creates real-world benefits"
      ]
    },
    Venus: {
      name: "Venus as Greater Benefic",
      description: "In a night chart, Venus serves as the Greater Benefic, operating with maximum harmony and grace. This placement brings profound beauty, pleasure, connection, and creative expression to the areas of life it touches. Venus's natural affection and artistic sensibility are amplified, creating significant advantages through relationships, aesthetics, values, and sensual enjoyment. The native typically experiences remarkable support through loving connections, artistic pursuits, and material comforts.",
      beneficialQualities: [
        "Profound relationship harmony and connection",
        "Natural artistic talent and aesthetic sensibility",
        "Grace and charm that opens doors socially",
        "Sensual enjoyment and material comforts",
        "Value systems that attract genuine prosperity"
      ]
    }
  },
  
  // Lesser Benefic (new)
  lesserBenefic: {
    keywords: ["Moderation", "Tempered Support", "Conditional Blessing", "Measured Good"],
    descriptionLong: "The Lesser Benefic represents a more moderate supportive influence in your chart based on sect. In day charts, Venus serves this role; in night charts, Jupiter takes this position. While still bringing positive energy, this planet operates with some constraints or conditions, providing advantages that may require more effort to access or that come with certain limitations. The house placement and aspects of your Lesser Benefic often indicate where opportunities exist but may need to be consciously cultivated or balanced to fully benefit from them.",
    traits: [
      "Secondary Source of Support",
      "Conditional Blessing Provider",
      "Measured Opportunity Indicator",
      "Area of Refined Harmony",
      "Balanced Good Fortune",
      "Tempered Benefit Creator"
    ],
    strengths: [
      "Provides moderate but stable advantages",
      "Creates balanced opportunities without excess",
      "Offers support that encourages appropriate effort",
      "Brings sustainable positive experiences"
    ],
    challenges: [
      "Benefits may require more conscious cultivation",
      "Support can be inconsistent or conditional",
      "Good fortune may come with limitations",
      "Advantages might need balancing with restraint"
    ],
    Venus: {
      name: "Venus as Lesser Benefic",
      description: "In a day chart, Venus serves as the Lesser Benefic, operating with more measured harmony and grace. While still beneficial, Venus's expression is somewhat tempered, bringing beauty, pleasure, and connection that may require more conscious cultivation. Relationships, aesthetics, and material comforts still provide advantages, but may come with conditions or require greater balance. The native typically experiences moderated support through social connections and creative pursuits, with benefits that might require refinement or care.",
      beneficialQualities: [
        "Balanced relationship dynamics",
        "Refined aesthetic sensibility",
        "Measured social advantages",
        "Tempered material comforts",
        "Harmonious values that require cultivation"
      ]
    },
    Jupiter: {
      name: "Jupiter as Lesser Benefic",
      description: "In a night chart, Jupiter serves as the Lesser Benefic, operating with more contained expansiveness and optimism. While still beneficial, Jupiter's expression is somewhat tempered, bringing growth, opportunity, and wisdom that may require more conscious direction. Higher learning, travel, and philosophical understanding still provide advantages, but may come with limitations or require greater discernment. The native typically experiences moderated support through mentors and belief systems, with benefits that might need tempering or focus.",
      beneficialQualities: [
        "Measured growth and opportunities",
        "Practical wisdom and understanding",
        "Focused mentorship and guidance",
        "Sustainable abundance",
        "Grounded optimism that requires direction"
      ]
    }
  },
  
  // Greater Malefic (new)
  greaterMalefic: {
    keywords: ["Challenge", "Restriction", "Obstacle", "Test", "Growth Through Difficulty"],
    descriptionLong: "The Greater Malefic represents the most challenging planetary influence in your chart based on sect. In day charts, Mars serves this role; in night charts, Saturn takes this position. This planet operates at its full difficult capacity, bringing significant obstacles, limitations, and tests to the areas of life it touches in your chart. While these challenges can be difficult, they ultimately lead to strength, mastery, and character development when consciously addressed. The house placement and aspects of your Greater Malefic often indicate where you face your most profound life lessons.",
    traits: [
      "Primary Challenge Source",
      "Major Obstacle Provider",
      "Crucial Test Indicator",
      "Area of Deep Transformation",
      "Character Builder",
      "Strength Through Adversity Creator"
    ],
    strengths: [
      "Develops profound resilience and character",
      "Creates mastery through overcoming obstacles",
      "Forges strength that can't be gained otherwise",
      "Provides clarity through contrast and challenge"
    ],
    challenges: [
      "Presents persistent, difficult obstacles",
      "Creates recurring patterns of limitation",
      "May cause periods of frustration or hardship",
      "Requires significant patience and persistence"
    ],
    Mars: {
      name: "Mars as Greater Malefic",
      description: "In a day chart, Mars serves as the Greater Malefic, operating with intensified aggression and conflict. This placement brings significant challenges through anger, impulsivity, competition, and assertive energy that may manifest destructively. Mars's natural drive and courage can become excessive, creating difficulties through conflict, accidents, or hasty action. The native typically experiences notable struggles with anger management, physical injuries, or competitive situations that require conscious transformation to master.",
      challengingQualities: [
        "Excessive anger or combativeness",
        "Impulsive actions leading to problems",
        "Destructive competitive dynamics",
        "Injury-prone tendencies",
        "Conflicts that require significant resolution skills"
      ]
    },
    Saturn: {
      name: "Saturn as Greater Malefic",
      description: "In a night chart, Saturn serves as the Greater Malefic, operating with intensified restriction and limitation. This placement brings significant challenges through delay, fear, structure, and boundaries that may manifest as severe constraint. Saturn's natural discipline and maturity can become excessive, creating difficulties through isolation, deprivation, or harsh judgment. The native typically experiences notable struggles with authority, chronic limitation, or fear-based patterns that require conscious transformation to master.",
      challengingQualities: [
        "Severe limitations or delays",
        "Persistent fear-based limitations",
        "Isolating circumstances",
        "Harsh self-criticism",
        "Restrictive authority dynamics that feel oppressive"
      ]
    }
  },
  
  // Lesser Malefic (new)
  lesserMalefic: {
    keywords: ["Discipline", "Effort", "Moderate Challenge", "Constructive Friction"],
    descriptionLong: "The Lesser Malefic represents a more moderate challenging influence in your chart based on sect. In day charts, Saturn serves this role; in night charts, Mars takes this position. While still bringing difficulties, this planet operates with less intensity or more constructive expression, providing challenges that are generally more manageable and directly useful for growth. The house placement and aspects of your Lesser Malefic often indicate where you face obstacles that, while requiring effort to overcome, tend to build specific useful skills and character traits.",
    traits: [
      "Secondary Challenge Source",
      "Moderate Obstacle Provider",
      "Constructive Friction Point",
      "Area of Structured Growth",
      "Discipline Builder",
      "Focused Effort Creator"
    ],
    strengths: [
      "Develops practical skills through manageable challenges",
      "Creates useful structure and boundaries",
      "Forges discipline and perseverance",
      "Provides focused motivation through appropriate resistance"
    ],
    challenges: [
      "Presents consistent but moderate obstacles",
      "Creates patterns requiring ongoing effort",
      "May cause periods of frustration",
      "Requires sustained discipline and patience"
    ],
    Saturn: {
      name: "Saturn as Lesser Malefic",
      description: "In a day chart, Saturn serves as the Lesser Malefic, operating with more constructive restriction and structure. While still challenging, Saturn's expression is somewhat tempered, bringing discipline, boundaries, and maturity that tends to build character rather than simply limit. Delays, responsibilities, and structures still create difficulties, but typically manifest as constructive learning experiences. The native experiences moderated struggles with authority, limitation, and fear that, when addressed, lead directly to mastery and wisdom.",
      challengingQualities: [
        "Structured limitations that build character",
        "Delayed gratification that teaches patience",
        "Responsibilities that develop maturity",
        "Boundaries that create useful definition",
        "Authority challenges that teach wisdom"
      ]
    },
    Mars: {
      name: "Mars as Lesser Malefic",
      description: "In a night chart, Mars serves as the Lesser Malefic, operating with more constructive drive and assertiveness. While still challenging, Mars's expression is somewhat tempered, bringing energy, courage, and initiative that tends to motivate rather than simply disrupt. Conflicts, competitions, and assertive actions still create difficulties, but typically manifest as energizing learning experiences. The native experiences moderated struggles with anger, boundaries, and impulsivity that, when addressed, lead directly to courage and effective action.",
      challengingQualities: [
        "Energetic friction that motivates action",
        "Competitive situations that build skill",
        "Assertiveness challenges that develop courage",
        "Physical exertion that creates strength",
        "Boundary conflicts that teach self-definition"
      ]
    }
  },
  
  // Mercury (expanded)
  mercury: {
    description: "Mercury is considered neutral and adaptable, taking on the sect of other planets it closely associates with in the chart.",
    keywords: ["Communication", "Adaptability", "Perception", "Learning", "Connection"],
    descriptionLong: "Mercury stands apart from the standard sect division as a neutral, adaptable planet that can function effectively in both day and night charts. Its status is determined by whether it appears as a Morning Star (rising before the Sun) or Evening Star (setting after the Sun). This special position reflects Mercury's versatile nature as the messenger planet, capable of mediating between different realms and adapting to various influences. Your Mercury's expression shows how you process information, communicate ideas, make connections, and relate to your immediate environment.",
    traits: [
      "Adaptable Intelligence",
      "Communication Style",
      "Information Processing",
      "Learning Approach",
      "Mental Flexibility", 
      "Environmental Perception"
    ],
    strengths: [
      "Adapts to different contexts and influences",
      "Mediates between opposing principles",
      "Integrates various information sources",
      "Translates between different communication modes"
    ],
    challenges: [
      "May lack consistent expression",
      "Can be overly influenced by stronger planets",
      "Sometimes exhibits scattered thinking",
      "Might struggle with decision-making"
    ],
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
  }
};

export default sect;
