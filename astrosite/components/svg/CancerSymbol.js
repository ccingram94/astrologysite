const CancerSymbol = ({ 
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

          {/* Large central ellipse */}
          <Ellipse 
            cx="150.50001" cy="149.50001" 
            rx="140.00001" ry="81.5" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Left circles */}
          <Ellipse 
            cx="60" cy="150" 
            rx="50" ry="50" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />
          <Ellipse 
            cx="61" cy="156.5" 
            rx="49.5" ry="50" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Right circles */}
          <Ellipse 
            cx="240" cy="150" 
            rx="50" ry="50" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />
          <Ellipse 
            cx="239" cy="144.5" 
            rx="49.5" ry="50" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* White rectangles to create gaps */}
          <Rect 
            x="218" y="58" 
            width="74" height="34" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="18" y="208" 
            width="67" height="34" 
            fill="white" 
            stroke="none" 
          />
        </G>
      </Svg>
    </G>
  );
};

export default CancerSymbol;
