import { Select } from "antd";
import { LanguagesImplementations } from "../translations/languages";
import { changeLanguage } from "../translations/i18n";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const CustomSelect = styled(Select)(({ hidearrow }) => {
  if (hidearrow) {
    // React rule for
    return {
      "span.ant-select-arrow": {
        display: "none !important",
      },
      ".ant-select-selection-item": {
        display: "flex !important",
        padding: "0 !important",
        "align-items": "center !important",
      },
    };
  }
});

function LanguageDropdown({ isFlag = true, hideArrow = true, className }) {
  const { i18n } = useTranslation();
  function getLanguage() {
    return i18n.languages.includes(i18n.language) ? i18n.language : "en";
  }
  const OptionType = ({ flag, country }) => {
    if (isFlag) {
      return <img height="20" width="20" src={flag} alt="" />;
    }

    return <p className="uppercase">{country}</p>;
  };
  if (LanguagesImplementations) {
    return (
      <CustomSelect
        hidearrow={+hideArrow} // styled component need this "+"
        onChange={changeLanguage}
        value={getLanguage()}
        bordered={false}
        className={className}
      >
        {LanguagesImplementations.map(({ flag, value }) => (
          <Select.Option key={value} value={value}>
            <OptionType flag={flag} country={value} />
          </Select.Option>
        ))}
      </CustomSelect>
    );
  }
}

export default LanguageDropdown;
