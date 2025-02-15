const lots = {
  Fortune: {
    name: "Lot of Fortune",
    icon: "/lotfortune.svg",
    arabicName: "Pars Fortunae",
    formula: {
      day: "Ascendant + Moon - Sun",
      night: "Ascendant + Sun - Moon"
    },
    significations: [
      "Physical body and vitality",
      "Material circumstances",
      "General fortune and well-being",
      "Wealth and resources"
    ],
    keywords: [
      "body",
      "material circumstances",
      "wealth",
      "luck",
      "health",
      "prosperity"
    ],
    description: "The most important of the lots, representing one's fortune, physical body, and material circumstances, the Lot of Fortune acts as a secondary Ascendant and is crucial in determining the native's general well-being and prosperity. In traditional practice, it serves as a primary indicator for physical health conditions, significant life changes involving resources or property, and times of notable good fortune or challenge in the material realm—such as inheritance, financial windfalls, or periods of material hardship. This lot is particularly activated during major life transitions involving the body or material circumstances, such as relocations, career changes affecting income, health crises or recoveries, and it was traditionally used to time important initiatives related to business ventures, medical procedures, or any endeavor requiring physical stamina or material resources. Ancient astrologers considered its position and condition essential for determining the overall 'luck' or 'fortune' of the native, using it to assess everything from athletic ability and physical vitality to the likelihood of accumulating wealth and maintaining good health throughout life.",
    traditionalRuler: "Moon",
    houses: {
      First: "The Lot of Fortune in the first house amplifies physical vitality, health, and the native's ability to create fortunate circumstances through personal initiative. The person typically possesses a naturally robust constitution and maintains good health throughout life, with a strong ability to recover from illness. They often experience particularly good fortune when taking direct action or pursuing personal projects, and their physical appearance or personal manner itself can be a source of opportunity and good fortune.",

      Second: "When placed in the second house, the Lot of Fortune brings particular good fortune through financial matters, material resources, and personal possessions. The native often has a natural talent for accumulating wealth and maintaining financial stability, with opportunities for prosperity coming through their own efforts in managing resources. Financial security tends to be a significant source of personal well-being and vitality for these individuals, and they often find that their physical health is closely tied to their material circumstances.",
      
      Third: "The Lot of Fortune in the third house brings fortunate circumstances through communication, learning, and connections with siblings or neighbors. The native often experiences significant benefits through short journeys, educational pursuits, and daily communications, with their physical well-being enhanced by mental activity and local movement. They frequently find that their greatest opportunities and resources come through writing, teaching, or maintaining strong relationships with siblings and those in their immediate environment.",
      
      Fourth: "In the fourth house, the Lot of Fortune indicates that fortune and physical well-being are strongly connected to home, family, and property matters. The native often experiences their greatest material success and physical comfort through real estate, family inheritance, or domestic ventures. Their physical vitality is closely tied to their living situation and family relationships, with significant life improvements often coming through relocations or changes in domestic circumstances.",
      
      Fifth: "The fifth house placement brings fortune through creative expression, children, entertainment, and speculative ventures. The native's physical vitality is enhanced through pleasure, romantic relationships, and creative pursuits, with their greatest opportunities often arising through artistic endeavors or activities involving children. They frequently find that their health and material circumstances improve when they engage in recreational activities or pursue creative projects.",
      
      Sixth: "In the sixth house, the Lot of Fortune connects fortune and physical well-being to work, service, and health matters. The native often finds their greatest material success through employment, providing services to others, or health-related fields. Their physical health requires particular attention to daily routines and work-life balance, with fortunate circumstances often arising through attention to detail and practical problem-solving.",
      
      Seventh: "The seventh house placement indicates fortune coming through partnerships, relationships, and public interactions. The native's physical well-being and material circumstances are strongly influenced by their significant relationships, both personal and professional. They often experience their greatest opportunities through collaboration, marriage, or business partnerships, with their vitality enhanced through balanced relationships with others.",
      
      Eighth: "In the eighth house, the Lot of Fortune brings fortune through shared resources, transformation, and deep psychological understanding. The native often experiences significant material benefits through inheritance, investments, or other people's resources. Their physical vitality is closely connected to their ability to transform and regenerate, with fortune often manifesting through crisis situations that lead to profound personal growth.",
      
      Ninth: "The ninth house placement connects fortune to higher education, long-distance travel, and philosophical or spiritual pursuits. The native often finds their greatest opportunities through foreign connections, advanced studies, or religious/spiritual activities. Their physical well-being is enhanced through expansion of horizons and exposure to different cultures, with material success often coming through international ventures or academic achievements.",
      
      Tenth: "In the tenth house, the Lot of Fortune brings fortune through career, public status, and professional achievements. The native's physical vitality and material success are strongly tied to their professional life and public reputation. They often experience their most significant opportunities through career advancement or recognition in their field, with their overall well-being closely connected to their achievements and social status.",
      
      Eleventh: "The eleventh house placement indicates fortune coming through friendships, group associations, and long-term goals. The native often finds their greatest opportunities through social networks, community involvement, and collective enterprises. Their physical well-being is enhanced through participation in group activities and pursuit of humanitarian ideals, with material success often arising through social connections and collaborative projects.",
      
      Twelfth: "In the twelfth house, the Lot of Fortune brings fortune through spiritual pursuits, hidden matters, and work in institutions or private settings. The native's physical well-being and material circumstances are often connected to periods of retreat, spiritual practice, or work behind the scenes. They frequently find their greatest opportunities through charitable work, spiritual development, or activities that require privacy or seclusion, though they may need to overcome challenges to fully realize their fortune."
    },
    signs: {
      aries: "The Lot of Fortune in Aries brings fortune through personal initiative, physical activity, and pioneering efforts. The native often experiences significant material opportunities through direct action, leadership roles, and situations requiring courage or competitive spirit. Their physical vitality and material circumstances are strongly tied to their ability to take bold action and be first in new ventures.",

      taurus: "In Taurus, the Lot of Fortune emphasizes material security, physical comfort, and tangible resources. The native finds fortune through patient building of wealth, careful management of resources, and activities involving physical or artistic creation. Their material well-being often comes through steady, practical efforts and a strong connection to the physical world.",
      
      gemini: "The Lot of Fortune in Gemini brings fortune through communication, intellectual pursuits, and adaptability. The native often finds material success through writing, teaching, trading, or any activity involving information exchange. Their physical vitality is enhanced by mental activity and variety in their environment.",
      
      cancer: "In Cancer, the Lot of Fortune connects fortune to emotional security, family matters, and domestic concerns. The native often experiences material benefits through real estate, family businesses, or activities involving nurturing and care of others. Their physical well-being is closely tied to emotional comfort and secure foundations.",
      
      leo: "The Lot of Fortune in Leo brings fortune through creative expression, leadership, and dramatic flair. The native often finds material success through entertainment, performance, or activities involving children. Their physical vitality is enhanced by self-expression and receiving recognition for their talents.",
      
      virgo: "In Virgo, the Lot of Fortune emphasizes fortune through service, skill development, and attention to detail. The native often experiences material benefits through practical work, health-related fields, or activities requiring analysis and precision. Their physical well-being is connected to maintaining proper routines and work-life balance.",
      
      libra: "The Lot of Fortune in Libra brings fortune through partnerships, diplomatic relations, and aesthetic pursuits. The native often finds material success through collaboration, marriage, or activities involving beauty and harmony. Their physical vitality is enhanced by maintaining balanced relationships and pleasant surroundings.",
      
      scorpio: "In Scorpio, the Lot of Fortune connects fortune to shared resources, transformation, and deep investigation. The native often experiences material benefits through inheritance, joint ventures, or activities involving psychology or research. Their physical vitality is tied to their ability to transform and regenerate.",
      
      sagittarius: "The Lot of Fortune in Sagittarius brings fortune through expansion, higher learning, and international connections. The native often finds material success through travel, education, publishing, or activities involving foreign cultures. Their physical vitality is enhanced by exploration and optimistic pursuits.",
      
      capricorn: "In Capricorn, the Lot of Fortune emphasizes fortune through discipline, structure, and professional achievement. The native often experiences material benefits through business, government, or activities requiring long-term planning and ambition. Their physical vitality is connected to achieving goals and maintaining structure.",
      
      aquarius: "The Lot of Fortune in Aquarius brings fortune through innovation, group activities, and humanitarian pursuits. The native often finds material success through technology, social movements, or activities involving networks and collective efforts. Their physical vitality is enhanced by intellectual freedom and social connection.",
      
      pisces: "In Pisces, the Lot of Fortune connects fortune to spiritual pursuits, artistic inspiration, and universal connection. The native often experiences material benefits through artistic or spiritual activities, work in institutions, or activities involving compassion and service. Their physical vitality is tied to their spiritual well-being and connection to the collective."
    }
  },
  Spirit: {
    name: "Lot of Spirit",
    icon: "/lotspirit.svg",
    arabicName: "Pars Spiritus",
    formula: {
      day: "Ascendant + Sun - Moon",
      night: "Ascendant + Moon - Sun"
    },
    significations: [
      "Career and voluntary actions",
      "Soul's purpose",
      "Mental facilities",
      "Professional success"
    ],
    keywords: [
      "mind",
      "spirituality",
      "career",
      "purpose",
      "action",
      "decisions"
    ],
    description: "The Lot of Spirit represents the native's spiritual purpose, career direction, and voluntary actions, serving as a powerful indicator of one's conscious will and intentional life choices in contrast to the more circumstantial Lot of Fortune. Traditional astrologers used this lot to understand a person's vocational calling, leadership capabilities, and their capacity for self-directed achievement—particularly in areas requiring initiative, strategic thinking, or spiritual development, such as religious vocations, political careers, or positions of authority. This lot is especially significant in timing important decisions about career changes, spiritual initiations, leadership opportunities, or moments of significant personal transformation, and its condition in the natal chart can indicate whether a person will actively shape their destiny through conscious choice or tend to be more reactive to circumstances. The Lot of Spirit was traditionally considered crucial for understanding a person's reputation, their relationship with authority figures, their capacity for self-actualization, and their ability to manifest their will in the world, with its house placement and aspects often describing the arena of life where one's greatest autonomous achievements and spiritual growth would occur.",
    traditionalRuler: "Sun",
    houses: {
      First: "The Lot of Spirit in the first house amplifies personal initiative, leadership abilities, and the drive for self-actualization. The native possesses a strong sense of personal destiny and tends to actively shape their life path through conscious will and direct action. They often excel in roles requiring strong personal presence and autonomous decision-making, with their career and spiritual development being closely tied to their ability to pioneer new paths and express their authentic self.",

      Second: "In the second house, the Lot of Spirit indicates that career advancement and spiritual growth come through managing resources and developing personal values. The native often finds their calling in financial sectors, value-based enterprises, or careers involving material resources. Their professional success is frequently tied to their ability to align their work with their personal values, and they often experience spiritual growth through examining their relationship with material wealth.",
      
      Third: "The Lot of Spirit in the third house connects career success and spiritual development to communication, learning, and intellectual pursuits. The native often finds their calling in education, writing, or fields requiring strong communication skills. Their professional advancement comes through continuous learning and sharing knowledge, with their spiritual growth often occurring through teaching others or engaging in intellectual exploration of metaphysical subjects.",
      
      Fourth: "In the fourth house, the Lot of Spirit indicates that career and spiritual development are deeply connected to family traditions, emotional security, and matters of the home. The native often finds their calling in fields related to real estate, family counseling, or domestic services. Their professional success is frequently tied to building secure foundations for others, with spiritual growth occurring through understanding their ancestral roots and emotional patterns.",
      
      Fifth: "The fifth house placement brings career opportunities and spiritual growth through creative expression, leadership, and working with children. The native often finds their calling in entertainment, education, or creative fields. Their professional success comes through expressing their unique talents and taking creative risks, while their spiritual development is often linked to experiences of joy, self-expression, and nurturing others' growth.",
      
      Sixth: "In the sixth house, the Lot of Spirit indicates career success and spiritual growth through service, health-related fields, and practical problem-solving. The native often finds their calling in healthcare, social service, or analytical work. Their professional advancement comes through developing specialized skills and helping others, while their spiritual development often occurs through daily practices and attention to physical well-being.",
      
      Seventh: "The Lot of Spirit in the seventh house connects career success and spiritual growth to partnerships, counseling, and public relations. The native often finds their calling in fields requiring cooperation, mediation, or one-on-one interactions. Their professional advancement comes through developing strong relationships and working collaboratively, while their spiritual growth often occurs through understanding others and maintaining balanced partnerships.",
      
      Eighth: "In the eighth house, the Lot of Spirit indicates career success and spiritual growth through transformation, psychology, and managing shared resources. The native often finds their calling in fields related to psychology, investment, or helping others through crisis. Their professional advancement comes through dealing with profound life changes and hidden matters, while their spiritual development often occurs through confronting deep psychological truths.",
      
      Ninth: "The Lot of Spirit in the ninth house brings career opportunities and spiritual growth through higher education, international affairs, and philosophical pursuits. The native often finds their calling in academia, religious institutions, or international business. Their professional success comes through expanding their horizons and sharing wisdom, while their spiritual development often occurs through exploring different belief systems and cultural perspectives.",
      
      Tenth: "In the tenth house, the Lot of Spirit strongly emphasizes career achievement, public recognition, and leadership roles. The native often finds their calling in positions of authority or public influence. Their professional success comes through building a strong reputation and taking on leadership responsibilities, while their spiritual growth often occurs through fulfilling their social duties and achieving their ambitious goals.",
      
      Eleventh: "The Lot of Spirit in the eleventh house connects career success and spiritual growth to group activities, humanitarian causes, and future-oriented projects. The native often finds their calling in social movements, technological innovation, or community leadership. Their professional advancement comes through networking and collaborative efforts, while their spiritual development often occurs through working towards collective ideals.",
      
      Twelfth: "In the twelfth house, the Lot of Spirit indicates career success and spiritual growth through work in institutions, spiritual organizations, or behind-the-scenes roles. The native often finds their calling in spiritual counseling, charitable work, or fields requiring privacy and seclusion. Their professional advancement comes through understanding hidden patterns and serving universal causes, while their spiritual development often occurs through meditation, contemplation, and working with the unconscious."
    },
    signs: {
      aries: "The Lot of Spirit in Aries amplifies leadership abilities, entrepreneurial drive, and the courage to pioneer new paths. The native often finds their spiritual purpose and career direction through independent ventures and self-initiated projects. Their conscious will expresses itself through direct action, competitive endeavors, and situations requiring bold leadership or trailblazing spirit.",

      taurus: "In Taurus, the Lot of Spirit manifests through building lasting structures, managing resources, and creating tangible value. The native often discovers their purpose through practical endeavors, financial management, or artistic creation. Their conscious will expresses itself through patient development of skills and resources, with a focus on creating lasting security and material beauty.",
      
      gemini: "The Lot of Spirit in Gemini emphasizes intellectual pursuits, communication skills, and versatile abilities. The native often finds their spiritual purpose through teaching, writing, or facilitating communication between others. Their conscious will expresses itself through learning, sharing information, and connecting diverse ideas or people.",
      
      cancer: "In Cancer, the Lot of Spirit connects purpose to emotional understanding, nurturing others, and creating secure foundations. The native often discovers their calling through family-related ventures, emotional counseling, or creating supportive environments. Their conscious will expresses itself through intuitive guidance and protective care of others.",
      
      leo: "The Lot of Spirit in Leo manifests through creative leadership, dramatic expression, and inspiring others. The native often finds their spiritual purpose through entertainment, education, or activities that allow them to shine and share their unique gifts. Their conscious will expresses itself through dramatic presentation and heart-centered leadership.",
      
      virgo: "In Virgo, the Lot of Spirit emphasizes practical service, analytical skills, and attention to detail. The native often discovers their calling through healing work, problem-solving, or improving systems and processes. Their conscious will expresses itself through methodical analysis and practical assistance to others.",
      
      libra: "The Lot of Spirit in Libra manifests through relationship-building, diplomatic skills, and creating harmony. The native often finds their spiritual purpose through counseling, mediation, or artistic endeavors. Their conscious will expresses itself through creating balance, fostering cooperation, and promoting justice.",
      
      scorpio: "In Scorpio, the Lot of Spirit connects purpose to transformation, psychological insight, and power dynamics. The native often discovers their calling through psychological work, investigation, or managing shared resources. Their conscious will expresses itself through deep analysis and facilitating profound change.",
      
      sagittarius: "The Lot of Spirit in Sagittarius emphasizes expansion of consciousness, philosophical understanding, and cross-cultural connection. The native often finds their spiritual purpose through teaching, publishing, or international ventures. Their conscious will expresses itself through expanding horizons and sharing wisdom.",
      
      capricorn: "In Capricorn, the Lot of Spirit manifests through structured achievement, professional authority, and building lasting legacies. The native often discovers their calling through business leadership, institutional roles, or long-term planning. Their conscious will expresses itself through disciplined effort and strategic management.",
      
      aquarius: "The Lot of Spirit in Aquarius connects purpose to innovation, social reform, and group leadership. The native often finds their spiritual purpose through technological advancement, humanitarian causes, or scientific discovery. Their conscious will expresses itself through revolutionary thinking and collective progress.",
      
      pisces: "In Pisces, the Lot of Spirit emphasizes spiritual connection, artistic inspiration, and universal compassion. The native often discovers their calling through artistic expression, spiritual guidance, or service to those in need. Their conscious will expresses itself through intuitive understanding and transcendent awareness."
    }
  },
  Eros: {
    name: "Lot of Eros",
    icon: "/loteros.svg",
    arabicName: "Pars Amoris",
    formula: {
      day: "Ascendant + Spirit - Fortune",
      night: "Ascendant + Spirit - Fortune"
    },
    significations: [
      "Desire and attraction",
      "Friendship and love",
      "Creative inspiration",
      "Personal preferences"
    ],
    keywords: [
      "desire",
      "passion",
      "attraction",
      "love",
      "pleasure",
      "beauty"
    ],
    description: "The Lot of Eros reveals the nature of one's desires, attractions, and aesthetic sensibilities, indicating not only romantic inclinations but also the deeper patterns of what a person finds inherently beautiful, compelling, or worthy of pursuit in life. Traditional astrologers used this lot to understand the quality and character of a person's friendships, artistic talents, and love affairs, as well as their capacity for creative inspiration, pleasure, and joy—with its placement often describing the specific ways someone might express themselves artistically or seek fulfillment in relationships. This lot is particularly active during periods of artistic breakthrough, new romantic connections, the formation of significant friendships, or times of creative flowering, and its condition in the natal chart can indicate whether a person will easily attract what they desire or face challenges in manifesting their romantic and creative aspirations. Beyond mere romance, the Lot of Eros was considered essential for understanding a person's relationship to beauty itself, their capacity for experiencing and creating pleasure, their natural artistic talents, and the specific types of experiences, people, or creative pursuits that would most deeply satisfy their soul's longing for beauty and connection.",
    traditionalRuler: "Venus",
    houses: {
      First: "The Lot of Eros in the first house intensifies personal magnetism and creates a naturally attractive presence that draws others through force of personality alone. The native expresses their desires and creative impulses very directly, often through personal style, physical appearance, or direct pursuit of what they find beautiful. Their approach to love and creativity is deeply personal and self-directed, with romantic relationships and artistic expression being central to their identity and sense of self.",

      Second: "In the second house, the Lot of Eros connects desire and attraction to material beauty, sensual pleasures, and tangible forms of artistic expression. The native often finds fulfillment through creating or collecting beautiful objects, with their romantic nature being strongly tied to physical comfort and security. Their creative inspiration frequently manifests through tactile arts, such as sculpture or crafting, and they tend to express love through tangible gifts and material gestures of affection.",
      
      Third: "The Lot of Eros in the third house brings romantic and creative fulfillment through communication, intellectual exchange, and local connections. The native often experiences attraction through witty conversation and mental rapport, finding beauty in words and ideas. Their creative expression typically manifests through writing, speaking, or teaching, and they tend to form significant romantic connections through everyday environments like neighborhood activities or educational settings.",
      
      Fourth: "In the fourth house, the Lot of Eros indicates that romantic and creative fulfillment comes through deep emotional connections, family life, and creating beautiful domestic spaces. The native often experiences attraction through shared emotional intimacy and domestic compatibility. Their creative inspiration frequently stems from their connection to home, family traditions, and emotional memories, with their artistic expression often focusing on themes of home, family, and emotional security.",
      
      Fifth: "The fifth house placement of the Lot of Eros powerfully emphasizes romance, creative self-expression, and pleasure-seeking activities. The native experiences attraction through playful interactions, dramatic gestures, and shared creative pursuits. Their romantic nature is passionate and demonstrative, while their artistic talents often manifest through performance, entertainment, or works that celebrate joy and beauty in its most exuberant forms.",
      
      Sixth: "In the sixth house, the Lot of Eros connects romantic and creative fulfillment to service, daily work, and attention to detail. The native often finds attraction through shared work or health-related activities, with romance frequently developing from practical cooperation. Their creative expression tends to focus on craftsmanship, technique, and practical applications of beauty, with artistic pursuits that require dedication and refinement of skill.",
      
      Seventh: "The Lot of Eros in the seventh house emphasizes partnership, harmony, and the ability to create beauty through collaboration. The native experiences attraction through balanced relationships and formal partnerships, with a strong desire for committed romantic relationships. Their creative inspiration often comes through working with others, and they frequently express their artistic nature through activities that involve cooperation or public appreciation.",
      
      Eighth: "In the eighth house, the Lot of Eros indicates that romantic and creative fulfillment comes through deep psychological connection and transformation. The native experiences attraction through intense, passionate exchanges and shared moments of vulnerability. Their creative expression often explores themes of sexuality, death, rebirth, and psychological depth, with artistic pursuits that probe beneath surface appearances to reveal hidden truths.",
      
      Ninth: "The Lot of Eros in the ninth house connects romantic and creative fulfillment to spiritual pursuit, higher learning, and cross-cultural experiences. The native often finds attraction through shared philosophical interests or encounters with foreign cultures. Their creative inspiration frequently comes through travel, spiritual experiences, or exposure to different worldviews, with artistic expression that often incorporates multicultural or philosophical themes.",
      
      Tenth: "In the tenth house, the Lot of Eros indicates that romantic and creative fulfillment comes through public recognition and achievement. The native often experiences attraction to those in positions of authority or through shared ambitions. Their creative expression typically seeks public acknowledgment, with artistic pursuits that aim for professional recognition or social impact.",
      
      Eleventh: "The Lot of Eros in the eleventh house brings romantic and creative fulfillment through friendship, group activities, and shared ideals. The native often experiences attraction through intellectual compatibility and shared humanitarian interests. Their creative inspiration frequently comes through collaboration with others or involvement in collective projects, with artistic expression that often serves social causes or envisions future possibilities.",
      
      Twelfth: "In the twelfth house, the Lot of Eros indicates that romantic and creative fulfillment comes through spiritual connection, sacrifice, and transcendent experiences. The native often experiences attraction through mysterious circumstances or spiritual affinity. Their creative inspiration tends to come from dreams, meditation, or connection to the collective unconscious, with artistic expression that often explores mystical themes or requires solitude and contemplation."
    },
    signs: {
      aries: "The Lot of Eros in Aries manifests as passionate, direct, and spontaneous expressions of desire and attraction. The native experiences love and creativity through immediate action and enthusiastic pursuit. Their romantic nature is bold and competitive, with strong physical attraction and a preference for initiating relationships. Creative inspiration comes through dynamic, energetic expression and pioneering artistic ventures.",

      taurus: "In Taurus, the Lot of Eros emphasizes sensual pleasure, artistic beauty, and material comfort in matters of love and creativity. The native experiences attraction through physical touch, shared comforts, and artistic appreciation. Their romantic nature is steady, loyal, and deeply connected to the physical world, with creative expression often manifesting through tangible art forms and appreciation of natural beauty.",
      
      gemini: "The Lot of Eros in Gemini brings attraction through intellectual connection, witty exchange, and versatile expression. The native experiences love through communication, curiosity, and mental rapport. Their romantic nature is playful and adaptable, finding beauty in words and ideas. Creative inspiration comes through writing, speaking, and exploring multiple forms of artistic expression.",
      
      cancer: "In Cancer, the Lot of Eros connects desire and attraction to emotional nurturing, security, and deep feelings. The native experiences love through emotional intimacy and protective care. Their romantic nature is sensitive and nurturing, with strong attachments to family and home. Creative inspiration comes through emotional expression and creating comfortable, nurturing environments.",
      
      leo: "The Lot of Eros in Leo manifests as dramatic, romantic, and expressive love nature. The native experiences attraction through grand gestures and creative sharing. Their romantic nature is passionate, generous, and attention-seeking, with a flair for dramatic expression in love. Creative inspiration comes through performance, entertainment, and heart-centered artistic expression.",
      
      virgo: "In Virgo, the Lot of Eros brings attraction through service, skill, and attention to detail. The native experiences love through practical assistance and careful consideration. Their romantic nature is discriminating and analytical, finding beauty in precision and improvement. Creative inspiration comes through craftsmanship, technique refinement, and practical problem-solving.",
      
      libra: "The Lot of Eros in Libra emphasizes harmony, beauty, and partnership in matters of love and creativity. The native experiences attraction through balanced exchange and aesthetic appreciation. Their romantic nature is diplomatic and partnership-oriented, seeking beauty in relationship. Creative inspiration comes through creating harmony and balanced artistic expressions.",
      
      scorpio: "In Scorpio, the Lot of Eros manifests as intense, transformative, and deeply passionate expressions of desire. The native experiences love through profound emotional and physical connection. Their romantic nature is mysterious and magnetic, with a focus on intimate transformation. Creative inspiration comes through exploring depth, sexuality, and psychological themes.",
      
      sagittarius: "The Lot of Eros in Sagittarius connects attraction to adventure, philosophy, and expansive experiences. The native experiences love through shared exploration and learning. Their romantic nature is optimistic and freedom-loving, seeking beauty in diversity and truth. Creative inspiration comes through cross-cultural expression and exploring broad philosophical themes.",
      
      capricorn: "In Capricorn, the Lot of Eros brings attraction through ambition, structure, and maturity. The native experiences love through shared goals and responsible commitment. Their romantic nature is traditional and status-conscious, finding beauty in achievement and longevity. Creative inspiration comes through structured artistic expression and traditional forms.",
      
      aquarius: "The Lot of Eros in Aquarius manifests as unconventional, intellectual, and socially conscious expressions of desire. The native experiences attraction through shared ideals and friendship. Their romantic nature is independent and innovative, finding beauty in uniqueness and social progress. Creative inspiration comes through experimental art forms and collective expression.",
      
      pisces: "In Pisces, the Lot of Eros emphasizes spiritual connection, romantic idealism, and artistic sensitivity. The native experiences love through mystical connection and shared dreams. Their romantic nature is compassionate and spiritually oriented, finding beauty in transcendent experiences. Creative inspiration comes through imagination, spiritual themes, and universal connection."
    }
  },
  Necessity: {
    name: "Lot of Necessity",
    icon: "/lotnecessity.svg",
    arabicName: "Pars Necessitatis",
    formula: {
      day: "Ascendant + Fortune - Spirit",
      night: "Ascendant + Fortune - Spirit"
    },
    significations: [
      "Constraints and limitations",
      "Compulsions",
      "Unavoidable circumstances",
      "Fate and destiny"
    ],
    keywords: [
      "constraints",
      "limitations",
      "fate",
      "obligation",
      "duty",
      "burdens"
    ],
    description: "The Lot of Necessity illuminates the unavoidable patterns and inescapable circumstances in one's life, revealing areas where free will meets limitation and where certain experiences or challenges must be confronted rather than avoided—functioning almost like a marker of karmic obligations or destined encounters that shape one's path. Traditional astrologers observed this lot's placement to understand the specific ways a person might experience restriction, obligation, or compelling circumstances, whether through family duties, professional responsibilities, health conditions, or recurring life patterns that demand attention and integration, with its house placement often indicating the life area where one faces their most significant and unavoidable challenges. This lot becomes particularly active during periods of intense restriction or limitation, during times when important choices are removed from one's control, or in circumstances where one must submit to greater forces—such as legal obligations, family responsibilities, health crises, or situations that require acceptance of circumstances beyond one's control. The condition of the Lot of Necessity in the natal chart can reveal whether a person will face their obligations with grace and wisdom or struggle against the constraints placed upon them, while its aspects to other planets and points can indicate the specific nature of these compelling circumstances and the potential lessons or growth that might emerge from engaging with them consciously.",
    traditionalRuler: "Mercury",
    houses: {
      First: "The Lot of Necessity in the first house indicates unavoidable circumstances that directly affect personal identity, physical appearance, or self-expression. The native often faces compelling situations that force them to reshape their personality or adapt their approach to life in fundamental ways. They frequently encounter circumstances that require them to develop strong self-reliance and acceptance of personal limitations, with their greatest growth coming through embracing rather than fighting against inherent physical or personal constraints.",

      Second: "In the second house, the Lot of Necessity brings unavoidable circumstances connected to material resources, personal values, and financial security. The native often faces compelling situations involving money, possessions, or their relationship with material security. They frequently encounter restrictions or obligations in financial matters that force them to develop careful resource management skills, with important life lessons centered around understanding the true nature of value and security.",
      
      Third: "The Lot of Necessity in the third house creates unavoidable circumstances involving communication, learning, and relationships with siblings or neighbors. The native often faces compelling situations that affect their ability to express themselves or pursue education. They frequently encounter restrictions or obligations in their immediate environment or with siblings that require careful navigation, with crucial growth coming through adapting their communication style or educational approach.",
      
      Fourth: "In the fourth house, the Lot of Necessity indicates unavoidable circumstances connected to home, family, and emotional foundations. The native often faces compelling situations involving family obligations, property matters, or domestic responsibilities. They frequently encounter restrictions or duties related to their family heritage or living situation that cannot be avoided, with significant growth coming through accepting and working with family patterns.",
      
      Fifth: "The Lot of Necessity in the fifth house brings unavoidable circumstances involving creative expression, children, or romantic relationships. The native often faces compelling situations that affect their ability to enjoy pleasure or express themselves creatively. They frequently encounter restrictions or obligations involving children or romantic partnerships that require careful attention, with important lessons about responsibility in matters of the heart.",
      
      Sixth: "In the sixth house, the Lot of Necessity indicates unavoidable circumstances connected to work, health, and daily routines. The native often faces compelling situations involving job responsibilities, health conditions, or service to others. They frequently encounter restrictions or obligations in their daily work life or physical well-being that demand attention and adaptation, with significant growth coming through accepting and working with limitations.",
      
      Seventh: "The Lot of Necessity in the seventh house creates unavoidable circumstances involving partnerships, relationships, and public interactions. The native often faces compelling situations that affect their partnerships or public image. They frequently encounter restrictions or obligations through marriage, business partnerships, or legal matters that must be addressed, with crucial growth coming through accepting relationship responsibilities.",
      
      Eighth: "In the eighth house, the Lot of Necessity indicates unavoidable circumstances connected to shared resources, transformation, and deep psychological patterns. The native often faces compelling situations involving joint finances, inheritance, or profound personal changes. They frequently encounter restrictions or obligations related to others' resources or transformative experiences that cannot be avoided, with significant growth coming through accepting deep change.",
      
      Ninth: "The Lot of Necessity in the ninth house brings unavoidable circumstances involving higher education, travel, or philosophical beliefs. The native often faces compelling situations that affect their ability to expand their horizons or pursue spiritual growth. They frequently encounter restrictions or obligations in educational, religious, or international matters that require attention, with important lessons about finding freedom within limitation.",
      
      Tenth: "In the tenth house, the Lot of Necessity indicates unavoidable circumstances connected to career, public status, and professional responsibilities. The native often faces compelling situations involving their professional life or public duties. They frequently encounter restrictions or obligations in their career path or social position that must be addressed, with significant growth coming through accepting professional responsibilities.",
      
      Eleventh: "The Lot of Necessity in the eleventh house creates unavoidable circumstances involving friendships, group associations, and future planning. The native often faces compelling situations that affect their social networks or long-term goals. They frequently encounter restrictions or obligations through group involvement or collective responsibilities that cannot be avoided, with crucial growth coming through accepting social duties.",
      
      Twelfth: "In the twelfth house, the Lot of Necessity indicates unavoidable circumstances connected to isolation, spiritual development, and hidden matters. The native often faces compelling situations involving retreat, sacrifice, or unconscious patterns. They frequently encounter restrictions or obligations that require solitude or working behind the scenes, with significant growth coming through accepting periods of isolation or spiritual development."
    },
    signs: {
      aries: "The Lot of Necessity in Aries brings unavoidable circumstances that require immediate action, personal initiative, and independent decision-making. The native often faces compelling situations demanding courage and direct confrontation. Their most significant obligations frequently involve leadership roles, physical challenges, or situations requiring quick, decisive action, with important lessons about balancing assertion with patience.",

      taurus: "In Taurus, the Lot of Necessity creates unavoidable circumstances connected to material resources, financial security, and physical comfort. The native often faces compelling situations involving money, possessions, or basic survival needs. Their most significant obligations frequently involve managing resources, building financial stability, or dealing with material constraints, with important lessons about true value and security.",
      
      gemini: "The Lot of Necessity in Gemini brings unavoidable circumstances involving communication, learning, and information exchange. The native often faces compelling situations requiring mental adaptability and clear expression. Their most significant obligations frequently involve education, writing, or managing multiple responsibilities simultaneously, with important lessons about focus and clear communication.",
      
      cancer: "In Cancer, the Lot of Necessity creates unavoidable circumstances connected to family, emotional security, and domestic matters. The native often faces compelling situations involving family obligations, emotional responsibilities, or home-related issues. Their most significant obligations frequently involve caring for others, maintaining emotional stability, or dealing with family patterns, with important lessons about emotional boundaries.",
      
      leo: "The Lot of Necessity in Leo brings unavoidable circumstances involving self-expression, creativity, and personal recognition. The native often faces compelling situations requiring leadership or performance under pressure. Their most significant obligations frequently involve children, creative projects, or situations demanding personal authority, with important lessons about ego and authentic self-expression.",
      
      virgo: "In Virgo, the Lot of Necessity creates unavoidable circumstances connected to work, health, and service to others. The native often faces compelling situations requiring attention to detail and practical problem-solving. Their most significant obligations frequently involve daily responsibilities, health management, or service-oriented duties, with important lessons about perfectionism and practical efficiency.",
      
      libra: "The Lot of Necessity in Libra brings unavoidable circumstances involving relationships, partnerships, and social harmony. The native often faces compelling situations requiring diplomacy and cooperation. Their most significant obligations frequently involve maintaining balance in relationships, legal matters, or social responsibilities, with important lessons about compromise and fairness.",
      
      scorpio: "In Scorpio, the Lot of Necessity creates unavoidable circumstances connected to shared resources, power dynamics, and transformation. The native often faces compelling situations involving joint finances, psychological challenges, or profound change. Their most significant obligations frequently involve dealing with others' resources, confronting fears, or managing crises, with important lessons about control and surrender.",
      
      sagittarius: "The Lot of Necessity in Sagittarius brings unavoidable circumstances involving higher learning, belief systems, and expanding horizons. The native often faces compelling situations requiring philosophical understanding or cross-cultural adaptation. Their most significant obligations frequently involve education, travel, or ethical decisions, with important lessons about truth and wisdom.",
      
      capricorn: "In Capricorn, the Lot of Necessity creates unavoidable circumstances connected to career, public responsibility, and long-term goals. The native often faces compelling situations requiring professional discipline and structural organization. Their most significant obligations frequently involve career demands, social status, or authority roles, with important lessons about responsibility and achievement.",
      
      aquarius: "The Lot of Necessity in Aquarius brings unavoidable circumstances involving group dynamics, social causes, and future planning. The native often faces compelling situations requiring innovation or collective action. Their most significant obligations frequently involve group responsibilities, humanitarian causes, or technological adaptation, with important lessons about individual versus collective needs.",
      
      pisces: "In Pisces, the Lot of Necessity creates unavoidable circumstances connected to spiritual development, sacrifice, and universal service. The native often faces compelling situations requiring surrender or compassionate action. Their most significant obligations frequently involve spiritual practice, artistic expression, or helping those in need, with important lessons about boundaries and spiritual discernment."
    }
  },
  Courage: {
    name: "Lot of Courage",
    icon: "/lotcourage.svg",
    arabicName: "Pars Fortitudinis",
    formula: {
      day: "Spirit + Mars - Ascendant",
      night: "Spirit + Mars - Ascendant"
    },
    significations: [
      "Bravery and valor",
      "Initiative",
      "Physical strength",
      "Victory and achievement"
    ],
    keywords: [
      "bravery",
      "victory",
      "boldness",
      "strength",
      "competition",
      "action"
    ],
    description: "The Lot of Courage reveals the specific nature of one's inner strength and personal valor, indicating not only physical bravery but also moral fortitude and the psychological resilience needed to overcome life's most significant challenges. Traditional astrologers used this lot to understand how and where a person would display their greatest acts of courage or face their most demanding trials—whether through physical feats, moral stands, leadership challenges, or moments requiring exceptional personal strength—with its house placement often indicating the life areas where one would be called to demonstrate remarkable bravery or perseverance. This lot becomes particularly activated during periods of intense challenge or competition, during times requiring steadfast determination or bold action, and in situations demanding personal sacrifice for a greater cause, such as standing up against opposition, defending others, undertaking dangerous missions, or pursuing seemingly impossible goals. The condition of the Lot of Courage in the natal chart can indicate whether a person naturally embodies warrior-like qualities and easily rises to challenges, or whether they must consciously develop their courage through facing fears and obstacles, while its aspects to other planets and points often describe the specific ways courage manifests in their life—whether through physical prowess, moral conviction, leadership abilities, or the capacity to endure and overcome seemingly insurmountable odds.",
    traditionalRuler: "Mars",
    houses: {
      First: "The Lot of Courage in the first house amplifies personal bravery and the ability to face challenges through direct confrontation and individual initiative. The native frequently demonstrates courage through bold personal actions, physical feats, and situations requiring self-assertion. Their greatest acts of valor often come through standing up for themselves or taking decisive action in the face of adversity, with their physical presence itself often being a source of inspiration and courage to others.",

      Second: "In the second house, the Lot of Courage manifests through bravery in handling financial matters, defending personal values, and protecting resources. The native often shows remarkable courage in building financial security from scratch or taking calculated risks with resources. They frequently demonstrate valor through standing firm in their values despite material pressures, with their greatest acts of courage often involving financial decisions or defending what they hold valuable.",
      
      Third: "The Lot of Courage in the third house indicates bravery expressed through communication, intellectual pursuits, and local activities. The native often demonstrates courage through speaking truth to power, defending ideas, or protecting siblings and neighbors. They frequently show valor in educational pursuits or daily interactions, with their greatest acts of courage often involving standing up for their ideas or defending others in their immediate environment.",
      
      Fourth: "In the fourth house, the Lot of Courage manifests through bravery in family matters, domestic situations, and protecting one's foundations. The native often shows remarkable courage in facing family challenges or defending their home and heritage. They frequently demonstrate valor through standing up for family members or maintaining emotional stability in difficult circumstances, with their greatest acts of courage often involving domestic matters or emotional confrontations.",
      
      Fifth: "The Lot of Courage in the fifth house brings bravery in creative expression, romantic pursuits, and matters involving children. The native often demonstrates courage through artistic risks, protecting children, or standing up for their right to self-expression. They frequently show valor in competitive situations or creative endeavors, with their greatest acts of courage often involving defending joy, creativity, or those they love.",
      
      Sixth: "In the sixth house, the Lot of Courage manifests through bravery in daily work, health matters, and service to others. The native often shows remarkable courage in facing health challenges or standing up for workplace rights. They frequently demonstrate valor through perseverance in daily duties or protecting those under their care, with their greatest acts of courage often involving practical problem-solving or defending the vulnerable.",
      
      Seventh: "The Lot of Courage in the seventh house indicates bravery expressed through partnerships, public interactions, and dealing with opponents. The native often demonstrates courage through defending partnerships or standing up to open adversaries. They frequently show valor in diplomatic situations or relationship conflicts, with their greatest acts of courage often involving protecting their partnerships or facing opposition directly.",
      
      Eighth: "In the eighth house, the Lot of Courage manifests through bravery in facing transformation, dealing with shared resources, and confronting deep fears. The native often shows remarkable courage in facing death, crisis, or psychological challenges. They frequently demonstrate valor through handling others' resources responsibly or facing profound personal transformation, with their greatest acts of courage often involving confronting the unknown or taboo.",
      
      Ninth: "The Lot of Courage in the ninth house brings bravery in pursuit of higher knowledge, spiritual truth, and cross-cultural understanding. The native often demonstrates courage through defending their beliefs, taking risks in foreign lands, or standing up for philosophical principles. They frequently show valor in educational or religious pursuits, with their greatest acts of courage often involving the defense of truth or justice on a broader scale.",
      
      Tenth: "In the tenth house, the Lot of Courage manifests through bravery in career matters, public responsibilities, and leadership roles. The native often shows remarkable courage in professional challenges or standing up to authority. They frequently demonstrate valor through taking on leadership responsibilities or defending their reputation, with their greatest acts of courage often involving public stands or professional achievements.",
      
      Eleventh: "The Lot of Courage in the eleventh house indicates bravery expressed through group activities, humanitarian causes, and future-oriented initiatives. The native often demonstrates courage through standing up for collective causes or defending group interests. They frequently show valor in social movements or innovative projects, with their greatest acts of courage often involving the defense of collective ideals or future possibilities.",
      
      Twelfth: "In the twelfth house, the Lot of Courage manifests through bravery in facing hidden challenges, spiritual battles, and situations requiring self-sacrifice. The native often shows remarkable courage in dealing with hidden enemies or inner demons. They frequently demonstrate valor through anonymous acts of service or facing spiritual challenges, with their greatest acts of courage often involving sacrifice for others or confronting the unknown."
    },
    signs: {
      aries: "The Lot of Courage in Aries amplifies natural bravery, warrior spirit, and direct confrontation of challenges. The native expresses courage through bold initiative and physical prowess. Their most valiant acts often involve leading charges, taking immediate action in crises, or being first to face challenges, with strength manifesting through direct, pioneering efforts and physical courage.",

      taurus: "In Taurus, the Lot of Courage manifests through steadfast endurance, material fortitude, and unwavering determination. The native expresses courage through standing firm in their values and protecting resources. Their most valiant acts often involve financial boldness, defending what they value, or maintaining stability in difficult circumstances, with strength shown through persistent, grounded determination.",
      
      gemini: "The Lot of Courage in Gemini brings bravery through intellectual confrontation, verbal defense, and adaptable problem-solving. The native expresses courage through speaking truth, defending ideas, and mental agility. Their most valiant acts often involve communication challenges, intellectual debates, or quick-thinking in crisis situations, with strength manifesting through versatile responses and clever solutions.",
      
      cancer: "In Cancer, the Lot of Courage manifests through emotional bravery, protective instincts, and defense of home and family. The native expresses courage through facing emotional challenges and protecting loved ones. Their most valiant acts often involve family defense, emotional confrontations, or maintaining security in threatening situations, with strength shown through nurturing courage and emotional resilience.",
      
      leo: "The Lot of Courage in Leo amplifies dramatic bravery, leadership courage, and creative boldness. The native expresses courage through public performance and inspiring leadership. Their most valiant acts often involve standing in the spotlight, taking creative risks, or leading others through challenges, with strength manifesting through dramatic flair and heart-centered courage.",
      
      virgo: "In Virgo, the Lot of Courage brings practical bravery, methodical problem-solving, and courage in service. The native expresses courage through careful analysis and precise action. Their most valiant acts often involve technical challenges, health crises, or workplace confrontations, with strength shown through detailed preparation and practical courage.",
      
      libra: "The Lot of Courage in Libra manifests through diplomatic bravery, social courage, and standing up for justice. The native expresses courage through maintaining balance and defending fairness. Their most valiant acts often involve relationship challenges, legal battles, or social justice causes, with strength manifesting through diplomatic skill and principled action.",
      
      scorpio: "In Scorpio, the Lot of Courage brings transformative bravery, psychological courage, and power confrontations. The native expresses courage through facing deep fears and handling crises. Their most valiant acts often involve confronting taboos, dealing with death or loss, or managing intense power struggles, with strength shown through emotional depth and psychological resilience.",
      
      sagittarius: "The Lot of Courage in Sagittarius amplifies philosophical bravery, adventurous spirit, and moral courage. The native expresses courage through defending beliefs and exploring unknown territories. Their most valiant acts often involve cross-cultural challenges, educational pursuits, or standing up for truth, with strength manifesting through optimistic faith and ethical conviction.",
      
      capricorn: "In Capricorn, the Lot of Courage brings structural bravery, professional courage, and enduring strength. The native expresses courage through facing professional challenges and maintaining long-term goals. Their most valiant acts often involve career battles, authority confrontations, or organizational challenges, with strength shown through disciplined persistence and strategic courage.",
      
      aquarius: "The Lot of Courage in Aquarius manifests through revolutionary bravery, social courage, and innovative boldness. The native expresses courage through challenging conventions and supporting group causes. Their most valiant acts often involve social reform, technological innovation, or standing against the mainstream, with strength manifesting through intellectual independence and humanitarian courage.",
      
      pisces: "In Pisces, the Lot of Courage brings spiritual bravery, compassionate courage, and artistic boldness. The native expresses courage through facing spiritual challenges and defending the vulnerable. Their most valiant acts often involve self-sacrifice, artistic expression, or standing up for those who cannot defend themselves, with strength shown through spiritual faith and universal compassion."
    }
  },
  Victory: {
    name: "Lot of Victory",
    icon: "/lotvictory.svg",
    arabicName: "Pars Victoriae",
    formula: {
      day: "Spirit + Jupiter - Ascendant",
      night: "Spirit + Jupiter - Ascendant"
    },
    significations: [
      "Success and triumph",
      "Achievements",
      "Recognition",
      "Expansion and growth"
    ],
    keywords: [
      "success",
      "awards",
      "achievement",
      "recognition",
      "conquest",
      "superiority"
    ],
    description: "The Lot of Victory illuminates the specific paths through which a person achieves their greatest triumphs and successes, revealing not only the areas of life where they are likely to experience significant achievements but also the particular manner in which they secure their victories—whether through intellectual brilliance, social influence, artistic mastery, business acumen, or spiritual attainment. Traditional astrologers observed this lot's placement to understand the timing and nature of major breakthroughs, professional accomplishments, personal conquests, and moments of profound vindication or recognition, with its house placement often indicating where one would find their most meaningful and hard-won successes. This lot becomes especially active during periods of competition, during important tests or trials, at times of public recognition or reward, and in situations where one's efforts culminate in significant achievement—such as graduating with honors, winning competitions, receiving awards, securing major contracts, or achieving long-sought goals that seemed beyond reach. The condition of the Lot of Victory in the natal chart can reveal whether success comes easily through natural talent and fortunate circumstances, or whether it must be earned through persistent effort and strategic planning, while its aspects to other planets and points can describe the specific qualities and resources that contribute to one's victories—including influential supporters, advantageous timing, exceptional skills, or the ability to transform seeming defeats into ultimate triumphs through wisdom and perseverance.",
    traditionalRuler: "Jupiter",
    houses: {
      First: "The Lot of Victory in the first house indicates success through personal initiative, self-presentation, and individual achievement. The native often experiences their greatest triumphs through direct personal effort and the force of their personality. Their victories frequently come through pioneering new paths, establishing personal brands, or situations where individual leadership and self-directed action are crucial, with recognition often arriving through their unique approach or distinctive personal style.",

      Second: "In the second house, the Lot of Victory brings success through financial endeavors, resource management, and building material security. The native often achieves their most significant triumphs through business ventures, investment strategies, or the accumulation of valuable assets. Their victories frequently involve financial gains, successful business launches, or achievements in fields related to banking, commerce, or personal wealth management, with recognition coming through their ability to create tangible value.",
      
      Third: "The Lot of Victory in the third house connects success to communication, learning, and local networking. The native often experiences their greatest triumphs through writing, teaching, or intellectual pursuits. Their victories frequently come through educational achievements, successful communication projects, or innovations in local business or community initiatives, with recognition arriving through their ability to convey ideas effectively or bridge different perspectives.",
      
      Fourth: "In the fourth house, the Lot of Victory indicates success through real estate, family enterprises, or achievements connected to home and heritage. The native often experiences their most significant triumphs through property investments, family businesses, or domestic accomplishments. Their victories frequently involve building secure foundations, preserving family legacies, or achieving harmony in domestic life, with recognition coming through their ability to create lasting structures or honor traditions.",
      
      Fifth: "The Lot of Victory in the fifth house brings success through creative expression, entertainment, speculation, or matters involving children. The native often achieves their greatest triumphs through artistic endeavors, performance, or ventures involving risk and reward. Their victories frequently come through creative projects, romantic pursuits, or achievements in sports or entertainment, with recognition arriving through their ability to bring joy, inspiration, or excitement to others.",
      
      Sixth: "In the sixth house, the Lot of Victory indicates success through service, skill development, and attention to detail. The native often experiences their most significant triumphs through specialized work, health-related fields, or practical problem-solving. Their victories frequently involve mastering technical skills, improving systems, or achieving excellence in service-oriented professions, with recognition coming through their precision, reliability, and dedication to improvement.",
      
      Seventh: "The Lot of Victory in the seventh house brings success through partnerships, public relations, and diplomatic endeavors. The native often achieves their greatest triumphs through collaboration, negotiation, or working with the public. Their victories frequently come through successful partnerships, marriage, or achievements in fields requiring strong interpersonal skills, with recognition arriving through their ability to create harmonious relationships and win-win situations.",
      
      Eighth: "In the eighth house, the Lot of Victory indicates success through transformation, joint ventures, and managing shared resources. The native often experiences their most significant triumphs through financial partnerships, inheritance matters, or psychological insights. Their victories frequently involve successful mergers, powerful transformations, or achievements in fields dealing with others' resources, with recognition coming through their ability to navigate complex power dynamics.",
      
      Ninth: "The Lot of Victory in the ninth house brings success through higher education, international ventures, or spiritual pursuits. The native often achieves their greatest triumphs through academic achievement, publishing, or cross-cultural enterprises. Their victories frequently come through philosophical insights, religious leadership, or achievements in foreign lands, with recognition arriving through their ability to expand horizons and share wisdom.",
      
      Tenth: "In the tenth house, the Lot of Victory indicates success through career achievement, public recognition, and professional leadership. The native often experiences their most significant triumphs through professional advancement, social status, or positions of authority. Their victories frequently involve career milestones, public acclaim, or achievements that enhance their reputation, with recognition coming through their ability to manage responsibility and achieve ambitious goals.",
      
      Eleventh: "The Lot of Victory in the eleventh house brings success through group endeavors, social networks, and humanitarian causes. The native often achieves their greatest triumphs through collective efforts, friendships, or innovative projects. Their victories frequently come through team achievements, social movements, or technological advances, with recognition arriving through their ability to unite people around common goals.",
      
      Twelfth: "In the twelfth house, the Lot of Victory indicates success through spiritual development, behind-the-scenes work, or service to others. The native often experiences their most significant triumphs through charitable work, artistic inspiration, or psychological insights. Their victories frequently involve spiritual achievements, hidden influences, or accomplishments that benefit others without public recognition, with their greatest successes often coming through sacrifice, compassion, or inner development."
    },
    signs: {
      aries: "The Lot of Victory in Aries brings triumph through direct action, competitive spirit, and pioneering achievements. The native often experiences their greatest successes through individual initiative and leadership. Their victories frequently come through being first, taking decisive action, or winning competitive challenges, with recognition arriving through personal achievements and bold innovations.",

      taurus: "In Taurus, the Lot of Victory manifests through material accomplishments, financial success, and tangible achievements. The native often experiences their greatest triumphs through building lasting value and managing resources effectively. Their victories frequently come through business success, accumulation of wealth, or creating enduring works of beauty, with recognition arriving through practical achievements and material stability.",
      
      gemini: "The Lot of Victory in Gemini brings triumph through intellectual achievements, communication success, and versatile accomplishments. The native often experiences their greatest successes through writing, speaking, or networking. Their victories frequently come through educational accomplishments, successful negotiations, or effective communication strategies, with recognition arriving through mental agility and information mastery.",
      
      cancer: "In Cancer, the Lot of Victory manifests through emotional intelligence, domestic success, and family achievements. The native often experiences their greatest triumphs through nurturing projects, family businesses, or emotional understanding. Their victories frequently come through real estate ventures, creating supportive environments, or family-related accomplishments, with recognition arriving through emotional wisdom and protective care.",
      
      leo: "The Lot of Victory in Leo brings triumph through creative expression, dramatic achievement, and leadership success. The native often experiences their greatest successes through performance, entertainment, or inspiring leadership. Their victories frequently come through artistic achievements, public recognition, or successful leadership ventures, with recognition arriving through dramatic flair and charismatic influence.",
      
      virgo: "In Virgo, the Lot of Victory manifests through technical excellence, practical achievements, and service-oriented success. The native often experiences their greatest triumphs through attention to detail and methodical improvement. Their victories frequently come through professional expertise, health-related achievements, or problem-solving excellence, with recognition arriving through practical competence and refined skill.",
      
      libra: "The Lot of Victory in Libra brings triumph through diplomatic success, relationship achievements, and artistic victories. The native often experiences their greatest successes through partnership and cooperation. Their victories frequently come through successful negotiations, harmonious relationships, or aesthetic achievements, with recognition arriving through balanced judgment and social grace.",
      
      scorpio: "In Scorpio, the Lot of Victory manifests through transformative achievements, strategic success, and power-related triumphs. The native often experiences their greatest successes through deep investigation and psychological insight. Their victories frequently come through financial strategies, research breakthroughs, or successful transformations, with recognition arriving through depth of impact and transformative power.",
      
      sagittarius: "The Lot of Victory in Sagittarius brings triumph through expansion, philosophical achievement, and international success. The native often experiences their greatest successes through higher education, publishing, or cross-cultural ventures. Their victories frequently come through teaching, travel, or spiritual achievements, with recognition arriving through wisdom and broad influence.",
      
      capricorn: "In Capricorn, the Lot of Victory manifests through professional achievement, structural success, and enduring accomplishments. The native often experiences their greatest triumphs through career advancement and organizational leadership. Their victories frequently come through business success, institutional achievement, or long-term strategic planning, with recognition arriving through professional authority and lasting impact.",
      
      aquarius: "The Lot of Victory in Aquarius brings triumph through innovation, social reform, and collective achievements. The native often experiences their greatest successes through group endeavors and humanitarian causes. Their victories frequently come through technological advances, social movements, or scientific breakthroughs, with recognition arriving through revolutionary impact and collective benefit.",
      
      pisces: "In Pisces, the Lot of Victory manifests through spiritual achievement, artistic success, and compassionate triumphs. The native often experiences their greatest successes through intuitive understanding and universal connection. Their victories frequently come through artistic inspiration, spiritual development, or humanitarian service, with recognition arriving through spiritual wisdom and universal impact."
    }
  },
  Nemesis: {
    name: "Lot of Nemesis",
    icon: "/lotnemesis.svg",
    arabicName: "Pars Nemesis",
    formula: {
      day: "Spirit + Saturn - Ascendant",
      night: "Spirit + Saturn - Ascendant"
    },
    significations: [
      "Downfall and limitations",
      "Karmic debts",
      "Hidden enemies",
      "Obstacles to overcome"
    ],
    keywords: [
      "karma",
      "justice",
      "shadow work",
      "consequences",
      "balance",
      "accountability"
    ],
    description: "The Lot of Nemesis reveals the specific patterns of challenge, retribution, and karmic consequence in one's life, illuminating those areas where unresolved issues, hidden weaknesses, or past actions may eventually demand accountability or lead to significant setbacks if left unaddressed. Traditional astrologers used this lot to understand the nature of a person's most serious potential obstacles and vulnerabilities—whether through hubris, ethical blindspots, destructive habits, or unexamined assumptions—with its house placement often indicating where one might experience their most profound challenges, reversals of fortune, or encounters with their own shadow material. This lot becomes particularly active during periods of karmic reckoning, during times when past actions return with significant consequences, and in situations where one's limitations or weaknesses can no longer be ignored or avoided—such as financial collapses due to overconfidence, relationship breakdowns due to unexamined patterns, professional setbacks due to ethical compromises, or health crises stemming from neglected warning signs. The condition of the Lot of Nemesis in the natal chart can indicate whether a person will face their shadow material and karmic debts with awareness and the possibility of transformation, or whether they might remain unconscious of these patterns until forced to confront them through external circumstances, while its aspects to other planets and points often describe the specific nature of these challenges and the potential paths toward redemption or resolution—including the importance of humility, the need for ethical accountability, or the transformation of weakness into wisdom through conscious engagement with one's limitations.",
    traditionalRuler: "Saturn",
    houses: {
      First: "The Lot of Nemesis in the first house indicates potential downfalls through excessive self-focus, pride, or inability to recognize personal limitations. The native often faces their greatest challenges through issues of identity, physical appearance, or personal behavior patterns. They frequently encounter karmic lessons involving self-awareness and ego, with their most significant obstacles arising from blind spots about their own nature or an overemphasis on personal autonomy at the expense of others.",

      Second: "In the second house, the Lot of Nemesis brings potential downfalls through material attachment, financial overconfidence, or mismanagement of resources. The native often faces their greatest challenges through issues involving money, possessions, or personal values. They frequently encounter karmic lessons around greed, security, or the true nature of value, with their most significant obstacles arising from misplaced trust in material solutions or excessive attachment to wealth.",
      
      Third: "The Lot of Nemesis in the third house connects potential downfalls to communication issues, intellectual pride, or problems with siblings and neighbors. The native often faces their greatest challenges through misunderstandings, educational setbacks, or local conflicts. They frequently encounter karmic lessons involving truth, knowledge, or the power of words, with their most significant obstacles arising from careless communication or intellectual arrogance.",
      
      Fourth: "In the fourth house, the Lot of Nemesis indicates potential downfalls through family patterns, domestic issues, or unresolved emotional baggage. The native often faces their greatest challenges through family relationships, property matters, or deeply rooted psychological patterns. They frequently encounter karmic lessons involving their foundations, heritage, or emotional security, with their most significant obstacles arising from unhealed family wounds or neglected emotional needs.",
      
      Fifth: "The Lot of Nemesis in the fifth house brings potential downfalls through excessive risk-taking, romantic entanglements, or creative hubris. The native often faces their greatest challenges through gambling, love affairs, or artistic ventures. They frequently encounter karmic lessons involving pleasure, creativity, or matters involving children, with their most significant obstacles arising from overconfidence in matters of the heart or creative expression.",
      
      Sixth: "In the sixth house, the Lot of Nemesis indicates potential downfalls through health neglect, work-related stress, or service-oriented martyrdom. The native often faces their greatest challenges through illness, workplace conflicts, or overdoing their sense of duty. They frequently encounter karmic lessons involving self-care, daily routines, or proper boundaries in service to others, with their most significant obstacles arising from perfectionism or neglect of practical needs.",
      
      Seventh: "The Lot of Nemesis in the seventh house brings potential downfalls through relationship issues, public conflicts, or partnership betrayals. The native often faces their greatest challenges through marriage, business partnerships, or open enemies. They frequently encounter karmic lessons involving balance, cooperation, and trust in others, with their most significant obstacles arising from projection or dependency in relationships.",
      
      Eighth: "In the eighth house, the Lot of Nemesis indicates potential downfalls through power struggles, financial entanglements, or psychological shadow material. The native often faces their greatest challenges through shared resources, inheritance, or transformation crises. They frequently encounter karmic lessons involving control, intimacy, or facing mortality, with their most significant obstacles arising from unresolved trauma or misuse of power.",
      
      Ninth: "The Lot of Nemesis in the ninth house brings potential downfalls through philosophical arrogance, religious zealotry, or cultural insensitivity. The native often faces their greatest challenges through belief systems, legal matters, or foreign affairs. They frequently encounter karmic lessons involving truth, wisdom, and ethical principles, with their most significant obstacles arising from dogmatism or spiritual pride.",
      
      Tenth: "In the tenth house, the Lot of Nemesis indicates potential downfalls through professional hubris, public scandal, or abuse of authority. The native often faces their greatest challenges through career matters, reputation, or social status. They frequently encounter karmic lessons involving responsibility, achievement, and the proper use of power, with their most significant obstacles arising from ambition without ethics or misuse of position.",
      
      Eleventh: "The Lot of Nemesis in the eleventh house brings potential downfalls through group dynamics, betrayal by friends, or misguided idealism. The native often faces their greatest challenges through social networks, collective projects, or humanitarian causes. They frequently encounter karmic lessons involving friendship, group loyalty, and social ideals, with their most significant obstacles arising from misplaced trust in others or attachment to unrealistic goals.",
      
      Twelfth: "In the twelfth house, the Lot of Nemesis indicates potential downfalls through hidden enemies, self-undoing, or spiritual delusion. The native often faces their greatest challenges through isolation, secret activities, or unconscious patterns. They frequently encounter karmic lessons involving sacrifice, surrender, and spiritual authenticity, with their most significant obstacles arising from self-deception or unacknowledged spiritual debts."
    },
    signs: {
      aries: "The Lot of Nemesis in Aries brings potential downfalls through impulsiveness, aggression, and excessive self-assertion. The native often faces karmic challenges through rash actions and uncontrolled anger. Their greatest obstacles frequently arise from competitive overreach, hasty decisions, or an inability to temper their warrior spirit, with key lessons involving patience, measured action, and the responsible use of personal power.",

      taurus: "In Taurus, the Lot of Nemesis manifests through material attachment, stubbornness, and financial hubris. The native often faces karmic challenges through excessive greed or rigid inflexibility. Their greatest obstacles frequently arise from possessiveness, material overindulgence, or resistance to necessary change, with key lessons involving detachment, adaptability, and the true nature of value.",
      
      gemini: "The Lot of Nemesis in Gemini brings potential downfalls through scattered energy, intellectual pride, and communication failures. The native often faces karmic challenges through superficiality or misuse of information. Their greatest obstacles frequently arise from mental restlessness, deceptive communication, or lack of depth, with key lessons involving focus, truthfulness, and responsible use of knowledge.",
      
      cancer: "In Cancer, the Lot of Nemesis manifests through emotional manipulation, dependency, and family karma. The native often faces karmic challenges through overattachment or emotional instability. Their greatest obstacles frequently arise from family patterns, emotional overwhelm, or inability to establish healthy boundaries, with key lessons involving emotional independence and balanced nurturing.",
      
      leo: "The Lot of Nemesis in Leo brings potential downfalls through ego inflation, dramatic excess, and pride. The native often faces karmic challenges through arrogance or attention-seeking behavior. Their greatest obstacles frequently arise from overconfidence, creative blocks, or abuse of authority, with key lessons involving humility, authentic self-expression, and responsible leadership.",
      
      virgo: "In Virgo, the Lot of Nemesis manifests through perfectionism, excessive criticism, and work-related stress. The native often faces karmic challenges through overthinking or self-criticism. Their greatest obstacles frequently arise from anxiety, overwork, or inability to accept imperfection, with key lessons involving self-acceptance, balanced service, and practical wisdom.",
      
      libra: "The Lot of Nemesis in Libra brings potential downfalls through indecision, codependency, and relationship karma. The native often faces karmic challenges through excessive people-pleasing or avoidance of conflict. Their greatest obstacles frequently arise from relationship imbalances, lack of self-assertion, or unjust compromises, with key lessons involving healthy boundaries and true harmony.",
      
      scorpio: "In Scorpio, the Lot of Nemesis manifests through power struggles, destructive obsessions, and karmic debts. The native often faces karmic challenges through manipulation or unresolved trauma. Their greatest obstacles frequently arise from revenge, jealousy, or misuse of others' resources, with key lessons involving transformation, forgiveness, and ethical use of power.",
      
      sagittarius: "The Lot of Nemesis in Sagittarius brings potential downfalls through overconfidence, religious dogma, and ethical blind spots. The native often faces karmic challenges through excess optimism or philosophical arrogance. Their greatest obstacles frequently arise from overexpansion, cultural insensitivity, or moral hypocrisy, with key lessons involving wisdom, cultural respect, and ethical consistency.",
      
      capricorn: "In Capricorn, the Lot of Nemesis manifests through rigid ambition, status obsession, and authority conflicts. The native often faces karmic challenges through excessive control or materialistic goals. Their greatest obstacles frequently arise from workaholism, abuse of position, or emotional suppression, with key lessons involving balanced achievement and authentic authority.",
      
      aquarius: "The Lot of Nemesis in Aquarius brings potential downfalls through rebellion, social alienation, and ideological extremism. The native often faces karmic challenges through detachment or radical behavior. Their greatest obstacles frequently arise from group conflicts, technological mishaps, or rigid ideologies, with key lessons involving balanced innovation and practical idealism.",
      
      pisces: "In Pisces, the Lot of Nemesis manifests through spiritual delusion, escapism, and martyrdom. The native often faces karmic challenges through boundary confusion or spiritual bypass. Their greatest obstacles frequently arise from addiction, deception, or excessive self-sacrifice, with key lessons involving spiritual discernment, healthy boundaries, and grounded compassion."
    }
  },
};

export default lots;
