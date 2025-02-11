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
    transitSigns:
    {
    "Aries": "When the Sun transits Aries, it brings energy and initiative to new beginnings. This is a time for taking action, starting new projects, and asserting yourself with renewed confidence and vigor. You may feel more energetic than usual, making it an excellent period for leadership activities and personal projects that require courage and determination.",
    
    "Taurus": "The Sun's transit through Taurus emphasizes material security and comfort, bringing attention to financial matters and personal resources. This period favors focusing on practical concerns and establishing stable foundations in various areas of life. It's an ideal time for managing finances, enjoying physical pleasures, and working on projects that require patience and persistence.",
    
    "Gemini": "During the Sun's transit in Gemini, communication and learning are highlighted, making it an excellent time for networking, studying, writing, or any activity involving information exchange. Mental activity is increased, and you may find yourself engaged in multiple conversations or projects simultaneously. Social connections are emphasized, and your curiosity about various subjects may lead to exciting discoveries and new relationships.",
    
    "Cancer": "The Sun's transit through Cancer brings focus to home, family, and emotional matters, making it a time when domestic concerns take center stage. This transit encourages nurturing relationships, undertaking home improvements, and connecting more deeply with family members. You may feel more intuitive and protective during this period, with a stronger desire to create a secure and comfortable environment for yourself and loved ones.",
    
    "Leo": "When the Sun transits Leo, creative self-expression and recreation are highlighted, bringing opportunities for showcasing talents and enjoying entertainment. This is a time when your natural leadership abilities may shine through, and you might find yourself in the spotlight more often than usual. Romance and creative projects are especially favored during this transit, as your confidence and charisma are enhanced.",
    
    "Virgo": "The Sun's transit through Virgo emphasizes work, health, and practical organization, making it an excellent time for getting your life in order. This period promotes attention to detail and efficiency in daily routines, while also encouraging a focus on health and wellness practices. You may find yourself more analytical and service-oriented during this time, with a strong drive to improve and perfect various aspects of your life.",
    
    "Libra": "During the Sun's transit in Libra, relationships and partnerships come into sharp focus, creating opportunities for meaningful connections and diplomatic exchanges. This is a favorable time for negotiations, creating harmony in relationships, and addressing matters of justice and balance in your life. You may find yourself more focused on creating peace and beauty in your environment while working to maintain equilibrium in your partnerships.",
    
    "Scorpio": "The Sun's transit through Scorpio brings attention to deeper psychological matters and shared resources, often triggering profound personal transformations. This is a time for exploring life's mysteries, dealing with joint finances, and diving deep into emotional or psychological issues that need attention. The transit can bring hidden matters to light and strengthen your ability to handle complex situations with greater insight and power.",
    
    "Sagittarius": "When the Sun transits Sagittarius, expansion and adventure are highlighted, creating perfect conditions for exploring new horizons and broadening your perspective. This is an excellent time for travel, higher education, and engaging with different cultures or philosophical ideas. You may feel more optimistic and adventurous during this period, with a strong desire to learn and grow through new experiences.",
    
    "Capricorn": "The Sun's transit through Capricorn emphasizes career and public standing, bringing focus to professional goals and responsibilities. This period often corresponds with increased ambition and a stronger drive to achieve concrete results in your chosen field. You may find yourself more concerned with status and recognition during this time, while also feeling more capable of handling important responsibilities and building your reputation.",
    
    "Aquarius": "During the Sun's transit in Aquarius, group activities and future planning are highlighted, making it an excellent time for networking and collaborative projects. This period encourages innovative thinking and may bring opportunities to contribute to humanitarian causes or group endeavors. You might feel more drawn to unconventional ideas and feel a stronger connection to your unique role within your community or social groups.",
    
    "Pisces": "The Sun's transit through Pisces brings focus to spiritual and artistic matters, encouraging a period of reflection and creative inspiration. This transit often increases sensitivity to subtle energies and enhances imagination and intuition. You may feel more connected to your inner world during this time, with a stronger desire to express yourself through artistic means or explore spiritual practices."
    },
    transitHouses:
    {
    "First": "The Sun transiting the First House brings intense focus to personal identity and self-expression, marking a period of increased vitality and personal presence. This is a time when you may feel more confident and self-assured, with a stronger sense of your own direction and purpose. New beginnings are highly favored during this transit, and others may be particularly drawn to your energy and leadership qualities.",
    
    "Second": "During a Second House transit, the Sun illuminates financial matters and personal values, bringing opportunities to review and strengthen your resource management. This is an excellent time to make important financial decisions, focus on building security, and clarify your personal worth and values. You may find yourself more concerned with material comfort and security during this period, with increased motivation to improve your financial situation.",
    
    "Third": "The Sun's transit through the Third House energizes communication and local activities, making it an especially productive time for learning, writing, and connecting with others in your immediate environment. This period favors short trips, interactions with siblings or neighbors, and any activities that involve gathering or sharing information. Your mind may be particularly active during this time, with increased curiosity and desire to express your ideas.",
    
    "Fourth": "When the Sun transits the Fourth House, domestic matters come into sharp focus, bringing attention to home, family, and emotional needs. This is a time when property matters may require attention, and you might feel a stronger connection to your roots and family heritage. The transit often corresponds with important developments in your home life and can bring opportunities to strengthen your emotional foundations.",
    
    "Fifth": "The Sun's transit through the Fifth House brings powerful energy to creative projects and recreational activities, highlighting opportunities for self-expression and enjoyment. This is a particularly favorable time for romance, entertainment, and activities involving children or creative ventures. You may feel more playful and confident during this period, with increased desire to express your unique talents and pursue pleasurable activities.",
    
    "Sixth": "During a Sixth House transit, the Sun highlights work and health matters, bringing focus to daily routines and service to others. This is an excellent time to establish new health practices, improve work efficiency, and attend to practical details in your life. The transit often increases your ability to analyze situations and find practical solutions, while also emphasizing the importance of maintaining physical and mental well-being.",
    
    "Seventh": "The Sun transiting the Seventh House brings significant focus to partnerships and relationships, illuminating both opportunities and challenges in your connections with others. This period favors collaboration, negotiations, and addressing relationship matters that require attention or resolution. You may find yourself more oriented toward others during this time, with increased awareness of how to create balance and harmony in your partnerships.",
    
    "Eighth": "When the Sun moves through the Eighth House, it illuminates shared resources and transformation, often bringing significant changes or revelations in areas of joint finances or intimate relationships. This transit can bring focus to psychological matters and may trigger deep personal transformations or important discoveries about yourself. It's a powerful time for dealing with shared resources, investments, and exploring the deeper aspects of life.",
    
    "Ninth": "The Sun's transit through the Ninth House energizes expansion and learning, creating excellent opportunities for broadening your horizons through travel or education. This is a favorable time for exploring new philosophical perspectives, engaging with foreign cultures, or pursuing higher education goals. The transit often brings increased optimism and a stronger desire to understand life's bigger questions.",
    
    "Tenth": "During a Tenth House transit, the Sun highlights career and public image, bringing increased visibility and potential recognition in your professional life. This is a time when professional matters and achievements come into focus, and you may find yourself in positions of greater responsibility or authority. The transit often corresponds with important career developments and opportunities to enhance your reputation or status.",
    
    "Eleventh": "The Sun transiting the Eleventh House brings energy and attention to group activities and future plans, highlighting your role within larger organizations or social networks. This period favors networking, working with organizations, and pursuing long-term goals that benefit both you and others. You may feel more connected to group causes and humanitarian concerns during this time, with increased awareness of your place within your community.",
    
    "Twelfth": "When the Sun moves through the Twelfth House, it illuminates the hidden aspects of life, bringing attention to spiritual matters and behind-the-scenes activities. This is a time for reflection, inner work, and dealing with private or confidential matters that require attention. The transit often increases sensitivity and intuition, while also providing opportunities for healing and connecting with your spiritual nature."
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
      "Aries": "When the Moon transits Aries, emotions are quick, impulsive, and filled with pioneering energy. This is a time of increased emotional courage and spontaneity, when people feel more assertive and independent than usual, often acting on their feelings without hesitation. The transit brings a powerful urge to initiate new projects that require emotional investment, though it's important to balance this passionate energy with some forethought and consideration.",
      
      "Taurus": "The Moon's transit through Taurus brings a deep need for emotional and material security, often expressed through seeking comfort in physical pleasures and practical activities. During this time, people tend to process their feelings more slowly and deliberately, with a strong desire for stability and tangible expressions of comfort. This transit is particularly favorable for financial decisions, enjoying sensual experiences, and creating material security, though there may be a tendency toward emotional stubbornness.",
      
      "Gemini": "During the Moon's transit in Gemini, emotional expression becomes more verbal and intellectual, with feelings being processed through communication and mental analysis. This is a time of increased social interaction and curiosity, when people feel a strong need to share their thoughts and emotions with others. The transit supports learning, short trips, and varied social connections, though emotions may seem somewhat scattered or changeable during this period.",
      
      "Cancer": "The Moon's transit through Cancer heightens emotional sensitivity and creates a strong focus on domestic matters and security needs. During this time, people feel more nurturing and protective, with an increased awareness of their own and others' emotional needs. This transit is particularly powerful for family activities, emotional healing, and creating comfort in the home environment, though it may also bring heightened mood swings and sensitivity to criticism.",
      
      "Leo": "When the Moon transits Leo, emotional expression becomes more dramatic, warm, and creative, with a stronger need for recognition and appreciation. This transit brings increased confidence in expressing feelings and a desire to share emotions in grand, theatrical ways. It's an excellent time for entertainment, romance, and creative self-expression, though there may be a tendency toward emotional drama or attention-seeking behavior.",
      
      "Virgo": "The Moon's transit through Virgo brings an analytical approach to emotions, encouraging a practical and methodical handling of feelings. During this time, people tend to process emotions through productive activities and problem-solving, with a focus on details and practical matters. This transit supports organizing, health matters, and systematic approaches to emotional issues, though there may be a tendency to over-analyze feelings.",
      
      "Libra": "During the Moon's transit in Libra, emotional focus turns strongly toward relationships and the creation of harmony in all areas of life. This transit brings increased diplomacy and a desire for balance, making it easier to see multiple perspectives and find common ground. Social activities and negotiations are particularly favored, though there may be a tendency to avoid emotional confrontations in favor of keeping peace.",
      
      "Scorpio": "The Moon's transit through Scorpio deepens emotional intensity and perception, bringing powerful feelings and transformative experiences to the surface. During this time, people tend to experience emotions more profoundly and may be drawn to explore the hidden aspects of situations. This transit is excellent for research and dealing with deep emotional issues, though it may also bring up intense feelings that require careful handling.",
      
      "Sagittarius": "When the Moon transits Sagittarius, emotions become more optimistic and expansive, with a strong desire for freedom and new experiences. This transit brings increased interest in learning and adventure, encouraging emotional growth through exploration and higher understanding. It's an excellent time for travel, study, and philosophical pursuits, though there may be a tendency to avoid deeper emotional commitments.",
      
      "Capricorn": "The Moon's transit through Capricorn brings emotional reserve and practicality, with feelings being expressed through achievement and structured activities. This transit increases focus on goals and responsibilities, encouraging a more disciplined approach to emotional matters. It's particularly good for business matters and long-term planning, though there may be a tendency to suppress emotions in favor of practical considerations.",
      
      "Aquarius": "During the Moon's transit in Aquarius, emotional expression becomes more detached and intellectualized, with a strong focus on humanitarian concerns and group dynamics. This transit increases interest in innovative solutions and collective activities, encouraging emotional processing through social involvement and future-oriented thinking. It's excellent for networking and innovative projects, though personal emotions may be harder to access.",
      
      "Pisces": "The Moon's transit through Pisces heightens intuition and emotional sensitivity, creating a deeply empathetic and imaginative period. During this time, boundaries between self and others become more fluid, and there's increased access to the collective unconscious. This transit is particularly powerful for spiritual activities and artistic pursuits, though it may also bring emotional confusion and difficulty maintaining practical focus."
      },
      transitHouses: {
        "First": "The Moon transiting the First House brings powerful emotional focus to personal matters and self-expression, making feelings more immediate and visible to others. During this transit, you may feel more sensitive and reactive than usual, with emotions clearly showing on your face and in your body language. This is an excellent time for personal care and expressing feelings authentically, though you may need to be mindful of becoming too wrapped up in emotional reactions.",
        
        "Second": "During a Second House transit, the Moon highlights emotional security needs and material concerns, bringing feelings about resources and values to the forefront. This transit often triggers awareness of financial matters and possessions as they relate to emotional well-being and security. It's an excellent time for financial planning and comfort-seeking activities, though there may be a tendency to try to satisfy emotional needs through material purchases.",
        
        "Third": "The Moon's transit through the Third House activates communication and local connections, making emotional expression more verbal and increasing sensitivity to the immediate environment. During this time, feelings tend to be processed through conversation, writing, and movement, with a stronger connection to siblings and neighbors. This transit supports writing, short trips, and communication activities, though emotions may feel somewhat scattered or changeable.",
        
        "Fourth": "When the Moon transits the Fourth House, emotional focus turns intensely to home and family matters, bringing private feelings and domestic concerns to the surface. This transit creates a strong need for emotional security and connection with family members or close loved ones. It's particularly powerful for home activities and family gatherings, though it may also bring up unresolved family issues or emotional patterns from the past.",
        
        "Fifth": "The Moon's transit through the Fifth House stimulates emotional creativity and increases the need for pleasure and self-expression. During this transit, feelings are often expressed through creative activities, romance, or interaction with children. This is an excellent time for entertainment and creative expression, though there may be a tendency toward emotional drama or seeking attention through feelings.",
        
        "Sixth": "During a Sixth House transit, the Moon highlights the connection between emotions and daily routines, bringing awareness to how feelings affect health and work life. This transit creates a need to be useful and to express emotions through service to others or attention to practical matters. It's excellent for organizing and attending to health needs, though there may be a tendency to worry about details or become overly critical.",
        
        "Seventh": "The Moon transiting the Seventh House brings emotional focus to relationships and partnerships, making feelings about others more prominent and immediate. During this transit, emotional needs are often met through interaction with others, and there's increased sensitivity to relationship dynamics. This is a powerful time for collaboration and relationship matters, though there may be strong projection of feelings onto others.",
        
        "Eighth": "When the Moon moves through the Eighth House, it intensifies emotional experiences and brings awareness to shared resources and deeper psychological matters. This transit often triggers powerful feelings and transformative experiences, making it excellent for emotional healing and dealing with financial partnerships. The period may bring up intense emotions or power dynamics that require careful handling.",
        
        "Ninth": "The Moon's transit through the Ninth House stimulates emotional expansion and creates a need for broader understanding of feelings and experiences. During this transit, emotions are often processed through learning, travel, or exploration of philosophical ideas. This is an excellent time for study, travel, and philosophical pursuits, though there may be a tendency to intellectualize emotions.",
        
        "Tenth": "During a Tenth House transit, the Moon highlights the connection between emotions and public life, bringing feelings about career and status to the surface. This transit often creates emotional awareness of professional matters and relationships with authority figures. It's powerful for career decisions and public appearances, though personal feelings may become entangled with professional concerns.",
        
        "Eleventh": "The Moon transiting the Eleventh House activates emotional connections to groups and collective concerns, bringing feelings about friendship and future goals to the forefront. This transit creates increased sensitivity to group dynamics and collective emotions. It's excellent for group work and social networking, though there may be tension between personal emotional needs and group expectations.",
        
        "Twelfth": "When the Moon moves through the Twelfth House, it brings powerful focus to subconscious patterns and spiritual matters, often triggering deep emotional experiences and intuitive insights. During this transit, private emotions and hidden feelings surface, making it an excellent time for reflection and spiritual activities. The period may bring up complex emotions that require processing in solitude or with trusted confidants."
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
      "Aries": "When Mercury transits Aries, communication becomes more direct, assertive, and energetic, with thoughts and words flowing quickly and spontaneously. This transit supports quick decision-making and the confident expression of ideas, making it excellent for initiating new conversations and pursuing mental challenges. While this period enhances mental courage and pioneering thoughts, there's a need to watch for impulsive speech or rushing to conclusions without considering all perspectives.",
      
      "Taurus": "Mercury's transit through Taurus brings practical and methodical thinking, encouraging a more grounded and systematic approach to communication and learning. During this time, ideas tend to develop slowly but surely, with a strong focus on practical applications and tangible results. This transit is particularly favorable for financial planning, making concrete decisions, and communicating with persistence, though mental flexibility may be challenged.",
      
      "Gemini": "During Mercury's transit in Gemini, communication and learning are powerfully highlighted, creating a period of increased mental activity and curiosity about diverse subjects. This is an excellent time for networking, writing, teaching, and gathering information from multiple sources, as mental agility and versatility are enhanced. The transit brings a natural flow to communication and learning, though focusing on one topic may require extra effort.",
      
      "Cancer": "Mercury transiting Cancer brings emotional depth to thinking and communication, creating a period where thoughts and words are colored by feelings and intuition. This transit enhances memory and emotional intelligence, making it particularly good for family discussions and understanding emotional patterns. Communication becomes more nurturing and protective, though logical objectivity may need extra attention.",
      
      "Leo": "When Mercury moves through Leo, communication becomes more dramatic, creative, and expressive, with a strong desire to share ideas in entertaining and memorable ways. This transit supports leadership communication, presentations, and creative writing, bringing warmth and charisma to intellectual expression. While mental confidence is enhanced, there may be a tendency toward dramatic or ego-centered thinking.",
      
      "Virgo": "Mercury's transit through Virgo brings highly analytical thinking and meticulous attention to detail, creating an excellent period for editing, organizing information, and solving practical problems. Critical thinking and discriminating analysis are enhanced during this time, supporting detailed work and practical planning. While mental precision is heightened, perfectionism may need to be managed.",
      
      "Libra": "During Mercury's transit in Libra, diplomatic communication is strongly emphasized, with a focus on fairness, balance, and harmonious expression. This period excels for negotiations, mediating conflicts, and finding balanced solutions to complex problems. Social communication flows smoothly, though decision-making may be slowed by the desire to consider all perspectives.",
      
      "Scorpio": "Mercury transiting Scorpio deepens thinking and investigation, bringing a powerful focus to research and strategic planning. During this time, communication becomes more intense and penetrating, with a strong ability to uncover hidden information and understand complex motivations. While investigative skills are enhanced, there may be a tendency toward suspicious or obsessive thinking.",
      
      "Sagittarius": "When Mercury moves through Sagittarius, thinking becomes more expansive and optimistic, encouraging exploration of broader horizons and big-picture concepts. This transit supports learning about foreign cultures, philosophy, and long-range planning, bringing an adventurous quality to mental pursuits. While vision and enthusiasm are enhanced, attention to detail may need extra focus.",
      
      "Capricorn": "Mercury's transit through Capricorn brings practical and structured thinking, with a strong focus on achievement and organizational matters. This period supports business communication, long-term planning, and setting concrete goals, with enhanced ability to think strategically. While mental discipline is strong, flexibility and creativity may need conscious development.",
      
      "Aquarius": "During Mercury's transit in Aquarius, innovative thinking is highlighted, bringing fresh perspectives and unconventional approaches to problem-solving. This period excels for group projects, technological matters, and developing progressive ideas. While mental originality and humanitarian thinking are enhanced, practical application may require extra attention.",
      
      "Pisces": "Mercury transiting Pisces brings intuitive and creative thinking, enhancing imagination and empathetic understanding. This transit supports artistic expression, spiritual studies, and subtle forms of communication, bringing a poetic quality to mental processes. While intuitive insights are strong, maintaining clarity and practical focus may require extra effort."
      },
      transitHouses: {
        "First": "Mercury transiting the First House brings intense focus to personal expression and self-presentation, making it an excellent time for developing your communication style and personal brand. During this period, you may find yourself more articulate and eager to share your thoughts and ideas with others, with increased awareness of how you come across in communication. This transit supports starting new studies, expressing personal views, and making important first impressions, though you may need to guard against talking too much about yourself.",
        
        "Second": "During Second House transits, Mercury highlights financial thinking and resource management, bringing mental focus to practical matters and value systems. This period excels for budgeting, financial planning, and discussing material concerns, with enhanced ability to think clearly about resources and security needs. The transit supports developing practical skills and expressing your values, though there may be a tendency to worry about material matters.",
        
        "Third": "Mercury's transit through the Third House powerfully activates local communication and learning, creating a busy period of information exchange and mental activity. This transit excels for writing, studying, taking short trips, and connecting with siblings or neighbors, with enhanced ability to gather and share information. While communication flows naturally during this time, mental scattered-ness may need to be managed.",
        
        "Fourth": "When Mercury transits the Fourth House, mental focus turns strongly to home and family matters, bringing attention to domestic communication and personal history. This period supports family discussions, home planning, and exploring your roots, with enhanced ability to understand and express emotional needs. The transit brings deeper insight into personal patterns, though objectivity about family matters may be challenged.",
        
        "Fifth": "Mercury's transit through the Fifth House stimulates creative thinking and self-expression, bringing mental energy to recreational and romantic pursuits. This period excels for creative writing, teaching children, or romantic communication, with enhanced ability to express yourself in entertaining ways. While creative thinking flows naturally, there may be a tendency toward dramatic or showy communication.",
        
        "Sixth": "During Sixth House transits, Mercury highlights work communication and practical planning, bringing mental focus to daily routines and problem-solving. This period supports organizing, analyzing details, and conducting health-related research, with enhanced ability to think critically and systematically. While analytical skills are strong, perfectionism may need to be managed.",
        
        "Seventh": "Mercury transiting the Seventh House focuses intensely on partnership communication and relationship dynamics, creating a period of increased dialogue and negotiation. This transit excels for counseling, important relationship conversations, and collaborative thinking, with enhanced ability to see others' perspectives. While diplomatic communication is supported, maintaining your own viewpoint may require extra effort.",
        
        "Eighth": "When Mercury moves through the Eighth House, deep research and investigation are highlighted, bringing mental focus to complex or hidden matters. This period supports financial planning, psychological insights, and discussing shared resources, with enhanced ability to understand deeper motivations. While investigative thinking is powerful, obsessive thoughts may need to be managed.",
        
        "Ninth": "Mercury's transit through the Ninth House activates higher learning and broad thinking, creating a period of intellectual expansion and philosophical exploration. This transit supports study, publishing, travel planning, and engaging with different cultures or belief systems, with enhanced ability to understand big-picture concepts. While vision is enhanced, practical details may need extra attention.",
        
        "Tenth": "During Tenth House transits, Mercury highlights career communication and professional expression, bringing focus to public speaking and business matters. This period supports professional presentations, job interviews, and business planning, with enhanced ability to communicate with authority figures. While professional communication is strengthened, personal matters may require additional attention.",
        
        "Eleventh": "Mercury transiting the Eleventh House activates group communication and future planning, creating a period of increased interaction with organizations and social networks. This transit supports team projects, networking, and organizational activities, with enhanced ability to contribute to collective discussions. While group communication flows naturally, individual expression may need conscious development.",
        
        "Twelfth": "When Mercury moves through the Twelfth House, private research and reflection are highlighted, bringing mental focus to spiritual or behind-the-scenes matters. This period supports journaling, meditation, and private planning, with enhanced ability to access intuitive insights. While inner understanding is deepened, clear external communication may require extra effort."
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
      "Aries": "When Venus transits Aries, social interactions become more direct, passionate, and energetically charged, bringing a bold and adventurous quality to relationships and artistic pursuits. This transit supports taking initiative in relationships and making confident style changes, with increased courage in expressing affection and desires. While this period enhances romantic spontaneity and excitement, there's a need to be mindful of impulsiveness in spending or rushing into romantic situations without proper consideration.",
      
      "Taurus": "Venus's transit through Taurus brings a strong focus to material pleasures, comfort, and sensual enjoyment, creating a period of enhanced appreciation for beauty and physical delights. This transit excels for financial planning, strengthening existing relationships through practical demonstrations of affection, and enjoying life's sensual pleasures. The period brings stability to relationships and finances, though there may be a tendency toward possessiveness or overindulgence.",
      
      "Gemini": "During Venus's transit in Gemini, social connections flourish through communication and intellectual exchange, creating a period of enhanced social versatility and curiosity. This transit supports networking, light romantic encounters, and exploring diverse social circles with a playful, curious attitude. While mental rapport and social flexibility are enhanced, emotional depth in relationships may require extra attention.",
      
      "Cancer": "Venus transiting Cancer brings emotional depth and nurturing qualities to relationships, creating a period focused on emotional security and domestic harmony. This transit supports home decoration, family gatherings, and developing nurturing connections with loved ones. While emotional bonds are strengthened during this time, there may be a tendency toward moodiness or overprotectiveness in relationships.",
      
      "Leo": "When Venus moves through Leo, romance becomes more dramatic and expressive, with a strong desire to demonstrate love through grand gestures and creative displays. This transit supports creative projects, entertainment activities, and generous expressions of affection. While romantic confidence and creativity are enhanced, there may be a tendency toward excessive showing off or attention-seeking in relationships.",
      
      "Virgo": "Venus's transit through Virgo brings practical focus and attention to detail in relationships and financial matters, creating a period of careful analysis and improvement. This transit supports relationship problem-solving, health improvements, and organizing finances with precision. While practical demonstrations of love are enhanced, there may be a tendency toward overcritical analysis of relationships.",
      
      "Libra": "During Venus's transit in Libra, harmony and partnership are strongly emphasized, creating a period of enhanced diplomatic skills and appreciation for balance in relationships. This transit excels for negotiations, initiating new relationships, and appreciating artistic beauty. While social grace and charm are heightened, decision-making in relationships may require extra effort.",
      
      "Scorpio": "Venus transiting Scorpio deepens emotional connections and intensifies experiences of intimacy and shared resources. This transit supports development of intimate relationships, joint financial ventures, and transformative artistic projects. While emotional depth and passion are enhanced, there may be a tendency toward possessiveness or emotional manipulation.",
      
      "Sagittarius": "When Venus moves through Sagittarius, relationships expand through adventure and philosophical connection, bringing optimism and freedom to love matters. This transit supports travel with partners, cultural experiences, and forming long-distance connections. While relationship horizons expand, maintaining commitment may require extra attention.",
      
      "Capricorn": "Venus's transit through Capricorn brings practical focus and traditional values to relationships and financial matters, creating a period of increased stability and commitment. This transit supports long-term relationship planning, business partnerships, and sound investment decisions. While security in relationships is enhanced, spontaneity may need conscious development.",
      
      "Aquarius": "During Venus's transit in Aquarius, unconventional relationships and group connections are highlighted, bringing innovation to love matters and social interactions. This transit supports group activities, humanitarian projects, and friendship-based relationships. While social idealism is enhanced, emotional intimacy may require extra attention.",
      
      "Pisces": "Venus transiting Pisces brings romantic idealism and artistic inspiration, creating a period of enhanced empathy and spiritual connection in relationships. This transit supports spiritual and creative partnerships, artistic projects, and compassionate relationships. While romantic imagination is heightened, maintaining practical boundaries may require extra effort."
      },
    transitHouses: {
      "First": "Venus transiting the First House brings enhanced personal charm and attractiveness, creating a period where your natural appeal and social graces are heightened. This transit supports personal makeovers, improving self-image, and initiating new relationships with confidence. While personal magnetism is strong during this time, there may be a tendency toward excessive focus on appearance or self-indulgence.",
      
      "Second": "During Second House transits, Venus highlights financial opportunities and material pleasures, bringing focus to personal resources and values. This transit supports wise investments, considered purchases of luxury items, and improving income through creative or artistic means. While financial opportunities may increase, careful management of resources remains important.",
      
      "Third": "Venus's transit through the Third House activates pleasant communications and harmonious local connections, creating a period of enhanced social interaction in your immediate environment. This transit supports writing love letters, taking romantic short trips, and engaging in harmonious discussions with siblings or neighbors. While communication flows smoothly, maintaining depth in relationships may require effort.",
      
      "Fourth": "When Venus transits the Fourth House, focus turns strongly to home life and family relationships, creating a period of domestic harmony and aesthetic improvements to living spaces. This transit supports home decoration, family celebrations, and creating beautiful, harmonious domestic environments. While family relationships are enhanced, balance with outside interests may need attention.",
      
      "Fifth": "Venus's transit through the Fifth House stimulates romance, creativity, and pleasure, bringing focus to matters of the heart and artistic expression. This transit strongly supports dating, creative projects, and enjoying recreational activities. While pleasure and romance flow naturally, practical responsibilities may need extra attention.",
      
      "Sixth": "During Sixth House transits, Venus brings harmony to work environments and daily routines, creating more pleasant conditions in everyday life. This transit supports improving work relationships, enhancing health through enjoyable activities, and finding beauty in routine tasks. While daily life becomes more pleasant, avoiding overindulgence is important.",
      
      "Seventh": "Venus transiting the Seventh House focuses intensely on partnerships and relationships, creating a period of enhanced diplomatic skills and partnership opportunities. This transit strongly supports marriage, forming business partnerships, and improving existing relationships through compromise and cooperation. While partnership matters flow smoothly, maintaining individuality may require effort.",
      
      "Eighth": "When Venus moves through the Eighth House, intimate relationships and shared resources are highlighted, bringing focus to deep emotional connections and financial partnerships. This transit supports joint ventures, deepening emotional bonds, and transformative experiences in relationships. While intimate connections deepen, maintaining healthy boundaries may be important.",
      
      "Ninth": "Venus's transit through the Ninth House activates long-distance relationships and cultural appreciation, creating a period of expanded horizons in love and aesthetics. This transit supports travel romance, higher education in arts, and broadening relationship perspectives through cultural exchange. While relationship expansion is favored, maintaining existing connections may need attention.",
      
      "Tenth": "During Tenth House transits, Venus brings benefits through career and public image, creating opportunities for professional advancement through charm and diplomacy. This transit supports professional relationships, public recognition, and career advancement through social skills. While professional matters are enhanced, personal relationships may require extra attention.",
      
      "Eleventh": "Venus transiting the Eleventh House activates social connections and group activities, bringing focus to friendship networks and collective endeavors. This transit supports networking, group projects, and forming meaningful friendships through shared ideals. While group connections are enhanced, individual romantic needs may require balance.",
      
      "Twelfth": "When Venus moves through the Twelfth House, secret romances and spiritual connections are highlighted, creating a period of enhanced sensitivity and psychological insight in relationships. This transit supports private artistic projects, healing relationship issues, and developing spiritual connections. While inner understanding deepens, clear communication in relationships may require extra effort."
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
      "Aries": "When Mars transits Aries, energy levels surge dramatically and initiative becomes remarkably strong, creating a powerful period for taking action and pursuing personal goals. This transit excels for starting new projects, taking leadership roles, and pursuing independent ventures with confidence and courage. While physical energy and assertiveness are heightened, there's a need to carefully manage impulsiveness and potential confrontations that may arise from excessive aggression.",
      
      "Taurus": "Mars's transit through Taurus brings steady, determined action with a strong focus on practical accomplishments and material security. During this period, energy is best applied to concrete goals and tangible results, with particular emphasis on financial initiatives and resource building. While this transit supports persistent effort and practical achievements, there may be a tendency toward stubbornness or resistance to change that needs managing.",
      
      "Gemini": "During Mars's transit in Gemini, mental energy is significantly heightened, creating a period of increased intellectual activity and verbal expression. This transit supports communication projects, learning new skills, and engaging in intellectual debates with enhanced mental agility. While multiple projects and interests can be pursued simultaneously, there may be a tendency toward scattered energy or mental restlessness that requires focusing.",
      
      "Cancer": "Mars transiting Cancer brings emotional drive and protective instincts to the forefront, creating a period where actions are strongly influenced by feelings and security needs. This transit supports home improvements, family-related activities, and pursuing emotional security through action. While emotional motivation is enhanced, there may be a tendency toward defensive reactions or mood-driven decisions that need balancing.",
      
      "Leo": "When Mars moves through Leo, creative and dramatic expression becomes energized, bringing a powerful boost to performance abilities and leadership potential. This transit supports artistic pursuits, romantic initiatives, and taking center stage with confidence and enthusiasm. While competitive spirit and creative energy are heightened, there may be a need to manage ego-driven conflicts or excessive showmanship.",
      
      "Virgo": "Mars's transit through Virgo brings precise focus to detailed work and practical improvements, creating a period of methodical action and analytical problem-solving. This transit supports organizing projects, health initiatives, and efficiency improvements through careful attention to detail. While practical effectiveness is enhanced, perfectionism or excessive criticism may need to be managed.",
      
      "Libra": "During Mars's transit in Libra, energy is directed toward partnerships and diplomatic negotiations, creating a period where balanced action and cooperation become crucial. This transit supports collaborative projects and conflict resolution through skillful compromise and negotiation. While relationship dynamics are energized, there may be challenges in balancing assertiveness with peacekeeping.",
      
      "Scorpio": "Mars transiting Scorpio intensifies drive and determination, bringing powerful focus to deep investigation and transformative projects. This transit supports research, strategic planning, and projects requiring intense concentration and psychological insight. While focused power and strategic thinking are enhanced, there may be a tendency toward power struggles or obsessive behavior.",
      
      "Sagittarius": "When Mars moves through Sagittarius, energy expands toward new horizons and adventurous pursuits, creating enthusiasm for exploration and learning. This transit supports travel, educational ventures, and physical activities that broaden experience and understanding. While expansive energy is enhanced, there may be a tendency toward overconfidence or scattered efforts.",
      
      "Capricorn": "Mars's transit through Capricorn brings disciplined action and strategic focus to long-term goals, creating a period of increased ambition and practical achievement. This transit supports career initiatives, structured planning, and methodical progress toward objectives. While professional drive is enhanced, there may be a tendency toward workaholic behavior or excessive rigidity.",
      
      "Aquarius": "During Mars's transit in Aquarius, group activities and innovative projects become energized, bringing focus to collective action and progressive initiatives. This transit supports teamwork, humanitarian efforts, and pursuing unconventional solutions with independent thinking. While group dynamics are enhanced, there may be tension between individual action and collective needs.",
      
      "Pisces": "Mars transiting Pisces brings subtle action and spiritual drive, creating a period where indirect approaches and intuitive timing become important. This transit supports creative projects, spiritual pursuits, and behind-the-scenes work requiring sensitivity and imagination. While intuitive action is enhanced, there may be challenges in maintaining clear direction or practical focus."
      },
      transitHouses: {
        "First": "Mars transiting the First House brings powerful energy to personal initiatives and self-assertion, creating a period of increased physical vitality and personal drive. This transit strongly supports starting new projects, expressing leadership qualities, and pursuing personal goals with renewed vigor and confidence. While personal energy and initiative are heightened, there may be a need to manage aggressive tendencies or excessive self-focus.",
        
        "Second": "During Second House transits, Mars energizes financial matters and resource management, creating a period of increased drive toward material security and wealth building. This transit supports earning opportunities, resource development, and practical achievements through direct action. While financial initiative is enhanced, careful management of impulsive spending or resource depletion becomes important.",
        
        "Third": "Mars's transit through the Third House activates communication and local connections with increased energy and assertiveness. This transit strongly supports writing projects, verbal expression, and dynamic interaction with siblings or neighbors. While mental energy and local activity are enhanced, there may be a tendency toward argumentative communication that needs moderating.",
        
        "Fourth": "When Mars transits the Fourth House, domestic matters and family issues demand active attention and energy, creating a period of increased focus on home and emotional security. This transit supports home improvements, family leadership, and resolving domestic conflicts through direct action. While home-based activities are energized, family tensions may require careful handling.",
        
        "Fifth": "Mars's transit through the Fifth House energizes creative expression and recreational pursuits, bringing increased vitality to romantic interests and personal pleasures. This transit strongly supports sports activities, entertainment ventures, and creative projects requiring physical energy. While competitive spirit and creative drive are enhanced, romantic conflicts may need attention.",
        
        "Sixth": "During Sixth House transits, Mars brings dynamic energy to work and health matters, creating a period of increased focus on practical improvements and physical well-being. This transit supports workplace efficiency, health regimens, and problem-solving through direct action. While productive energy is enhanced, work-related stress or health issues may require management.",
        
        "Seventh": "Mars transiting the Seventh House activates partnership dynamics and relationship conflicts, creating a period of increased focus on interpersonal assertion and cooperation. This transit supports addressing relationship issues directly and pursuing collaborative ventures actively. While partnership energy is enhanced, open conflicts may require diplomatic handling.",
        
        "Eighth": "When Mars moves through the Eighth House, shared resources and transformative processes become energized, creating a period of intense focus on joint ventures and power dynamics. This transit supports financial partnerships, psychological exploration, and addressing deep-seated issues through direct action. While transformative energy is enhanced, power struggles may need careful navigation.",
        
        "Ninth": "Mars's transit through the Ninth House activates higher learning and expansion, creating a period of increased energy for educational pursuits and philosophical exploration. This transit supports travel adventures, academic achievements, and physical activities that broaden horizons. While exploratory energy is enhanced, overconfidence in opinions may need tempering.",
        
        "Tenth": "During Tenth House transits, Mars energizes career matters and public action, creating a period of increased professional drive and ambition. This transit supports career initiatives, leadership opportunities, and pursuit of professional goals through direct action. While professional energy is enhanced, conflicts with authority may require careful handling.",
        
        "Eleventh": "Mars transiting the Eleventh House activates group dynamics and collective goals, creating a period of increased energy for team projects and social initiatives. This transit supports group leadership, humanitarian efforts, and pursuing shared objectives through collective action. While group energy is enhanced, conflicts within organizations may need attention.",
        
        "Twelfth": "When Mars moves through the Twelfth House, behind-the-scenes work and spiritual pursuits become energized, creating a period of subtle but powerful action. This transit supports private projects, spiritual practices, and working effectively in isolation or secret. While hidden energy is enhanced, direct action may be challenged, requiring patience and indirect approaches."
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
      "Aries": "When Jupiter transits Aries, opportunities arise through personal initiative, leadership, and pioneering activities, creating a period of expansive personal growth and new beginnings. This transit strongly supports starting new ventures, taking calculated risks, and asserting yourself with confidence in various life areas. Personal growth through courage and independence is highlighted during this time, though there may be a need to balance enthusiasm with practical considerations and avoid overconfidence.",
      
      "Taurus": "Jupiter's transit through Taurus brings significant opportunities in financial and material matters, creating a period of potential abundance and resource expansion. This transit supports investments, building material security, and enjoying life's physical pleasures with greater appreciation. Growth comes through practical application of values and careful resource management, though there may be a tendency toward overindulgence that needs monitoring.",
      
      "Gemini": "During Jupiter's transit in Gemini, opportunities flourish through learning, communication, and diverse experiences, creating a period of mental expansion and social connection. This transit excels for writing projects, teaching endeavors, short trips, and networking activities that broaden your knowledge and connections. Mental expansion through varied experiences is highlighted, though maintaining focus and depth may require extra attention.",
      
      "Cancer": "Jupiter transiting Cancer brings opportunities through emotional and domestic matters, creating a period of potential growth in home, family, and emotional security. This transit supports real estate ventures, family expansion, and emotional growth through nurturing activities. Security and emotional well-being are favored, though there may be a tendency toward overprotectiveness that needs balancing.",
      
      "Leo": "When Jupiter moves through Leo, opportunities arise through creative expression, leadership, and self-actualization, creating a period of personal recognition and joyful expansion. This transit strongly supports performance activities, romantic ventures, and speculative investments that showcase personal talents. Growth through self-expression and leadership is highlighted, though ego inflation may need monitoring.",
      
      "Virgo": "Jupiter's transit through Virgo brings opportunities through service, skill improvement, and attention to detail, creating a period of practical growth and development. This transit supports health initiatives, work advancement, and problem-solving through careful analysis. Growth comes through precision and improvement, though perfectionism may need moderating.",
      
      "Libra": "During Jupiter's transit in Libra, opportunities develop through partnerships and cooperative ventures, creating a period of relationship expansion and artistic growth. This transit supports legal matters, relationship development, and artistic pursuits that require balance and cooperation. Harmony and justice are highlighted, though dependency on others may need balancing.",
      
      "Scorpio": "Jupiter transiting Scorpio brings opportunities through transformation and shared resources, creating a period of deep psychological and financial growth. This transit supports investments, research projects, and psychological development through intense experiences. Deep understanding and regeneration are favored, though obsessive tendencies may need moderating.",
      
      "Sagittarius": "When Jupiter moves through Sagittarius, opportunities explode through education and travel, creating a period of philosophical expansion and adventure. This transit strongly supports publishing ventures, foreign connections, and philosophical pursuits that broaden horizons. Expansion of worldview is highlighted, though overextension may need managing.",
      
      "Capricorn": "Jupiter's transit through Capricorn brings opportunities through career development and structured growth, creating a period of professional expansion and achievement. This transit supports professional advancement, long-term planning, and building solid foundations for future success. Growth through discipline is emphasized, though workaholism may need balancing.",
      
      "Aquarius": "During Jupiter's transit in Aquarius, opportunities arise through group activities and innovative thinking, creating a period of social expansion and technological advancement. This transit supports technological ventures, humanitarian projects, and networking activities that promote progress through originality. Group connection is highlighted, though detachment may need moderating.",
      
      "Pisces": "Jupiter transiting Pisces brings opportunities through spiritual and artistic pursuits, creating a period of intuitive expansion and creative inspiration. This transit supports creative projects, spiritual growth, and compassionate service activities that develop inner wisdom. Intuitive development is highlighted, though escapist tendencies may need managing."
      },
      transitHouses: {
        "First": "Jupiter transiting the First House brings significant opportunities for personal growth and new beginnings, creating a period of expanded self-awareness and personal development. This transit strongly supports self-improvement initiatives, starting new ventures, and expanding your personal presence in the world. While optimism and confidence are enhanced, there may be a need to balance personal expansion with consideration for others.",
        
        "Second": "During Second House transits, Jupiter brings expansive opportunities for financial growth and resource development, creating a period of potential material abundance. This transit supports investments, income increase, and building material security through optimistic but careful planning. While financial opportunities increase, careful management of resources remains important to avoid overextension.",
        
        "Third": "Jupiter's transit through the Third House activates learning and communication opportunities, creating a period of mental expansion and increased local connections. This transit supports writing projects, studies, local travel, and sibling relationships with enhanced understanding and optimism. While mental horizons expand, maintaining focus and practical application may require attention.",
        
        "Fourth": "When Jupiter transits the Fourth House, opportunities develop through home and family matters, creating a period of domestic expansion and emotional growth. This transit supports real estate ventures, home improvements, and strengthening family bonds through generous interaction. While domestic life expands, balance with outside interests remains important.",
        
        "Fifth": "Jupiter's transit through the Fifth House brings abundant opportunities in creativity and pleasure, creating a period of expanded self-expression and joy. This transit supports romantic ventures, artistic pursuits, and activities involving children with increased confidence and enthusiasm. While creative expression flows freely, practical responsibilities still need attention.",
        
        "Sixth": "During Sixth House transits, Jupiter brings opportunities through work and health matters, creating a period of job expansion and improved well-being. This transit supports job advancement, health improvement routines, and skill development through optimistic effort. While work opportunities increase, avoiding overcommitment becomes important.",
        
        "Seventh": "Jupiter transiting the Seventh House activates significant partnership opportunities, creating a period of relationship expansion and beneficial collaborations. This transit supports relationship development, contract negotiations, and working with others through mutual growth. While partnerships flourish, maintaining independence remains important.",
        
        "Eighth": "When Jupiter moves through the Eighth House, opportunities arise through shared resources and transformation, creating a period of deep personal growth and joint ventures. This transit supports investments, psychological development, and transformative experiences with optimistic courage. While joint resources may increase, careful management of shared responsibilities is crucial.",
        
        "Ninth": "Jupiter's transit through the Ninth House brings abundant opportunities for higher learning and travel, creating a period of philosophical expansion and adventure. This transit supports educational pursuits, publishing ventures, and exploring new territories with enthusiasm and optimism. While horizons expand dramatically, practical application of knowledge remains important.",
        
        "Tenth": "During Tenth House transits, Jupiter brings significant career opportunities and public recognition, creating a period of professional expansion and achievement. This transit supports career advancement, goal achievement, and public reputation enhancement through optimistic effort. While professional opportunities increase, work-life balance needs attention.",
        
        "Eleventh": "Jupiter transiting the Eleventh House activates opportunities through groups and friendships, creating a period of social expansion and collective achievement. This transit supports networking, group projects, and long-term goal achievement through collective effort. While social connections expand, personal boundaries may need maintenance.",
        
        "Twelfth": "When Jupiter moves through the Twelfth House, opportunities develop through spiritual and private matters, creating a period of inner growth and spiritual expansion. This transit supports spiritual development, private projects, and working behind the scenes with intuitive guidance. While inner growth deepens, maintaining practical grounding remains important."
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
      "Aries": "When Saturn transits Aries, profound lessons emerge through self-assertion and independence, creating a period of structured personal development and mature leadership growth. This transit requires developing disciplined initiative and careful planning, often through challenges that test patience and self-restraint. While personal drive may feel restricted, the period teaches valuable lessons about responsible self-expression and the importance of sustainable action over impulsive moves.",
      
      "Taurus": "Saturn's transit through Taurus brings serious lessons in material security and value systems, creating a period of practical foundation-building and resource management. This transit demands establishing stable financial foundations and developing responsible approaches to material matters. While material growth may feel slow or restricted, the period teaches essential lessons about long-term security and the true value of resources.",
      
      "Gemini": "During Saturn's transit in Gemini, significant lessons arise through communication and learning processes, creating a period of mental discipline and structured education. This transit requires developing precise thinking and serious study habits, often through challenges that test verbal responsibility and mental focus. While communication may feel restricted, the period teaches valuable lessons about the power and consequences of words.",
      
      "Cancer": "Saturn transiting Cancer brings critical lessons in emotional security and nurturing relationships, creating a period of emotional maturation and boundary setting. This transit demands establishing healthy emotional boundaries and developing mature family relationships. While emotional expression may feel constrained, the period teaches essential lessons about emotional self-sufficiency and responsible care-giving.",
      
      "Leo": "When Saturn moves through Leo, important lessons emerge through self-expression and creativity, creating a period of disciplined performance and authentic leadership development. This transit requires developing structured creative processes and responsible self-presentation. While creative expression may feel restricted, the period teaches valuable lessons about sustainable confidence and authentic authority.",
      
      "Virgo": "Saturn's transit through Virgo brings detailed lessons in service and skill development, creating a period of technical mastery and systematic improvement. This transit demands perfecting techniques and establishing efficient work systems. While progress may seem slow and demanding, the period teaches essential lessons about practical mastery and productive discipline.",
      
      "Libra": "During Saturn's transit in Libra, significant lessons come through relationships and balance, creating a period of partnership maturation and fair negotiation skills. This transit requires developing mature approaches to relationships and establishing clear boundaries. While partnerships may face challenges, the period teaches valuable lessons about commitment and mutual responsibility.",
      
      "Scorpio": "Saturn transiting Scorpio brings intense lessons in shared resources and transformation, creating a period of deep psychological growth and financial partnership development. This transit demands establishing trust in joint ventures and emotional depth in relationships. While intimacy may feel restricted, the period teaches essential lessons about responsible sharing and psychological maturity.",
      
      "Sagittarius": "When Saturn moves through Sagittarius, profound lessons emerge through belief systems and expansion, creating a period of philosophical maturation and realistic goal setting. This transit requires establishing sound philosophical foundations and achievable long-term objectives. While expansion may feel limited, the period teaches valuable lessons about practical wisdom and responsible growth.",
      
      "Capricorn": "Saturn's transit through Capricorn brings powerful lessons in authority and achievement, creating a period of professional development and structural integrity. This transit demands establishing solid professional foundations and realistic long-term goals. While progress may seem slow, the period teaches essential lessons about authentic mastery and responsible leadership.",
      
      "Aquarius": "During Saturn's transit in Aquarius, significant lessons arise through group dynamics and innovation, creating a period of social responsibility and progressive structure building. This transit requires establishing sustainable humanitarian systems and responsible community involvement. While social freedom may feel restricted, the period teaches valuable lessons about collective responsibility.",
      
      "Pisces": "Saturn transiting Pisces brings deep lessons in spirituality and surrender, creating a period of spiritual discipline and practical compassion development. This transit demands establishing grounded spiritual practices and realistic approaches to compassionate service. While spiritual freedom may feel constrained, the period teaches essential lessons about practical wisdom and responsible spirituality."
      },
      transitHouses: {
        "First": "Saturn transiting the First House brings significant lessons in personal responsibility and self-discipline, creating a period of identity reconstruction and boundary setting. This transit requires establishing mature self-expression and developing sustainable personal habits. While personal freedom may feel restricted, the period leads to greater self-mastery and authentic presence through careful self-development.",
        
        "Second": "During Second House transits, Saturn brings crucial lessons in financial responsibility and resource management, creating a period of material restructuring and value clarification. This transit requires establishing solid financial foundations and developing practical resource management skills. While material comfort may be restricted, the period leads to lasting financial security through disciplined planning.",
        
        "Third": "Saturn's transit through the Third House brings important lessons in communication and local connections, creating a period of mental discipline and structured learning. This transit requires establishing serious study habits and developing precise communication skills. While movement and communication may feel restricted, the period leads to mental maturity and intellectual authority.",
        
        "Fourth": "When Saturn transits the Fourth House, profound lessons emerge through home and family matters, creating a period of domestic restructuring and emotional foundation building. This transit requires establishing stable home environments and developing mature family relationships. While domestic life may feel restrictive, the period leads to emotional maturity and stable foundations.",
        
        "Fifth": "Saturn's transit through the Fifth House brings significant lessons in creative discipline and responsible pleasure, creating a period of structured creativity and mature self-expression. This transit requires establishing serious creative projects and developing disciplined approaches to enjoyment. While pleasure may feel restricted, the period leads to lasting creative achievements.",
        
        "Sixth": "During Sixth House transits, Saturn brings important lessons in work and health discipline, creating a period of practical mastery and routine establishment. This transit requires developing efficient systems and establishing healthy habits. While daily responsibilities may increase, the period leads to practical mastery and improved well-being through disciplined effort.",
        
        "Seventh": "Saturn transiting the Seventh House brings crucial lessons in relationship commitment and boundaries, creating a period of partnership maturation and responsibility. This transit requires establishing mature relationships and developing clear partnership boundaries. While relationships may face delays or restrictions, the period leads to lasting and meaningful connections.",
        
        "Eighth": "When Saturn moves through the Eighth House, deep lessons emerge through shared resources and transformation, creating a period of joint venture development and psychological growth. This transit requires establishing trusted financial partnerships and developing emotional depth. While intimacy may feel restricted, the period leads to profound trust and psychological maturity.",
        
        "Ninth": "Saturn's transit through the Ninth House brings significant lessons in higher learning and belief systems, creating a period of philosophical maturation and wisdom development. This transit requires establishing sound philosophical foundations and developing practical wisdom. While expansion may feel limited, the period leads to genuine expertise and mature understanding.",
        
        "Tenth": "During Tenth House transits, Saturn brings powerful lessons in career and public responsibility, creating a period of professional development and authority building. This transit requires establishing professional foundations and developing leadership skills. While workload may increase, the period leads to lasting achievement and authentic authority.",
        
        "Eleventh": "Saturn transiting the Eleventh House brings important lessons in group responsibility and future planning, creating a period of social maturation and goal setting. This transit requires establishing realistic long-term objectives and developing mature group relationships. While social life may feel restricted, the period leads to lasting friendships and achieved aspirations.",
        
        "Twelfth": "When Saturn moves through the Twelfth House, profound lessons emerge through spiritual discipline and inner work, creating a period of psychological development and spiritual maturation. This transit requires establishing spiritual practices and developing inner strength. While isolation may occur, the period leads to deep wisdom and spiritual maturity through careful internal work."
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
      "Aries": "When Uranus transits Aries, sudden and revolutionary changes emerge through personal identity and initiative, creating a period of radical self-discovery and unprecedented independence. This transit brings breakthrough moments in self-expression and pioneering activities, often through unexpected events that challenge traditional approaches to leadership and personal action. While this period energizes individual freedom and innovation, it may also bring disruptions that require balancing revolutionary impulses with practical considerations.",
      
      "Taurus": "Uranus's transit through Taurus brings unexpected and revolutionary changes in financial and material matters, creating a period of radical innovation in resource management and value systems. This transit catalyzes breakthroughs in approaches to money, possessions, and environmental concerns, often through surprising events that challenge traditional economic and material security concepts. While this period stimulates financial innovation, it may also bring upheavals that require balancing revolutionary changes with stability needs.",
      
      "Gemini": "During Uranus's transit in Gemini, sudden changes dramatically affect communication and learning patterns, creating a period of technological breakthrough and revolutionary information exchange. This transit brings radical developments in education and local connections, often through unexpected discoveries that transform traditional communication methods. While this period accelerates mental innovation, it may also bring communication disruptions that require balancing revolutionary ideas with clear expression.",
      
      "Cancer": "Uranus transiting Cancer brings unexpected changes in home life and emotional patterns, creating a period of breakthrough in family dynamics and security needs. This transit catalyzes revolutionary approaches to nurturing and emotional expression, often through surprising events that challenge traditional family and emotional patterns. While this period stimulates emotional liberation, it may also bring domestic upheavals that require balancing revolutionary changes with emotional security.",
      
      "Leo": "When Uranus moves through Leo, sudden changes affect creative expression and romantic life, creating a period of breakthrough in entertainment and self-expression. This transit brings revolutionary approaches to leadership and pleasure, often through unexpected events that challenge traditional forms of creativity and romance. While this period energizes creative innovation, it may also bring disruptions that require balancing revolutionary expression with authentic stability.",
      
      "Virgo": "Uranus's transit through Virgo brings unexpected changes in work and health routines, creating a period of breakthrough in service methods and skill development. This transit catalyzes revolutionary approaches to wellness and daily efficiency, often through surprising discoveries that transform traditional work and health practices. While this period stimulates practical innovation, it may also bring routine disruptions that require balancing revolutionary methods with systematic progress.",
      
      "Libra": "During Uranus's transit in Libra, sudden changes affect partnerships and social justice issues, creating a period of breakthrough in relationship patterns and cooperation methods. This transit brings revolutionary approaches to balance and harmony, often through unexpected events that challenge traditional relationship structures. While this period energizes social innovation, it may also bring partnership upheavals that require balancing revolutionary changes with stable connections.",
      
      "Scorpio": "Uranus transiting Scorpio brings unexpected changes in shared resources and transformation processes, creating a period of breakthrough in psychological understanding and joint ventures. This transit catalyzes revolutionary approaches to power and intimacy, often through surprising events that challenge traditional financial and emotional partnerships. While this period stimulates deep innovation, it may also bring intense upheavals that require balancing revolutionary insights with practical stability.",
      
      "Sagittarius": "When Uranus moves through Sagittarius, sudden changes affect belief systems and higher learning, creating a period of breakthrough in philosophical understanding and cultural exchange. This transit brings revolutionary approaches to education and cultural exploration, often through unexpected events that challenge traditional belief systems. While this period energizes intellectual expansion, it may also bring philosophical disruptions that require balancing revolutionary ideas with practical wisdom.",
      
      "Capricorn": "Uranus's transit through Capricorn brings unexpected changes in career and authority structures, creating a period of breakthrough in professional life and responsibility patterns. This transit catalyzes revolutionary approaches to achievement and social status, often through surprising events that challenge traditional career paths. While this period stimulates professional innovation, it may also bring structural upheavals that require balancing revolutionary changes with stable progress.",
      
      "Aquarius": "During Uranus's transit in Aquarius, sudden changes affect group consciousness and future vision, creating a period of breakthrough in technological development and social movements. This transit brings revolutionary approaches to humanitarian causes and collective progress, often through unexpected events that transform traditional social structures. While this period energizes social innovation, it may also bring collective disruptions that require balancing revolutionary ideas with practical implementation.",
      
      "Pisces": "Uranus transiting Pisces brings unexpected changes in spiritual awareness and collective consciousness, creating a period of breakthrough in artistic expression and universal understanding. This transit catalyzes revolutionary approaches to compassion and unity, often through surprising events that challenge traditional spiritual and artistic expressions. While this period stimulates spiritual innovation, it may also bring psychic upheavals that require balancing revolutionary insights with grounded awareness."
      },
      transitHouses: {
        "First": "Uranus transiting the First House brings sudden and dramatic changes to personal identity and self-expression, creating a period of radical self-discovery and unprecedented personal freedom. This transit often triggers unexpected changes in appearance, behavior, and life direction, while awakening new ways of being and self-presentation. While this period energizes personal reinvention, it may also bring disruptions that require balancing revolutionary changes with authentic stability.",
        
        "Second": "During Second House transits, Uranus brings unexpected changes to finances and personal values, creating a period of breakthrough in resource management and value systems. This transit often triggers sudden financial opportunities or losses, while awakening new approaches to material security and worth. While this period stimulates financial innovation, it may also bring material upheavals that require balancing revolutionary methods with practical stability.",
        
        "Third": "Uranus's transit through the Third House brings sudden changes to communication patterns and learning processes, creating a period of mental awakening and intellectual breakthrough. This transit often triggers unexpected travel or revolutionary ideas, while transforming traditional ways of thinking and expressing. While this period energizes mental innovation, it may also bring communication disruptions that require balancing revolutionary ideas with clear expression.",
        
        "Fourth": "When Uranus transits the Fourth House, sudden changes affect home life and family patterns, creating a period of domestic awakening and emotional liberation. This transit often triggers unexpected moves or family developments, while transforming traditional domestic structures. While this period stimulates home innovation, it may also bring domestic upheavals that require balancing revolutionary changes with emotional security.",
        
        "Fifth": "Uranus's transit through the Fifth House brings sudden changes to creative expression and romantic life, creating a period of creative awakening and unprecedented self-expression. This transit often triggers unexpected love affairs or artistic breakthroughs, while transforming traditional approaches to pleasure and creativity. While this period energizes creative innovation, it may also bring romantic disruptions that require balancing revolutionary expression with authentic connection.",
        
        "Sixth": "During Sixth House transits, Uranus brings unexpected changes to work and health routines, creating a period of breakthrough in daily life patterns and wellness approaches. This transit often triggers sudden job changes or health insights, while transforming traditional work and health practices. While this period stimulates practical innovation, it may also bring routine disruptions that require balancing revolutionary methods with systematic progress.",
        
        "Seventh": "Uranus transiting the Seventh House brings sudden changes to partnerships and relationship patterns, creating a period of relationship awakening and social breakthrough. This transit often triggers unexpected encounters or partnership developments, while transforming traditional relationship structures. While this period energizes relationship innovation, it may also bring partnership upheavals that require balancing revolutionary changes with stable connections.",
        
        "Eighth": "When Uranus moves through the Eighth House, sudden changes affect shared resources and transformation processes, creating a period of psychological breakthrough and financial revolution. This transit often triggers unexpected windfalls or losses, while transforming traditional approaches to intimacy and joint ventures. While this period stimulates deep innovation, it may also bring intense upheavals that require balancing revolutionary insights with practical stability.",
        
        "Ninth": "Uranus's transit through the Ninth House brings sudden changes to beliefs and long-distance matters, creating a period of philosophical awakening and cultural breakthrough. This transit often triggers unexpected travel or educational opportunities, while transforming traditional belief systems. While this period energizes intellectual expansion, it may also bring philosophical disruptions that require balancing revolutionary ideas with practical wisdom.",
        
        "Tenth": "During Tenth House transits, Uranus brings unexpected changes to career and public status, creating a period of professional breakthrough and social revolution. This transit often triggers sudden career changes or recognition, while transforming traditional professional structures. While this period stimulates career innovation, it may also bring professional upheavals that require balancing revolutionary changes with stable progress.",
        
        "Eleventh": "Uranus transiting the Eleventh House brings sudden changes to friendships and group associations, creating a period of social awakening and collective breakthrough. This transit often triggers unexpected connections or group developments, while transforming traditional social networks. While this period energizes social innovation, it may also bring group disruptions that require balancing revolutionary ideas with practical cooperation.",
        
        "Twelfth": "When Uranus moves through the Twelfth House, sudden changes affect spiritual life and hidden matters, creating a period of spiritual awakening and unconscious breakthrough. This transit often triggers unexpected revelations or intuitive breakthroughs, while transforming traditional spiritual approaches. While this period stimulates spiritual innovation, it may also bring psychic upheavals that require balancing revolutionary insights with grounded awareness."
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
      "Aries": "When Neptune transits Aries, spiritual awareness profoundly affects personal identity and initiative, creating a period of mystical self-discovery and inspired action. This transit brings heightened intuition to self-expression and personal direction, while gradually dissolving ego-based limitations and rigid self-concepts. While this period enhances spiritual connection to personal purpose, it may also bring confusion about identity and direction that requires balancing inspiration with practical grounding.",
      
      "Taurus": "Neptune's transit through Taurus brings spiritual awareness to material matters and sensual experience, creating a period of artistic inspiration and transcendent appreciation of physical reality. This transit dissolves rigid value systems while enhancing intuitive connection to resources and natural beauty. While this period deepens spiritual connection to the material world, it may also bring confusion about values and resources that requires balancing idealism with practical management.",
      
      "Gemini": "During Neptune's transit in Gemini, spiritual awareness transforms communication and learning processes, creating a period of poetic inspiration and intuitive thinking. This transit dissolves logical boundaries while enhancing psychic reception and imaginative expression. While this period strengthens intuitive communication, it may also bring mental confusion that requires balancing inspiration with clear thinking.",
      
      "Cancer": "Neptune transiting Cancer brings spiritual awareness to emotional life and nurturing activities, creating a period of enhanced empathy and intuitive connection to others. This transit dissolves emotional barriers while deepening compassionate understanding and sensitivity. While this period enriches emotional awareness, it may also bring emotional confusion that requires balancing sensitivity with healthy boundaries.",
      
      "Leo": "When Neptune moves through Leo, spiritual awareness influences creative expression and self-actualization, creating a period of artistic inspiration and romantic idealism. This transit dissolves creative blocks while enhancing spiritual connection to artistic endeavors and love. While this period amplifies creative inspiration, it may also bring romantic illusions that require balancing idealism with reality.",
      
      "Virgo": "Neptune's transit through Virgo brings spiritual awareness to practical matters and service, creating a period of inspired healing and intuitive problem-solving. This transit dissolves rigid routines while enhancing spiritual approaches to work and health. While this period deepens service motivation, it may also bring practical confusion that requires balancing inspiration with systematic approach.",
      
      "Libra": "During Neptune's transit in Libra, spiritual awareness transforms relationships and artistic perception, creating a period of romantic inspiration and idealistic partnership. This transit dissolves relationship boundaries while enhancing empathic connection and artistic collaboration. While this period enriches relationship ideals, it may also bring partnership confusion that requires balancing romance with reality.",
      
      "Scorpio": "Neptune transiting Scorpio brings spiritual awareness to transformation processes and deep psychology, creating a period of psychic inspiration and profound healing. This transit dissolves power structures while enhancing intuitive understanding of hidden matters. While this period deepens spiritual transformation, it may also bring psychological confusion that requires balancing insight with practical grounding.",
      
      "Sagittarius": "When Neptune moves through Sagittarius, spiritual awareness affects belief systems and higher understanding, creating a period of philosophical inspiration and expanded consciousness. This transit dissolves limiting beliefs while enhancing spiritual seeking and universal understanding. While this period enriches spiritual perspective, it may also bring philosophical confusion that requires balancing idealism with practical wisdom.",
      
      "Capricorn": "Neptune's transit through Capricorn brings spiritual awareness to material achievement and social structure, creating a period of inspired career direction and transcendent ambition. This transit dissolves rigid structures while enhancing spiritual approaches to achievement. While this period deepens purposeful work, it may also bring professional confusion that requires balancing inspiration with practical goals.",
      
      "Aquarius": "During Neptune's transit in Aquarius, spiritual awareness transforms group consciousness and collective ideals, creating a period of humanitarian inspiration and social vision. This transit dissolves social barriers while enhancing universal connection and innovative idealism. While this period enriches collective awareness, it may also bring social confusion that requires balancing ideals with practical action.",
      
      "Pisces": "Neptune transiting Pisces brings heightened spiritual awareness and universal consciousness, creating a period of profound mystical inspiration and artistic vision. This transit dissolves ego boundaries while enhancing spiritual connection and creative inspiration. While this period deepens spiritual awareness, it may also bring personal confusion that requires balancing transcendence with practical grounding."
      },
    transitHouses: {
      "First": "Neptune transiting the First House brings spiritual awareness to personal identity and self-expression, creating a period of enhanced intuition and mystical self-discovery. This transit often brings heightened sensitivity and personal inspiration, while dissolving rigid self-concepts and ego boundaries. While this period enhances spiritual connection to self, it may also bring identity confusion that requires balancing inspiration with practical self-awareness.",
      
      "Second": "During Second House transits, Neptune brings spiritual awareness to material matters and personal values, creating a period of inspired resource management and transcendent appreciation of worth. This transit often brings creative financial opportunities while dissolving materialistic attachments. While this period enhances spiritual connection to resources, it may also bring financial uncertainty that requires balancing inspiration with practical planning.",
      
      "Third": "Neptune's transit through the Third House brings spiritual awareness to communication and learning processes, creating a period of enhanced intuitive thinking and inspired expression. This transit often brings psychic insights and creative writing opportunities while dissolving mental limitations. While this period enriches mental inspiration, it may also bring communication confusion that requires balancing intuition with clear thinking.",
      
      "Fourth": "When Neptune transits the Fourth House, spiritual awareness affects home life and emotional foundations, creating a period of domestic inspiration and enhanced emotional sensitivity. This transit often brings family healing opportunities while dissolving emotional barriers. While this period deepens emotional awareness, it may also bring domestic confusion that requires balancing sensitivity with practical stability.",
      
      "Fifth": "Neptune's transit through the Fifth House brings spiritual awareness to creativity and self-expression, creating a period of artistic inspiration and romantic idealism. This transit often brings creative breakthroughs and romantic experiences while dissolving creative blocks. While this period enhances artistic inspiration, it may also bring romantic illusions that require balancing idealism with reality.",
      
      "Sixth": "During Sixth House transits, Neptune brings spiritual awareness to daily work and health matters, creating a period of inspired service and intuitive healing. This transit often brings opportunities for spiritual work while dissolving rigid routines. While this period enhances service inspiration, it may also bring practical confusion that requires balancing idealism with systematic approach.",
      
      "Seventh": "Neptune transiting the Seventh House brings spiritual awareness to relationships and partnerships, creating a period of enhanced empathy and idealistic connection. This transit often brings spiritual partnerships while dissolving relationship boundaries. While this period enriches relationship awareness, it may also bring partnership confusion that requires balancing romance with reality.",
      
      "Eighth": "When Neptune moves through the Eighth House, spiritual awareness affects shared resources and transformation processes, creating a period of psychic inspiration and deep healing. This transit often brings spiritual insights while dissolving material attachments. While this period deepens transformation, it may also bring financial confusion that requires balancing inspiration with practical management.",
      
      "Ninth": "Neptune's transit through the Ninth House brings spiritual awareness to higher learning and belief systems, creating a period of philosophical inspiration and expanded consciousness. This transit often brings spiritual study opportunities while dissolving limiting beliefs. While this period enhances spiritual understanding, it may also bring philosophical confusion that requires balancing idealism with practical wisdom.",
      
      "Tenth": "During Tenth House transits, Neptune brings spiritual awareness to career and public image, creating a period of professional inspiration and creative recognition. This transit often brings artistic opportunities while dissolving career limitations. While this period enhances career vision, it may also bring professional uncertainty that requires balancing inspiration with practical goals.",
      
      "Eleventh": "Neptune transiting the Eleventh House brings spiritual awareness to group activities and future vision, creating a period of humanitarian inspiration and collective consciousness. This transit often brings spiritual friendships while dissolving social barriers. While this period enriches group connection, it may also bring friendship confusion that requires balancing idealism with practical boundaries.",
      
      "Twelfth": "When Neptune moves through the Twelfth House, spiritual awareness is significantly heightened, creating a period of profound mystical inspiration and universal connection. This transit often brings spiritual experiences while dissolving ego boundaries. While this period deepens spiritual awareness, it may also bring psychological confusion that requires balancing transcendence with practical grounding."
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
      "Aries": "When Pluto transits Aries, profound transformation occurs through personal identity and willpower, creating a period of intense self-reinvention and empowerment. This transit brings deep changes to self-expression and independence, often through crisis situations that force personal evolution. While this period strengthens authentic power and self-determination, it may also trigger intense power struggles related to personal autonomy and leadership that require conscious transformation of ego-based patterns.",
      
      "Taurus": "Pluto's transit through Taurus brings deep transformation to material security and value systems, creating a period of profound change in resource management and self-worth. This transit forces evolution in approaches to survival and possession, often through experiences that challenge fundamental security needs. While this period strengthens authentic values and material power, it may also trigger intense struggles related to resources and survival that require transformation of attachment patterns.",
      
      "Gemini": "During Pluto's transit in Gemini, transformation deeply affects communication and learning processes, creating a period of profound mental evolution and information power. This transit brings revolutionary changes to thinking patterns and knowledge exchange, often through experiences that challenge intellectual foundations. While this period strengthens mental power and communication depth, it may also trigger intense struggles related to information control and mental dominance.",
      
      "Cancer": "Pluto transiting Cancer brings profound transformation to emotional life and family patterns, creating a period of deep psychological evolution and security restructuring. This transit forces changes in emotional needs and nurturing patterns, often through experiences that challenge family foundations. While this period strengthens emotional power and family bonds, it may also trigger intense struggles related to emotional control and family dynamics.",
      
      "Leo": "When Pluto moves through Leo, transformation affects creative expression and ego-identity, creating a period of profound change in self-actualization and creative power. This transit brings deep changes to self-expression and romantic patterns, often through experiences that challenge creative identity. While this period strengthens creative power and authentic leadership, it may also trigger intense struggles related to recognition and authority.",
      
      "Virgo": "Pluto's transit through Virgo brings transformation to work and health routines, creating a period of profound change in service approaches and practical efficiency. This transit forces evolution in daily responsibilities and healing methods, often through experiences that challenge established routines. While this period strengthens practical power and healing abilities, it may also trigger intense struggles related to control in work and health matters.",
      
      "Libra": "During Pluto's transit in Libra, transformation affects partnerships and balance, creating a period of profound change in relationship dynamics and cooperation patterns. This transit brings deep changes to partnership approaches, often through experiences that challenge relationship foundations. While this period strengthens relationship power and diplomatic abilities, it may also trigger intense struggles related to equality and control in partnerships.",
      
      "Scorpio": "Pluto transiting Scorpio brings transformation to psychological depths and shared resources, creating a period of profound change in intimacy and joint ventures. This transit forces evolution in power dynamics and shared control, often through experiences that challenge deep psychological patterns. While this period strengthens transformative power and intimate connections, it may also trigger intense struggles related to control and surrender.",
      
      "Sagittarius": "When Pluto moves through Sagittarius, transformation affects belief systems and expansion, creating a period of profound change in philosophical understanding and truth seeking. This transit brings deep changes to belief structures and higher learning, often through experiences that challenge established worldviews. While this period strengthens philosophical power and truth perception, it may also trigger intense struggles related to belief systems and cultural understanding.",
      
      "Capricorn": "Pluto's transit through Capricorn brings transformation to structures and authority patterns, creating a period of profound change in career and responsibility. This transit forces evolution in power structures and achievement approaches, often through experiences that challenge established hierarchies. While this period strengthens authentic authority and structural power, it may also trigger intense struggles related to status and control.",
      
      "Aquarius": "During Pluto's transit in Aquarius, transformation affects group consciousness and future vision, creating a period of profound change in social structures and technological advancement. This transit brings revolutionary changes to collective patterns and progressive movements, often through experiences that challenge established social orders. While this period strengthens collective power and innovative potential, it may also trigger intense struggles related to social control and progress.",
      
      "Pisces": "Pluto transiting Pisces brings transformation to spiritual awareness and collective unconscious, creating a period of profound change in universal connection and transcendent understanding. This transit forces evolution in spiritual awareness and collective healing, often through experiences that challenge established spiritual paradigms. While this period strengthens spiritual power and universal connection, it may also trigger intense struggles related to spiritual authority and collective transformation."
      },
    transitHouses: {
      "First": "Pluto transiting the First House brings profound transformation to personal identity and self-expression, creating a period of intense personal reinvention and empowerment. This transit often triggers deep changes in appearance, behavior, and life direction, forcing evolution through experiences that challenge self-concept. While this period strengthens personal power and authenticity, it may also bring intense power struggles related to self-expression and personal authority.",
      
      "Second": "During Second House transits, Pluto brings transformation to resources and values, creating a period of profound financial and material regeneration. This transit often triggers deep changes in resource management and self-worth, forcing evolution through experiences that challenge material security. While this period strengthens financial power and value clarity, it may also bring intense struggles related to possession and control of resources.",
      
      "Third": "Pluto's transit through the Third House brings transformation to communication patterns and mental processes, creating a period of profound intellectual regeneration. This transit often triggers deep changes in learning and local connections, forcing evolution through experiences that challenge mental habits. While this period strengthens mental power and communication depth, it may also bring intense struggles with siblings or in local environment.",
      
      "Fourth": "When Pluto transits the Fourth House, transformation affects home and family life, creating a period of profound domestic regeneration and emotional restructuring. This transit often triggers deep changes in family dynamics and living situations, forcing evolution through experiences that challenge emotional foundations. While this period strengthens emotional power and family bonds, it may also bring intense power struggles within family structure.",
      
      "Fifth": "Pluto's transit through the Fifth House brings transformation to creative expression and romantic life, creating a period of profound creative regeneration and personal power. This transit often triggers deep changes in creative projects and love relationships, forcing evolution through experiences that challenge self-expression. While this period strengthens creative power and romantic intensity, it may also bring powerful transformative experiences in love and creativity.",
      
      "Sixth": "During Sixth House transits, Pluto brings transformation to work and health patterns, creating a period of profound lifestyle regeneration and service evolution. This transit often triggers deep changes in daily routines and work situations, forcing evolution through experiences that challenge established patterns. While this period strengthens practical power and healing abilities, it may also bring intense power struggles in workplace or health matters.",
      
      "Seventh": "Pluto transiting the Seventh House brings transformation to partnerships and relationships, creating a period of profound relationship regeneration and power balance. This transit often triggers deep changes in partnerships and open enemies, forcing evolution through experiences that challenge relationship patterns. While this period strengthens relationship power and diplomatic abilities, it may also bring powerful encounters or relationship crises.",
      
      "Eighth": "When Pluto moves through the Eighth House, transformation affects shared resources and psychological patterns, creating a period of profound psychological regeneration and financial transformation. This transit often triggers deep changes in joint finances and intimate relationships, forcing evolution through experiences that challenge deep psychic patterns. While this period strengthens transformative power and intimate connections, it may also bring significant changes in shared resources or inheritance matters.",
      
      "Ninth": "Pluto's transit through the Ninth House brings transformation to beliefs and higher understanding, creating a period of profound philosophical regeneration and spiritual evolution. This transit often triggers deep changes in worldview and educational pursuits, forcing evolution through experiences that challenge belief systems. While this period strengthens philosophical power and spiritual understanding, it may also bring powerful spiritual experiences or belief crises.",
      
      "Tenth": "During Tenth House transits, Pluto brings transformation to career and public status, creating a period of profound professional regeneration and authority restructuring. This transit often triggers deep changes in career direction and public image, forcing evolution through experiences that challenge professional identity. While this period strengthens professional power and authentic authority, it may also bring intense power struggles with authority figures.",
      
      "Eleventh": "Pluto transiting the Eleventh House brings transformation to friendships and group associations, creating a period of profound social regeneration and collective evolution. This transit often triggers deep changes in friend circles and group dynamics, forcing evolution through experiences that challenge social connections. While this period strengthens group power and social influence, it may also bring powerful group experiences or friendship transformations.",
      
      "Twelfth": "When Pluto moves through the Twelfth House, transformation affects spiritual life and unconscious patterns, creating a period of profound spiritual regeneration and psychological healing. This transit often triggers deep changes in spiritual understanding and hidden aspects of life, forcing evolution through experiences that challenge unconscious patterns. While this period strengthens spiritual power and psychological insight, it may also bring powerful inner revelations or unconscious material to light."
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
  