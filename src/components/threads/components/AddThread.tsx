"use client";

import IcAddThread from "@/components/svgs/IcAddThread";
import { useEffect, useState } from "react";

const AddThread = () => {
  const [showButton, setShowButton] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-500 ${
        showButton ? "opacity-100" : "opacity-30"
      }`}
    >
      <IcAddThread />
    </div>
  );
};

export default AddThread;
