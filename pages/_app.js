import "../styles/globals.css";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  // Hide splash screen shen we are server side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
