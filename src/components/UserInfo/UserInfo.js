import { useState } from "react";
import AuthButton from "../AuthButton";
import { useAuth } from "../../UserProvider/User";
import { Popover, Button } from "antd";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const UserName = styled.p`
  text-transform: capitalize;
`;

function UserInfo() {
  const { state, dispatch } = useAuth();
  const [popoverVisible, setPopoverVisible] = useState(false);
  const { t } = useTranslation();

  function handleSignOut() {
    dispatch({ type: "logout" });
    setPopoverVisible(false);
  }

  const Logout = () => (
    <Button type="primary" block onClick={handleSignOut}>
      {t("logout")}
    </Button>
  );

  if (state.user?.userName) {
    return (
      <Popover
        visible={popoverVisible}
        content={<Logout />}
        title={state.user.userEmail}
        onVisibleChange={(visible) => setPopoverVisible(visible)}
      >
        <UserName type="primary">{state.user.userName}</UserName>
      </Popover>
    );
  }

  return <AuthButton />;
}

export default UserInfo;
