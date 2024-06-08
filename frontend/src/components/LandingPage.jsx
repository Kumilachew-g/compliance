import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/83175955_185252529544034_9152337362292834304_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nBikSAY9dqsQ7kNvgHYd-8b&_nc_ht=scontent.fadd2-1.fna&oh=00_AYDcDAY8UaEC3Fegp6cO4uyqEDFlcJ5BrUbT9wPA2CD4JQ&oe=668B8C92"
              alt="Logo"
              className="h-20"
            />
          </div>
          {/* Subcity Office Name */}
          <div className="text-lg font-semibold text-blue-600">
            ልደታ ክፍለ ከተማ ወረዳ 3
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-grow flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-600">
              ወደ ቅሬታ ማቅረቢያ መግቢያ እንኳን ደህና መጡ
            </h2>
            <p className="mt-2 text-center text-base text-gray-700">
              በአገልግሎታችን ላይ ያለዎትን ማንኛውም ቅሬታ የሚከተለው ማስፈንጠሪያ በመጫን ወደ ቅሬታ ማቅረቢያ ቅጹ
              ይግቡ
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/auth/compliance-form"
              className="border-transparent flex w-full items-center justify-center rounded-md border bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 md:py-3 md:px-4 md:text-lg"
            >
              ወደቅሬታ ማቅረቢያ ይግቡ
            </Link>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">
                Don't have an account?{" "}
                <Link
                  to="/auth/sign-up"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign up
                </Link>
              </p>
              <p>
                Already have an account?{" "}
                <Link
                  to="/auth/sign-in"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-4 text-gray-300">
        <div className="text-center">
          <p>&copy; {currentYear} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
