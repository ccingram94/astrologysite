import { G, Circle, Svg } from '@react-pdf/renderer';

const SunSymbol = ({ 
  x = 0, 
  y = 0, 
  size = 24, // smaller default size for chart
  stroke = "#D2AE3C", 
  strokeWidth = 1  // smaller stroke width for chart
}) => {
  // Scale factor to adjust all dimensions based on size
  const scale = size / 24;
  const centerOffset = size / 2;
  
  return (
    <G transform={`translate(${x - centerOffset} ${y - centerOffset})`}>
      {/* Outer circle */}
      <Circle 
        cx={centerOffset} 
        cy={centerOffset} 
        r={size * 0.4} 
        stroke={stroke} 
        strokeWidth={strokeWidth} 
        fill="none" 
      />

      {/* Center dot */}
      <Circle 
        cx={centerOffset} 
        cy={centerOffset} 
        r={size * 0.08} 
        stroke={stroke} 
        strokeWidth={strokeWidth} 
        fill={stroke} 
      />
    </G>
  );
};

export default SunSymbol;
