import { useCallback, useState } from "react";

const useToggle = () => {
  const [show, setShow] = useState(false);

  const toggle = useCallback(() => {
    setShow((prev) => {
      return !prev;
    });
  }, []);

  return { show, toggle };
};

export default useToggle;
