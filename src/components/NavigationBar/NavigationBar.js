import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavigationBar() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center align-middle gap-x-3">
      <NavLink to="/" exact className="text-sm" activeClassName="text-blue-600">
        {t("home")}
      </NavLink>
      <NavLink
        to="/contact"
        className="text-sm"
        activeClassName="text-blue-600"
      >
        {t("contact")}
      </NavLink>
    </div>
  );
}

export default NavigationBar;
