const AriesSymbol = ({ 
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
          {/* Left circle */}
          <Ellipse 
            cx="90" cy="110" 
            rx="60" ry="70" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Right circle */}
          <Ellipse 
            cx="210" cy="110" 
            rx="60" ry="70" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Vertical line */}
          <Line 
            x1="150" y1="100" 
            x2="150" y2="250" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

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

          {/* White rectangles to create gaps */}
          <Rect 
            x="49" y="105" 
            width="91" height="113" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="160" y="110" 
            width="91" height="113" 
            fill="white" 
            stroke="none" 
          />
        </G>
      </Svg>
    </G>
  );
};

export default AriesSymbol;
