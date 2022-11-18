import { useEffect, useState } from "react";

const useOutside = (ref: any) => {
  const [isOutside, setIsOutside] = useState<boolean>(true);
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOutside(true);
      } else {
        setIsOutside(false);
      }
    };
    // Bind listeners event;
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind listeners event;
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { isOutside };
};

export default useOutside;
