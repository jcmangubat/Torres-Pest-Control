import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./MobileNav";
import tpc_00 from "@/assets/images/tpc_00.jpg";
import tpc_01 from "@/assets/images/tpc_01.jpg";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
      transition-all duration-300 border-b border-gray-200 dark:border-gray-700
      md:fixed md:top-0 md:left-0 md:right-0 md:z-50
      ${
        isScrolled
          ? "md:bg-white/80 md:dark:bg-gray-900/80 md:backdrop-blur-md md:shadow-lg"
          : "bg-white dark:bg-gray-900 shadow-sm"
      }
    `}
    >
      <div className="w-full px-6 py-4 max-w-full lg:max-w-7xl xl:max-w-screen-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={tpc_00}
                alt="Torres Pest Control Logo"
                className="h-20- w-20 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  <span className="text-red-600">TORRES</span>{" "}
                  <span className="text-blue-600">PEST CONTROL</span>
                </h1>
                <p
                  className="text-sm text-gray-600 dark:text-gray-300"
                  style={{ paddingLeft: "0.25rem" }}
                >
                  Your Trusted Pest Control Specialist
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-6">
              <a
                href="/#services"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Services
              </a>
              <a
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                About
              </a>
              <a
                href="/certificates"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Certificates
              </a>
              <a
                href="/regions"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Served Regions
              </a>
              <a
                href="/gallery"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Gallery
              </a>
              <a
                href="/#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
              >
                Contact
              </a>
              <div className="w-full flex justify-end">
                <div className="flex items-center gap-4 flex-wrap">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="p-2"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-7 h-7 text-blue-600 hover:text-blue-800 transition" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-7 h-7 text-pink-500 hover:text-pink-600 transition" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="w-7 h-7 text-red-600 hover:text-red-700 transition" />
                  </a>
                </div>
              </div>
            </nav>
          )}

          {/* <!--Mobile Navigation--> */}
          {isMobile && <MobileNav isScrolled={isScrolled} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
