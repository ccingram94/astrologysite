const AquariusSymbol = ({ 
  x = 0, 
  y = 0, 
  size = 300, 
  stroke = "#D2AE3C", 
  strokeWidth = 20 
}) => {
  // Scale factor to adjust all dimensions based on size
  const scale = size / 300;
  
  return (
    <G transform={`translate(${x-size/2}, ${y-size/2}) scale(${scale})`}>
      <Svg width={300} height={300}>
        <G>
          {/* Base lines */}
          <Line 
            x1="130" y1="363" 
            x2="128" y2="541" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <Line 
            x1="594" y1="191" 
            x2="594" y2="192" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <Ellipse 
            cx="225.5" cy="418" 
            rx="41.5" ry="41" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Upper wave patterns */}
          <G>
            {/* First set */}
            <G>
              <Line 
                transform="rotate(-45 88.3333 116.667)"
                x1="88.33326" y1="76.66666"
                x2="88.33326" y2="156.66666"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
              <Line 
                transform="rotate(45 45.3333 116.667)"
                x1="45.33326" y1="76.66666"
                x2="45.33326" y2="156.66666"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
            </G>

            {/* Second set */}
            <G>
              <Line 
                transform="rotate(-45 174 116.5)"
                x1="173.99993" y1="76.49999"
                x2="173.99993" y2="156.49999"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
              <Line 
                transform="rotate(45 131 116.5)"
                x1="130.99993" y1="76.49999"
                x2="130.99993" y2="156.49999"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
            </G>

            {/* Third set */}
            <G>
              <Line 
                transform="rotate(-45 259.5 116.667)"
                x1="259.49993" y1="76.66665"
                x2="259.49993" y2="156.66665"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
              <Line 
                transform="rotate(45 216.5 116.667)"
                x1="216.49993" y1="76.66665"
                x2="216.49993" y2="156.66665"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
            </G>
          </G>

          {/* Lower wave patterns */}
          <G>
            {/* First set */}
            <G>
              <Line 
                transform="rotate(-45 88.3333 178.451)"
                x1="88.33326" y1="138.45099"
                x2="88.33326" y2="218.45099"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
              <Line 
                transform="rotate(45 45.3333 178.451)"
                x1="45.33326" y1="138.45099"
                x2="45.33326" y2="218.45099"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
            </G>

            {/* Second set */}
            <G>
              <Line 
                transform="rotate(-45 174 178.284)"
                x1="173.99993" y1="138.28432"
                x2="173.99993" y2="218.28432"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
              <Line 
                transform="rotate(45 131 178.284)"
                x1="130.99993" y1="138.28432"
                x2="130.99993" y2="218.28432"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
            </G>

            {/* Third set */}
            <G>
              <Line 
                transform="rotate(-45 259.5 178.451)"
                x1="259.49993" y1="138.45099"
                x2="259.49993" y2="218.45099"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
              <Line 
                transform="rotate(45 216.5 178.451)"
                x1="216.49993" y1="138.45099"
                x2="216.49993" y2="218.45099"
                stroke={stroke} 
                strokeWidth={strokeWidth}
              />
            </G>
          </G>
        </G>
      </Svg>
    </G>
  );
};

export default AquariusSymbol;
