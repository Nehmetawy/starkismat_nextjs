import { useState } from "react";
import { useAppstate } from "@/snippets/hooks/golbalApp";
import { getUrl } from "@/snippets/utils/axios/_config";
import { POST_USER_PROFILE_UPDATE } from "@/snippets/utils/axios/post_userUpdate";

const selection = (state) => {
  return {
    token: state.firebaseToken,
    userSelf: state.userSelf,
    updateUser: state.appUserHook,
  };
};

const url = getUrl("postProfileUpdate");

export default function ProfileUpdateHook() {
  const { token, userSelf, updateUser } = useAppstate(selection);

  const [buttonState, setButtonState] = useState("default");
  const [name, setName] = useState(userSelf.Name || "");
  const [image, setImage] = useState(userSelf.Image || "3");

  const [halt, setHalt] = useState(false);
  const [error, setError] = useState(false);
  //
  function set(data, id) {
    if (halt) return;
    if (id === "user_name") {
      setName(data);
      return;
    }
    if (id === "user_image") {
      setImage(data);
      return;
    }
    if (id === "submit_button") {
      if (buttonState !== "default") return;
      //
      setHalt(true);
      setButtonState("loading");
      //
      const data = {
        name: name,
        image: image,
      };
      // call the axios
      POST_USER_PROFILE_UPDATE(url, data, token, handleAxios);
    }
  }

  function handleAxios({ success, error, log }) {
    if (success) {
      createSuccess();
      return;
    }
    if (error) {
      createError(log);
    }
  }

  function createError(text) {
    setError(String(text) || false);
    setButtonState("error");

    setTimeout(() => {
      setButtonState("default");
      setHalt(false);
      setError(false);
    }, 3000);
  }

  function createSuccess() {
    const data = {
      Name: name,
      Image: image,
    };
    updateUser(data);
    setButtonState("success");
    setTimeout(() => {
      setButtonState("default");
      setHalt(false);
    }, 5000);
  }

  return {
    set,
    props: {
      name,
      image,
      buttonState,
      error,
    },
  };
}
