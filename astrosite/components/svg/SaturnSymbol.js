const SaturnSymbol = ({ 
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
            {/* Main circle */}
            <Ellipse 
              cx="168" cy="202" 
              rx="80" ry="80" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Vertical line */}
            <Line 
              x1="110" y1="10" 
              x2="110" y2="271" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* Horizontal line */}
            <Line 
              x1="60" y1="63" 
              x2="164" y2="64" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* White rectangles to create gaps */}
            <Rect 
              x="41" y="122" 
              width="54" height="253" 
              fill="white" 
              stroke="white" 
              strokeWidth={10} 
            />
            <Rect 
              x="-80" y="241" 
              width="231" height="63" 
              fill="white" 
              stroke="white" 
              strokeWidth={10} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default SaturnSymbol;
  