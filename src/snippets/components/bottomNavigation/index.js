"use client";
import NavUI from "./ui";
import { BottomNav_hook } from "@/snippets/hooks";

export default function HI() {
  const { changeRouter, getActivePath } = BottomNav_hook();
  return (
    <>
      <NavUI changeRoute={changeRouter} getActivePath={getActivePath} />
    </>
  );
}
