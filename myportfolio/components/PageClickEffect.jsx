import { useEffect } from "react";

export default function PageClickEffect() {
  useEffect(() => {
    const handleClick = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
