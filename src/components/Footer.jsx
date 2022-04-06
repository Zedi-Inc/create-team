import logo from "../assets/logo-colored.svg";
import { CONTACT_ITEMS, NAV_ITEMS, SOCIAL_ITEMS } from "./constant";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.identity}>
        <img src={logo} alt="logo" />
        <p>© Copyright 2022 - Zedi Africa Limited</p>
      </div>
      <div className={styles.zedi}>
        <h4>Zedi</h4>
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href="">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contact}>
        <h4>Contact Us</h4>
        <ul>
          {CONTACT_ITEMS.map((item) => (
            <li key={item.id}>
              <a href="">{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.socials}>
        <h4>Social</h4>
        <ul>
          {SOCIAL_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={item.link}>
                <img src={item.icon} alt={item.id} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
