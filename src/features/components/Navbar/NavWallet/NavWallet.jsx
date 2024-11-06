import { Link } from "react-router-dom";
import styles from "./NavWallet.module.css";
import { PiWallet } from "react-icons/pi";

export default function NavWallet({ balance }) {

  return (
    <Link to="/dashboard/wallet">
      <div className={`shadow-sm d-flex align-items-center justify-content-center gap-2 ${styles.wallet__cont}`}>
        <span className={`${styles.wallet__icon}`}><PiWallet size={"20px"}/></span>
        <span className={`${styles.wallet__text}`}>رصيدك:</span>
        <span>
          {balance} <span>جنية</span>
        </span>
      </div>
    </Link>
  );
}
