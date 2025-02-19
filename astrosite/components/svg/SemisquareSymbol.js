const SemisquareSymbol = ({ 
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
            {/* Bottom diagonal line */}
            <Line 
              x1="70" y1="160" 
              x2="232" y2="323" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(134.599 151 241.5)"
            />
  
            {/* Top horizontal line */}
            <Line 
              x1="39" y1="53" 
              x2="229" y2="235" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              transform="rotate(90 134 144)"
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default SemisquareSymbol;
  