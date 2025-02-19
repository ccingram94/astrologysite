const CapricornSymbol = ({ 
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

          {/* Vertical line */}
          <Line 
            transform="rotate(90 56 134.5)"
            x1="-28.5" y1="134.5" 
            x2="140.5" y2="134.5" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

          {/* Upper circle */}
          <Ellipse 
            cx="115" cy="103" 
            rx="59.5" ry="50" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Main diagonal line */}
          <Line 
            x1="174" y1="109" 
            x2="170" y2="209" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

          {/* Lower right circle */}
          <Ellipse 
            cx="219" cy="225" 
            rx="52" ry="39" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Circle at bottom */}
          <Ellipse 
            cx="225.5" cy="418" 
            rx="41.5" ry="41" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* Connecting line */}
          <Line 
            x1="177" y1="202" 
            x2="138" y2="251" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
          />

          {/* Lower left circle */}
          <Ellipse 
            cx="99" cy="240" 
            rx="40" ry="40" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            fill="none" 
          />

          {/* White rectangles to create gaps */}
          <Rect 
            x="-17" y="84" 
            width="184" height="90" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="66" y="108" 
            width="98.00001" height="56" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="222" y="-23" 
            width="86" height="73" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="66" y="125" 
            width="95" height="94.99999" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="-32" y="156" 
            width="78" height="65" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="185" y="14" 
            width="118" height="65.99999" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="66" y="178" 
            width="80" height="39" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            x="45" y="217" 
            width="89" height="18" 
            fill="white" 
            stroke="none" 
          />
          <Rect 
            transform="rotate(35.4295 130.134 227.849)"
            x="119.2201" y="203.34871" 
            width="21.82717" height="49" 
            fill="white" 
            stroke="none" 
          />

          {/* White diagonal line for gap */}
          <Line 
            transform="rotate(6.76962 115 143)"
            x1="126" y1="115" 
            x2="104" y2="171" 
            stroke="white" 
            strokeWidth={19} 
          />
        </G>
      </Svg>
    </G>
  );
};

export default CapricornSymbol;
