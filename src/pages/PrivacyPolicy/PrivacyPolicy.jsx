import { Container } from "react-bootstrap";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={`text--dark ${styles.privacy_policy}`}>
      <Container>
        <div>
          <h1
            className={`${styles.privacy_policy__title} ${styles.privacy__title}`}
          >
            سياسة الخصوصية
          </h1>
          <section>
            <h6 className={`${styles.privacy__title}`}>
              سياسة الخصوصية سامح احمد
            </h6>
            <p className={`${styles.privacy__text} text--dark`}>
              تصف سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها
              ومشاركتها عند زيارتك أو إجراء عملية شراء من "الموقع"
              <br />
              <strong>(samehahmed.com)</strong>
            </p>
          </section>

          <section className={`${styles.privacy__section}`}>
            <h6 className={`${styles.privacy__title}`}>
              المعلومات الشخصية التي نجمعها
            </h6>
            <p className={`${styles.privacy__text} text--dark`}>
              عندما تزور الموقع ، نقوم تلقائيًا بجمع معلومات معينة حول جهازك ،
              بما في ذلك معلومات حول متصفح الويب وعنوان IP والمنطقة الزمنية وبعض
              ملفات تعريف الارتباط المثبتة على جهازك. بالإضافة إلى ذلك ، أثناء
              تصفحك للموقع ، نقوم بجمع معلومات حول صفحات الويب الفردية أو
              المنتجات التي تشاهدها ، ومواقع الويب أو مصطلحات البحث التي أحالتك
              إلى الموقع ، ومعلومات حول كيفية تفاعلك مع الموقع. نشير إلى هذه
              المعلومات التي تم جمعها تلقائيًا باسم{" "}
              <strong>(معلومات الجهاز)</strong> .
            </p>
          </section>
          <section className={`${styles.privacy__section}`}>
            <h6 className={`${styles.privacy__title}`}>
              نقوم بجمع معلومات الجهاز باستخدام التقنيات التالية:
            </h6>
            <p className={`${styles.privacy__text} text--dark`}>
              <strong>- "ملفات تعريف الارتباط"</strong> هي ملفات بيانات يتم
              وضعها على جهازك أو جهاز الكمبيوتر الخاص بك وغالبًا ما تتضمن معرفًا
              فريدًا مجهول الهوية. لمزيد من المعلومات حول ملفات تعريف الارتباط
              وكيفية تعطيل ملفات تعريف الارتباط ، قم بزيارة{" "}
              <a href="http://www.allaboutcookies.org" target="blank">
                http://www.allaboutcookies.org.
              </a>{" "}
              إجراءات تتبع <strong> "ملفات السجل" </strong> التي تحدث على الموقع
              ، وجمع البيانات بما في ذلك عنوان IP الخاص بك ، ونوع المتصفح ،
              ومزود خدمة الإنترنت.
              <br />
              <strong>- "إشارات الويب"</strong> و <strong>"العلامات"</strong> و{" "}
              <strong>"وحدات البكسل"</strong> هي ملفات إلكترونية تُستخدم لتسجيل
              المعلومات حول كيفية تصفحك للموقع.
            </p>
            <p className={`${styles.privacy__text} mt-4`}>
              بالإضافة إلى ذلك ، عند إجراء عملية شراء أو محاولة إجراء عملية شراء
              عبر الموقع ، فإننا نجمع معلومات معينة منك ، بما في ذلك اسمك وعنوان
              الفواتير ومعلومات الدفع (بما في ذلك أرقام بطاقات الائتمان وعنوان
              البريد الإلكتروني ورقم الهاتف(. نشير إلى هذا المعلومات باسم "
              <strong>معلومات الطلب</strong>".
            </p>
            <p className={`${styles.privacy__text} mt-4`}>
              عندما نتحدث عن <strong>"المعلومات الشخصية"</strong> في سياسة
              الخصوصية هذه ، فإننا نتحدث عن معلومات الجهاز ومعلومات الطلب.
            </p>
          </section>
          <section className={`${styles.privacy__section}`}>
            <h6 className={`${styles.privacy__title}`}>
              كيف نستخدم المعلومات الشخصية الخاصة بك؟
            </h6>
            <p className={`${styles.privacy__text} text--dark`}>
              نستخدم معلومات الطلب التي نجمعها بشكل عام للوفاء بأي طلبات يتم
              تقديمها عبر الموقع (بما في ذلك معالجة معلومات الدفع الخاصة بك ،
              وتزويدك بالفواتير و / أو تأكيدات الطلبات). بالإضافة إلى ذلك ،
              نستخدم معلومات الطلب هذه من أجل: التواصل معك؛ فحص طلباتنا بحثًا عن
              مخاطر محتملة أو احتيال ؛ وعندما تتماشى مع التفضيلات التي شاركتها
              معنا ، نقم بتزويدك بالمعلومات أو الإعلانات المتعلقة بمنتجاتنا أو
              خدماتنا.
            </p>
            <p className={`${styles.privacy__text} mt-4`}>
              نستخدم معلومات الجهاز التي نجمعها لمساعدتنا في فحص المخاطر
              المحتملة والاحتيال (على وجه الخصوص، عنوان IP الخاص بك) ،وبشكل عام
              لتحسين موقعنا وتحسينه (على سبيل المثال ، من خلال إنشاء تحليلات حول
              كيفية تصفح عملائنا والتفاعل معهم الموقع، ولتقييم نجاح حملاتنا
              التسويقية والإعلانية).
            </p>
          </section>
          <section className={`${styles.privacy__section}`}>
            <h6 className={`${styles.privacy__title}`}>
              تبادل المعلومات الشخصية الخاصة بك
            </h6>
            <p className={`${styles.privacy__text}`}>
              نشارك معلوماتك الشخصية مع أطراف ثالثة لمساعدتنا في استخدام
              معلوماتك الشخصية ، كما هو موضح أعلاه. على سبيل المثال ، نستخدم{" "}
              <strong>Google Analytics</strong> لمساعدتنا على فهم كيفية استخدام
              عملائنا للموقع - يمكنك قراءة المزيد حول كيفية استخدام Google
              لمعلوماتك الشخصية{" "}
              <a
                href="https://policies.google.com/privacy?hl=ar"
                target="blank"
              >
                هنا :
              </a>
            </p>
            <p className={`${styles.privacy__text} mt-4`}>
              . يمكنك أيضًا إلغاء الاشتراك في Google Analytics{" "}
              <a target="blank" href="https://tools.google.com/dlpage/gaoptout">
                هنا
              </a>
            </p>
            <p className={`${styles.privacy__text} mt-4`}>
              أخيرًا ، قد نشارك أيضًا معلوماتك الشخصية للامتثال للقوانين
              واللوائح المعمول بها ، للرد على أمر استدعاء أو أمر تفتيش أو أي طلب
              قانوني آخر للمعلومات التي نتلقاها ، أو لحماية حقوقنا بطريقة أخرى.
            </p>
          </section>
          <section className={`${styles.privacy__section}`}>
            <h6 className={`${styles.privacy__title}`}>الدعاية السلوكية</h6>
            <p className={`${styles.privacy__text}`}>
              كما هو موضح أعلاه ، نستخدم معلوماتك الشخصية لتزويدك بالإعلانات
              المستهدفة أو الاتصالات التسويقية التي نعتقد أنها قد تهمك. لمزيد من
              المعلومات حول كيفية عمل الإعلانات المستهدفة ، يمكنك زيارة الصفحة
              التعليمية لمبادرة الإعلان على الشبكة ("NAI"){" "}
              <a
                target="blank"
                href="https://thenai.org/about-online-advertising/faq/?tab=2"
              >
                الرابط
              </a>{" "}
              على هذا
            </p>

            <p className={`${styles.privacy__text} mt-4`}>
              يمكنك إلغاء الاشتراك في الإعلانات المستهدفة عن طريق:
              <p>
                الفيسبوك{" "}
                <a
                  target="blank"
                  href="https://www.facebook.com/settings/%D8%9Ftab=ads"
                >
                  https://www.facebook.com/settings/؟tab=ads
                </a>
                <br />
                جوجل -{" "}
                <a
                  target="blank"
                  href="https://myadcenter.google.com/home?hl=en"
                >
                  https://www.google.com/settings/ads/anonymous
                </a>
                <br />
                بنج -{" "}
                <a
                  target="blank"
                  href="https://help.ads.microsoft.com/#apex/3/en-us/51029"
                >
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
              </p>
            </p>
            <p className={`${styles.privacy__text} mt-4`}>
              بالإضافة إلى ذلك ، يمكنك إلغاء الاشتراك في بعض هذه الخدمات من خلال
              زيارة بوابة إلغاء الاشتراك في{" "}
              <a
                target="blank"
                href="https://optout.aboutads.info/?c=2&lang=EN"
              >
                Digital Advertising Alliance
              </a>
            </p>

            <h6 className={`${styles.privacy__title} text--primary m-0`}>
              لا تتبع
            </h6>
            <p className={`${styles.privacy__text}`}>
              يرجى ملاحظة أننا لا نغير ممارسات جمع بيانات موقعنا ونستخدمها عندما
              نرى إشارة عدم التعقب من متصفحك.
            </p>
            <h6 className={`${styles.privacy__title} m-0`}>حقوقك</h6>
            <p className={`${styles.privacy__text}`} style={{ lineHeight: "1.5"}}>
              إذا كنت مقيمًا في أوروبا ، فيحق لك الوصول إلى المعلومات الشخصية
              التي نحتفظ بها عنك والمطالبة بتصحيح معلوماتك الشخصية أو تحديثها أو
              حذفها. إذا كنت ترغب في ممارسة هذا الحق ، يرجى الاتصال بنا من خلال
              معلومات الاتصال أدناه. بالإضافة إلى ذلك ، إذا كنت مقيمًا في أوروبا
              ، فإننا نلاحظ أننا نقوم بمعالجة معلوماتك من أجل الوفاء بالعقود
              التي قد تكون لدينا معك (على سبيل المثال إذا قمت بإجراء طلب من خلال
              الموقع) ، أو بطريقة أخرى لمتابعة مصالحنا التجارية المشروعة
              المذكورة أعلاه. بالإضافة إلى ذلك ، يرجى ملاحظة أنه سيتم نقل
              معلوماتك خارج أوروبا ، بما في ذلك إلى كندا والولايات المتحدة.
            </p>
            <h6 className={`${styles.privacy__title}`} style={{marginBottom: "0"}}>الاحتفاظ بالبيانات</h6>
            <p className={`${styles.privacy__text}`}>عند تقديم طلب عبر الموقع ، سنحتفظ بمعلومات الطلب الخاصة بك لسجلاتنا ما لم تطلب منا حذف هذه المعلومات.</p>
            <h6 className={`${styles.privacy__title}`} style={{marginBottom: "0"}}>التغييرات</h6>
            <p className={`${styles.privacy__text}`}>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لنعكس، على سبيل المثال، التغييرات التي تطرأ على ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى.</p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
