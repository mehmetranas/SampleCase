import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import UserInfo from "../UserInfo";

function Header() {
  let { pathname } = useLocation();

  const HeaderName = useCallback(() => {
    if (pathname.startsWith("/contact")) {
      return <p>Contact Page</p>;
    } else {
      return <p>Home Page</p>;
    }
  }, [pathname]);

  return (
    <div className="antialiased w-full">
      <div className="px-6 py-4 flex justify-end w-full bg-white">
        <div className="flex flex-grow items-center text-gray-800 font-semibold text-xl tracking-tight">
          <div className="w-10 h-10 relative flex justify-center items-center">
            <img
              className="absolute rounded-full"
              src="/assets/images/react-small.png"
              alt="Funny React"
            />
          </div>
          <div className="mx-auto">
            <HeaderName />
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-2 flex justify-center items-center mx-3">
            <UserInfo />
          </div>
          <div className="w-10 h-10 relative flex justify-center items-center">
            <div className="shadow-inner absolute inset-0 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
