const NeptuneSymbol = ({ 
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
            {/* Vertical line */}
            <Line 
              x1="150" y1="100" 
              x2="150" y2="290" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* Circle */}
            <Ellipse 
              cx="148" cy="117" 
              rx="91" ry="89" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* Horizontal line at bottom */}
            <Line 
              x1="110" y1="250" 
              x2="190" y2="250" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
            />
  
            {/* White rectangle for top gap */}
            <Rect 
              x="7" y="-151" 
              width="308" height="253" 
              fill="white" 
              stroke="white" 
              strokeWidth={10} 
            />
  
            {/* Trident points */}
            <Path 
              d="m235.67542,100.9643l9.9357,-14.44949l-19.21019,0l-19.21014,0l0,-8.94491l0,-8.94491l18.98976,0c10.44436,0 18.98976,-0.45337 18.98976,-1.00751c0,-0.5541 -4.15787,-7.05637 -9.23969,-14.44947l-9.23972,-13.442l8.54033,0l8.54029,0l13.04296,18.94007l13.04295,18.94007l-13.06797,18.90383l-13.06797,18.90383l-8.99088,0l-8.9909,0l9.93573,-14.44949l0,0z"
              transform="rotate(-90 238.524 77.5699)"
              fill={stroke}
              stroke={stroke}
              strokeWidth={2}
            />
            <Path 
              d="m54.67592,100.63043l9.9357,-14.44949l-19.21019,0l-19.21014,0l0,-8.94491l0,-8.94492l18.98976,0c10.44436,0 18.98976,-0.45337 18.98976,-1.00751c0,-0.5541 -4.15787,-7.05637 -9.23969,-14.44947l-9.23972,-13.442l8.54033,0l8.54029,0l13.04296,18.94007l13.04295,18.94007l-13.06797,18.90383l-13.06797,18.90382l-8.99088,0l-8.9909,0l9.93573,-14.44949l0,0z"
              transform="rotate(-90 57.5246 77.236)"
              fill={stroke}
              stroke={stroke}
              strokeWidth={2}
            />
            <Path 
              d="m145.87315,83.86183l14.48074,-14.38585l-27.99778,0l-27.99772,0l0,-8.90552l0,-8.90553l27.67652,0c15.22207,0 27.67652,-0.45137 27.67652,-1.00307c0,-0.55166 -6.05987,-7.02529 -13.46634,-14.38583l-13.46639,-13.3828l12.44706,0l12.44699,0l19.00939,18.85666l19.00938,18.85666l-19.04585,18.82058l-19.04585,18.82057l-13.10371,0l-13.10374,0l14.48077,-14.38585l0,0z"
              transform="rotate(-90 150.025 60.5704)"
              fill={stroke}
              stroke={stroke}
              strokeWidth={2}
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default NeptuneSymbol;
  