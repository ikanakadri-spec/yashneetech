import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
          <Cookie className="w-8 h-8 text-champagne flex-shrink-0 hidden md:block" />
          
          <div className="flex-1 text-center md:text-left">
            <p className="text-foreground text-sm md:text-base">
              We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.{" "}
              <Link to="/privacy" className="text-emerald hover:text-emerald-light underline">
                Privacy Policy
              </Link>
              {" · "}
              <Link to="/terms" className="text-emerald hover:text-emerald-light underline">
                Terms of Service
              </Link>
            </p>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="text-muted-foreground hover:text-foreground"
            >
              Decline
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-emerald text-primary-foreground hover:bg-emerald-light"
            >
              Accept
            </Button>
          </div>
          
          <button
            onClick={declineCookies}
            className="absolute top-2 right-2 md:hidden p-1 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
