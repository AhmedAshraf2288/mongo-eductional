import styles from "./VerticalNavAndTabs.module.css";
import { NavLink } from "react-router-dom";

export default function VerticalNavAndTabs({ tabs, route, id, onHide }) {
  function activeNavLink({ isActive }) {
    if (isActive) {
      return `${styles.course__sidebar__item} ${styles["course__sidebar__item--active"]} w-100`;
    }
    return `${styles.course__sidebar__item} w-100`;
  }

  return (
    <div className={`${styles.course__sidebar}`}>
      <ul className="list-unstyled m-0 p-0 d-flex flex-column gap-2 w-100">
        {tabs.map((tab) => (
          <li key={`vertical-nav-${id}-${tab.target}`}>
            <NavLink
              onClick={onHide}
              className={activeNavLink}
              to={`${route}/${tab.target}`}
            >
              <div className={`w-100 ${styles.tab_label}`}>
                <div>{tab.label}</div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
