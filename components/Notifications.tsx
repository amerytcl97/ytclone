import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import useOutside from "../hooks/useOutside";
import BellIcon from "../icons/BellIcon";
import CogIcon from "../icons/CogIcon";

const notifications: string[] = [];

const NotificationContainer = styled.div`
  position: relative;
`;

const NotificationButtonIcon = styled(BellIcon)`
  height: 1.4rem;
  width: 1.4rem;
`;

const NotificationButton = styled.button`
  all: unset;
  padding: 0.7rem;
  border-radius: 100%;
  display: flex;
  place-items: center;
  place-content: center;
  :hover {
    cursor: pointer;
    background-color: hsl(0, 0%, 18.82%);
  }
`;

const NotificationDropMenu = styled.div<{ showMenu: boolean }>`
  position: absolute;
  left: -13rem;
  width: 15rem;
  border-radius: 0.5rem;
  background-color: hsl(0, 0%, 18.82%);
  ${(props) => {
    return props.showMenu
      ? css`
          display: block;
        `
      : css`
          display: none;
        `;
  }}
`;

const NotificationDropMenuHeaderTitles = styled.h3`
  all: unset;
`;

const NotificationDropMenuHeader = styled.div`
  all: unset;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.08);
  display: flex;
  padding-inline: 6px;
  padding-block: 7px;
  align-items: center;
  justify-content: space-between;
`;

const NotificationList = styled.ul``;

const NotificationListItem = styled.li``;

const NotificationSettingButtonIcon = styled(CogIcon)`
  height: 1.4rem;
  width: 1.4rem;
  fill: transparent;
`;

const NotificationSettingButton = styled.button`
  all: unset;
  padding: 0.3rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.08);
`;

const Notification = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const notificationDropMenuRef = useRef(null);
  const { isOutside } = useOutside(notificationDropMenuRef);

  useEffect(() => {
    if (isOutside) {
      setShowMenu(false);
    }
  }, [isOutside]);
  return (
    <NotificationContainer>
      <NotificationButton type="button" onClick={() => setShowMenu((o) => !o)}>
        <NotificationButtonIcon />
      </NotificationButton>
      <NotificationDropMenu ref={notificationDropMenuRef} showMenu={showMenu}>
        <NotificationDropMenuHeader>
          <NotificationDropMenuHeaderTitles>
            Notifications
          </NotificationDropMenuHeaderTitles>
          <NotificationSettingButton>
            <NotificationSettingButtonIcon />
          </NotificationSettingButton>
        </NotificationDropMenuHeader>
        <NotificationList>
          {notifications.length > 0 ? (
            <NotificationListItem></NotificationListItem>
          ) : (
            <p>No notification</p>
          )}
        </NotificationList>
      </NotificationDropMenu>
    </NotificationContainer>
  );
};

export default Notification;
