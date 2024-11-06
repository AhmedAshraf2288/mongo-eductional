import React from 'react';
import styles from "./HomeServices.module.css";

export default function HomeServices() {
  const services = [
    { titleService: "بنك الاسئلة", descriptionService: "شرح منهج اللغه العربية كامل بالتفصيل" },
    { titleService: "متابعة مستمرة", descriptionService: "شرح منهج اللغه العربية كامل بالتفصيل" },
    { titleService: "شرح المنهج", descriptionService: "شرح منهج اللغه العربية كامل بالتفصيل" },
  ];

  return (
    <section>
      <div className={styles.home_services}>
        <div className="section">
          <div className={`${styles.headLine} d-flex flex-column`}>
            <h2 className="text-center f-Almarai-700 f-size-34">ليه تختار مانجو اديوكيشن؟</h2>
            <div className="d-flex justify-content-center align-items-center">
              <hr />
              <img
                className={styles.imgMongoo}
                src="/assets/images/services/6e3555de155e3eb983b360e1e958d87c.gif"
                alt="شعار مانجو اديوكيشن"
                loading="lazy"
              />
              <hr />
            </div>
          </div>
          <div className={styles.cardsService}>
            <div className="row">
              {services.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className={`${styles.services} d-flex flex-wrap flex-column justify-content-center align-items-center`}>
                    <div className={styles.imgCardService}>
                      <img
                        src="/assets/images/services/kawaii-mango-fruit-cartoon-icon 3.png"
                        alt={`صورة خدمة: ${service.titleService}`}
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                    <div className={`${styles.boxTitleService} text-center`}>
                      <h4 className='f-Almarai-700 f-size-24'>{service.titleService}</h4>
                      <span className='f-Almarai-400 f-size-18'>{service.descriptionService}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}