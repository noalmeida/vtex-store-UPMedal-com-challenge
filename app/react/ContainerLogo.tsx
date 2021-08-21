import React, { useState } from "react";
import Logo from "./Logo";

export default function ContainerLogo() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container">
      {isVisible && (
        <Logo
          onClick={() => {
            setIsVisible((isVisible) => !isVisible);
            setTimeout(() => {
              setIsVisible((isVisible) => !isVisible);
            }, 100);
          }}
        />
      )}
    </div>
  );
}
