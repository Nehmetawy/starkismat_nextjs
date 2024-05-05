import css from "./main.module.css";

const classDestro = {
  empty: css.errorCont,
  full: `${css.errorCont} ${css.active}`,
};
export default function Error({ errors = [] }) {
  const className = errors.length ? classDestro.empty : classDestro.full;
  return (
    <div className={className}>
      <div className={css.box}>
        {errors.map((item, index) => {
          if (typeof item !== "string") return <></>;
          return (
            <div className={css.errortext} key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
