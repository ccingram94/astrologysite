const TrineSymbol = ({ 
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
            {/* Triangle */}
            <Path 
              d="M52,262 L151.5,61 L251,262 Z" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default TrineSymbol;
  