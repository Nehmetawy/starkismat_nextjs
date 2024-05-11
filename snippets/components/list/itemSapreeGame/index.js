import css from "./css.module.css";

export default function ItemSapreeGame({ item = {} }) {
  const {
    betid = 0,
    price = 32456,
    number = 4,
    red = false,
    green = false,
    violet = false,
  } = item;

  if (!betid) {
    return <></>;
  }
  //
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
