import css from "./css.module.css";
import {
  Gap,
  Input,
  Button,
  ErrorCard,
  DivExpand,
} from "@/snippets/components";
import ProfileIcons from "./icons";
import ProfileUpdateHook from "@/snippets/hooks/profileUpdateHook";

export default function ProfileUpdateForm() {
  const { set, props } = ProfileUpdateHook();

  return (
    <div>
      <Gap h={20} />
      <div className={css.placeholder}>Name</div>
      <Gap h={8} />
      <Input id="user_name" text="Name" val={props.name} getValue={set} />
      <Gap h={30} />
      <div className={css.placeholder}>Image</div>
      <Gap h={8} />
      <ProfileIcons id="user_image" val={props.image} ping={set} />
      <Gap h={30} />
      <Button id="submit_button" state={props.buttonState} click={set} />
      <Gap h={30} />
      <DivExpand isOpen={props.error} isNeuo={false}>
        <ErrorCard text={props.error} />
      </DivExpand>
    </div>
  );
}
