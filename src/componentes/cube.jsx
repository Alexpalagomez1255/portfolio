import React from "react";

function CubeAnimation() {
  return (
    <svg className=" w-64 h-64" viewBox="0 0 100 100">
      <path
        className="fill-current text-blue-500"
        d="M50,5 L5,30 L5,70 L50,95 L95,70 L95,30 Z"
      />
      <path
        className="fill-current text-blue-400"
        d="M50,5 L50,35 L5,60 L5,30 Z"
      />
      <path
        className="fill-current text-blue-600"
        d="M50,35 L95,60 L95,30 L50,5 Z"
      />
      
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate3d"
        from="0 50 50"
        to="360 50 50"
        dur="10s"
        repeatCount="indefinite"
      />
    </svg>
  );
}

export default CubeAnimation;
