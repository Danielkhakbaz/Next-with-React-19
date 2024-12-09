import { RefObject } from "react";

type RefButtonProps = {
  ref: RefObject<HTMLInputElement | null>;
};

const RefButton = ({ ref }: RefButtonProps) => {
  return (
    <button
      className="btn btn-secondary"
      onClick={() => console.log(ref.current?.value)}
    >
      Click
    </button>
  );
};

export default RefButton;
