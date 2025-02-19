const VenusSymbol = ({ 
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
              cx="150" 
              cy="110" 
              rx="80" 
              ry="80" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Vertical line */}
            <Line 
              x1="150" 
              y1="190" 
              x2="150" 
              y2="290" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* Horizontal line */}
            <Line 
              x1="100" 
              y1="240" 
              x2="200" 
              y2="240" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default VenusSymbol;
  