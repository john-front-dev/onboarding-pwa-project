import { useEffect, useRef, useState } from "react";

export default function VerificationPage() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(300);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const isValid = code.every((digit) => digit !== "");

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (!isValid) return;
    console.log("Resending code...");
    setTimer(300);
    setCode(["", "", "", ""]);
    inputsRef.current[0]?.focus();
  };

  return (
    <div className="pt-[48px] pb-[57px] px-[24px] w-screen h-screen max-w-md">
      <form className="flex flex-col w-full h-full justify-between">
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <h2 className="text-[#E7E8E8] font-medium text-2xl">
              Verification
            </h2>
            <p className="text-secondary text-sm font-medium mt-4">
              We have sent an OTP code to your phone number. Enter the OTP code
              below to verify.
            </p>
          </div>

          <div className="flex justify-between mt-6 mb-2">
            {code.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => { inputsRef.current[index] = el; }}
                className="w-[72px] h-[72px] text-center text-2xl font-bold rounded-[8px] border border-[#B6B7B84D] bg-transparent text-[#E7E8E8] focus:outline-none focus:border-primary"
              />
            ))}
          </div>

          <div className="flex items-center justify-between mt-1">
            <span className="text-[#616365] text-sm font-medium">
              {formatTime(timer)}
            </span>
            <button
              type="button"
              onClick={handleResend}
              disabled={!isValid}
              className={`text-sm font-semibold transition-colors text-[#E7E8E8] hover:underline`}
            >
              Resend Code
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full rounded-[4px] h-[48px] font-semibold transition-all duration-200
            ${
              isValid
                ? "bg-primary text-black hover:bg-primary/80 active:bg-primary/60 hover:scale-[1.03] active:scale-95"
                : "bg-[#363A3D] text-[#6F7071] cursor-not-allowed"
            }`}
        >
          Confirm Code
        </button>
      </form>
    </div>
  );
}
