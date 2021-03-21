import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NavigationMenu from "../NavigationMenu";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

function MobileHeader() {
  const [navigationMenuVisible, setNavigationMenuVisible] = useState(false);
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const HeaderName = useCallback(() => {
    if (pathname.startsWith("/contact")) {
      return <p>{t("contact-page")}</p>;
    } else {
      return <p>{t("home-page")}</p>;
    }
  }, [pathname, t]);
  return (
    <>
      <div className="antialiased w-full">
        <div className="px-6 py-4 flex justify-end w-full bg-white">
          <div className="flex flex-grow items-center text-gray-800 font-semibold text-xl tracking-tight">
            <div>
              <HeaderName />
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-2 flex justify-center items-center mx-3">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setNavigationMenuVisible((prev) => !prev)}
              />
            </div>
          </div>
          {navigationMenuVisible && <NavigationMenu />}
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
