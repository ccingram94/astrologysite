const OppositionSymbol = ({ 
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
            {/* Bottom left circle */}
            <Ellipse 
              cx="80" cy="220" 
              rx="50" ry="50" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Top right circle */}
            <Ellipse 
              cx="220" cy="80" 
              rx="50" ry="50" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Diagonal line connecting circles */}
            <Line 
              x1="115" y1="177" 
              x2="183" y2="123" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(-7.17589 149 150)"
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default OppositionSymbol;
  