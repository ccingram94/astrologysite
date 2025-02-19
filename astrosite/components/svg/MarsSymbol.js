import { G, Circle, Path } from '@react-pdf/renderer';

const MarsSymbol = ({ 
  x = 0, 
  y = 0, 
  size = 24, // smaller default size for chart
  stroke = "#D2AE3C", 
  strokeWidth = 1 // smaller stroke width for chart
}) => {
  const centerOffset = size / 2;
  
  return (
    <G transform={`translate(${x - centerOffset} ${y - centerOffset})`}>
      {/* Circle */}
      <Circle 
        cx={size * 0.38} 
        cy={size * 0.64} 
        r={size * 0.27} 
        stroke={stroke} 
        strokeWidth={strokeWidth} 
        fill="none" 
      />

      {/* Arrow and lines - combined into a single Path */}
      <Path
        d={`
          M ${size * 0.55} ${size * 0.45} 
          L ${size * 0.75} ${size * 0.25}
          
          M ${size * 0.62} ${size * 0.26} 
          L ${size * 0.78} ${size * 0.26}
          
          M ${size * 0.75} ${size * 0.39} 
          L ${size * 0.75} ${size * 0.23}
        `}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </G>
  );
};

export default MarsSymbol;
