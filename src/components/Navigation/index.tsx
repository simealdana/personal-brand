"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactMe = () => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("#contact-me")) {
      window.location.href = currentUrl.replace("#contact-me", "");
    } else {
      window.location.href = `${currentUrl}#contact-me`;
    }
  };

  return (
    <>
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Simeon.io"
                width={60}
                height={60}
              />
            </div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center gap-6">
              {/*
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Tools
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
         
               
                <DropdownMenuContent className="w-64">
                  {TOOLS.map((tool) => (
                    <DropdownMenuItem
                      key={tool.name}
                      className="p-3"
                      onClick={() => handleGoToTool(tool.type)}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{tool.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {tool.badge}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {tool.description}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              */}

              <button
                className="group px-2 sm:px-8 py-2 sm:py-1 bg-white text-blue-600 rounded-full font-bold hover:bg-opacity-90 transition-all text-base sm:text-lg"
                onClick={handleContactMe}
              >
                Contact Me
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Add Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                {/*
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 w-full justify-between"
                    >
                      Tools
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-screen">
                    {TOOLS.map((tool) => (
                      <DropdownMenuItem
                        key={tool.name}
                        className="p-3"
                        onClick={() => {
                          handleGoToTool(tool.type);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{tool.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {tool.badge}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {tool.description}
                          </p>
                        </div>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                */}

                <Button
                  className="bg-blue-600 hover:bg-blue-700 w-full font-bold"
                  onClick={() => {
                    handleContactMe();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.header>
    </>
  );
}
