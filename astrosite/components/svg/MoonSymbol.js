const MoonSymbol = ({ 
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
            {/* Outer circle */}
            <Ellipse 
              cx="150" cy="150" 
              rx="140" ry="140" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Inner curve */}
            <Ellipse 
              cx="104" cy="152" 
              rx="113" ry="121" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="white" 
            />
  
            {/* White ellipse to create crescent shape */}
            <Ellipse 
              cx="19" cy="153.49999" 
              rx="91" ry="152.5" 
              fill="white" 
              stroke="white" 
              strokeWidth={10} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default MoonSymbol;
  