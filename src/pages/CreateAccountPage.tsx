import { useState } from "react";
import { ArrowIcon } from "../components/shared/icons/ArrowIcon";
import { EmailIcon } from "../components/shared/icons/EmailIcon";
import { useNavigate } from "react-router-dom";

export default function CreateAccountPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePhone = (value: string) => {
    return /^\d{10}$/.test(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!validatePhone(phone)) {
      setPhoneError("Phone number must be 9 digits");
      valid = false;
    } else {
      setPhoneError("");
    }

    if (!agreed) valid = false;

    if (!valid) return;

    console.log({ email, phone });
    navigate("/verification");
  };

  const isValid = validateEmail(email) && validatePhone(phone) && agreed;

  return (
    <div className="pt-[48px] pb-[57px] px-[24px] w-screen h-screen max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full h-full justify-between"
      >
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <h2 className="text-[#E7E8E8] font-medium text-2xl">
              Create an Account
            </h2>
            <p className="text-secondary text-sm font-medium mt-4">
              Create a ART.AI account to gain access to more creation tools,
              publish & curate your AI generated art!
            </p>
          </div>

          <div className="flex flex-col gap-2 relative">
            <label
              className="text-[#B6B7B8] font-medium text-sm"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              placeholder="e-Mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full h-[48px] border ${
                emailError ? "border-red-500" : "border-[#B6B7B84D]"
              } outline-none pl-[52px] pr-2 py-3 font-semibold text-[#B6B7B8] rounded-[8px]`}
            />
            <EmailIcon className="absolute left-4 bottom-[6px] -translate-y-1/2" />
            {emailError && (
              <span className="text-red-500 text-xs mt-1">{emailError}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <label
              className="text-[#B6B7B8] font-medium text-sm"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              maxLength={10}
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full h-[48px] border ${
                phoneError ? "border-red-500" : "border-[#B6B7B84D]"
              } outline-none pl-[52px] pr-2 py-3 font-semibold text-[#B6B7B8] rounded-[8px]`}
            />
            <span className="absolute text-[#424547] flex items-center gap-1 left-4 bottom-0 -translate-y-1/2">
              +1 <ArrowIcon />
            </span>
            {phoneError && (
              <span className="text-red-500 text-xs mt-1">{phoneError}</span>
            )}
          </div>

          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              name="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 rounded-sm border-2 border-[#363A3D] bg-[#1A1D21] appearance-none focus:outline-none
                         checked:bg-[url('/check.svg')] checked:bg-center checked:bg-no-repeat"
            />
            <p className="text-[#B6B7B8] text-sm font-medium leading-[1.3rem]">
              I agree to the{" "}
              <span className="text-primary">Terms & Conditions</span>
            </p>
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
          Create an Account
        </button>
      </form>
    </div>
  );
}
