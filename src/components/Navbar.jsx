import links from "../links.json";
import { useNavigate } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <p className="logo" onClick={() => navigate("/")}>
        Logo
      </p>
      <ul className="nav-links">
        {/* links */}
        {links.map((l) => {
          const { id, link, name, subLinks } = l;
          return (
            <li key={id} className="nav-link">
              <a href={link}>
                {name}{" "}
                {subLinks.length > 0 && (
                  <AiOutlineDown className="drop-down-icon" size={12} />
                )}
              </a>
              {/* sublinks */}
              {subLinks.length > 0 && (
                <div className="sub-links">
                  {subLinks.map((sl) => {
                    const { id, link, name } = sl;
                    return (
                      <a key={id} href={link}>
                        {name}
                      </a>
                    );
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
