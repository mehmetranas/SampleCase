import { useCallback } from "react";
import { useLocation, Link } from "react-router-dom";
import LanguageDropdown from "../LanguageDropdown";
import { useTranslation } from "react-i18next";
import UserInfo from "../UserInfo";
import logo from "../../assets/images/react-small.png";

function Header() {
  const { t } = useTranslation();
  let { pathname } = useLocation();

  const HeaderName = useCallback(() => {
    if (pathname.startsWith("/contact")) {
      return <p>{t("contact-page")}</p>;
    } else {
      return <p>{t("home-page")}</p>;
    }
  }, [pathname, t]);

  return (
    <div className="antialiased w-full">
      <div className="px-6 py-4 flex justify-end w-full bg-white">
        <div className="flex flex-grow items-center text-gray-800 font-semibold text-xl tracking-tight">
          <div className="w-10 h-10 relative flex justify-center items-center">
            <Link className="absolute" to="/">
              <img className="rounded-full" src={logo} alt="Funny React" />
            </Link>
          </div>
          <div className="mx-auto">
            <HeaderName />
          </div>
        </div>
        <div className="flex items-center">
          <div className="ml-2 flex justify-center items-center mx-3">
            <UserInfo />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
