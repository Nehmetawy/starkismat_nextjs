import css from "./css.module.css";

export default function ListItemTitle() {
  return (
    <div className={css.itemCont}>
      <div>Id</div>
      <div>Amount</div>
      <div>Status</div>
    </div>
  );
}
