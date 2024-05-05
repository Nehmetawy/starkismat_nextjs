import css from "./main.module.css";
import { Input, Icons, Button } from "../../../components";

export default function FORM() {
  return (
    <div className={css.formCont}>
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.placeholder}>Name</div>
      <div className={css.gap10} />
      <div className={css.gap10} />
      <Input text="User Name" />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.placeholder}>Icon</div>
      <div className={css.gap10} />
      <div className={css.gap10} />
      <Icons />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <div className={css.gap10} />
      <Button />
      <div className={css.gap10} />
      <div className={css.gap10} />
    </div>
  );
}
