"use client";

import { ErrorBoundary } from "react-error-boundary";
import ComponentThatThrows from "./components/ComponentThatThrows";

export default function Home() {
  return (
    <ErrorBoundary fallback={<>Something bad happened</>}>
      <ComponentThatThrows />
    </ErrorBoundary>
  );
}
