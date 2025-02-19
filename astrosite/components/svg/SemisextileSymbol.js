const SemisextileSymbol = ({ 
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
            {/* Diagonal line */}
            <Line 
              x1="70" y1="160" 
              x2="232" y2="323" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(134.599 151 241.5)"
            />
  
            {/* Left angled line */}
            <Line 
              x1="100" y1="250" 
              x2="100" y2="50" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(-30 100 150)"
            />
  
            {/* Right angled line */}
            <Line 
              x1="200" y1="250" 
              x2="200" y2="50" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(30 200 150)"
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default SemisextileSymbol;
  