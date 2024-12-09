"use client";

import { useActionState } from "react";
import IsPendingButton from "@/components/form-status/is-pending-button";
// eslint-disable-next-line boundaries/element-types
import { action1 } from "./action/action1";

const ActionStatePage = () => {
  const [error, action] = useActionState(action1, "");

  return (
    <form action={action}>
      <input className="input input-bordered" name="name" type="text" />
      <input className="input input-bordered" name="email" type="email" />
      <IsPendingButton />

      {error && <span>{error}</span>}
    </form>
  );
};

export default ActionStatePage;
