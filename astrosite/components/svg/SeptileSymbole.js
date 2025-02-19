const SeptileSymbol = ({ 
    x = 0, 
    y = 0, 
    size = 300, 
    stroke = "#D2AE3C", 
    strokeWidth = 0 
  }) => {
    // Scale factor to adjust all dimensions based on size
    const scale = size / 300;
    
    return (
      <G transform={`translate(${x-size/2}, ${y-size/2}) scale(${scale})`}>
        <Svg width={300} height={300}>
          <G>
            <Text
              x="69"
              y="282"
              fontSize="250"
              fontFamily="Inter, Arial, sans-serif"
              fill={stroke}
              stroke={stroke}
              strokeWidth={strokeWidth}
              transform="matrix(1 0 0 1.08738 6 -57.8984)"
            >
              S
            </Text>
          </G>
        </Svg>
      </G>
    );
  };
  
  export default SeptileSymbol;
  