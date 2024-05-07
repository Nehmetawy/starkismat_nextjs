import { useState } from "react";
import css from "./css.module.css";
import ListHead from "./head";
import Lottie from "../../lottie";
import ListItem from "./listItem";
import ListItemTitle from "./itemTitle";

const classDestro = {
  active: `${css.pannel} ${css.open}`,
  inActive: `${css.pannel}`,
};

export default function SapreeListUI() {
  const [show, setShow] = useState(true);
  const pannelClass = show ? classDestro.active : classDestro.inActive;

  const showError = false;
  const data = [];
  const isLoading = false;
  const isError = false;

  return (
    <div>
      <ListHead
        text="Your History"
        showError={showError}
        onClick={() => setShow(!show)}
      />
      <div className={pannelClass}>
        <div>
          <div className={css.listBox}>
            {isLoading && <Lottie />}
            <ListItemTitle />
            {data.map((item, id) => {
              return <ListItem item={item} key={item.betid} />;
            })}
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
      </div>
    </div>
  );
}
