"use client";

import { useFormStatus } from "react-dom";

const IsPendingButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="btn btn-secondary" disabled={pending}>
      {pending ? "Sending..." : "Send"}
    </button>
  );
};

export default IsPendingButton;
