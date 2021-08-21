import React from "react";

const Logo = ({ onClick }: any) => {
  const styles = `
  .logo {
      margin: 10px 0 0 25px;
  }
  .d {
    stroke-dasharray: 341;
    stroke-dashoffset: 341;
    animation: d 1s cubic-bezier(0.65, 0, 0.35, 1) alternate 1;
    animation-fill-mode: forwards;
  }
  
  .b {
    stroke-dasharray: 241;
    stroke-dashoffset: 241;
    animation: b 1s cubic-bezier(0.65, 0, 0.35, 1) alternate 1;
    animation-fill-mode: forwards;
  }
  
  @keyframes d {
    from {
      stroke-dashoffset: 340;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes b {
    from {
      stroke-dashoffset: 240;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  `;
  return (
    <div className="logo" onClick={onClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="b"
          // stroke="#E6DB74"
          // stroke="#FFF275"
          // stroke="#FFBD00"
          stroke="#FFFCF2"
          strokeWidth="20"
          strokeLinecap="round"
          d="M 10 10 L 10 75 Q 10 98 33 98 L 75 98 Q 97 98 98 75 Q 97 53 75 53 L 52 53"
        />
        <path
          className="d"
          stroke="#32ff7e"
          strokeWidth="20"
          strokeLinecap="round"
          d="M 10 140 L 75 140 Q 140 140 140 75 Q 140 10 75 10 L 10 10"
        />
      </svg>

      <style>{styles}</style>
    </div>
  );
};

export default Logo;
