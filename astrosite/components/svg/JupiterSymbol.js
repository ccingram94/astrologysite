const JupiterSymbol = ({ 
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
            {/* Semi-circle */}
            <Ellipse 
              cx="73" cy="102" 
              rx="80" ry="80" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Vertical line */}
            <Line 
              x1="204" y1="70" 
              x2="202" y2="270" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* Horizontal line */}
            <Line 
              x1="43" y1="183" 
              x2="277" y2="184" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* White rectangle to create gap in circle */}
            <Rect 
              x="-6" y="5" 
              width="54" height="253" 
              fill="white" 
              stroke="white" 
              strokeWidth={10} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default JupiterSymbol;
  