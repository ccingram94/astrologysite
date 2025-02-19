const TaurusSymbol = ({ 
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
          {/* Upper circle */}
          <Ellipse 
            cx="152" 
            cy="-21" 
            rx="100" 
            ry="100" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Lower circle */}
          <Ellipse 
            cx="150" 
            cy="180" 
            rx="100" 
            ry="100" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Vertical line */}
          <Line 
            x1="130" 
            y1="363" 
            x2="128" 
            y2="541" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

          {/* Additional line (might be used for clipping/masking) */}
          <Line 
            x1="594" 
            y1="191" 
            x2="594" 
            y2="192" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
        </G>
      </Svg>
    </G>
  );
};

export default TaurusSymbol;
