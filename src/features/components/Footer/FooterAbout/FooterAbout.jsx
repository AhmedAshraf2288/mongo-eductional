import { Link } from "react-router-dom";
import styles from "./FooterAbout.module.css";
import { useSettingsData } from "../../../../queries/queries";
import { useMemo } from "react";

export default function FooterAbout() {
  const { data: settings } = useSettingsData();

  const links = useMemo(() => {
    return {
      logo: settings?.footer__logo || "/assets/images/logo/logo-light.png",
      facebook_link: settings?.facebook_link || "https://www.facebook.com/",
      instagram_link: settings?.instagram_link || "https://www.instagram.com/",
      linkedin_link: settings?.linkedin_link || "https://www.linkedin.com/",
      twitter_link: settings?.twitter_link || "https://www.twitter.com/",
    };
  }, [settings]);

  return (
    <div>
      <div className={styles.footer__logo}>
        <Link to="/">
          <img src={links.logo} />
        </Link>
      </div>
      <p className={styles.footer__about__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <div className="d-flex gap-1">
        <a
          href={links.instagram_link}
          className={styles.footer__social__img}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/social/Instagram.png" alt="" />
        </a>
        <a
          href={links.linkedin_link}
          className={styles.footer__social__img}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/social/LinkedIn.png" alt="" />
        </a>
        <a
          href={links.facebook_link}
          className={styles.footer__social__img}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/social/Facebook.png" alt="" />
        </a>
        <a
          href={links.twitter_link}
          className={styles.footer__social__img}
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/images/social/Twitter.png" alt="" />
        </a>
      </div>
    </div>
  );
}
