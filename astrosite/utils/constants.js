import { startOfDay, endOfDay } from 'date-fns';

// Constants for the Zodiac Signs
const SIGNS = [
  {
    key: 'aries',
    label: 'Aries',
    zodiacStart: 0,
    zodiacEnd: 30,
  },
  {
    key: 'taurus',
    label: 'Taurus',
    zodiacStart: 30,
    zodiacEnd: 60,
  },
  {
    key: 'gemini',
    label: 'Gemini',
    zodiacStart: 60,
    zodiacEnd: 90,
  },
  {
    key: 'cancer',
    label: 'Cancer',
    zodiacStart: 90,
    zodiacEnd: 120,
  },
  {
    key: 'leo',
    label: 'Leo',
    zodiacStart: 120,
    zodiacEnd: 150,
  },
  {
    key: 'virgo',
    label: 'Virgo',
    zodiacStart: 150,
    zodiacEnd: 180,
  },
  {
    key: 'libra',
    label: 'Libra',
    zodiacStart: 180,
    zodiacEnd: 210,
  },
  {
    key: 'scorpio',
    label: 'Scorpio',
    zodiacStart: 210,
    zodiacEnd: 240,
  },
  {
    key: 'sagittarius',
    label: 'Sagittarius',
    zodiacStart: 240,
    zodiacEnd: 270,
  },
  {
    key: 'capricorn',
    label: 'Capricorn',
    zodiacStart: 270,
    zodiacEnd: 300,
  },
  {
    key: 'aquarius',
    label: 'Aquarius',
    zodiacStart: 300,
    zodiacEnd: 330,
  },
  {
    key: 'pisces',
    label: 'Pisces',
    zodiacStart: 330,
    zodiacEnd: 360,
  },
];

// Constants for the Aspects
export const ASPECTS = {
  'conjunction': {
    level: 'major',
    angle: 0,
    defaultOrb: 8
  },
  'opposition': {
    level: 'major',
    angle: 180,
    defaultOrb: 8
  },
  'trine': {
    level: 'major',
    angle: 120,
    defaultOrb: 8
  },
  'square': {
    level: 'major',
    angle: 90,
    defaultOrb: 7
  },
  'sextile': {
    level: 'major',
    angle: 60,
    defaultOrb: 6
  },
  'quincunx': {
    level: 'minor',
    angle: 150,
    defaultOrb: 5
  },
  'quintile': {
    level: 'minor',
    angle: 72,
    defaultOrb: 1
  },
  'septile': {
    level: 'minor',
    angle: 51.5,
    defaultOrb: 1
  },
  'semi-square': {
    level: 'minor',
    angle: 45,
    defaultOrb: 1
  },
  'semi-sextile': {
    level: 'minor',
    angle: 30,
    defaultOrb: 1
  }
}

export default SIGNS;