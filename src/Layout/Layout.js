import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <div className="antialiased w-full">
          <div className="px-6 py-4 flex justify-end w-full bg-white">
            <div className="flex flex-grow items-center text-gray-800 font-semibold text-xl tracking-tight">
              斐然
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 relative flex justify-center items-center">
                <img
                  className="absolute rounded-full"
                  src="https://static.diverseui.com/female-56.jpeg"
                />
                <div className="shadow-inner absolute inset-0 rounded-full"></div>
              </div>
              <div className="ml-2 flex justify-center items-center text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
