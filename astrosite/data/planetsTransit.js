const planetsTransit = {
  sun: {
    name: "Sun",
    symbol: "☉",
    events: [
      "Self",
      "Identity",
      "Authority",
      "Career",
      "Direction",
      "Purpose",
      "Power Moves",
      "Goal Setting",
    ],
    dignity: {
      Domicile: "When the Sun is in Leo, it operates at full strength. Leo is the Sun's natural home, where its qualities of confidence, leadership, and creativity are expressed with ease. Individuals with a Leo Sun often have a natural ability to command attention and inspire others, thriving in roles that emphasize self-expression and recognition. While the Sun shines brightly in Leo, care must be taken to prevent egotism or excessive attention-seeking.",
      Exaltation: "The Sun is exalted in Aries, heightening its energy and boldness. In Aries, the Sun emphasizes individuality, courage, and leadership. Aries' pioneering spirit supports the Sun's drive to shine brightly, encouraging bravery and the desire to take initiative. This placement makes for natural leaders and action-takers, but overconfidence or impulsiveness may occasionally arise.",
      Detriment: "The Sun is in detriment in Aquarius, meaning it functions with some challenges. Aquarius emphasizes collective goals, innovation, and detachment, a counterpoint to the Sun's need for self-centered expression and recognition. Individuals with the Sun in Aquarius often focus on contributing to the greater good rather than pursuing personal glory. They may need to work on harmonizing their individuality with their socially-minded ideals.",
      Fall: "The Sun is in its fall in Libra, where its energy is diminished. Libra's focus on partnerships, harmony, and collaboration can make it more difficult for the Sun to express its qualities of individuality and leadership. People with the Sun in Libra thrive in situations that involve relationships and balance rather than solo pursuits. Their ability to create harmony is a strength, but they may need to work on self-assertion and maintaining their own identity in partnerships."
    },
    transitPeriod: "Stays approximately 30 days in each zodiac sign",
    transitEffect: "Illuminates and energizes the areas of life represented by the sign and house it's traveling through",
    transitDescriptionShort: "Transiting Sun brings vitality, awareness, and focus to different areas of life as it moves through the zodiac signs and houses.",
    transitDescriptionLong: "The transiting Sun acts like a spotlight, illuminating different areas of life as it moves through the zodiac. Its annual journey brings consciousness and energy to various life domains, activating different themes depending on its position. When the Sun transits a particular house or makes aspects to natal planets, it tends to bring matters related to that house or planet into focus for conscious attention and development. The transit typically lasts for about 30 days through each sign and 2-3 days through aspects, making it a relatively quick but noticeable influence.",
    transitSigns: {
      Aries: "When the Sun transits Aries, it brings energy and initiative to new beginnings. This is a time for taking action, starting new projects, and asserting yourself. You may feel more confident and energetic than usual. It's an excellent period for leadership activities and personal projects.",
      Taurus: "The Sun's transit through Taurus emphasizes material security and comfort. This period favors focusing on financial matters, personal resources, and practical concerns. It's a good time for stabilizing projects and enjoying life's physical pleasures.",
      Gemini: "During the Sun's transit in Gemini, communication and learning are highlighted. This is an excellent time for networking, studying, writing, or any activity involving information exchange. Mental activity is increased, and social connections are emphasized.",
      Cancer: "The Sun's transit through Cancer brings focus to home, family, and emotional matters. This is a time when domestic concerns take center stage. It's favorable for nurturing relationships, home improvements, and connecting with family.",
      Leo: "When the Sun transits Leo, creative self-expression and recreation are highlighted. This is a time for showcasing talents, enjoying entertainment, and pursuing romantic interests. Leadership opportunities may arise.",
      Virgo: "The Sun's transit through Virgo emphasizes work, health, and practical organization. This is an excellent time for getting organized, attending to health matters, and focusing on daily routines and responsibilities.",
      Libra: "During the Sun's transit in Libra, relationships and partnerships come into focus. This is a favorable time for negotiations, creating harmony in relationships, and addressing matters of justice and balance.",
      Scorpio: "The Sun's transit through Scorpio brings attention to deeper psychological matters and shared resources. This is a time for transformation, dealing with joint finances, and exploring life's mysteries.",
      Sagittarius: "When the Sun transits Sagittarius, expansion and adventure are highlighted. This is an excellent time for travel, higher education, and broadening your horizons through new experiences.",
      Capricorn: "The Sun's transit through Capricorn emphasizes career and public standing. This is a time to focus on professional goals, responsibilities, and building your reputation.",
      Aquarius: "During the Sun's transit in Aquarius, group activities and future planning are highlighted. This is a favorable time for networking, humanitarian efforts, and innovative thinking.",
      Pisces: "The Sun's transit through Pisces brings focus to spiritual and artistic matters. This is a time for reflection, creative inspiration, and connecting with your inner world."
    },
    transitHouses: {
      First: "The Sun transiting the First House brings focus to personal identity and self-expression. This is a time of increased vitality and personal presence. New beginnings are favored, and you may feel more confident and self-assured.",
      Second: "During a Second House transit, the Sun illuminates financial matters and personal values. This is a good time to review your resources, make financial decisions, or focus on building security.",
      Third: "The Sun's transit through the Third House energizes communication and local activities. This period favors learning, writing, short trips, and connecting with siblings or neighbors.",
      Fourth: "When the Sun transits the Fourth House, domestic matters come into focus. This is a time for attending to home, family, and emotional needs. Property matters may require attention.",
      Fifth: "The Sun's transit through the Fifth House brings energy to creative projects and recreation. This is a favorable time for romance, entertainment, and activities involving children.",
      Sixth: "During a Sixth House transit, the Sun highlights work and health matters. This is an excellent time to focus on daily routines, wellness practices, and workplace efficiency.",
      Seventh: "The Sun transiting the Seventh House brings focus to partnerships and relationships. This period favors collaboration, negotiations, and addressing relationship matters.",
      Eighth: "When the Sun moves through the Eighth House, it illuminates shared resources and transformation. This transit may bring focus to joint finances, intimate relationships, or personal changes.",
      Ninth: "The Sun's transit through the Ninth House energizes expansion and learning. This is a favorable time for travel, higher education, and exploring new philosophical perspectives.",
      Tenth: "During a Tenth House transit, the Sun highlights career and public image. This is a time when professional matters and achievements come into focus.",
      Eleventh: "The Sun transiting the Eleventh House brings energy to group activities and future plans. This period favors networking, working with organizations, and pursuing long-term goals.",
      Twelfth: "When the Sun moves through the Twelfth House, it illuminates the hidden aspects of life. This is a time for reflection, spiritual work, and dealing with behind-the-scenes matters."
    }
  },     
  moon: {
    name: "Moon",
    symbol: "☽",
    events: [
      "Emotions",
      "Family",
      "Home",
      "Memory",
      "Unconscious Patterns",
      "Habits",
      "Comfort",
      "Dreams and Sleep",
    ],
    dignity: {
      Domicile: "When the Moon is in Cancer, it operates at full strength. Cancer is the Moon's natural home, where its qualities of emotional sensitivity, nurturing, and intuition are expressed with ease. Individuals with the Moon in Cancer have a deep connection to their feelings and often provide comfort and care to others. They thrive when they trust their instincts and create emotional security for themselves and their loved ones. However, they may need to balance their empathic tendencies to avoid becoming overly protective or dependent.",
      Exaltation: "The Moon is exalted in Taurus, where its emotional and nurturing qualities find a stable and grounded expression. Taurus provides the Moon with a sense of security and consistency, allowing for emotional steadiness and resilience. Individuals with the Moon in Taurus often find comfort in the material world, valuing beauty and sensual pleasures. They have a natural talent for creating peaceful and harmonious environments. While this is a very strong placement for the Moon, care should be taken to avoid stubbornness or excessive attachment to comfort and routine.",
      Detriment: "The Moon is in detriment in Capricorn, where its emotional and nurturing qualities encounter the practical and disciplined nature of Capricorn. Individuals with the Moon in Capricorn may feel the need to suppress or control their emotions, focusing instead on responsibilities and long-term goals. While this placement can lead to emotional resilience and maturity, it may also create challenges in expressing vulnerability and seeking emotional support. Learning to balance their emotional needs with their ambition is key for overcoming the challenges of this placement.",
      Fall: "The Moon is in its fall in Scorpio, where its emotional sensitivity is deeply intensified. Scorpio's transformative and intense nature can make emotions feel overwhelming at times, creating challenges in finding stability and security. Individuals with the Moon in Scorpio have profound emotional depth and resilience, thriving in situations that require emotional courage and insight. However, they may need to guard against possessiveness, trust issues, or a tendency to dwell on past hurts. Cultivating emotional balance can help them harness the transformative power of this placement."
    },
    transitPeriod: "Moves through each zodiac sign in approximately 2.5 days",
    transitEffect: "Influences daily emotions, moods, and instinctive reactions; affects public response and general emotional atmosphere",
    transitDescriptionShort: "The transiting Moon influences our daily emotional state, reactions, and the general mood of the moment.",
    transitDescriptionLong: "The Moon's transit is one of the most noticeable in day-to-day life, affecting emotions, public mood, and instinctive responses. As it moves quickly through the zodiac, it creates different emotional atmospheres and triggers various needs and reactions. Moon transits last only a few hours when making aspects to natal planets, but their effects can be quite powerful in the moment. The Moon's position can influence everything from our mood and appetite to our interaction with others and general sensitivity levels. Its transit through different houses shows where our emotional attention and needs are focused at any given time.",
    transitSigns: {
      Aries: "When the Moon transits Aries, emotions are quick and impulsive. This is a time of increased emotional courage and spontaneity. People may feel more assertive and independent than usual. Good for starting new projects that require emotional investment.",
      Taurus: "The Moon's transit through Taurus brings a need for emotional and material security. This is a time when people seek comfort through physical pleasures and practical activities. Good for financial decisions and enjoying sensual experiences.",
      Gemini: "During the Moon's transit in Gemini, emotional expression becomes more verbal and intellectual. This is a time of increased social interaction and curiosity. Good for communication, learning, and short trips.",
      Cancer: "The Moon's transit through Cancer heightens emotional sensitivity and domestic focus. This is a time when people feel more nurturing and security-oriented. Good for family activities and emotional healing.",
      Leo: "When the Moon transits Leo, emotional expression becomes more dramatic and warm. This is a time of increased need for recognition and creativity. Good for entertainment, romance, and self-expression.",
      Virgo: "The Moon's transit through Virgo brings analytical approach to emotions. This is a time when people focus on details and practical matters. Good for organizing, health matters, and problem-solving.",
      Libra: "During the Moon's transit in Libra, emotional focus turns to relationships and harmony. This is a time of increased diplomacy and desire for balance. Good for social activities and negotiations.",
      Scorpio: "The Moon's transit through Scorpio deepens emotional intensity and perception. This is a time of powerful feelings and transformative experiences. Good for research and dealing with deep emotional issues.",
      Sagittarius: "When the Moon transits Sagittarius, emotions become more optimistic and expansive. This is a time of increased interest in learning and adventure. Good for travel, study, and philosophical pursuits.",
      Capricorn: "The Moon's transit through Capricorn brings emotional reserve and practicality. This is a time of increased focus on goals and responsibilities. Good for business matters and long-term planning.",
      Aquarius: "During the Moon's transit in Aquarius, emotional expression becomes more detached and humanitarian. This is a time of increased interest in group activities. Good for networking and innovative projects.",
      Pisces: "The Moon's transit through Pisces heightens intuition and emotional sensitivity. This is a time of increased empathy and creativity. Good for spiritual activities and artistic pursuits."
    },
    transitHouses: {
      First: "The Moon transiting the First House brings emotional focus to personal matters and self-expression. You may feel more sensitive and reactive than usual. Good time for personal care and expressing feelings.",
      Second: "During a Second House transit, the Moon highlights emotional security and material needs. Focus turns to finances and possessions. Good time for financial planning and comfort-seeking activities.",
      Third: "The Moon's transit through the Third House activates communication and local connections. Emotions are expressed through words and movement. Good time for writing, short trips, and connecting with siblings.",
      Fourth: "When the Moon transits the Fourth House, emotional focus turns to home and family matters. Private feelings and domestic concerns come to the fore. Good time for home activities and family gatherings.",
      Fifth: "The Moon's transit through the Fifth House stimulates emotional creativity and pleasure-seeking. Romance and recreation become more important. Good time for entertainment and creative expression.",
      Sixth: "During a Sixth House transit, the Moon highlights daily routines and health matters. Emotional focus turns to work and service. Good time for organizing and attending to health needs.",
      Seventh: "The Moon transiting the Seventh House brings emotional focus to relationships and partnerships. Interactions with others become more important. Good time for collaboration and relationship matters.",
      Eighth: "When the Moon moves through the Eighth House, it intensifies emotional experiences and shared resources. Focus turns to deeper feelings and transformations. Good time for emotional healing and financial partnerships.",
      Ninth: "The Moon's transit through the Ninth House stimulates emotional expansion and learning. Focus turns to broader perspectives and beliefs. Good time for study, travel, and philosophical pursuits.",
      Tenth: "During a Tenth House transit, the Moon highlights career and public image. Emotional focus turns to professional matters and authority figures. Good time for career decisions and public appearances.",
      Eleventh: "The Moon transiting the Eleventh House activates group connections and future planning. Focus turns to friends and collective activities. Good time for group work and social networking.",
      Twelfth: "When the Moon moves through the Twelfth House, it brings focus to the subconscious and spiritual matters. Private emotions and hidden feelings surface. Good time for reflection and spiritual activities."
    }
  },
  mercury: {
    name: "Mercury",
    symbol: "☿",
    events: [
      "Communication",
      "Learning",
      "Short Trips",
      "Mind",
      "Siblings",
      "Neighbors",
      "Technology",
      "Transportation",
      "Business",
    ],
    dignity: {
      Domicile: "When Mercury is in Gemini or Virgo, it operates at full strength. Gemini and Virgo are Mercury's natural homes, where its qualities of intellect, communication, and adaptability flourish. In Gemini, Mercury expresses its gift for versatile thinking, curiosity, and quickness in conversation and problem-solving. In Virgo, Mercury focuses on precision, analysis, and practicality, thriving in environments that require structure and organization. Individuals with Mercury in these signs excel in communication, learning, and mental pursuits, but may need to avoid overthinking or perfectionism in Virgo, and inconsistency in Gemini.",
      Exaltation: "Mercury is exalted in Virgo, where it finds its most refined and effective expression. In Virgo, Mercury's analytical skills and sharp intellect are amplified, allowing for deep precision, critical thinking, and practical problem-solving. Individuals with Mercury in Virgo excel in areas requiring attention to detail and service to others. They are excellent planners and communicators, often bringing structure and clarity to complex situations. However, they should be mindful of becoming overly critical or rigid in their thinking.",
      Detriment: "Mercury is in detriment in Sagittarius and Pisces, where it operates outside its comfort zone. In Sagittarius, Mercury's need for detail and focus is challenged by Sagittarius' broad, big-picture thinking. This can result in struggles with details or follow-through, though these individuals excel in philosophy, storytelling, and exploring grand ideas. In Pisces, Mercury's logical and precise nature becomes blurred by Pisces' creative, emotional, and intuitive energy. While this can create visionary and imaginative thinkers, it may bring challenges with focus, practicality, or clear communication. Balancing these tendencies allows for deep insights and unique perspectives.",
      Fall: "Mercury is in its fall in Pisces, where its rational and analytical qualities may be overshadowed by emotions and intuition. Individuals with Mercury in Pisces often think in abstract or symbolic ways, excelling in creative or spiritual pursuits. However, they may struggle with clarity, focus, or grounding their thoughts in reality. While this placement can lead to poetic and imaginative communication, it is important for these individuals to develop practical thinking skills to complement their intuitive strengths."
    },  
    transitPeriod: "Spends 2-4 weeks in each sign (longer when retrograde)",
    retrograde: {
      frequency: "3-4 times per year",
      duration: "Approximately 3 weeks each",
      effect: "Period of review, revision, and reconnection. Communication may be challenged, and technical issues more likely. Good time for reflection and redoing past work."
    },
    transitEffect: "Influences communication patterns, thinking processes, and information flow in daily life",
    transitDescriptionShort: "Transiting Mercury affects how we think, communicate, and process information during specific periods.",
    transitDescriptionLong: "Mercury's transit through different signs and houses influences our daily communication style, mental focus, and information processing. During direct motion, Mercury brings clarity and forward movement to the areas it touches. During retrograde periods, it brings review and reflection. Mercury's position can affect everything from business dealings to casual conversations, travel plans, and technology functioning. Its aspects to natal planets can trigger important conversations, decisions, or learning opportunities.",
    transitSigns: {
      Aries: "When Mercury transits Aries, communication becomes more direct and assertive. Good time for quick decisions, initiating conversations, and expressing ideas boldly. Watch for impulsive speech or hasty conclusions.",
      Taurus: "Mercury's transit through Taurus brings practical and methodical thinking. Good time for financial planning, concrete decisions, and steady communication. Ideas tend to develop slowly but surely.",
      Gemini: "During Mercury's transit in Gemini, communication and learning are highlighted. Excellent time for networking, writing, teaching, and gathering information. Mental activity increases significantly.",
      Cancer: "Mercury transiting Cancer brings emotional depth to thinking and communication. Good time for family discussions, expressing feelings, and understanding emotional patterns. Memory is enhanced.",
      Leo: "When Mercury moves through Leo, communication becomes more dramatic and creative. Good time for presentations, creative writing, and entertaining others through words. Leadership communication is highlighted.",
      Virgo: "Mercury's transit through Virgo brings analytical thinking and attention to detail. Excellent time for editing, organizing information, and solving practical problems. Critical thinking is enhanced.",
      Libra: "During Mercury's transit in Libra, diplomatic communication is emphasized. Good time for negotiations, mediating conflicts, and finding balanced solutions. Social communication flows smoothly.",
      Scorpio: "Mercury transiting Scorpio deepens thinking and investigation. Good time for research, uncovering hidden information, and strategic planning. Communication becomes more intense and focused.",
      Sagittarius: "When Mercury moves through Sagittarius, thinking becomes more expansive and optimistic. Good time for learning about foreign cultures, philosophy, and big-picture planning. Watch for overpromising.",
      Capricorn: "Mercury's transit through Capricorn brings practical and structured thinking. Good time for business communication, long-term planning, and setting concrete goals. Authority figures may be important.",
      Aquarius: "During Mercury's transit in Aquarius, innovative thinking is highlighted. Good time for group projects, technological matters, and unconventional ideas. Network connections become important.",
      Pisces: "Mercury transiting Pisces brings intuitive and creative thinking. Good time for artistic expression, spiritual studies, and empathetic communication. Watch for unclear communication."
    },
    transitHouses: {
      First: "Mercury transiting the First House brings focus to personal expression and self-presentation. Good time for updating your image, starting new studies, or expressing personal views.",
      Second: "During Second House transits, Mercury highlights financial thinking and resource management. Good time for budgeting, financial planning, and discussing material matters.",
      Third: "Mercury's transit through the Third House activates local communication and learning. Good time for writing, studying, short trips, and connecting with siblings or neighbors.",
      Fourth: "When Mercury transits the Fourth House, focus turns to home and family communication. Good time for family discussions, home planning, and exploring personal history.",
      Fifth: "Mercury's transit through the Fifth House stimulates creative thinking and self-expression. Good time for creative writing, teaching children, or romantic communication.",
      Sixth: "During Sixth House transits, Mercury highlights work communication and practical planning. Good time for organizing, problem-solving, and health-related research.",
      Seventh: "Mercury transiting the Seventh House focuses on partnership communication. Good time for negotiations, counseling, and important conversations in relationships.",
      Eighth: "When Mercury moves through the Eighth House, deep research and investigation are highlighted. Good time for financial planning, psychological insights, and discussing shared resources.",
      Ninth: "Mercury's transit through the Ninth House activates higher learning and broad thinking. Good time for study, publishing, travel planning, and philosophical discussions.",
      Tenth: "During Tenth House transits, Mercury highlights career communication and public speaking. Good time for professional presentations, job interviews, and business planning.",
      Eleventh: "Mercury transiting the Eleventh House activates group communication and future planning. Good time for team projects, networking, and organizational activities.",
      Twelfth: "When Mercury moves through the Twelfth House, private research and reflection are highlighted. Good time for journaling, meditation, and behind-the-scenes planning."
    }
  },  
  venus: {
    name: "Venus",
    symbol: "♀",
    events: [
      "Love",
      "Romance",
      "Relationships",
      "Children",
      "Beauty",
      "Creativity",
      "Art",
      "Fun",
      "Finances",
      "Entertainment",
    ],
    dignity: {
      Domicile: "When Venus is in Taurus or Libra, it operates at full strength. Taurus and Libra are Venus's natural homes, where its qualities of love, beauty, harmony, and relationships are expressed effortlessly. In Taurus, Venus emphasizes sensuality, stability, and a love of material comforts, while in Libra, Venus thrives in creating balance, diplomacy, and partnerships. Individuals with Venus in these signs tend to excel in relationships, aesthetics, and creating a peaceful environment. In Taurus, they should watch for possessiveness, and in Libra, they may need to avoid people-pleasing tendencies.",
      Exaltation: "Venus is exalted in Pisces, where its loving, compassionate, and spiritual qualities are elevated to their highest expression. In Pisces, Venus seeks unconditional love and devotion, blending romance with spirituality and imagination. Individuals with Venus in Pisces are deeply empathetic, tender, and artistic, often finding beauty in emotions and the ethereal. However, they need to guard against idealizing others too much or losing themselves in relationships.",
      Detriment: "Venus is in detriment in Aries and Scorpio, where it operates outside its comfort zone. In Aries, Venus's desire for harmony and connection clashes with Aries’s impulsiveness and focus on independence. Individuals with Venus in Aries may pursue relationships with passion and excitement but struggle to sustain them. In Scorpio, Venus encounters intensity, obsession, and transformation, which can challenge its natural affinity for balance and beauty. This placement can create deeply passionate and intense relationships but may lead to possessiveness or emotional extremes. Finding balance helps these energies flourish.",
      Fall: "Venus is in its fall in Virgo, where its desire for love and connection is tempered by Virgo's focus on practicality and perfectionism. Individuals with Venus in Virgo often express love through acts of service and attention to detail, but they may struggle with being overly critical of themselves or others in relationships. This placement excels in creating order and thoughtfulness in love but benefits from letting go of unrealistic standards and embracing emotional vulnerability."
    },
    transitPeriod: "Spends approximately 3-4 weeks in each sign (longer when retrograde)",
    retrograde: {
      frequency: "Every 18 months",
      duration: "Approximately 40-43 days",
      effect: "Period of reviewing relationships, values, and financial matters. Old lovers or unresolved relationship issues may resurface. Good time for reassessing personal values and artistic projects."
    },
    transitEffect: "Influences love life, social relationships, finances, and aesthetic appreciation during specific periods",
    transitDescriptionShort: "Transiting Venus affects how we experience and express love, value, and beauty during specific periods.",
    transitDescriptionLong: "Venus's transit through different signs and houses influences our approach to relationships, financial matters, and aesthetic appreciation. During direct motion, Venus brings opportunities for new relationships, financial gains, and artistic inspiration. During retrograde periods, it brings review and reassessment of values, relationships, and financial matters. Its aspects to natal planets can trigger important developments in relationships, financial opportunities, or artistic endeavors.",
    transitSigns: {
      Aries: "When Venus transits Aries, social interactions become more direct and passionate. Good time for taking initiative in relationships and making bold style changes. Watch for impulsiveness in spending or love matters.",
      Taurus: "Venus's transit through Taurus brings focus to material pleasures and comfort. Excellent time for financial planning, enjoying sensual pleasures, and strengthening existing relationships. Appreciation for beauty is enhanced.",
      Gemini: "During Venus's transit in Gemini, social connections are highlighted through communication. Good time for networking, light romance, and exploring new social circles. Intellectual attraction is emphasized.",
      Cancer: "Venus transiting Cancer brings emotional depth to relationships. Good time for home decoration, family gatherings, and nurturing connections. Emotional security in relationships becomes important.",
      Leo: "When Venus moves through Leo, romance becomes more dramatic and expressive. Good time for creative projects, entertainment, and showing affection. Generous gestures in love are highlighted.",
      Virgo: "Venus's transit through Virgo brings practical focus to relationships. Good time for relationship problem-solving, health improvements, and organizing finances. Service becomes a way of showing love.",
      Libra: "During Venus's transit in Libra, harmony and partnership are emphasized. Excellent time for negotiations, starting relationships, and appreciating arts. Social grace is enhanced.",
      Scorpio: "Venus transiting Scorpio deepens emotional connections. Good time for intimate relationships, joint finances, and transformative artistic projects. Intensity in relationships increases.",
      Sagittarius: "When Venus moves through Sagittarius, relationships expand through adventure. Good time for travel with partners, cultural experiences, and long-distance connections. Freedom in love is emphasized.",
      Capricorn: "Venus's transit through Capricorn brings practical focus to relationships and finances. Good time for long-term commitment, business partnerships, and investment decisions.",
      Aquarius: "During Venus's transit in Aquarius, unconventional relationships are highlighted. Good time for group activities, humanitarian projects, and friendship-based love. Innovation in art and style is emphasized.",
      Pisces: "Venus transiting Pisces brings romantic idealism and artistic inspiration. Good time for spiritual connections, creative projects, and compassionate relationships. Fantasy in love is heightened."
    },
    transitHouses: {
      First: "Venus transiting the First House brings charm and attractiveness to your personal presentation. Good time for makeovers, improving self-image, and starting new relationships.",
      Second: "During Second House transits, Venus highlights financial opportunities and material pleasures. Good time for investments, purchases of luxury items, and improving income.",
      Third: "Venus's transit through the Third House activates pleasant communications and local connections. Good time for writing love letters, short trips with partners, and harmonious discussions.",
      Fourth: "When Venus transits the Fourth House, focus turns to home life and family relationships. Good time for home decoration, family celebrations, and creating domestic harmony.",
      Fifth: "Venus's transit through the Fifth House stimulates romance and creativity. Good time for dating, artistic projects, and enjoying pleasurable activities.",
      Sixth: "During Sixth House transits, Venus brings harmony to work environment and daily routines. Good time for improving work relationships and health through pleasant activities.",
      Seventh: "Venus transiting the Seventh House focuses on partnerships and relationships. Good time for marriage, forming business partnerships, and improving existing relationships.",
      Eighth: "When Venus moves through the Eighth House, intimate relationships and shared resources are highlighted. Good time for financial partnerships and deepening emotional bonds.",
      Ninth: "Venus's transit through the Ninth House activates long-distance relationships and cultural appreciation. Good time for travel romance, higher education in arts, and expanding relationship horizons.",
      Tenth: "During Tenth House transits, Venus brings benefits through career and public image. Good time for professional relationships, public recognition, and career advancement.",
      Eleventh: "Venus transiting the Eleventh House activates social connections and group activities. Good time for networking, group projects, and forming friendships.",
      Twelfth: "When Venus moves through the Twelfth House, secret romances and spiritual connections are highlighted. Good time for private artistic projects and healing relationship issues."
    }
  },
  mars: {
    name: "Mars",
    symbol: "♂",
    events: [
      "Action",
      "Energy",
      "Competition",
      "Conflict",
      "Physical Activity",
      "Sex Drive",
      "Courage",
      "Ambition",
      "Violence",
      "Passion"
    ],
    dignity: {
      Domicile: "When Mars is in Aries or Scorpio, it operates at full strength. Aries and Scorpio are Mars's natural homes, where its qualities of energy, drive, and ambition are expressed with intensity and focus. In Aries, Mars thrives in its assertiveness, courage, and ability to take quick action, while in Scorpio, Mars shows its strategic, determined, and transformative nature. Individuals with Mars in these signs are highly motivated and goal-oriented, excelling in their ability to overcome challenges. In Aries, they may need to work on controlling impulsiveness, and in Scorpio, they could guard against being overly controlling or secretive.",
      Exaltation: "Mars is exalted in Capricorn, where its energy is channeled into discipline, structure, and long-term goals. In Capricorn, Mars achieves success through patience, persistence, and careful planning. Individuals with Mars in Capricorn often have a strong work ethic, achieving great things through their determination and focus. This placement increases the likelihood of sustained success, but individuals should be mindful of becoming too rigid or overly focused on outcomes.",
      Detriment: "Mars is in detriment in Libra and Taurus, where its natural assertiveness and aggression may feel subdued. In Libra, Mars struggles with indecision, as it must prioritize harmony and compromise over direct action. While this placement can bring diplomacy and teamwork, individuals with Mars in Libra may struggle to assert themselves or make quick decisions. In Taurus, Mars's desire for speed and action is slowed by the grounded, deliberate nature of Taurus. While this brings persistence and patience, it may lead to difficulties with motivation or resistance to change.",
      Fall: "Mars is in its fall in Cancer, where its energy is dampened by Cancer's emotional and protective nature. In Cancer, Mars often directs its energy toward emotional matters, family, or creating security, which may conflict with its natural assertiveness and outward focus. Individuals with Mars in Cancer may struggle to express anger directly, often channeling their frustrations in indirect or defensive ways. However, this placement excels when the drive is channeled into nurturing and protecting loved ones or creating a safe and secure environment."
    },
    transitPeriod: "Spends approximately 6-7 weeks in each sign (longer when retrograde)",
    retrograde: {
      frequency: "Every 2 years",
      duration: "Approximately 2-2.5 months",
      effect: "Period of reviewing and redirecting energy and actions. Projects may face delays or require revision. Good time for strategic planning rather than direct action."
    },
    transitEffect: "Influences energy levels, motivation, and areas of action and conflict during specific periods",
    transitDescriptionShort: "Transiting Mars affects where and how we direct our energy, initiative, and assertiveness during specific periods.",
    transitDescriptionLong: "Mars's transit through different signs and houses influences where we feel motivated to take action, where conflicts may arise, and how we express our drive and ambition. During direct motion, Mars brings energy and initiative to the areas it touches. During retrograde periods, it brings review and reassessment of actions and goals. Its aspects to natal planets can trigger important developments in projects, conflicts, or areas requiring courage and assertion.",
    transitSigns: {
      Aries: "When Mars transits Aries, energy levels are high and initiative is strong. Good time for starting new projects and taking leadership roles. Watch for impulsiveness or unnecessary confrontations.",
      Taurus: "Mars's transit through Taurus brings steady, determined action. Good time for practical projects and financial initiatives. Energy is best applied to concrete goals and material concerns.",
      Gemini: "During Mars's transit in Gemini, mental energy is heightened. Good time for communication projects, learning new skills, and intellectual debates. Multiple projects may demand attention.",
      Cancer: "Mars transiting Cancer brings emotional drive and protective instincts. Good time for home improvements and family-related activities. Energy may be directed towards emotional security.",
      Leo: "When Mars moves through Leo, creative and dramatic expression is energized. Good time for performance, leadership roles, and romantic pursuits. Competitive spirit is heightened.",
      Virgo: "Mars's transit through Virgo brings focus to detailed work and practical improvements. Good time for organizing, problem-solving, and health initiatives. Energy is best applied methodically.",
      Libra: "During Mars's transit in Libra, energy goes toward partnerships and negotiations. Good time for collaborative projects and resolving conflicts. Balance between assertion and compromise is key.",
      Scorpio: "Mars transiting Scorpio intensifies drive and determination. Good time for research, investigation, and transformative projects. Energy becomes more focused and strategic.",
      Sagittarius: "When Mars moves through Sagittarius, energy expands toward new horizons. Good time for travel, education, and adventurous pursuits. Physical activities are favored.",
      Capricorn: "Mars's transit through Capricorn brings disciplined action toward goals. Good time for career initiatives and long-term planning. Energy is best applied systematically.",
      Aquarius: "During Mars's transit in Aquarius, group activities and innovative projects are energized. Good time for teamwork and humanitarian efforts. Independent thinking is emphasized.",
      Pisces: "Mars transiting Pisces brings subtle action and spiritual drive. Good time for creative projects and behind-the-scenes work. Energy may be less direct but more intuitive."
    },
    transitHouses: {
      First: "Mars transiting the First House brings energy to personal initiatives and self-assertion. Good time for starting new projects and expressing leadership. Physical energy is heightened.",
      Second: "During Second House transits, Mars energizes financial matters and resource management. Good time for earning money and building resources. Watch for impulsive spending.",
      Third: "Mars's transit through the Third House activates communication and local travel. Good time for writing, speaking, and connecting with siblings. Mental energy is increased.",
      Fourth: "When Mars transits the Fourth House, domestic matters and family issues demand attention. Good time for home improvements and resolving family conflicts.",
      Fifth: "Mars's transit through the Fifth House energizes creative projects and romance. Good time for sports, entertainment, and pursuing pleasure. Competitive spirit is strong.",
      Sixth: "During Sixth House transits, Mars brings energy to work and health matters. Good time for improving efficiency and starting health regimens. Watch for work-related stress.",
      Seventh: "Mars transiting the Seventh House activates partnerships and open conflicts. Good time for asserting needs in relationships and addressing opposition directly.",
      Eighth: "When Mars moves through the Eighth House, shared resources and deep transformation are energized. Good time for joint ventures and addressing power issues.",
      Ninth: "Mars's transit through the Ninth House activates higher learning and travel. Good time for educational pursuits and exploring new territories. Physical and mental expansion is favored.",
      Tenth: "During Tenth House transits, Mars energizes career matters and public action. Good time for professional initiatives and pursuing ambitions. Leadership opportunities may arise.",
      Eleventh: "Mars transiting the Eleventh House activates group projects and social goals. Good time for teamwork and pursuing idealistic aims. Group conflicts may need attention.",
      Twelfth: "When Mars moves through the Twelfth House, behind-the-scenes work is energized. Good time for private projects and spiritual pursuits. Energy may be less visible but powerful."
    }
  },    
  jupiter: {
    name: "Jupiter",
    symbol: "♃",
    events: [
      "Growth",
      "Good Fortune",
      "Prosperity",
      "Gifts",
      "Wisdom",
      "Higher Education",
      "Travel",
      "Foreign Cultures",
      "Faith",
    ],
    dignity: {
      Domicile: "When Jupiter is in Sagittarius or Pisces, it operates at full strength. Sagittarius and Pisces are Jupiter's natural homes, where its qualities of expansion, optimism, wisdom, and belief are freely expressed. In Sagittarius, Jupiter brings a love for learning, adventure, and exploration of higher truths, excelling in philosophical and intellectual pursuits. In Pisces, Jupiter emphasizes compassion, spirituality, and imagination, focusing on emotional and spiritual growth. Individuals with Jupiter in these signs are naturally optimistic and thrive on growth, but in Sagittarius, they may need to guard against overconfidence, and in Pisces, they should be mindful of escapism or excessive idealism.",
      Exaltation: "Jupiter is exalted in Cancer, where its expansive and nurturing qualities are blended harmoniously. In Cancer, Jupiter focuses on emotional growth, family, and providing support and protection to others. This placement encourages generosity, empathy, and the creation of strong, supportive emotional foundations. Individuals with Jupiter in Cancer often have a gift for making others feel cared for, and they thrive when they share their abundance with loved ones. The challenge for this placement is to avoid excessive emotional indulgence or becoming overly dependent on comfort.",
      Detriment: "Jupiter is in detriment in Gemini and Virgo, where it operates outside its comfort zone. In Gemini, Jupiter's broad and expansive energy may be challenged by Gemini's focus on facts, details, and mental agility. This placement can produce individuals who are curious and open-minded but may struggle with follow-through or scatter their energy across too many interests. In Virgo, Jupiter’s optimism is tempered by Virgo's practicality and focus on perfection, which can create self-doubt or an overly critical outlook. Success comes from balancing broad aspirations with detailed planning.",
      Fall: "Jupiter is in its fall in Capricorn, where its expansive and growth-oriented energy must adapt to Capricorn's disciplined and cautious nature. In Capricorn, Jupiter directs its optimism and vision toward long-term goals, career success, and material achievements. While this placement provides focus and practicality, it may feel restrictive for Jupiter's naturally free-spirited energy. Individuals with Jupiter in Capricorn may struggle with pessimism or rigid thinking but can achieve great success through patience and hard work."
    }, 
    transitPeriod: "Spends approximately 12-13 months in each sign",
    retrograde: {
      frequency: "Annually",
      duration: "Approximately 4 months",
      effect: "Period of reviewing beliefs, philosophies, and areas of expansion. Good time for revising educational plans, reconsidering travel arrangements, or reassessing growth opportunities."
    },
    transitEffect: "Brings opportunities for growth, expansion, and good fortune to different areas of life during its year-long visits",
    transitDescriptionShort: "Transiting Jupiter indicates where we can find opportunities for growth, learning, and abundance during specific periods.",
    transitDescriptionLong: "Jupiter's transit through different signs and houses brings opportunities for expansion, learning, and good fortune to various life areas. Known as the 'Greater Benefic,' Jupiter's transits often coincide with periods of growth, optimism, and favorable circumstances. During retrograde periods, it's time to review and revise our approach to growth and expansion. Its aspects to natal planets can trigger important opportunities for advancement, learning, or spiritual growth.",
    transitSigns: {
      Aries: "When Jupiter transits Aries, opportunities come through initiative and leadership. Good time for starting new ventures, taking risks, and asserting yourself. Personal growth through courage and independence is highlighted.",
      Taurus: "Jupiter's transit through Taurus brings opportunities in financial and material matters. Good time for investments, building resources, and enjoying life's pleasures. Growth through practical application of values.",
      Gemini: "During Jupiter's transit in Gemini, opportunities come through learning and communication. Good time for writing, teaching, short trips, and networking. Mental expansion and diverse experiences are highlighted.",
      Cancer: "Jupiter transiting Cancer brings opportunities through emotional and domestic matters. Good time for real estate, family expansion, and emotional growth. Security and nurturing activities are favored.",
      Leo: "When Jupiter moves through Leo, opportunities come through creative expression and leadership. Good time for performance, romance, and speculative ventures. Personal recognition and joy are highlighted.",
      Virgo: "Jupiter's transit through Virgo brings opportunities through service and skill improvement. Good time for health initiatives, work advancement, and practical problem-solving. Growth through attention to detail.",
      Libra: "During Jupiter's transit in Libra, opportunities come through partnerships and cooperation. Good time for legal matters, relationships, and artistic pursuits. Balance and harmony are highlighted.",
      Scorpio: "Jupiter transiting Scorpio brings opportunities through transformation and shared resources. Good time for investments, research, and psychological growth. Deep understanding and regeneration are favored.",
      Sagittarius: "When Jupiter moves through Sagittarius, opportunities come through education and travel. Good time for publishing, foreign connections, and philosophical pursuits. Expansion of horizons is highlighted.",
      Capricorn: "Jupiter's transit through Capricorn brings opportunities through career and structure. Good time for professional advancement, long-term planning, and building foundations. Achievement through discipline.",
      Aquarius: "During Jupiter's transit in Aquarius, opportunities come through groups and innovation. Good time for technological ventures, humanitarian projects, and networking. Progress through originality.",
      Pisces: "Jupiter transiting Pisces brings opportunities through spiritual and artistic pursuits. Good time for creative projects, spiritual growth, and compassionate service. Intuitive development is highlighted."
    },
    transitHouses: {
      First: "Jupiter transiting the First House brings opportunities for personal growth and new beginnings. Good time for self-improvement, starting new ventures, and expanding your presence.",
      Second: "During Second House transits, Jupiter brings opportunities for financial growth and resource expansion. Good time for investments, increasing income, and building material security.",
      Third: "Jupiter's transit through the Third House activates learning and communication opportunities. Good time for writing, studying, local travel, and connecting with siblings.",
      Fourth: "When Jupiter transits the Fourth House, opportunities come through home and family matters. Good time for real estate, home improvement, and strengthening family bonds.",
      Fifth: "Jupiter's transit through the Fifth House brings opportunities in creativity and pleasure. Good time for romance, artistic pursuits, and activities involving children.",
      Sixth: "During Sixth House transits, Jupiter brings opportunities through work and health matters. Good time for job advancement, improving health routines, and developing skills.",
      Seventh: "Jupiter transiting the Seventh House activates partnership opportunities. Good time for relationships, contracts, and working with others.",
      Eighth: "When Jupiter moves through the Eighth House, opportunities come through shared resources and transformation. Good time for investments, joint ventures, and personal growth.",
      Ninth: "Jupiter's transit through the Ninth House brings opportunities for higher learning and travel. Good time for education, publishing, and exploring new territories.",
      Tenth: "During Tenth House transits, Jupiter brings career opportunities and public recognition. Good time for professional advancement and achieving goals.",
      Eleventh: "Jupiter transiting the Eleventh House activates opportunities through groups and friendships. Good time for networking, group projects, and achieving long-term goals.",
      Twelfth: "When Jupiter moves through the Twelfth House, opportunities come through spiritual and private matters. Good time for inner growth, spiritual development, and working behind the scenes."
    }
  },
  saturn: {
    name: "Saturn",
    symbol: "♄",
    events: [
      "Challenges",
      "Responsibility",
      "Discipline",
      "Limits",
      "Time",
      "Maturity",
      "Patience",
      "Hard Work",
      "Delays",
      "Tradition",
      "Life Lessons"
    ],
    dignity: {
      Domicile: "When Saturn is in Capricorn or Aquarius, it operates at full strength. Capricorn and Aquarius are Saturn's natural homes, where its qualities of discipline, structure, and long-term planning are expressed with authority. In Capricorn, Saturn emphasizes ambition, responsibility, and mastery over material goals. In Aquarius, Saturn focuses on innovation, social order, and creating progress within boundaries. Individuals with Saturn in these signs excel in building lasting structures and achieving their goals through hard work, but in Capricorn, they may need to avoid becoming too rigid or work-obsessed, and in Aquarius, they should be mindful of being detached or overly inflexible in their ideals.",
      Exaltation: "Saturn is exalted in Libra, where its energies of fairness, discipline, and responsibility merge harmoniously with Libra’s focus on balance and justice. In Libra, Saturn thrives in creating long-lasting partnerships, fairness in relationships, and achieving societal harmony. Individuals with Saturn in Libra are natural peacemakers and mediators, excelling at creating stability in interpersonal or professional relationships. However, they should guard against being overly focused on perfection or fearing disapproval in social settings.",
      Detriment: "Saturn is in detriment in Cancer and Leo, where its structured, disciplined qualities are challenged by these signs' tendencies toward emotional expression and individuality. In Cancer, Saturn’s desire for boundaries and control may conflict with Cancer’s emotional and nurturing focus, making it difficult for individuals to process emotions or accept vulnerability. In Leo, Saturn’s reserved nature is overshadowed by Leo’s need for self-expression and recognition, potentially leading to struggles with self-confidence or balancing humility with ambition. Growth comes from integrating emotional wisdom and creative expression into Saturn’s discipline.",
      Fall: "Saturn is in its fall in Aries, where its cautious and disciplined energy is at odds with Aries’ impulsive and action-oriented nature. In Aries, Saturn may struggle to assert itself without hesitation, as it prefers careful planning to Aries’ spontaneous drive. Individuals with Saturn in Aries may feel frustrated when their need for structure collides with their desire for immediate results. Once they learn to balance patience with boldness, they can channel their energy effectively toward long-term success."
    },    
    transitPeriod: "Spends approximately 2.5 years in each sign",
    retrograde: {
      frequency: "Annually",
      duration: "Approximately 4-5 months",
      effect: "Period of reviewing responsibilities, structures, and commitments. Good time for reassessing long-term goals, revising plans, and addressing unfinished business."
    },
    transitEffect: "Brings tests, lessons, and opportunities for mastery to different areas of life through restriction and discipline",
    transitDescriptionShort: "Transiting Saturn indicates where we face challenges, need to establish structure, and can build lasting achievements during specific periods.",
    transitDescriptionLong: "Saturn's transit through different signs and houses brings periods of testing, restriction, and ultimate strengthening to various life areas. Known as the 'Great Teacher,' Saturn's transits often coincide with periods of hard work, responsibility, and important life lessons. During retrograde periods, it's time to review and revise our commitments and structures. Its aspects to natal planets can trigger important periods of maturation, achievement through discipline, and overcoming limitations.",
    transitSigns: {
      Aries: "When Saturn transits Aries, lessons come through self-assertion and independence. Time to develop disciplined initiative and mature leadership. Challenges in starting new projects teach patience and planning.",
      Taurus: "Saturn's transit through Taurus brings lessons in material security and values. Time to establish stable financial foundations and practical resources. Challenges in material matters teach responsibility with resources.",
      Gemini: "During Saturn's transit in Gemini, lessons come through communication and learning. Time to develop structured thinking and serious study. Challenges in communication teach precision and responsibility with words.",
      Cancer: "Saturn transiting Cancer brings lessons in emotional security and nurturing. Time to establish emotional boundaries and mature family relationships. Challenges in emotional matters teach self-sufficiency.",
      Leo: "When Saturn moves through Leo, lessons come through self-expression and creativity. Time to develop disciplined creativity and responsible leadership. Challenges in self-expression teach authentic confidence.",
      Virgo: "Saturn's transit through Virgo brings lessons in service and skill development. Time to perfect techniques and establish efficient systems. Challenges in work and health teach practical mastery.",
      Libra: "During Saturn's transit in Libra, lessons come through relationships and balance. Time to develop mature partnerships and fair negotiations. Challenges in relationships teach commitment and boundaries.",
      Scorpio: "Saturn transiting Scorpio brings lessons in shared resources and transformation. Time to establish financial partnerships and emotional depth. Challenges in joint ventures teach trust and responsibility.",
      Sagittarius: "When Saturn moves through Sagittarius, lessons come through belief systems and expansion. Time to establish philosophical foundations and realistic goals. Challenges in higher learning teach wisdom.",
      Capricorn: "Saturn's transit through Capricorn brings lessons in authority and achievement. Time to establish professional foundations and long-term goals. Challenges in career teach mastery and integrity.",
      Aquarius: "During Saturn's transit in Aquarius, lessons come through groups and innovation. Time to establish humanitarian structures and progressive systems. Challenges in social spheres teach responsibility to community.",
      Pisces: "Saturn transiting Pisces brings lessons in spirituality and surrender. Time to establish spiritual discipline and practical compassion. Challenges in spiritual matters teach grounded wisdom."
    },
    transitHouses: {
      First: "Saturn transiting the First House brings lessons in personal responsibility and self-discipline. Time to establish personal boundaries and mature identity. May feel restricted but leads to greater self-mastery.",
      Second: "During Second House transits, Saturn brings lessons in financial responsibility and resource management. Time to establish stable financial foundations. May face material restrictions but leads to security.",
      Third: "Saturn's transit through the Third House brings lessons in communication and local connections. Time to establish serious study and structured thinking. May restrict movement but leads to mental discipline.",
      Fourth: "When Saturn transits the Fourth House, lessons come through home and family matters. Time to establish domestic foundations and family responsibilities. May feel restrictive but leads to emotional maturity.",
      Fifth: "Saturn's transit through the Fifth House brings lessons in creative discipline and responsible pleasure. Time to establish serious creative projects. May restrict enjoyment but leads to lasting achievements.",
      Sixth: "During Sixth House transits, Saturn brings lessons in work and health discipline. Time to establish efficient systems and healthy routines. May increase responsibilities but leads to practical mastery.",
      Seventh: "Saturn transiting the Seventh House brings lessons in relationship commitment and boundaries. Time to establish mature partnerships. May delay relationships but leads to lasting connections.",
      Eighth: "When Saturn moves through the Eighth House, lessons come through shared resources and transformation. Time to establish financial partnerships. May restrict intimacy but leads to deep trust.",
      Ninth: "Saturn's transit through the Ninth House brings lessons in higher learning and beliefs. Time to establish philosophical foundations. May restrict travel but leads to wisdom and expertise.",
      Tenth: "During Tenth House transits, Saturn brings lessons in career and public responsibility. Time to establish professional foundations. May increase workload but leads to achievement and authority.",
      Eleventh: "Saturn transiting the Eleventh House brings lessons in group responsibility and future planning. Time to establish realistic goals. May restrict social life but leads to lasting friendships.",
      Twelfth: "When Saturn moves through the Twelfth House, lessons come through spiritual discipline and inner work. Time to establish spiritual practices. May bring isolation but leads to inner strength."
    }
  },
  uranus: {
    name: "Uranus",
    symbol: "♅",
    events: [
      "Unexpected Events",
      "Breakthroughs",
      "Revolution",
      "Invention",
      "Radical Ideas",
      "Freedom",
      "Originality",
      "Social Networks",
    ],
    dignity: {
      Domicile: "When Uranus is in Aquarius, it operates at full strength. Aquarius is Uranus's natural home, where its qualities of innovation, rebellion, individuality, and visionary thinking are fully expressed. In this sign, Uranus thrives on pushing societal boundaries, breaking conventions, and bringing revolutionary change to the collective. Individuals with Uranus in Aquarius often exhibit an inventive, forward-thinking mindset, excelling in areas of science, technology, and social progress. However, they may need to guard against being overly detached or rebellious for the sake of rebellion, keeping balance between idealism and practicality.",
      Exaltation: "Uranus is exalted in Scorpio, where its transformative and revolutionary energy merges with Scorpio’s intensity, depth, and desire for profound change. In this placement, Uranus focuses its innovation and unconventional thinking on transformation and regeneration, especially in emotional, psychological, or societal realms. These individuals are often drawn to deep breakthroughs and have the ability to create radical shifts in the face of intense challenges. However, they should be mindful of avoiding extremes or destructive tendencies in their pursuit of change.",
      Detriment: "Uranus is in detriment in Leo, where its focus on individuality and rebellion conflicts with Leo's desire for self-expression and personal recognition. In this position, Uranus may struggle to balance its collective ideals with Leo's need for attention and leadership. Individuals with Uranus in Leo may find it challenging to reconcile their desire for creative freedom with the need to contribute to broader social movements. Balancing personal expression with a focus on collective progress can help unlock the potential of this placement.",
      Fall: "Uranus is in its fall in Taurus, where its disruptive and unpredictable energy is at odds with Taurus’s steady, grounded, and security-focused nature. In Taurus, Uranus may find it difficult to bring about change without resistance or difficulty. Individuals with Uranus in Taurus often approach innovation and progress in practical yet conservative ways, seeking stability in the face of upheaval. While this placement can bring a unique combination of creativity and patience, they may need to avoid stubbornness or fear of change while embracing new ideas that promote growth."
    },
    transitPeriod: "Spends approximately 7 years in each sign",
    retrograde: {
      frequency: "Annually",
      duration: "Approximately 5 months",
      effect: "Period of internal awakening and revision of innovative ideas. Time to reassess areas of life where freedom and change are needed. Technology and group projects may need review."
    },
    transitEffect: "Brings sudden changes, breakthroughs, and revolutionary developments to different areas of life",
    transitDescriptionShort: "Transiting Uranus indicates where we experience unexpected changes, awakenings, and innovations during specific periods.",
    transitDescriptionLong: "Uranus's transit through different signs and houses brings periods of sudden change, innovation, and awakening to various life areas. As the planet of revolution and breakthrough, Uranus's transits often coincide with unexpected events, technological advancements, and liberation from outdated patterns. During retrograde periods, these changes may be more internal. Its aspects to natal planets can trigger important breakthroughs, sudden changes, or revolutionary new perspectives.",
    transitSigns: {
      Aries: "When Uranus transits Aries, sudden changes come through personal identity and initiative. Period of breakthrough in self-expression and independence. Revolutionary approaches to leadership and pioneering activities.",
      Taurus: "Uranus's transit through Taurus brings unexpected changes in financial and material matters. Period of innovation in resources and values. Revolutionary approaches to money, possessions, and environmental concerns.",
      Gemini: "During Uranus's transit in Gemini, sudden changes affect communication and learning. Period of breakthrough in technology and information exchange. Revolutionary approaches to education and local connections.",
      Cancer: "Uranus transiting Cancer brings unexpected changes in home and emotional life. Period of breakthrough in family patterns and security needs. Revolutionary approaches to nurturing and emotional expression.",
      Leo: "When Uranus moves through Leo, sudden changes affect creative expression and romance. Period of breakthrough in entertainment and self-expression. Revolutionary approaches to leadership and pleasure.",
      Virgo: "Uranus's transit through Virgo brings unexpected changes in work and health routines. Period of breakthrough in service and skills. Revolutionary approaches to wellness and daily efficiency.",
      Libra: "During Uranus's transit in Libra, sudden changes affect partnerships and social justice. Period of breakthrough in relationships and cooperation. Revolutionary approaches to balance and harmony.",
      Scorpio: "Uranus transiting Scorpio brings unexpected changes in shared resources and transformation. Period of breakthrough in psychology and joint ventures. Revolutionary approaches to power and intimacy.",
      Sagittarius: "When Uranus moves through Sagittarius, sudden changes affect belief systems and higher learning. Period of breakthrough in philosophy and travel. Revolutionary approaches to education and culture.",
      Capricorn: "Uranus's transit through Capricorn brings unexpected changes in career and authority structures. Period of breakthrough in professional life. Revolutionary approaches to achievement and responsibility.",
      Aquarius: "During Uranus's transit in Aquarius, sudden changes affect group consciousness and future vision. Period of breakthrough in technology and social movements. Revolutionary approaches to humanitarian causes.",
      Pisces: "Uranus transiting Pisces brings unexpected changes in spiritual awareness and collective consciousness. Period of breakthrough in artistic expression. Revolutionary approaches to compassion and unity."
    },
    transitHouses: {
      First: "Uranus transiting the First House brings sudden changes to personal identity and self-expression. Period of awakening to new ways of being. May bring unexpected changes in appearance or behavior.",
      Second: "During Second House transits, Uranus brings unexpected changes to finances and values. Period of breakthrough in resource management. May bring sudden financial opportunities or shifts in values.",
      Third: "Uranus's transit through the Third House brings sudden changes to communication and learning. Period of mental awakening. May bring unexpected travel or revolutionary ideas.",
      Fourth: "When Uranus transits the Fourth House, sudden changes affect home and family life. Period of domestic awakening. May bring unexpected moves or family developments.",
      Fifth: "Uranus's transit through the Fifth House brings sudden changes to creative expression and romance. Period of creative awakening. May bring unexpected love affairs or artistic breakthroughs.",
      Sixth: "During Sixth House transits, Uranus brings unexpected changes to work and health routines. Period of breakthrough in daily life. May bring sudden job changes or health insights.",
      Seventh: "Uranus transiting the Seventh House brings sudden changes to partnerships and relationships. Period of relationship awakening. May bring unexpected encounters or partnership developments.",
      Eighth: "When Uranus moves through the Eighth House, sudden changes affect shared resources and transformation. Period of psychological breakthrough. May bring unexpected windfalls or deep insights.",
      Ninth: "Uranus's transit through the Ninth House brings sudden changes to beliefs and long-distance matters. Period of philosophical awakening. May bring unexpected travel or educational opportunities.",
      Tenth: "During Tenth House transits, Uranus brings unexpected changes to career and public status. Period of professional breakthrough. May bring sudden career changes or recognition.",
      Eleventh: "Uranus transiting the Eleventh House brings sudden changes to friendships and group associations. Period of social awakening. May bring unexpected connections or group developments.",
      Twelfth: "When Uranus moves through the Twelfth House, sudden changes affect spiritual life and hidden matters. Period of spiritual awakening. May bring unexpected revelations or intuitive breakthroughs."
    }
  },
  neptune: {
    name: "Neptune",
    symbol: "♆",
    events: [
      "Dreams",
      "Illusions",
      "Spirituality",
      "Imagination",
      "Confusion",
      "Addiction",
      "Idealism",
      "Fantasy",
      "Collective Consciousness"
    ],
    dignity: {
      Domicile: "When Neptune is in Pisces, it operates at full strength. Pisces is Neptune's natural home, where its qualities of imagination, spirituality, intuition, and compassion are deeply expressed. In this sign, Neptune encourages dreamlike creativity, a connection to universal love, and the ability to transcend boundaries through art, spirituality, and empathy. Individuals with Neptune in Pisces are often compassionate, visionary, and spiritually sensitive, but they may need to ground their energy to avoid becoming overly idealistic, escapist, or disconnected from reality.",
      Exaltation: "Neptune is exalted in Leo, where its visionary and creative energy joins with Leo's dramatic self-expression and leadership qualities. In this placement, Neptune focuses on inspiring others through grand creativity, idealism, and charisma. Individuals with Neptune in Leo may excel in artistic or leadership roles where they can channel their dreams into tangible forms of inspiration for others. While this is a powerful placement for creativity, care should be taken to avoid excessive pride or unrealistic expectations when pursuing their ideals.",
      Detriment: "Neptune is in detriment in Virgo, where its ethereal and boundless nature is challenged by Virgo’s focus on practicality, precision, and detail. In this position, Neptune may struggle to express its visionary qualities and can feel constrained by Virgo's emphasis on structure and analysis. Individuals with Neptune in Virgo may need to work harder to balance their spiritual or creative tendencies with the need for logic and practicality. This placement can lead to productive creativity, but vigilance against over-perfectionism or self-doubt is necessary.",
      Fall: "Neptune is in its fall in Aquarius, where its spiritual and idealistic energy is tempered by Aquarius's focus on logic, innovation, and social structures. In this placement, Neptune’s imaginative and transcendent qualities may feel restrained, leading individuals to express their creativity or spirituality in intellectual or detached ways. While this can result in innovative and progressive ideas, they may need to connect more deeply with their emotions and avoid getting lost in overly abstract or impersonal visions."
    },    
    transitPeriod: "Spends approximately 14 years in each sign",
    retrograde: {
      frequency: "Annually",
      duration: "Approximately 5-6 months",
      effect: "Period of spiritual reassessment and review of illusions. Time to examine dreams, intuition, and creative inspiration. Spiritual and artistic projects may need refinement."
    },
    transitEffect: "Brings spiritual awakening, dissolution of boundaries, enhanced creativity, and sometimes confusion or disillusionment",
    transitDescriptionShort: "Transiting Neptune indicates where we experience heightened spirituality, inspiration, and potential confusion during specific periods.",
    transitDescriptionLong: "Neptune's transit through different signs and houses brings periods of heightened spirituality, creative inspiration, and dissolution of existing structures. As the planet of dreams, intuition, and transcendence, Neptune's transits often coincide with spiritual awakenings, artistic inspiration, and the blurring of boundaries. During retrograde periods, these effects become more introspective. Its aspects to natal planets can trigger important spiritual revelations, creative breakthroughs, or periods of uncertainty that ultimately lead to greater clarity.",
    transitSigns: {
      Aries: "When Neptune transits Aries, spiritual awareness manifests through personal identity and initiative. Period of inspiration in self-expression. Dissolution of ego-based limitations.",
      Taurus: "Neptune's transit through Taurus brings spiritual awareness to material matters. Period of artistic inspiration in sensual realms. Dissolution of rigid value systems.",
      Gemini: "During Neptune's transit in Gemini, spiritual awareness affects communication and learning. Period of poetic inspiration and intuitive thinking. Dissolution of logical boundaries.",
      Cancer: "Neptune transiting Cancer brings spiritual awareness to emotional life. Period of inspiration in nurturing activities. Dissolution of emotional barriers.",
      Leo: "When Neptune moves through Leo, spiritual awareness affects creative expression. Period of artistic inspiration and romantic idealism. Dissolution of creative blocks.",
      Virgo: "Neptune's transit through Virgo brings spiritual awareness to practical matters. Period of inspiration in service and healing. Dissolution of rigid routines.",
      Libra: "During Neptune's transit in Libra, spiritual awareness affects relationships. Period of romantic inspiration and artistic partnerships. Dissolution of relationship boundaries.",
      Scorpio: "Neptune transiting Scorpio brings spiritual awareness to transformation processes. Period of psychic inspiration and deep healing. Dissolution of power structures.",
      Sagittarius: "When Neptune moves through Sagittarius, spiritual awareness affects belief systems. Period of philosophical inspiration and spiritual seeking. Dissolution of limiting beliefs.",
      Capricorn: "Neptune's transit through Capricorn brings spiritual awareness to material achievement. Period of inspiration in career. Dissolution of rigid structures.",
      Aquarius: "During Neptune's transit in Aquarius, spiritual awareness affects group consciousness. Period of humanitarian inspiration. Dissolution of social barriers.",
      Pisces: "Neptune transiting Pisces brings heightened spiritual awareness and collective consciousness. Period of mystical inspiration. Dissolution of ego boundaries."
    },
    transitHouses: {
      First: "Neptune transiting the First House brings spiritual awareness to identity. Period of personal inspiration and enhanced intuition. May bring confusion about self-image.",
      Second: "During Second House transits, Neptune brings spiritual awareness to material matters. Period of inspiration in resources. May bring uncertainty in financial matters.",
      Third: "Neptune's transit through the Third House brings spiritual awareness to communication. Period of enhanced intuitive thinking. May bring inspired writing or confusion in learning.",
      Fourth: "When Neptune transits the Fourth House, spiritual awareness affects home life. Period of domestic inspiration. May bring family confusion or enhanced emotional sensitivity.",
      Fifth: "Neptune's transit through the Fifth House brings spiritual awareness to creativity. Period of artistic inspiration. May bring romantic idealization or creative breakthroughs.",
      Sixth: "During Sixth House transits, Neptune brings spiritual awareness to daily work. Period of service inspiration. May bring confusion in routines or enhanced healing abilities.",
      Seventh: "Neptune transiting the Seventh House brings spiritual awareness to relationships. Period of partnership inspiration. May bring relationship confusion or ideal connections.",
      Eighth: "When Neptune moves through the Eighth House, spiritual awareness affects transformation. Period of psychic inspiration. May bring confusion about shared resources.",
      Ninth: "Neptune's transit through the Ninth House brings spiritual awareness to higher learning. Period of philosophical inspiration. May bring enhanced spiritual understanding.",
      Tenth: "During Tenth House transits, Neptune brings spiritual awareness to career. Period of professional inspiration. May bring career uncertainty or creative recognition.",
      Eleventh: "Neptune transiting the Eleventh House brings spiritual awareness to group activities. Period of humanitarian inspiration. May bring confusion in friendships.",
      Twelfth: "When Neptune moves through the Twelfth House, spiritual awareness is heightened. Period of mystical inspiration. May bring profound spiritual experiences or escapist tendencies."
    }
  },
  pluto: {
    name: "Pluto",
    symbol: "♇",
    events: [
      "Power",
      "Death and Rebirth",
      "Secrets",
      "Crisis",
      "Wealth",
      "Taboo",
      "Movements",
      "Transformation",
      "Destruction",
      "Ancestors"
    ],
    dignity: {
      Domicile: "When Pluto is in Scorpio, it operates at full strength. Scorpio is Pluto's natural home, where its qualities of transformation, power, depth, and rebirth are fully expressed. In this sign, Pluto thrives on uncovering hidden truths, embracing emotional intensity, and breaking through limitations to achieve profound change, both personally and collectively. Individuals with Pluto in Scorpio are deeply intuitive, determined, and drawn to the mysteries of life. They often excel in facing challenges but may need to manage tendencies toward obsession, secrecy, or destructive behaviors.",
      Exaltation: "Pluto is exalted in Aries, where its transformative and assertive energy blends with Aries' boldness, courage, and pioneering spirit. In this placement, Pluto's power is directed outward toward taking initiative and creating impactful change through decisive action. Individuals with Pluto in Aries are dynamic, driven, and fearless in tackling challenges. However, they should be mindful of avoiding impulsive or overly aggressive expressions of their transformative energy.",
      Detriment: "Pluto is in detriment in Taurus, where its drive for transformation and change conflicts with Taurus’s need for stability, comfort, and resistance to upheaval. In this placement, Pluto’s intensity may feel slowed or restrained, making it harder to initiate dynamic change. Individuals with Pluto in Taurus often channel their transformative power into creating material security or lasting physical changes, but they may struggle with stubbornness, possessiveness, or fear of letting go of the familiar. Learning to embrace change while maintaining balance is key to this placement.",
      Fall: "Pluto is in its fall in Libra, where its intense and transformative energy may be tempered by Libra’s focus on harmony, balance, and relationships. In this sign, Pluto’s deep transformational power may feel constrained by a need to maintain peace or avoid conflict. Individuals with Pluto in Libra may excel in transforming partnerships or creating balance in social structures but may also struggle to express their power authentically, especially if they fear disrupting harmony. Growth comes from learning how to use transformative energy in ways that enhance cooperation and fairness."
    },    
    transitPeriod: "Spends approximately 12-31 years in each sign",
    retrograde: {
      frequency: "Annually",
      duration: "Approximately 5-6 months",
      effect: "Period of deep internal transformation and revision of power dynamics. Time to examine hidden motivations and transform destructive patterns. Deep psychological work and regeneration of personal power."
    },
    transitEffect: "Brings profound transformation, elimination of outdated patterns, and deep psychological change to different areas of life",
    transitDescriptionShort: "Transiting Pluto indicates where we experience deep transformation, power dynamics, and regeneration during specific periods.",
    transitDescriptionLong: "Pluto's transit through different signs and houses brings periods of profound transformation, elimination of outdated patterns, and deep psychological change. As the planet of death and rebirth, Pluto's transits often coincide with major life changes, power struggles, and opportunities for deep healing and regeneration. During retrograde periods, these transformations become more internal and psychological. Its aspects to natal planets can trigger important personal evolution, crisis leading to growth, or profound changes in power dynamics.",
    transitSigns: {
      Aries: "When Pluto transits Aries, transformation comes through personal identity and will. Period of profound change in self-expression and independence. Power struggles related to personal autonomy.",
      Taurus: "Pluto's transit through Taurus brings transformation to material security and values. Period of profound change in resources and self-worth. Power struggles related to possessions and survival.",
      Gemini: "During Pluto's transit in Gemini, transformation affects communication and learning. Period of profound change in mental processes and information exchange. Power struggles related to knowledge.",
      Cancer: "Pluto transiting Cancer brings transformation to emotional life and family patterns. Period of profound change in security needs and nurturing. Power struggles related to home and family.",
      Leo: "When Pluto moves through Leo, transformation affects creative expression and ego. Period of profound change in self-expression and romance. Power struggles related to recognition and authority.",
      Virgo: "Pluto's transit through Virgo brings transformation to work and health routines. Period of profound change in service and efficiency. Power struggles related to daily responsibilities.",
      Libra: "During Pluto's transit in Libra, transformation affects partnerships and balance. Period of profound change in relationships and cooperation. Power struggles related to equality and justice.",
      Scorpio: "Pluto transiting Scorpio brings transformation to psychological depths and shared resources. Period of profound change in intimacy and joint ventures. Power struggles related to control.",
      Sagittarius: "When Pluto moves through Sagittarius, transformation affects belief systems and expansion. Period of profound change in philosophy and higher learning. Power struggles related to truth.",
      Capricorn: "Pluto's transit through Capricorn brings transformation to structures and authority. Period of profound change in career and responsibility. Power struggles related to status.",
      Aquarius: "During Pluto's transit in Aquarius, transformation affects group consciousness and future vision. Period of profound change in social structures and technology. Power struggles related to progress.",
      Pisces: "Pluto transiting Pisces brings transformation to spiritual awareness and collective unconscious. Period of profound change in universal connection. Power struggles related to transcendence."
    },
    transitHouses: {
      First: "Pluto transiting the First House brings profound transformation to personal identity. Period of deep personal reinvention. May bring power struggles related to self-expression.",
      Second: "During Second House transits, Pluto brings transformation to resources and values. Period of financial regeneration. May bring power struggles related to possessions.",
      Third: "Pluto's transit through the Third House brings transformation to communication patterns. Period of mental regeneration. May bring power struggles with siblings or neighbors.",
      Fourth: "When Pluto transits the Fourth House, transformation affects home and family life. Period of domestic regeneration. May bring power struggles within family.",
      Fifth: "Pluto's transit through the Fifth House brings transformation to creative expression and romance. Period of creative regeneration. May bring powerful romantic experiences.",
      Sixth: "During Sixth House transits, Pluto brings transformation to work and health. Period of lifestyle regeneration. May bring power struggles in workplace.",
      Seventh: "Pluto transiting the Seventh House brings transformation to partnerships. Period of relationship regeneration. May bring powerful encounters or relationship crises.",
      Eighth: "When Pluto moves through the Eighth House, transformation affects shared resources and psychology. Period of psychological regeneration. May bring inheritance or joint financial changes.",
      Ninth: "Pluto's transit through the Ninth House brings transformation to beliefs and higher learning. Period of philosophical regeneration. May bring powerful spiritual experiences.",
      Tenth: "During Tenth House transits, Pluto brings transformation to career and public status. Period of professional regeneration. May bring power struggles with authority.",
      Eleventh: "Pluto transiting the Eleventh House brings transformation to friendships and groups. Period of social regeneration. May bring powerful group experiences.",
      Twelfth: "When Pluto moves through the Twelfth House, transformation affects spiritual life and unconscious patterns. Period of spiritual regeneration. May bring powerful inner revelations."
    }
  },
        
 



    chartruler: {
      name: "Chart Ruler",
      descriptionShort: "The Chart Ruler is the planet that rules the ascendant (rising sign) in a natal chart.",
      descriptionLong: "The Chart Ruler is a crucial aspect of an astrological natal chart. It is the planet that rules the ascendant, which represents the individual's outer self and how they present themselves to the world. The Chart Ruler influences the overall tone and style of a person's personality, behavior, and life path. It can indicate their strengths, weaknesses, and potential, as well as their emotional and psychological profile.",
      Sun: "The Sun as the Chart Ruler indicates a dominant focus on self-expression, personal identity, and self-awareness. People with the Sun as their Chart Ruler feel a strong need to define themselves and radiate their individuality to the outside world. They often possess natural leadership abilities and a magnetism that draws others to them. These individuals thrive when they are recognized for their talents and contributions, and they often have a strong ego that requires affirmation. Creativity, vitality, and a desire for purpose drive them, but they may need to guard against excessive pride or a tendency to seek validation from external sources. Their life path typically revolves around understanding their core essence and allowing their light to shine in a way that inspires others.",
      Moon: "The Moon as the Chart Ruler brings a deep emotional sensitivity, a strong intuition, and a natural ability to connect with the moods and needs of others. Individuals with the Moon as their Chart Ruler are strongly influenced by their emotions and may find that their inner world feels just as important as their outer experiences. They possess an empathetic and nurturing nature, often prioritizing family, home, and close relationships. These people may be affected by the cyclical nature of life, including fluctuations in their emotional state. They are intuitive and instinctual, responding powerfully to their environment and the people around them. Their life path often involves understanding and balancing their emotional needs while offering care and support to those they love. However, they may need to avoid becoming overly dependent, moody, or vulnerable to emotional manipulation.",
      Mercury: "Mercury as the Chart Ruler suggests a life fueled by intellectual curiosity, communication, and versatility. Individuals with Mercury as their Chart Ruler have quick minds and a natural capacity for analysis, learning, and sharing ideas. These people are typically skilled communicators, whether through speaking, writing, or teaching, and they often enjoy exploring various perspectives and creating meaningful connections with others. Their adaptability and wit make them excellent problem-solvers, but their restless nature may lead to scattered focus or superficiality if their energy is not grounded. They are often drawn to environments that stimulate their mental faculties, such as educational pursuits, social interactions, or careers requiring intellectual agility. Their path involves fostering their curiosity and refining their ability to perceive and convey truth while balancing logic with emotional nuance.",
      Venus: "Venus as the Chart Ruler places importance on harmony, relationships, beauty, and values in life. Individuals with Venus as their Chart Ruler are often drawn to the finer things in life, including art, music, luxury, and aesthetic pleasures. Their charm and diplomacy allow them to form strong, lasting connections, and they often excel at understanding and mediating the needs of others. They strive for balance and can bring warmth, cooperation, and peace into their surroundings. However, challenges may arise if they become overly indulgent or prioritize materialism or surface-level relationships over deeper fulfillment. Their life path often involves exploring themes of love—both self-love and love for others—and prioritizing values that resonate with their authentic sense of harmony and purpose.",
      Mars: "Mars as the Chart Ruler endows individuals with an energetic, assertive, and action-oriented approach to life. These individuals have a competitive spirit and a drive to confront challenges head-on, often excelling in situations that require courage, motivation, and decisiveness. Mars as the ruler of the chart gives an independent and adventurous quality, and such individuals are not afraid to assert themselves to achieve their goals. Passion and ambition are hallmarks of their personality, but they may need to monitor impulsive behavior, aggression, or impatience. They thrive in active, dynamic environments and are often natural leaders or pioneers. Their life path revolves around embracing challenges, cultivating their inner warrior, and channeling their energy in constructive and purposeful ways.",
      Jupiter: "Jupiter as the Chart Ruler suggests a life devoted to expansion, optimism, and the pursuit of wisdom and truth. These individuals have a naturally exuberant and open-minded outlook, often seeking to explore the world through travel, education, or spiritual discovery. They possess a strong sense of morality or philosophy, often inspiring others with their generosity and belief in the greater good. With Jupiter as their Chart Ruler, they thrive when they embrace growth, step out of their comfort zone, and allow their innate luck and confidence to guide them. However, they may need to guard against overconfidence, excess, or recklessness. Their life journey often revolves around exploring life's broader meaning, inspiring others, and seeking personal enlightenment.",
      Saturn: "Saturn as the Chart Ruler emphasizes structure, responsibility, and discipline as central life themes for these individuals. They often have a strong sense of duty, practicality, and resilience, and they are known for their ability to navigate life’s challenges with determination and patience. Hard work, long-term planning, and a commitment to creating stability are critical components of their path. Although they may feel restricted or burdened by obligations at times, Saturn's Chart Ruler grants profound strength and wisdom in the long run. They often achieve success through persistence and maturity, but they may need to avoid becoming overly rigid, pessimistic, or resistant to change. Their journey involves mastering self-discipline, developing a sense of inner security, and balancing responsibility with personal fulfillment.",
      Uranus: "Uranus as the Chart Ruler signifies a focus on individuality, innovation, and breaking free from tradition. These individuals are often progressive, unconventional thinkers who embrace change and challenge societal norms. They value freedom and authenticity, leading them to pursue a life that reflects their unique vision and ideals. With Uranus as their Chart Ruler, they are often drawn to cutting-edge ideas, humanitarian causes, or revolutionary advancements, and they tend to bring electrifying energy to their surroundings. However, they may struggle with restlessness, detachment, or rebelliousness if they become too fixated on resisting conformity. Their life path often involves bringing about change, embracing their individuality, and finding ways to contribute to collective progress.",
      Neptune: "Neptune as the Chart Ruler highlights a life of heightened intuition, creativity, and connection to the spiritual or ethereal realms. These individuals are often compassionate dreamers with an extraordinary sense of imagination and a deep sensitivity to the emotions and energies around them. Neptune's influence can manifest as artistic talent, profound empathy, or a desire to merge with something greater. However, they may need to guard against escapism, illusion, or overidealization, which can cloud their judgment or disconnect them from reality. Their life journey often involves learning to balance their spiritual and artistic aspirations with practical concerns, embracing their dreams while staying grounded in the material world.",
      Pluto: "Pluto as the Chart Ruler imbues individuals with a profound ability to transform themselves and others. These people are often drawn to intense, deep, and sometimes mysterious themes, seeking to uncover hidden truths and explore the depths of life's meaning. They possess a magnetic presence and are capable of enormous personal growth and renewal through periods of challenge and destruction. Themes of power, control, and rebirth frequently emerge in their life, and they often experience significant turning points that propel them toward reinvention. With Pluto as their Chart Ruler, they have the potential for incredible psychological insight and resilience, but they may need to overcome tendencies toward obsession, manipulation, or secrecy. Their life path centers on self-empowerment, embracing transformation, and uncovering their authentic core.",
      
      // Chart Ruler in the Zodiac Signs
      Aries: "When the Chart Ruler is in Aries, individuals are naturally assertive and passionate. They possess leadership qualities and a pioneering spirit, often taking initiative and forging bold paths. Impatience and impulsivity may also surface, but these qualities drive their dynamic presence.",
      Taurus: "With the Chart Ruler in Taurus, individuals are grounded, patient, and focused on stability and comfort. There is a deep connection to the material world, a love for beauty, and persistence in achieving goals. They are reliable and seek security in both emotional and financial aspects.",
      Gemini: "When the Chart Ruler is in Gemini, people are sociable, curious, and highly adaptable. They communicate with ease and often possess a sharp intellect. Their need for variety and exploration makes them natural learners and networkers, though they may struggle with inconsistency.",
      Cancer: "With the Chart Ruler in Cancer, sensitivity, nurturing energy, and a strong emotional core are highlights. These individuals are deeply intuitive and protective, valuing family and home. Their empathetic nature allows them to connect with others on a profound level.",
      Leo: "The Chart Ruler in Leo indicates a larger-than-life personality, creativity, and a desire to shine. These individuals crave recognition and thrive when given the opportunity to lead or perform, often radiating warmth and enthusiasm.",
      Virgo: "When the Chart Ruler is in Virgo, individuals are highly analytical, practical, and detail-oriented. They seek perfection and often take pride in their ability to serve others. Their focus on refinement can lead to overthinking or self-criticism.",
      Libra: "With the Chart Ruler in Libra, balance, harmony, and partnerships take center stage. These individuals are diplomatic and value beauty, fairness, and relationships. Their charm and ability to mediate make them natural peacekeepers.",
      Scorpio: "When the Chart Ruler is in Scorpio, individuals are intense, transformative, and deeply introspective. They have a natural magnetism and seek out depth and growth in their lives, often embracing themes of power and rebirth.",
      Sagittarius: "With the Chart Ruler in Sagittarius, individuals are adventurous, optimistic, and philosophical. They are driven by an urge to explore new horizons, whether physical, intellectual, or spiritual, and often inspire others with their enthusiasm.",
      Capricorn: "The Chart Ruler in Capricorn suggests ambition, discipline, and a focus on long-term achievement. These individuals are responsible and steadfast, prioritizing structure and practicality. They thrive in pursuing success but may experience pressure to meet high standards.",
      Aquarius: "When the Chart Ruler is in Aquarius, independence, innovation, and visionary thinking define these individuals. They are forward-thinking and value authenticity, often working to bring change and progress to the collective.",
      Pisces: "The Chart Ruler in Pisces fosters sensitivity, imagination, and a deep connection to the spiritual realm. These individuals are compassionate dreamers who tap into creativity and intuition. They may feel drawn to help others and explore mystical concepts.",

      // Chart Ruler in the Houses
      First: "When the Chart Ruler is in the First House, the individual's sense of self and identity is prominent. They are highly focused on personal growth and leave a strong impression on others. Their vitality and purpose are deeply tied to their personality and outer expression.",
      Second: "With the Chart Ruler in the Second House, security and values are central themes. These individuals are often focused on building resources, financial stability, and self-worth, finding strength in material and emotional comfort.",
      Third: "When the Chart Ruler is in the Third House, communication, learning, and mental stimulation are key. These individuals are curious about the world and adept at expressing themselves, thriving in environments that encourage intellectual exchange.",
      Fourth: "With the Chart Ruler in the Fourth House, home, family, and emotional foundations are priorities. These individuals seek security and roots in their personal lives, often being deeply connected to their past or heritage.",
      Fifth: "When the Chart Ruler is in the Fifth House, creativity, self-expression, and joy are their focus. These individuals are playful and enthusiastic, often experiencing fulfillment through art, romance, and leisure activities.",
      Sixth: "With the Chart Ruler in the Sixth House, service, health, and routine play an essential role. Individuals with this placement thrive in structured environments focused on improving themselves and others, often excelling at practical tasks.",
      Seventh: "When the Chart Ruler is in the Seventh House, partnerships and relationships take center stage. These individuals value companionship and often seek balance and harmony through significant relationships or partnerships.",
      Eighth: "With the Chart Ruler in the Eighth House, transformation, intimacy, and deep personal growth are major themes. These individuals are drawn to life's mysteries and may experience profound shifts through shared resources, power, and emotional bonds.",
      Ninth: "When the Chart Ruler is in the Ninth House, exploration, travel, and philosophical growth define their path. These individuals are seekers of truth and meaning, often engaged in higher education, spirituality, or cultural exchange.",
      Tenth: "With the Chart Ruler in the Tenth House, career, reputation, and public life are primary focuses. These individuals are goal-oriented and thrive when pursuing long-term ambitions, leaving their mark on the world.",
      Eleventh: "When the Chart Ruler is in the Eleventh House, friendships, community, and humanitarian goals shape their purpose. These individuals are visionaries who aim to connect with others and contribute to the collective good.",
      Twelfth: "With the Chart Ruler in the Twelfth House, introspection, spirituality, and the subconscious are key themes. These individuals are deeply reflective and often feel drawn to inner work, healing, or uncovering hidden truths.",
    }
  };
  
  export default planetsTransit;
  