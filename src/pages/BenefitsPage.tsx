import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CloseIcon } from "../components/shared/icons/CloseIcon";
import bg1 from "../assets/benefits/bg1.webp";
import bg2 from "../assets/benefits/bg2.webp";
import bg3 from "../assets/benefits/bg3.webp";

const benefitsData = [
  {
    bg: bg1,
    title: (
      <>
        Create <br /> artwork <br /> with AI
      </>
    ),
    text: "Create a ART.AI account to gain access to more creation tools, publish & curate your AI generated art!",
  },
  {
    bg: bg2,
    title: (
      <>
        Text to Image <br /> with <br /> ART.AI
      </>
    ),
    text: "Enter a prompt, choose a style, and watch ART.AI bring your ideas to life!",
  },
  {
    bg: bg3,
    title: (
      <>
        Discover <br /> Various <br /> Art Styles
      </>
    ),
    text: "Potential unfold and create captivating art on our Text-to-Art Generator.",
  },
];

export default function BenefitsPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < benefitsData.length - 1) setStep(step + 1);
    else navigate("/register");
  };

  const handleClose = () => {
    navigate("/register");
  };

  const current = benefitsData[step];

  return (
    <div className="relative flex flex-col items-end justify-end min-h-screen w-full overflow-hidden">
      <button
        onClick={handleClose}
        className="absolute top-20 right-6 z-30 cursor-pointer"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-[70%] bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${current.bg})` }}
        />
      </AnimatePresence>

      <div className="absolute top-1/3 left-0 w-full h-screen bg-gradient-to-b from-transparent to-[#111417]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${step}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col justify-center items-center px-6 pb-[46px] text-center mx-auto text-white z-20"
        >
          <h1 className="text-primary font-semibold text-[48px] leading-12 mx-auto mb-4">
            {current.title}
          </h1>
          <p className="text-secondary font-medium text-[14px] leading-5 mb-10">
            {current.text}
          </p>
          <button
            onClick={handleNext}
            className="bg-primary text-black w-full h-[48px] rounded-[4px] cursor-pointer hover:bg-primary/80 active:bg-primary/60 transition-colors"
          >
            Get Started
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
