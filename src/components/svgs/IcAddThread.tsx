import React from "react";

function IcAddThread() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2776_18527)">
        <circle cx="32" cy="32" r="28" fill="#1976D2" />
        <path
          d="M20.54 32H43.46"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M32 20.54V43.46"
          stroke="white"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2776_18527"
          x="0"
          y="0"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2776_18527"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2776_18527"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default IcAddThread;
