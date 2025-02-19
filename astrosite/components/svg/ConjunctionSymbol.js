const ConjunctionSymbol = ({ 
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
            {/* Circle */}
            <Ellipse 
              cx="107" cy="184" 
              rx="50" ry="50" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Diagonal line */}
            <Line 
              x1="149" y1="145" 
              x2="217" y2="91" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default ConjunctionSymbol;
  