import React, { useState, useEffect, useRef } from "react";
import jpSaini from "../../assets/images/jpsaini.webp";

import rakeshKumar from "../../assets/images/RakeshKumar.jpg";
import Fluxlogo from "../../assets/images/Fluxlogo.jpg";

// --- TYPE DEFINITIONS ---
interface ProfileCardProps {
  imageUrl: string | any;
  name: string;
  title: string;
  description: string;
  onImageClick: (url: string) => void;
}

interface ValueCardData {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface ValueCardProps extends ValueCardData {
  onClick: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// --- DYNAMIC HEADLINE COMPONENT ---

// --- DYNAMIC HEADLINE COMPONENT ---
const DynamicHeadline: React.FC<{ words?: string[] }> = ({
  words = [
    "FLUX Club - Future Leaders of Unbound EXperiments",
    "",
    "Innovate. Interact. Impact.",
    "",
  ],
}) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: number;
    const word = words[index];

    if (!deleting) {
      if (display.length < word.length) {
        // Set typing speed to 60ms to type out slowly
        timeout = window.setTimeout(
          () => setDisplay(word.slice(0, display.length + 1)),
          80
        );
      } else {
        // Set the pause delay to 100, causing instant deletion
        timeout = window.setTimeout(() => setDeleting(true), 100);
      }
    } else {
      if (display.length > 0) {
        // Set deletion speed to 50ms to have a visible deletion effect
        timeout = window.setTimeout(
          () => setDisplay(word.slice(0, display.length - 1)),
          70
        );
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, words]);

  return (
    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight min-h-[64px] sm:min-h-[96px] lg:min-h-[128px] flex items-center justify-center">
      <span className="text-white">
        {display}
        <span className="inline-block ml-1 w-0.5 sm:w-1 h-12 sm:h-16 lg:h-20 bg-green-400 animate-pulse align-middle" />
      </span>
    </h1>
  );
};
// --- TYPEWRITER COMPONENT FOR "WHAT IS FLUX" ---
const TypewriterText: React.FC<{ text: string; speed?: number }> = ({
  text,
  speed = 80,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      if (displayText.length < text.length) {
        setDisplayText(text.slice(0, displayText.length + 1));
      } else {
        // Reset and restart
        setTimeout(() => setDisplayText(""), 3000);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, text, speed, isVisible]);

  return (
    <div ref={ref} className="min-h-[2rem]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 font-bold">
        {displayText}
        {displayText.length < text.length && (
          <span className="animate-pulse">|</span>
        )}
      </span>
    </div>
  );
};

// --- SVG ICONS ---
const ResearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 group-hover:scale-110 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const InnovationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 sm:h-16 sm:w-16 text-purple-400 group-hover:scale-110 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const CollaborationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 sm:h-16 sm:w-16 text-green-400 group-hover:scale-110 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const LearningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 sm:h-16 sm:w-16 text-purple-400 group-hover:scale-110 transition-transform duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

// --- ANIMATED COMPONENTS ---
const AnimatedCard: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      {children}
    </div>
  );
};

// --- PARALLAX COMPONENT ---
const ParallaxSection: React.FC<{
  children: React.ReactNode;
  speed?: number;
  maxShift?: number;
}> = ({ children, speed = 0.25, maxShift = 120 }) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // Use rect.top so movement is relative to viewport position of the element.
      // Negative rect.top means element is above the viewport top.
      let shift = -rect.top * speed;

      // Clamp to avoid huge translations that cause overlap/overflow
      if (shift > maxShift) shift = maxShift;
      if (shift < -maxShift) shift = -maxShift;

      // Use rAF for smoother updates
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() =>
        setOffset(Math.round(shift))
      );
    };

    // initial call and listener
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [speed, maxShift]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div
        className="will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 120ms linear",
        }}
      >
        {children}
      </div>
    </div>
  );
};

// --- REUSABLE COMPONENTS ---
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-full max-h-full animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 h-10 w-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white flex items-center justify-center text-2xl z-10 hover:from-green-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-green-500/50 transform hover:scale-110"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [welcomeText, setWelcomeText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Welcome to FLUX";

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter effect for Welcome to FLUX
  useEffect(() => {
    let timeout: number;

    if (!isDeleting) {
      if (welcomeText.length < fullText.length) {
        timeout = window.setTimeout(() => {
          setWelcomeText(fullText.slice(0, welcomeText.length + 1));
        }, 120);
      } else {
        timeout = window.setTimeout(() => setIsDeleting(true), 3000);
      }
    } else {
      if (welcomeText.length > 0) {
        timeout = window.setTimeout(() => {
          setWelcomeText(fullText.slice(0, welcomeText.length - 1));
        }, 80);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [welcomeText, isDeleting, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-black text-white fixed top-0 left-0 z-0 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Moving particles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-10 w-12 h-12 border-2 border-green-400/20 rounded-lg animate-spin opacity-40"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            animationDuration: "20s",
          }}
        />
        <div
          className="absolute top-40 right-20 w-8 h-8 border-2 border-purple-400/20 rounded-full animate-bounce opacity-30"
          style={{
            transform: `translateY(${scrollY * -0.2}px)`,
            animationDelay: "1s",
          }}
        />

        {/* Gradient overlays with parallax */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-green-900/5 to-purple-900/5"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      <div className="text-center p-4 max-w-6xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Welcome typewriter text */}
        <div className="mb-8 sm:mb-12">
          <div className="min-h-[4rem] sm:min-h-[6rem] lg:min-h-[8rem] flex items-center justify-center">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-green-400 whitespace-nowrap">
              {welcomeText}
              <span
                className={`ml-2 inline-block w-1 h-8 sm:h-12 lg:h-16 bg-green-400 ${
                  showCursor ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100 align-middle`}
              />
            </h2>
          </div>
        </div>

        {/* Main FLUX headline */}
        <div className="mb-8 sm:mb-12 transform hover:scale-105 transition-transform duration-500">
          <DynamicHeadline />
        </div>

        {/* Content with proper spacing */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              A Research Club by the Department of Computer Science and
              Engineering
            </p>
          </div>

          <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
            <p className="text-base sm:text-lg lg:text-xl text-green-400 font-semibold">
              Madan Mohan Malaviya University of Technology, Gorakhpur
            </p>
          </div>

          <div className="opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards] pt-4">
            <div className="inline-block group cursor-pointer transform hover:scale-110 transition-all duration-300">
              <div className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-full border border-green-400/30 backdrop-blur-sm hover:from-green-600/30 hover:to-purple-600/30 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                <span className="text-green-400 font-bold text-base sm:text-lg lg:text-xl group-hover:text-white transition-colors duration-300">
                  Innovate Interact Impact
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeInUp_1s_ease-out_1.5s_forwards]">
          <div className="flex flex-col items-center space-y-2 text-green-400/70 hover:text-green-400 transition-colors duration-300 cursor-pointer group">
            <span className="text-xs sm:text-sm font-medium group-hover:scale-110 transition-transform duration-300">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center group-hover:border-green-400 transition-colors duration-300">
              <div className="w-1 h-3 bg-green-400/70 rounded-full mt-2 animate-bounce group-hover:bg-green-400 transition-colors duration-300" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageUrl,
  name,
  title,
  description,
  onImageClick,
}) => (
  <div className="group bg-gray-950/80 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-500 ease-out hover:shadow-green-500/20 w-full max-w-4xl mx-auto hover:border-green-500/30 transform hover:-translate-y-3 hover:scale-[1.02]">
    <div className="flex flex-col lg:flex-row">
      <div className="lg:flex-shrink-0 overflow-hidden relative">
        <img
          className="h-64 sm:h-72 lg:h-full w-full lg:w-64 xl:w-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out cursor-pointer"
          src={imageUrl}
          alt={`Profile of ${name}`}
          onClick={() => onImageClick(imageUrl)}
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/400x400/000000/10b981?text=Profile";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 sm:p-8 lg:p-10 flex-1">
        <div className="uppercase tracking-wide text-xs sm:text-sm text-green-400 font-semibold mb-2 transform group-hover:scale-105 transition-transform duration-300">
          {title}
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight font-bold text-white mb-4 group-hover:text-green-100 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ValueCard: React.FC<ValueCardProps> = ({
  title,
  icon,
  description,
  onClick,
}) => (
  <div
    className="group bg-gray-950/80 backdrop-blur-sm border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg shadow-black/30 flex flex-col items-center text-center transform hover:-translate-y-3 transition-all duration-500 ease-out cursor-pointer hover:border-green-500/50 hover:shadow-green-500/20 hover:bg-gray-900/80"
    onClick={onClick}
  >
    <div className="mb-4 sm:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-green-100 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-300 text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
      {description}
    </p>
  </div>
);

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<ValueCardData | null>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Inter', sans-serif";

    // Add custom CSS for animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const patronData = {
    imageUrl: jpSaini,
    name: "Prof. Jai Prakash Saini",
    title: "Patron & Honourable Vice Chancellor",
    description:
      "The Vice Chancellor of Madan Mohan Malaviya University of Technology, Gorakhpur. Under his visionary leadership, the university continues to excel in technical education and research innovation, fostering an environment where students and faculty can push the boundaries of knowledge.",
  };

  const hodData = {
    imageUrl: rakeshKumar,
    name: "Prof. Rakesh Kumar",
    title: "Head of Department",
    description:
      "Head of the Department of Computer Science and Engineering. Prof. Kumar has been instrumental in establishing FLUX Club and promoting research culture among students and faculty, encouraging innovative thinking and collaborative problem-solving.",
  };

  const objectivesData: ValueCardData[] = [
    {
      title: "Research Excellence",
      icon: <ResearchIcon />,
      description:
        "Fostering a research-driven culture that encourages innovative thinking, academic excellence, and cutting-edge discoveries in computer science and engineering.",
    },
    {
      title: "Innovation Hub",
      icon: <InnovationIcon />,
      description:
        "Creating a dynamic platform for hackathons, conferences, and tech conclaves that showcase breakthrough solutions to real-world challenges.",
    },
    {
      title: "Industry Synergy",
      icon: <CollaborationIcon />,
      description:
        "Building strong connections with industry experts, academic researchers, and startups to bridge the gap between theory and practice.",
    },
    {
      title: "Holistic Learning",
      icon: <LearningIcon />,
      description:
        "Providing comprehensive opportunities for project incubation, interdisciplinary collaboration, and skill development in emerging technologies.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-md text-white p-4 fixed top-0 left-0 right-0 z-20 border-b border-gray-800/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-green-400">FLUX</span>
                <span className="text-white ml-1 hidden sm:inline">Club</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm lg:text-base">
              <a
                href="#about"
                className="hover:text-green-400 transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#leadership"
                className="hover:text-green-400 transition-colors duration-200"
              >
                Leadership
              </a>
              <a
                href="#objectives"
                className="hover:text-green-400 transition-colors duration-200"
              >
                Objectives
              </a>
            </nav>
            <button className="md:hidden text-green-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <HeroSection />

      <div className="relative z-10 mt-[100vh]">
        <main>
          {/* Leadership Section - Moved to beginning */}
          <section
            id="leadership"
            className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-950 to-black"
          >
            <div className="container mx-auto px-4 sm:px-6">
              <AnimatedCard>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                    Leadership
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                    Meet the visionary leaders guiding FLUX Club towards
                    excellence
                  </p>
                </div>
              </AnimatedCard>
              <div className="space-y-12 sm:space-y-16">
                <AnimatedCard delay={200}>
                  <ProfileCard {...patronData} onImageClick={setModalImage} />
                </AnimatedCard>
                <AnimatedCard delay={400}>
                  <ProfileCard {...hodData} onImageClick={setModalImage} />
                </AnimatedCard>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 to-purple-900/5" />
            <div className="container mx-auto px-4 sm:px-6 relative">
              <ParallaxSection speed={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  <AnimatedCard>
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white">
                          <TypewriterText text="What is FLUX?" speed={100} />
                        </h2>
                      </div>
                      <div className="space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        <p className="animate-in slide-in-from-left duration-1000 delay-300">
                          <strong className="text-green-400">FLUX</strong>{" "}
                          stands for{" "}
                          <strong className="text-purple-400">
                            "Future Leaders of Unbound EXperiments"
                          </strong>{" "}
                          - a research club that acts as a catalyst for
                          innovation and collaboration in computing and emerging
                          technologies.
                        </p>
                        <p className="animate-in slide-in-from-left duration-1000 delay-500">
                          We foster a research-oriented mindset among students
                          and faculty, creating opportunities for ideation,
                          interdisciplinary interaction, and real-world
                          problem-solving through cutting-edge projects and
                          collaborations.
                        </p>
                        <div className="pt-4 animate-in slide-in-from-left duration-1000 delay-700">
                          <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-600/20 to-purple-600/20 rounded-lg border border-green-400/30">
                            <span className="text-green-400 font-semibold">
                              Innovate. Interact. Impact.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                  <AnimatedCard delay={300}>
                    <img
                      src={Fluxlogo}
                      alt="Technology and Innovation"
                      className="relative rounded-2xl shadow-2xl shadow-black/50 w-full h-64 sm:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </AnimatedCard>
                </div>
              </ParallaxSection>
            </div>
          </section>

          {/* Objectives Section */}
          <section
            id="objectives"
            className="py-12 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-950 to-black"
          >
            <div className="container mx-auto px-4 sm:px-6">
              <AnimatedCard>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                    Our Objectives
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
                    The core principles that drive our mission and vision
                  </p>
                </div>
              </AnimatedCard>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
                {objectivesData.map((objective, index) => (
                  <AnimatedCard key={index} delay={index * 150}>
                    <ValueCard
                      {...objective}
                      onClick={() => setSelectedCard(objective)}
                    />
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800/50 text-gray-300 py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center space-y-4">
              <div className="text-xl sm:text-2xl font-bold">
                <span className="text-green-400">FLUX</span> Club
              </div>
              <div className="text-sm sm:text-base space-y-1">
                <p className="text-gray-400">
                  Department of Computer Science and Engineering
                </p>
                <p className="text-gray-400">
                  Madan Mohan Malaviya University of Technology, Gorakhpur
                </p>
              </div>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-xs sm:text-sm text-gray-500">
                  &copy; 2024 FLUX Club. All rights reserved.
                </p>
                <p className="text-green-400 font-semibold mt-2 text-sm">
                  Innovate. Interact. Impact.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Modals */}
      <Modal isOpen={!!modalImage} onClose={() => setModalImage(null)}>
        {modalImage && (
          <img
            src={modalImage}
            alt="Enlarged profile"
            className="max-w-[90vw] max-h-[90vh] rounded-lg border-2 border-green-400 shadow-2xl shadow-green-500/50"
          />
        )}
      </Modal>

      <Modal isOpen={!!selectedCard} onClose={() => setSelectedCard(null)}>
        {selectedCard && (
          <div className="bg-gray-950/95 backdrop-blur-sm border border-green-500/50 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-lg w-[90vw] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-purple-900/10" />
            <div className="relative z-10 space-y-6">
              <div className="transform scale-110">{selectedCard.icon}</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {selectedCard.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                {selectedCard.description}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;
