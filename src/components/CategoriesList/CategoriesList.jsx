import CategoryCard from "../../features/components/CategoriesList/CategoryCard/CategoryCard";
import styles from "./CategoriesList.module.css"

export default function CategoriesList({ categories }) {
  return <>
    <section className={`${styles.categories_list}`}>
      <div className=" pt-4  d-flex justify-content-center">
        <h2 className={`${styles.academicHead} text-center f-Almarai-700 f-size-34`}>السنين الدراسية</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-around align-items-center h-100">


        <div className="">
          {!categories?.length ? (
            <h2 className="text-center mt-5">لا يوجد صفوف دراسية</h2>) : ("")}
          {categories?.map((category) => {
            return (
              // <Col md={6} lg={4} key={`category-card-${category.slug}`}>
              <div className="mt-4" key={category.slug}>
                <CategoryCard category={category} />
              </div>
              // </Col>
            );
          })}
        </div>


        <div className={`${styles.imgMongo}`}>
          <img src="/assets/images/Academic years/mongoYeasrs.png" alt="mongoYeasrs" />
        </div>


      </div>



    </section>
  </>
}
