const QuincunxSymbol = ({ 
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
          {/* Main group with 180 degree rotation */}
          <G transform="rotate(180 152 94.3985)">
            {/* Diagonal line */}
            <Line 
              x1="71" y1="44" 
              x2="233" y2="207" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(134.599 152 125.5)"
            />
  
            {/* Left angled line */}
            <Line 
              x1="101" y1="135" 
              x2="101" y2="-65" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(-30 101 35)"
            />
  
            {/* Right angled line */}
            <Line 
              x1="201" y1="135" 
              x2="201" y2="-65" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(30 201 35)"
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default QuincunxSymbol;
  