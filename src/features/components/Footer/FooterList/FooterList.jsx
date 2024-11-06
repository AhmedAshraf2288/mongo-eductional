import { Link } from "react-router-dom";
import styles from "./FooterList.module.css";

export default function FooterList({ title, links }) {
  return (
    <div>
      <h5 className={`fw-bold ${styles.footer__list__title}`}>{title}</h5>
      <ul className="list-unstyled m-0 d-flex flex-column gap-2">
        {links.map((ele, idx) => (
          <Link
            key={`footer-link-${ele.title}-${idx}`}
            className={styles.footer__link}
            to={ele.link}
          >
            {ele.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
