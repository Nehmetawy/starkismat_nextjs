import css from "./css.module.css";

export default function ListItemTitle() {
  return (
    <div className={css.itemCont}>
      <div>Id</div>
      <div>Price</div>
      <div>Number</div>
      <div className={css.itemColorBox}>Color</div>
    </div>
  );
}
