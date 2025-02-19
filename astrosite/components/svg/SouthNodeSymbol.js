const SouthNodeSymbol = ({ 
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
  
          {/* Main symbol group - rotated 180 degrees */}
          <G transform="rotate(180 150 143.75)">
            {/* Side circles */}
            <Ellipse 
              cx="80" cy="220" 
              rx="30" ry="30" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
            <Ellipse 
              cx="220" cy="220" 
              rx="30" ry="30" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Main outer circle */}
            <Ellipse 
              cx="147" cy="117.5" 
              rx="80" ry="80" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* White overlay circles */}
            <Ellipse 
              cx="147.5" cy="122.5" 
              rx="70" ry="68.5" 
              fill="white" 
              stroke="none" 
            />
            <Ellipse 
              cx="149.5" cy="182.5" 
              rx="39.67" ry="40" 
              fill="white" 
              stroke="none" 
            />
  
            {/* White overlay lines */}
            <Line 
              x1="102.67" y1="155.67" 
              x2="147.67" y2="242.33" 
              stroke="white" 
              strokeWidth={strokeWidth} 
            />
            <Line 
              x1="161.97" y1="167.26" 
              x2="198.78" y2="207.19" 
              stroke="white" 
              strokeWidth={strokeWidth} 
              transform="rotate(67.4953 180.376 187.226)" 
            />
            <Line 
              x1="94.05" y1="162.96" 
              x2="139.37" y2="209.49" 
              stroke="white" 
              strokeWidth={strokeWidth} 
              transform="rotate(-166.671 116.709 186.226)" 
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default SouthNodeSymbol;
  