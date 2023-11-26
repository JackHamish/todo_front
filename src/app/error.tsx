"use client";

import { Button } from "@/components/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <h2 className="font-sans text-5xl font-semibold">
        Something went wrong!
      </h2>
      <Button fill={false} onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
