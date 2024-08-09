import React from "react";

type Props = {
  width?: number;
  height?: number;
};

function IcSeenEntry({ height = 17, width = 16 }: Props) {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33337 8.68174C1.33337 8.68174 3.75762 3.83325 8.00004 3.83325C12.2425 3.83325 14.6667 8.68174 14.6667 8.68174C14.6667 8.68174 12.2425 13.5302 8.00004 13.5302C3.75762 13.5302 1.33337 8.68174 1.33337 8.68174Z"
        stroke="#212121"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.00007 10.4999C9.00422 10.4999 9.81825 9.68586 9.81825 8.68171C9.81825 7.67755 9.00422 6.86353 8.00007 6.86353C6.99591 6.86353 6.18188 7.67755 6.18188 8.68171C6.18188 9.68586 6.99591 10.4999 8.00007 10.4999Z"
        stroke="#212121"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default IcSeenEntry;
