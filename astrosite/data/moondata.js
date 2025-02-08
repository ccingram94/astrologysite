const moonDataFile = {
  signs: {
    Aries: {
      description: "When the Moon is in Aries, there's a sense of emotional impulsiveness and courage. Aries Moon encourages us to take initiative and embrace boldness.",
      traits: ["Action-oriented", "Energetic", "Independent"],
      traditionalMeaning: "Favors beginnings, courage, fast action, and embracing challenges. An emotional time for initiating and leading ventures."
    },
    Taurus: {
      description: "The Moon in Taurus brings emotional stability and comfort in earthy pleasures. It’s a time for grounding and physical indulgence.",
      traits: ["Stable", "Sensual", "Loyal"],
      traditionalMeaning: "Encourages steadiness and commitment. Perfect for tending to physical needs, material security, and nurturing stability."
    },
    Gemini: {
      description: "A Gemini Moon is lively and conversational, bringing mental stimulation and curiosity. Restlessness may accompany this energy.",
      traits: ["Communicative", "Adaptable", "Curious"],
      traditionalMeaning: "Great for networking, learning, and sharing ideas. Encourages connection and exploration of multiple interests."
    },
    Cancer: {
      description: "The Moon is at home in Cancer, emphasizing nurturing and emotional depth. Sentimentality and intuitive energy are heightened.",
      traits: ["Nurturing", "Sensitive", "Intuitive"],
      traditionalMeaning: "Enhances emotional and familial matters. A great time for self-care, tending to loved ones, and honoring inner needs."
    },
    Leo: {
      description: "The Moon in Leo amplifies creativity, self-expression, and a need for recognition. Leo Moon encourages us to shine and celebrate.",
      traits: ["Charismatic", "Dramatic", "Creative"],
      traditionalMeaning: "Great for creative pursuits, socializing, and leadership. Encourages heartfelt expression and generosity."
    },
    Virgo: {
      description: "The Virgo Moon emphasizes practicality, details, and organizing. It's a great time for grounding through analytical focus and improvement.",
      traits: ["Analytical", "Detail-oriented", "Efficient"],
      traditionalMeaning: "Favors service, health-related activities, purification, and methodical problem-solving. Focuses on small steps for growth."
    },
    Libra: {
      description: "With the Moon in Libra, we seek balance, harmony, and aesthetic enjoyment. Social connections and fairness are prioritized.",
      traits: ["Diplomatic", "Charming", "Idealistic"],
      traditionalMeaning: "Encourages partnerships, artistic pursuits, and discussions. A great time to focus on justice and collaboration."
    },
    Scorpio: {
      description: "A Scorpio Moon brings intensity and deep emotional catharsis. Transformative topics and hidden truths may surface.",
      traits: ["Intense", "Transformative", "Resilient"],
      traditionalMeaning: "A time for healing, confronting fears, and emotional transformations. Introspection and mysticism are favored."
    },
    Sagittarius: {
      description: "The Sagittarius Moon inspires optimism, adventure, and philosophical exploration. It’s an expansive and uplifting time.",
      traits: ["Adventurous", "Optimistic", "Visionary"],
      traditionalMeaning: "Favors travel, exploration, and spiritual growth. Encourages seeking freedom and learning through diverse experiences."
    },
    Capricorn: {
      description: "The Capricorn Moon is grounded in ambition and discipline. Emotional restraint mixed with a drive to succeed dominates.",
      traits: ["Disciplined", "Pragmatic", "Responsible"],
      traditionalMeaning: "Great for goal-setting and working on long-term plans. Favors responsibility, structure, and practical achievements."
    },
    Aquarius: {
      description: "The Aquarian Moon is innovative, focusing on intellectual pursuits and community ideals. Change and originality are favored.",
      traits: ["Innovative", "Humanitarian", "Detached"],
      traditionalMeaning: "Favors individuality, cultivating intellectual growth, and progressive reforms. Encourages altruistic connections."
    },
    Pisces: {
      description: "The Moon in Pisces is dreamy, intuitive, and artistic. Emotions flow freely, often leading to spiritual realizations.",
      traits: ["Compassionate", "Dreamy", "Imaginative"],
      traditionalMeaning: "Great for reflection, creativity, and connection with higher realms. Encourages empathy and intuitive understanding."
    }
  },
  phases: {
    "New Moon": {
      description: "A time for new beginnings and planting seeds. The New Moon invites introspection and setting intentions for the month ahead.",
      symbolicMeaning: "Fresh starts, renewal, and intention setting.",
      actions: [
        "Reflect on goals",
        "Plant seeds for the future",
        "Start new projects"
      ]
    },
    "Waxing Crescent Moon": {
      description: "Building energy and momentum follow the New Moon. Confidence develops as you take small, steady steps toward your goals.",
      symbolicMeaning: "Growth, courage, and moving forward.",
      actions: [
        "Nurture new ideas",
        "Make plans",
        "Build self-confidence"
      ]
    },
    "First Quarter Moon": {
      description: "The halfway point to Full Moon requires effort and decisiveness. Challenges may appear, offering opportunities for growth.",
      symbolicMeaning: "Crisis in action, focus, and determination.",
      actions: [
        "Confront obstacles",
        "Make decisions",
        "Push forward with plans"
      ]
    },
    "Waxing Gibbous Moon": {
      description: "Leading up to the Full Moon, efforts begin to bear fruit. This phase demands patience and adjustments to stay on course.",
      symbolicMeaning: "Refinement, evaluation, and preparation.",
      actions: [
        "Review progress",
        "Make adjustments",
        "Evaluate goals"
      ]
    },
    "Full Moon": {
      description: "The Full Moon brings culmination and illumination. Emotions run high, and truth is revealed under its light.",
      symbolicMeaning: "Harvest, completion, and realization.",
      actions: [
        "Celebrate successes",
        "Let go of what no longer serves you",
        "Gain clarity"
      ]
    },
    "Waning Gibbous Moon": {
      description: "After the Full Moon, reflection and gratitude take center stage. It’s a time for releasing negativity and refining future steps.",
      symbolicMeaning: "Introspection, healing, and sharing.",
      actions: [
        "Express gratitude",
        "Release bad habits",
        "Start healing processes"
      ]
    },
    "Last Quarter Moon": {
      description: "The Last Quarter Moon asks for release and forgiveness. This phase encourages deep processing and shedding of the past.",
      symbolicMeaning: "Crisis in consciousness, letting go, and transformation.",
      actions: [
        "Forgive and release",
        "Complete old tasks",
        "Seek closure"
      ]
    },
    "Waning Crescent Moon": {
      description: "The final phase before the New Moon. It’s a restful period of introspection, with quiet preparation for new cycles ahead.",
      symbolicMeaning: "Rest, surrender, and renewal.",
      actions: [
        "Rest and reset",
        "Meditate and reflect",
        "Dream about the future"
      ]
    }
  }
};

export default moonDataFile;
