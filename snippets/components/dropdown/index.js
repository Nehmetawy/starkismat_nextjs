import { useState } from "react";
import RenderItem from "./item";
import RenderTitle from "./title";
import Items from "./items";
import css from "./css.module.css";
import { useAppUIState } from "@/snippets/hooks/globalUi";

function selection(state) {
  return {
    selected: state.selectedListId,
    setSelected: state.setSelectedListId,
  };
}

export default function DropDown() {
  const { selected, setSelected } = useAppUIState(selection);

  const [show, toggleShow] = useState(false);
  const pongShow = () => {
    toggleShow(!show);
  };
  const pongId = (id) => {
    setSelected(id);
    pongShow();
  };
  return (
    <div className={css.container}>
      <div>
        <RenderTitle id={selected} click={pongShow} />
      </div>
      {/* ------------- */}
      {/* ------------- */}
      {show && (
        <div className={css.dropdownCont}>
          {Items.map((item, index) => {
            return <RenderItem item={item} key={index} click={pongId} />;
          })}
        </div>
      )}
    </div>
  );
}
