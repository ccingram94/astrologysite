const MercuryIcon = ({ color = '#000000', strokeWidth = 1 }) => {
  return (
    <svg viewBox="-8 -22 24 24" width="24" height="24">
      {/* Body part */}
      <path
        d="M0,0 4.26011,0 M2.13006,-2.98207 2.13006,2.13006 M6.83318,-7.66824 A4.70315,4.70315 0 0 1 2.13003,-2.96509 4.70315,4.70315 0 0 1 -2.57311,-7.66824 4.70315,4.70315 0 0 1 2.13003,-12.37139 4.70315,4.70315 0 0 1 6.83318,-7.66824 Z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Crown part */}
      <path
        d="M6,-16 A3.9717855,3.9717855 0 0 1 2.04459,-12.40946 3.9717855,3.9717855 0 0 1 -1.90726,-16"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default MercuryIcon;
