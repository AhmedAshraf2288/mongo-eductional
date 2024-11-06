import { useStore } from "../../zustand/store";
import Switch from "../Switch/Switch";
import styles from "./ThemeBtn.module.css";

export default function ThemeBtn() {
  const theme = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);
  return (
    <div>
      <Switch
        id={`theme-switch-${theme}`}
        className={styles.btn}
        colorOne="transparent"
        colorTwo="transparent"
        isOn={theme == "light"}
        handleToggle={toggleTheme}
      />
    </div>
  );
}
