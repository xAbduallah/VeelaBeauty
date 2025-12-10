"use client";

import { useSearchParams } from "next/navigation";

export default function NotFoundContent() {
  const params = useSearchParams();
  const error = params.get("err");

  return (
    <div>
      <h1>404</h1>
      <p>{error}</p>
    </div>
  );
}
