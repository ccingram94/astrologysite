const MoonIcon = ({ color = '#000000', strokeWidth = 1 }) => {
  return (
    <svg viewBox="-8 -8 24 24" width="24" height="24">
      <path
        d="M0,0 a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
      />
    </svg>
  );
};

export default MoonIcon;
