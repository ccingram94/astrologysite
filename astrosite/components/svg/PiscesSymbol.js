const PiscesSymbol = ({ 
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
          {/* Base lines */}
          <Line 
            x1="130" y1="363" 
            x2="128" y2="541" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />
          <Line 
            x1="594" y1="191" 
            x2="594" y2="192" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

          {/* Small circle */}
          <Ellipse 
            cx="225.5" cy="418" 
            rx="41.5" ry="41" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Horizontal connecting line */}
          <Line 
            x1="80" y1="150" 
            x2="220" y2="150" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

          {/* Two vertical ellipses */}
          <Ellipse 
            cx="220" cy="150" 
            rx="50" ry="100" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />
          <Ellipse 
            cx="80" cy="150" 
            rx="50" ry="100" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* White rectangles to create gaps */}
          <Rect 
            x="250" y="22.67" 
            width="120.67" height="268" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="-70" y="-18" 
            width="120.67" height="308" 
            fill="white" 
            stroke="none" 
          />
        </G>
      </Svg>
    </G>
  );
};

export default PiscesSymbol;
