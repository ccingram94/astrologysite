const MercurySymbol = ({ 
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
            {/* Main circle */}
            <Ellipse 
              cx="150" cy="120" 
              rx="80" ry="80" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Vertical line */}
            <Line 
              x1="150" y1="200" 
              x2="150" y2="290" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* Horizontal line (cross) */}
            <Line 
              x1="100" y1="240" 
              x2="200" y2="240" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* Top crescent */}
            <Ellipse 
              cx="150" cy="13" 
              rx="50" ry="27" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* White ellipse to create crescent shape */}
            <Ellipse 
              cx="152" cy="-14" 
              rx="56" ry="33" 
              fill="white" 
              stroke="white" 
              strokeWidth={10} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default MercurySymbol;
  