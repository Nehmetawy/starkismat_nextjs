import css from "./css.module.css";

export default function ListItem({ item = {} }) {
  const {
    betid = "2014555216",
    price = 32456,
    number = 4,
    red = true,
    green = false,
    violet = true,
  } = item;
  return (
    <div className={css.itemCont}>
      <div>{betid}</div>
      <div>{price}</div>
      <div>{number}</div>
      <div className={css.itemColorBox}>
        {violet && <div className={`${css.colorItem} ${css.violet}`} />}
        {red && <div className={`${css.colorItem} ${css.red}`} />}
        {green && <div className={`${css.colorItem} ${css.green}`} />}
      </div>
    </div>
  );
}
