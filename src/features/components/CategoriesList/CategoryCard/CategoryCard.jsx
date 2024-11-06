import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.css";
import { FaCheck } from "react-icons/fa6";

export default function CategoryCard({ category }) {




  return (
    <section>
      <Link to={`/categories/${category.id}`}>
        <div className={`${styles.mongoBoxLevels} `}>




          <div className={`${styles.boxLevels} text-center position-relative`}>
            <img className={`${styles.dotbox1}`} src="/assets/images/Academic years/Ellipse 3.png" alt="mongoYeasrs" />
            <img className={`${styles.dotbox2}`} src="/assets/images/Academic years/Ellipse 3.png" alt="mongoYeasrs" />
            <span className={`${styles.title} f-Almarai-700 f-size-28`}>{category.title}</span>

            <img className={`${styles.dotbox3}`} src="/assets/images/Academic years/Ellipse 3.png" alt="mongoYeasrs" />
            <img className={`${styles.dotbox4}`} src="/assets/images/Academic years/Ellipse 3.png" alt="mongoYeasrs" />

          </div>

        </div>

      </Link>
      
    </section>

  );
}
