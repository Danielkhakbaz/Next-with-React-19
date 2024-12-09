"use client";

import { useOptimistic } from "react";

const UseOptimisticPage = () => {
  const [optimisticTitle, setOptimisticTitle] = useOptimistic<string>("");

  return (
    <form
      action={async (formData: FormData) => {
        const title = formData.get("title") as string;

        setOptimisticTitle(title);

        await new Promise((resolve) => setTimeout(resolve, 3000));
      }}
    >
      <input className="input input-bordered" name="title" type="text" />
      <button className="btn btn-accent" type="submit">
        Add
      </button>

      {optimisticTitle && (
        <p className="text-2xl">The value of title is: {optimisticTitle}</p>
      )}
    </form>
  );
};

export default UseOptimisticPage;
