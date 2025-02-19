const UranusSymbol = ({ 
    x = 0, 
    y = 0, 
    size = 300, 
    stroke = "#D2AE3C", 
    strokeWidth = 20 
  }) => {
    const scale = size / 300;
    
    return (
      <G transform={`translate(${x-size/2}, ${y-size/2}) scale(${scale})`}>
        <Svg width={300} height={300}>
          <Defs>
            <ClipPath id="uranusClip">
              <Rect x="110" y="0" width="80" height="200" />
            </ClipPath>
          </Defs>
          <G>
            <Ellipse 
              cx="149.5" 
              cy="230" 
              rx="30" 
              ry="30" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
            <Line 
              x1="150" 
              y1="30" 
              x2="150" 
              y2="200" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
            <G clipPath="url(#uranusClip)">
              <Ellipse 
                cx="60" 
                cy="100" 
                rx="50" 
                ry="90" 
                stroke={stroke} 
                strokeWidth={strokeWidth} 
                fill="none" 
              />
              <Ellipse 
                cx="240" 
                cy="100" 
                rx="50" 
                ry="90" 
                stroke={stroke} 
                strokeWidth={strokeWidth} 
                fill="none" 
              />
            </G>
            <Line 
              x1="110" 
              y1="100" 
              x2="190" 
              y2="100" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
          </G>
        </Svg>
      </G>
    );
  };
  