import React, { useLayoutEffect, useRef } from "react";

const DivAutoFit: React.FC<React.ComponentPropsWithoutRef<"div">> = ({ children, ...rest }) => {
  const element = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const checkElement = () => {
      const currentMenu = element.current;
      if (currentMenu) {
        const menuRightPosition = currentMenu.getBoundingClientRect().left + currentMenu.offsetWidth;
        const windowWidth = window.innerWidth;
        if (menuRightPosition > windowWidth) {
          currentMenu.style.transform = `translateX(-${menuRightPosition - windowWidth + 5}px)`;
        }
      }
    }
    checkElement();
  }, [element]);

  return (
    <div ref={element} {...rest}>
      {children}
    </div>
  )
}

export default DivAutoFit;