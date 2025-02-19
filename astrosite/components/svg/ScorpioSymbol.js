const ScorpioSymbol = ({ 
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
  
            {/* Main vertical lines */}
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
  
            {/* Connecting lines */}
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
  
            {/* Small vertical line */}
            <Line 
              x1="116" y1="144" 
              x2="116" y2="160" 
              stroke={stroke} 
              strokeWidth={15} 
            />
  
            {/* Circle */}
            <Ellipse 
              cx="212" cy="223" 
              rx="50" ry="50" 
              stroke={stroke} 
              strokeWidth={strokeWidth} 
              fill="none" 
            />
  
            {/* White overlays */}
            <Rect 
              x="197" y="120" 
              width="27" height="81" 
              fill="white" 
              stroke="white" 
              strokeWidth={strokeWidth} 
            />
            <Ellipse 
              cx="206" cy="222.5" 
              rx="30" ry="39.5" 
              fill="white" 
              stroke="none" 
            />
  
            {/* Arrow head */}
            <Path 
              d="m218.73646,175.4565l7.49355,-8.25939l-14.48841,0l-14.48838,0l0,-5.11295l0,-5.11296l14.32217,0c7.87718,0 14.32216,-0.25915 14.32216,-0.57589c0,-0.31673 -3.13588,-4.03346 -6.96862,-8.25938l-6.96864,-7.6835l6.44115,0l6.44113,0l9.83706,10.82622l9.83706,10.82622l-9.85593,10.8055l-9.85592,10.8055l-6.78097,0l-6.78098,0l7.49357,-8.25939l0,0l0,0.00002z"
              fill={stroke}
              stroke={stroke}
              strokeWidth={10}
              transform="rotate(-135 220.885 162.084)"
            />
          </G>
        </Svg>
      </G>
    );
  };
  
  export default ScorpioSymbol;
  