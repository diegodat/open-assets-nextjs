import React from "react";

type Props = {
  width?: number;
  height?: number;
};
function IcRepost({ height = 17, width = 16 }: Props) {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.72668 12.3199H11.18C12.1931 12.3199 13.1648 11.9175 13.8812 11.2011C14.5976 10.4847 15 9.51306 15 8.49993C15 7.4868 14.5976 6.51517 13.8812 5.79878C13.1648 5.08239 12.1931 4.67993 11.18 4.67993"
        stroke="#212121"
        stroke-width="1.25"
        stroke-miterlimit="10"
      />
      <path
        d="M9.90668 9.13989L6.72668 12.3199L9.90668 15.4999"
        stroke="#212121"
        stroke-width="1.25"
        stroke-miterlimit="10"
      />
      <path
        d="M9.27333 4.67993H4.82C4.31835 4.67993 3.82161 4.77874 3.35815 4.97071C2.89469 5.16268 2.47357 5.44406 2.11885 5.79878C1.40246 6.51517 1 7.4868 1 8.49993C1 9.51306 1.40246 10.4847 2.11885 11.2011C2.47357 11.5558 2.89469 11.8372 3.35815 12.0292C3.82161 12.2211 4.31835 12.3199 4.82 12.3199"
        stroke="#212121"
        stroke-width="1.25"
        stroke-miterlimit="10"
      />
      <path
        d="M6.09338 7.86L9.27338 4.68L6.09338 1.5"
        stroke="#212121"
        stroke-width="1.25"
        stroke-miterlimit="10"
      />
    </svg>
  );
}

export default IcRepost;
