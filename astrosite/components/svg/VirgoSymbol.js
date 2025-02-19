const VirgoSymbol = ({ 
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
          <ClipPath id="virgoClip">
            <Rect x="-17" y="174" width="184" height="200" />
          </ClipPath>
        </Defs>
        <G>
          <Line 
            x1="130" y1="363" 
            x2="128" y2="541" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <G clipPath="url(#virgoClip)">
            <Ellipse 
              cx="200" cy="183" 
              rx="71" ry="81" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
          </G>
          <Line 
            x1="50" y1="31" 
            x2="50" y2="268" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <Line 
            x1="180" y1="28" 
            x2="180" y2="265" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <Line 
            x1="52" y1="37" 
            x2="118" y2="153" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <Line 
            x1="86" y1="61" 
            x2="206" y2="125" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            transform="rotate(90 146 93)" 
          />
          <Line 
            x1="116" y1="144" 
            x2="116" y2="160" 
            stroke={stroke} 
            strokeWidth="15" 
          />
        </G>
      </Svg>
    </G>
  );
};
