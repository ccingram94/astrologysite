import { startOfDay, endOfDay } from 'date-fns';

// Constants for the Zodiac Signs
const SIGNS = [
  {
    key: 'aries',
    startDate: startOfDay(new Date(0, 2, 21, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 3, 20, 0, 0, 0)),
    zodiacStart: 0,
    zodiacEnd: 30,
  },
  {
    key: 'taurus',
    startDate: startOfDay(new Date(0, 3, 21, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 4, 20, 0, 0, 0)),
    zodiacStart: 30,
    zodiacEnd: 60,
  },
  {
    key: 'gemini',
    startDate: startOfDay(new Date(0, 4, 21, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 5, 21, 0, 0, 0)),
    zodiacStart: 60,
    zodiacEnd: 90,
  },
  {
    key: 'cancer',
    startDate: startOfDay(new Date(0, 5, 22, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 6, 22, 0, 0, 0)),
    zodiacStart: 90,
    zodiacEnd: 120,
  },
  {
    key: 'leo',
    startDate: startOfDay(new Date(0, 6, 23, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 7, 23, 0, 0, 0)),
    zodiacStart: 120,
    zodiacEnd: 150,
  },
  {
    key: 'virgo',
    startDate: startOfDay(new Date(0, 7, 24, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 8, 22, 0, 0, 0)),
    zodiacStart: 150,
    zodiacEnd: 180,
  },
  {
    key: 'libra',
    startDate: startOfDay(new Date(0, 8, 23, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 9, 23, 0, 0, 0)),
    zodiacStart: 180,
    zodiacEnd: 210,
  },
  {
    key: 'scorpio',
    startDate: startOfDay(new Date(0, 9, 24, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 10, 22, 0, 0, 0)),
    zodiacStart: 210,
    zodiacEnd: 240,
  },
  {
    key: 'sagittarius',
    startDate: startOfDay(new Date(0, 10, 23, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 11, 22, 0, 0, 0)),
    zodiacStart: 240,
    zodiacEnd: 270,
  },
  {
    key: 'capricorn',
    startDate: startOfDay(new Date(0, 11, 23, 0, 0, 0)),
    endDate: endOfDay(new Date(1, 0, 20, 0, 0, 0)),
    zodiacStart: 270,
    zodiacEnd: 300,
  },
  {
    key: 'aquarius',
    startDate: startOfDay(new Date(0, 0, 21, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 1, 18, 0, 0, 0)),
    zodiacStart: 300,
    zodiacEnd: 330,
  },
  {
    key: 'pisces',
    startDate: startOfDay(new Date(0, 1, 19, 0, 0, 0)),
    endDate: endOfDay(new Date(0, 2, 20, 0, 0, 0)),
    zodiacStart: 330,
    zodiacEnd: 0,
  },
]

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