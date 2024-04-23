import { useSyncExternalStore } from "react";

function getSnapshot() {
  return 1;
}

function getServerSnapshot() {
  return 0;
}

function subscribe() {
  return () => {};
}

export default function useExternalStoreWhereTheServerAndTheClientDisagreeOnFirstRender() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
