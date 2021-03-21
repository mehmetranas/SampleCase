import { Link } from "react-router-dom";
import AuthButton from "../AuthButton";
import { Button } from "antd";
import LanguageDropdown from "../LanguageDropdown";
import { useAuth } from "../../UserProvider/User";
import { useTranslation } from "react-i18next";

function NavigationMenu() {
  const { t } = useTranslation();
  const { state, dispatch } = useAuth();
  function handleSignOut() {
    dispatch({ type: "logout" });
  }
  return (
    <div
      style={{ transform: "translateX(50%)", right: "50%" }}
      className="absolute bg-gray-900 top-20 w-10/12 pb-10 z-50 trans"
    >
      <div className="align-top flex flex-col h-full justify-center text-xl text-center text-white">
        <div className="text-right">
          <LanguageDropdown
            hideArrow={false}
            isFlag={false}
            className="text-white"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col gap-3">
            <Link
              to={(location) => {
                return "/";
              }}
            >
              Home
            </Link>
            <Link
              to={(location) => {
                return "/contact";
              }}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p>{state.user?.userEmail}</p>
        </div>
        <div className="flex flex-col mt-4 ">
          {state.user?.userEmail ? (
            <Button type="primary" block onClick={handleSignOut}>
              {t("logout")}
            </Button>
          ) : (
            <AuthButton isMobile={true} />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
