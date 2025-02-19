const PlutoSymbol = ({ 
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
            {/* Vertical line */}
            <Line 
              x1="150" y1="222.67" 
              x2="150" y2="290" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* Outer circle */}
            <Ellipse 
              cx="150" cy="130" 
              rx="91" ry="89" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Inner circle */}
            <Ellipse 
              cx="150.34" cy="130.33" 
              rx="60" ry="60" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Horizontal line at bottom */}
            <Line 
              x1="110" y1="250" 
              x2="190" y2="250" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* White rectangle for top gap */}
            <Rect 
              x="7" y="-151" 
              width="308" height="253" 
              fill="white" 
              stroke="white" 
              strokeWidth={10} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default PlutoSymbol;
  