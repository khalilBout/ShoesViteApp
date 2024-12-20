import React from "react";
import { motion } from "framer-motion";

// logo
import acmeLogo from "../../assets/logos/logo-acme.png";
import quantumLogo from "../../assets/logos/logo-quantum.png";
import echoLogo from "../../assets/logos/logo-echo.png";
import celestialLogo from "../../assets/logos/logo-celestial.png";
import pulseLogo from "../../assets/logos/logo-pulse.png";
import apexLogo from "../../assets/logos/logo-apex.png";

const SlidBrand = () => {
  return (
    <div className="my-8 md:my-12 h-[150px]">
      <div className="py-2 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <img
                src={acmeLogo}
                alt="Acme Logo"
                className="logo-ticker-image"
              />
              <img
                src={quantumLogo}
                alt="Quantum Logo"
                className="logo-ticker-image"
              />
              <img
                src={echoLogo}
                alt="Echo Logo"
                className="logo-ticker-image"
              />
              <img
                src={celestialLogo}
                alt="Celestial Logo"
                className="logo-ticker-image"
              />
              <img
                src={pulseLogo}
                alt="Pulse Logo"
                className="logo-ticker-image"
              />
              <img
                src={apexLogo}
                alt="Apex Logo"
                className="logo-ticker-image"
              />

              {/* Second set of logos for animation */}
              <img
                src={acmeLogo}
                alt="Acme Logo"
                className="logo-ticker-image"
              />
              <img
                src={quantumLogo}
                alt="Quantum Logo"
                className="logo-ticker-image"
              />
              <img
                src={echoLogo}
                alt="Echo Logo"
                className="logo-ticker-image"
              />
              <img
                src={celestialLogo}
                alt="Celestial Logo"
                className="logo-ticker-image"
              />
              <img
                src={pulseLogo}
                alt="Pulse Logo"
                className="logo-ticker-image"
              />
              <img
                src={apexLogo}
                alt="Apex Logo"
                className="logo-ticker-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidBrand;
