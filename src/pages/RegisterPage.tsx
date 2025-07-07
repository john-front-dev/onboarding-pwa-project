import { AnimatePresence, motion } from "framer-motion";
import bg from "../assets/register/bg.webp";
import BottomSheet from "../components/shared/ui/bottomSheet/BottomSheet";
import { useState } from "react";
import { GoogleIcon } from "../components/shared/icons/GoogleIcon";
import { AppleIcon } from "../components/shared/icons/AppleIcon";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <div className="flex flex-col gap-5 items-center justify-center h-screen pt-[24px]">
        <motion.img
          src="/logo.svg"
          alt="ART.AI"
          className="w-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-screen max-w-md h-full bg-cover bg-top bg-no-repeat flex flex-col justify-end"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="z-10 pb-[46px] px-6 flex flex-col gap-2.5 items-center justify-center bg-gradient-to-b from-transparent to-[#111417]">
              <button
                onClick={handleOpen}
                className="bg-primary w-full rounded-[4px] h-[48px] text-black font-semibold cursor-pointer
             hover:bg-primary/80 active:bg-primary/60
             hover:scale-[1.03] active:scale-95
             transition-all duration-200"
              >
                Create an Account
              </button>

              <button
                className="border border-primary text-primary w-full h-[48px] rounded-[4px] font-semibold cursor-pointer
             hover:bg-primary hover:text-black active:bg-primary/60
             hover:scale-[1.03] active:scale-95
             transition-all duration-200"
              >
                Login
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <BottomSheet isOpen={isOpen} onClose={handleClose}>
        <div className="flex flex-col gap-4">
          <h2 className="font-medium text-2xl text-[#E7E8E8]">
            Create an Account
          </h2>
          <p className="text-secondary text-sm">
            Create a ART.AI account to gain access to more creation tools,
            publish & curate your AI generated art!
          </p>
          <button
            onClick={() => navigate("/create-account")}
            className="bg-primary w-full rounded-[4px] h-[48px] text-black font-semibold cursor-pointer
             hover:bg-primary/80 active:bg-primary/60
             hover:scale-[1.03] active:scale-95
             transition-all duration-200"
          >
            Create an Account
          </button>
          <button
            onClick={() => navigate("/create-account")}
            className="flex justify-center items-center gap-3 bg-background w-full rounded-[4px] h-[48px] text-black font-semibold cursor-pointer
             hover:bg-background/80 active:bg-background/60
             hover:scale-[1.03] active:scale-95
             transition-all duration-200"
          >
            <GoogleIcon />
            Continue with Google
          </button>
          <button
            onClick={() => navigate("/create-account")}
            className="flex justify-center items-center gap-3 bg-background w-full rounded-[4px] h-[48px] text-black font-semibold cursor-pointer
             hover:bg-background/80 active:bg-background/60
             hover:scale-[1.03] active:scale-95
             transition-all duration-200"
          >
            <AppleIcon />
            Continue with Apple
          </button>
          <p className="text-secondary text-sm">
            By registering, you confirm that you accept our Terms of Use and
            Privacy Policy.
          </p>
        </div>
      </BottomSheet>
    </div>
  );
}
