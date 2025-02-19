const LeoSymbol = ({ 
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

          {/* Three circles */}
          <Ellipse 
            cx="117" cy="187" 
            rx="50" ry="50" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />
          <Ellipse 
            cx="160" cy="83" 
            rx="52" ry="59" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />
          <Ellipse 
            cx="237" cy="154" 
            rx="44" ry="59" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* White rectangles to create gaps */}
          <Rect 
            transform="rotate(-37.6353 161.755 139.261)"
            x="156.2043" y="113.11869" 
            width="11.10217" height="52.28442" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            transform="rotate(16.289 248.886 108.467)"
            x="217.42475" y="69.91641" 
            width="62.92318" height="77.10076" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            transform="rotate(18.3051 177.115 120.671)"
            x="164.84132" y="98.79516" 
            width="24.54808" height="43.75161" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            transform="rotate(7.7166 178.992 128.149)"
            x="171.7954" y="103.35317" 
            width="14.393" height="49.59248" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            transform="rotate(47.2094 149.601 122.102)"
            x="128.85113" y="113.81475" 
            width="41.49939" height="16.57447" 
            fill="white" 
            stroke="none" 
          />
        </G>
      </Svg>
    </G>
  );
};

export default LeoSymbol;
