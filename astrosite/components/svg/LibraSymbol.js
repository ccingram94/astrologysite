const LibraSymbol = ({ 
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

          {/* Main circle */}
          <Ellipse 
            cx="151" cy="132" 
            rx="80" ry="80" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Horizontal lines */}
          <Line 
            x1="30" y1="250" 
            x2="270" y2="250" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <Line 
            x1="31" y1="214" 
            x2="271" y2="214" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

          {/* White rectangles to create gaps */}
          <Rect 
            x="-17" y="84" 
            width="184" height="90" 
            fill="white" 
            stroke="white" 
            strokeWidth={20} 
          />
          <Rect 
            x="130" y="190" 
            width="40" height="40" 
            fill="white" 
            stroke="white" 
            strokeWidth={20} 
          />
        </G>
      </Svg>
    </G>
  );
};

export default LibraSymbol;
