import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { useState, useEffect } from "react";

const MobileMenu = ({ links, menuOpen, setMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(0);
  const [activeMenu, setActiveMenu] = useState(0);

  useEffect(() => {
    setIsOpen(activeMenu);
  }, [activeMenu]);

  return (
    <div className={`mob-nav-links ${menuOpen && "open-menu"}`}>
      <AiOutlineClose
        size={35}
        className="mob-menu"
        onClick={() => setMenuOpen(false)}
      />
      <div>
        {links.map((l, index) => {
          if (l.subLinks.length < 1) {
            return (
              <a key={l.id} href={l.link}>
                {l.name}
              </a>
            );
          }

          return (
            <details
              key={l.id}
              open={isOpen === index}
              onClick={() => setActiveMenu(index)}
            >
              <summary>
                <p>{l.name}</p>
                <AiOutlineDown />
              </summary>
              <div className="mob-sub-links">
                {l.subLinks.map((sl) => (
                  <a key={sl.id} href={sl.link}>
                    {sl.name}
                  </a>
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
