'use client'
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Chart from '@astrodraw/astrochart';

const AstroChart = ({ horoscope }) => {
    const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
    const [isMounted, setIsMounted] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        setIsMounted(true);
        const handleResize = () => {
          if (window.matchMedia("(max-width: 768px)").matches) {
            setDimensions({ width: 350, height: 350 });
          } else {
            setDimensions({ width: 600, height: 600 });
          }
        };
    
        // Set initial dimensions
        handleResize();
    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
      }, []);


  const chartData = {
    planets: {
      Pluto: [horoscope.CelestialBodies.pluto.ChartPosition.Ecliptic.DecimalDegrees],
      Neptune: [horoscope.CelestialBodies.neptune.ChartPosition.Ecliptic.DecimalDegrees],
      Uranus: [horoscope.CelestialBodies.uranus.ChartPosition.Ecliptic.DecimalDegrees],
      Saturn: [horoscope.CelestialBodies.saturn.ChartPosition.Ecliptic.DecimalDegrees],
      Jupiter: [horoscope.CelestialBodies.jupiter.ChartPosition.Ecliptic.DecimalDegrees],
      Mars: [horoscope.CelestialBodies.mars.ChartPosition.Ecliptic.DecimalDegrees],
      Moon: [horoscope.CelestialBodies.moon.ChartPosition.Ecliptic.DecimalDegrees],
      Sun: [horoscope.CelestialBodies.sun.ChartPosition.Ecliptic.DecimalDegrees],
      Mercury: [horoscope.CelestialBodies.mercury.ChartPosition.Ecliptic.DecimalDegrees],
      Venus: [horoscope.CelestialBodies.venus.ChartPosition.Ecliptic.DecimalDegrees],
      NNode: [horoscope.CelestialPoints.northnode.ChartPosition.Ecliptic.DecimalDegrees],
      As: [horoscope.Angles.ascendant.ChartPosition.Ecliptic.DecimalDegrees],
      Mc: [horoscope.Angles.midheaven.ChartPosition.Ecliptic.DecimalDegrees],
    },
    cusps: [
    horoscope.Houses[0].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[1].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[2].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[3].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[4].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[5].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[6].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[7].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[8].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[9].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[10].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    horoscope.Houses[11].ChartPosition.StartPosition.Ecliptic.DecimalDegrees, 
    ],
  };

  useEffect(() => {
    if (isMounted && chartRef.current) {
      // Clear any existing content
      chartRef.current.innerHTML = '';
      if (window.matchMedia("(max-width: 768px)").matches) {
        var settings = {
          SYMBOL_SCALE:.7,
          CIRCLE_STRONG: .5,
          INDOOR_CIRCLE_RADIUS_RATIO: 2.3,
          SYMBOL_AXIS_STROKE: 2,
          SIGNS_COLOR: "#d4af37",
          POINTS_COLOR: "black",
          POINTS_TEXT_SIZE: 12,
          POINTS_STROKE: 1.8,
          LINE_COLOR: "#d4af37",
          CIRCLE_COLOR: "#d4af37",
          CUSPS_FONT_COLOR: "#d4af37",
          SYMBOL_AXIS_FONT_COLOR: "#e1c87e",
          COLOR_ARIES: "#254f67",
          COLOR_TAURUS: "#1f4154",
          COLOR_GEMINI: "#183242",
          COLOR_CANCER: "#254f67",
          COLOR_LEO: "#1f4154",
          COLOR_VIRGO: "	#183242",
          COLOR_LIBRA: "#254f67",
          COLOR_SCORPIO: "#1f4154",
          COLOR_SAGITTARIUS: "#183242",
          COLOR_CAPRICORN: "#254f67",
          COLOR_AQUARIUS: "#1f4154",
          COLOR_PISCES: "	#183242",
          }
      } else {
        var settings = {
          SYMBOL_SCALE:1,
          CIRCLE_STRONG: .5,
          INDOOR_CIRCLE_RADIUS_RATIO: 2,
          SYMBOL_AXIS_STROKE: 2,
          SIGNS_COLOR: "#d4af37",
          POINTS_COLOR: "black",
          POINTS_TEXT_SIZE: 16,
          POINTS_STROKE: 1.8,
          LINE_COLOR: "#d4af37",
          CIRCLE_COLOR: "#d4af37",
          CUSPS_FONT_COLOR: "#d4af37",
          SYMBOL_AXIS_FONT_COLOR: "#e1c87e",
          COLOR_ARIES: "#254f67",
          COLOR_TAURUS: "#1f4154",
          COLOR_GEMINI: "#183242",
          COLOR_CANCER: "#254f67",
          COLOR_LEO: "#1f4154",
          COLOR_VIRGO: "#183242",
          COLOR_LIBRA: "#254f67",
          COLOR_SCORPIO: "#1f4154",
          COLOR_SAGITTARIUS: "#183242",
          COLOR_CAPRICORN: "#254f67",
          COLOR_AQUARIUS: "#1f4154",
          COLOR_PISCES: "	#183242",
          }
        };
      const chart = new Chart('astrological-chart', dimensions.width, dimensions.height, settings);
      // Draw the radix chart
      const radix = chart.radix(chartData);
      radix.aspects(chartData);
    }
  }, [dimensions.width, dimensions.height, chartData, isMounted]);

  if (!isMounted) {
    return null; // or a loading indicator
  }

  return <div id="astrological-chart" ref={chartRef} />;
};

export default AstroChart;
