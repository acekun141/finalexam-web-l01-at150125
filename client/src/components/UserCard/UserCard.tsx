import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiBlock, BiEdit, BiTrash } from "react-icons/bi";
import { useHistory } from "react-router";
import DivAutoFit from "../../container/components/DivAutoFit";

const url = "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/174420944_1459448700892553_2602018160453476742_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SKxgHPk6VAEAX90aTuJ&_nc_ht=scontent-hkg4-1.xx&oh=3f854f300bafd5aa54c6cbf65206916a&oe=60C052AF";

interface IProps {
  isAdmin?: boolean;
  deleteAccount?: (userId: string, name: string) => any;
}

const UserCard: React.FC<IProps> = ({ isAdmin=true, deleteAccount=()=>{} }) => {
  const settingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showSetting, setShowSetting] = useState<boolean>(false);
  const history = useHistory();

  const openSetting = useCallback(() => {
    setShowSetting(prevState => !prevState);
  }, []);

  const goToWall = useCallback((userId: string) => {
    history.push(`/account/${userId}`);
  }, [history]);

  useEffect(() => {
    const handleClick = (event: any) => {
      const currentButton = buttonRef.current;
      const currentSetting = settingRef.current;
      if (currentButton && currentSetting) {
        if (!currentButton.contains(event.target) && !currentSetting.contains(event.target)) {
          setShowSetting(false);
        }
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [buttonRef, settingRef]);

  return (
    <div className="user-card">
      <div className="user-card__avatar-wrapper">
        <img alt="avatar" className="user-card__avatar" src={url} />
      </div>
      <div className="user-card__info">
        <div className="user-card__name pointer" onClick={() => goToWall("123")}>Lê Viết Hưng</div>
        <div className="user-card__role">Quản trị viên</div>
      </div>
      {isAdmin && (
        <div className="user-card__setting">
          <button className="setting-button" ref={buttonRef} onClick={openSetting}>
            <BiEdit size="18px" />
          </button>
          {showSetting && (
            <DivAutoFit className="user-card__setting-menu shadow-0">
              <div ref={settingRef} className="content">
                <button className="user-card__setting-row">
                  <BiBlock size="16px" />
                  <p>Vô hiệu hóa</p>
                </button>
                <button onClick={() => deleteAccount("123", "Lê Viết Hưng")} className="user-card__setting-row">
                  <BiTrash size="16px" />
                  <p>Xóa</p>
                </button>
              </div>
            </DivAutoFit>
          )}
        </div>
      )}
    </div>
  )
}

export default UserCard;