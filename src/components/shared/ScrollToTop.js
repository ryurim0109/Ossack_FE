import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  //console.log("path : ", pathname);

  useEffect(() => {
    const element = document.getElementById("mobileFrame");
    element.scrollTo(0, 0);
    // window.scrollTo(0, 0);
    // console.log("called");
  }, [pathname]);

  return null;
}
