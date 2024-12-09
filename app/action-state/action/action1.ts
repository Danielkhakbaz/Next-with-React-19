"use server";

export const action1 = async (_previousState: unknown, formData: FormData) => {
  const name = formData.get("name"),
    email = formData.get("email");

  console.log(name, email);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return "Error occured!";
};
