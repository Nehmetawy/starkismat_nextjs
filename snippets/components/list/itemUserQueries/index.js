import css from "./css.module.css";
import { useState } from "react";

export default function QueryItem({ item = {} }) {
  const [show, setShow] = useState(false);

  const {
    heading = "I wanted to ask about a particular information that I want users to  see",
    description,
    resolved = true,
    reply,
    submittime = "4551126545",
    //
  } = item;

  const toggleShow = () => {
    setShow(!show);
  };
  const headClass = show ? "" : css.headingText;

  return (
    <div className={css.container}>
      <div className={css.flex} onClick={toggleShow}>
        <div>
          <div>ID : {`${submittime}`}</div>
          <div className={css.heading}>Heading :- </div>
          <div className={headClass}>{heading}</div>
        </div>
        <div className={css.flex2}>
          <Resolved resolved={resolved} />
        </div>
      </div>
      <Body show={show} item={item} />
    </div>
  );
}
function Resolved({ resolved }) {
  const className = resolved ? css.statusSuccess : css.statusFail;
  const text = resolved ? "Resolved" : "Waiting...";
  return <div className={className}>{text}</div>;
}

function Body({ show, item = {} }) {
  const className = show ? `${css.bodyCont} ${css.active}` : css.bodyCont;
  const reply = item.resolved || true;

  return (
    <div className={className}>
      <div>
        <div className={css.msgSendCont}>
          <div className={css.msgSend}>hi this is the message</div>
        </div>
        {reply && (
          <div className={css.msgGotCont}>
            <div className={css.msgGot}>hi this is the message</div>
          </div>
        )}
      </div>
    </div>
  );
}
