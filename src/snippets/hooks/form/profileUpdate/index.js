"use client";

import { useState } from "react";
import { GenPostAPiCall, GlobalApp } from "@/snippets/hooks";

const selection = (state) => {
  return {
    userSelf: state.userSelf,
    updateUser: state.appUserPing,
  };
};

export default function SapreeFormHook() {
  const { userSelf, updateUser } = GlobalApp(selection);
  const [name, setName] = useState(userSelf.Name || "");
  const [image, setImage] = useState(userSelf.Image || "3");

  const { loading, error, post, manualError, apiState } = GenPostAPiCall({
    url: "userupdate",
    pong: handleApiResult,
  });

  function setButton(data, id) {
    if (loading) return;
    if (apiState !== "default") return;
    if (id === "user_name") {
      setName(data);
      return;
    }
    if (id === "user_image") {
      setImage(data);
      return;
    }
    if (id === "submit_button") {
      const data = {
        name: name,
        image: image,
      };
      post(data);
    }
  }

  function handleApiResult() {
    const data = {
      name: name,
      image: image,
    };
    updateUser(data);
  }
  return {
    set: setButton,
    props: {
      buttonState: apiState,
      error,
      name,
      image,
    },
  };
}
