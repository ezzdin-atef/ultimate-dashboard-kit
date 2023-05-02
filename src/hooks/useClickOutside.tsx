import { useEffect, useRef, useState } from "react";

interface useClickOutsideProps {
  condition: boolean;
  fn?: () => void;
}

export default function useClickOutside({ condition, fn }: useClickOutsideProps) {
  const ref = useRef<any>(null);
  const [isClickedOutside, setIsClickedOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      console.log("clickOutside", event);

      if (ref && !ref.current?.contains(event.target)) {
        fn && fn();
        setIsClickedOutside(true);
      }
    };
    if (condition) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setIsClickedOutside(false);
    };
  }, [condition]);

  return { ref, isClickedOutside };
}
