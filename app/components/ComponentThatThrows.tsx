import { ReactNode } from "react";
import useExternalStoreWhereTheServerAndTheClientDisagreeOnFirstRender from "./useExternalStoreWhereTheServerAndTheClientDisagreeOnFirstRender";

export default function ComponentThatThrows(): ReactNode {
  const num = useExternalStoreWhereTheServerAndTheClientDisagreeOnFirstRender();
  if (num === 1) {
    throw new Error("1 is the loneliest number");
  }
  return <>Nothing is everything</>;
}
