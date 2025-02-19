const SextileSymbol = ({ 
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
            {/* First diagonal line */}
            <Line 
              x1="70" y1="70" 
              x2="230" y2="230" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(134.599 150 150)"
            />
  
            {/* Second diagonal line */}
            <Line 
              x1="70" y1="70" 
              x2="230" y2="230" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(80 150 150)"
            />
  
            {/* Third diagonal line */}
            <Line 
              x1="70" y1="70" 
              x2="230" y2="230" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(-170 150 150)"
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default SextileSymbol;
  