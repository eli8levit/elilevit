import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect } from "react";

export const Fathom = () => {
  const location = useLocation();

  useEffect(() => {
    load("KLPMEZMO", {
      includedDomains: ["elilevit.co"],
    });
  }, []);

  useEffect(() => {
    trackPageview();
  }, [location.pathname, location.search]);

  return null;
};
