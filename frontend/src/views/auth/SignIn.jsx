import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";

export default function SignIn() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignupRedirect = () => {
    navigate("/auth/sign-up"); // Replace with your actual signup route
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-xl font-bold text-navy-700 dark:text-white">
          የልደታ ክፍለ ከተማ ሲቪል ሰርቪስ የሰው ሀብት አስተዳደር ጽ/ቤት የቅሬታ ማስተናገጃ ሥርዓት
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          ከሰው ሀብት አስተዳደር ጋር የተያያዘ ማንኘውንም አይነት ቅሬታ በዚሀ መተግበሪያ ያቅርቡ ፈጣን ምላሽ በዚሁ
          መተግበሪያ ያገኛሉ።
        </p>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> ይግቡ </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="Enter your email"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign In
        </button>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <button
            onClick={handleSignupRedirect}
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
}
