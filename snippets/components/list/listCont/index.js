import css from "./css.module.css";
import { Lottie } from "@/snippets/components";
const classDestro = {
  active: `${css.pannel} ${css.open}`,
  inActive: `${css.pannel}`,
};

export default function ListCont({ show = true, isLoading = false, children }) {
  const pannelClass = show ? classDestro.active : classDestro.inActive;
  return (
    <div className={pannelClass}>
      <div>
        <div className={css.listBox}>
          {isLoading && (
            <div className={css.lottieCont}>
              <Lottie />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
