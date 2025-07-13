import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from "react";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    const checkZoom = () => {
      if (window.devicePixelRatio < 1) {
        alert("Please reset your zoom to 100% for the best experience.");
      }
    };
    window.addEventListener("resize", checkZoom);
    checkZoom();

    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  return <Component {...pageProps} />;
}

export default App;
