export default function HeroAnimation() {
  return (
    <div className="hidden md:block absolute inset-0 z-0 overflow-hidden animate-fade-in-slow">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g
          stroke="#3b82f6"
          strokeWidth="1"
          fill="none"
          className="animate-light-stroke"
        >
          <rect x="20%" y="20%" width="18%" height="10%" />
          <rect x="45%" y="35%" width="22%" height="12%" />
          <rect x="55%" y="60%" width="15%" height="10%" />
          <line x1="30%" y1="75%" x2="70%" y2="75%" />
          <line x1="40%" y1="55%" x2="40%" y2="85%" />
        </g>
      </svg>
    </div>
  );
}
