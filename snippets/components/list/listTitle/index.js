import css from "./css.module.css";

export default function ListTitle({
  items = ["Id", "Price", "Number", "Color"],
}) {
  return (
    <div className={css.itemCont}>
      {items.map((i) => {
        return <div key={i}>{i}</div>;
      })}
    </div>
  );
}
