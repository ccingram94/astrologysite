const SagittariusSymbol = ({ 
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

          {/* White rectangle for gap */}
          <Rect 
            x="-17" y="84" 
            width="184" height="90" 
            fill="white" 
            stroke="white" 
            strokeWidth={strokeWidth} 
          />

          {/* Diagonal lines */}
          <Line 
            x1="28" y1="156" 
            x2="268" y2="156" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            transform="rotate(-45 148 156)"
          />
          <Line 
            x1="91.61" y1="166.75" 
            x2="187.89" y2="166.75" 
            stroke={stroke} 
            strokeWidth={strokeWidth} 
            transform="rotate(-135 139.75 166.75)"
          />

          {/* Arrow head */}
          <Path 
            d="m215.81369,107.84658l20.23376,-15.8534l-39.12098,0l-39.1209,0l0,-9.814l0,-9.81401l38.6721,0c21.26963,0 38.67207,-0.49742 38.67207,-1.10538c0,-0.60795 -8.46737,-7.74198 -18.81636,-15.8534l-18.81642,-14.74803l17.39212,0l17.39206,0l26.56161,20.78029l26.5616,20.78028l-26.61255,20.74052l-26.61254,20.74052l-18.30967,0l-18.30972,0l20.23381,-15.85341l0.00001,0z"
            fill={stroke}
            stroke="none"
            transform="rotate(-45 221.615 82.1792)"
          />
        </G>
      </Svg>
    </G>
  );
};

export default SagittariusSymbol;
