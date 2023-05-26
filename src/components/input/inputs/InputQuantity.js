import { useState } from "react";
import Button from "../../button";

const InputQuantity = ({ quantity, maxQuantity, onChange }) => {
  const handleIncrease = () => {
    if (quantity < maxQuantity) {
      onChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className="bg-white w-fit h-10 flex items-center py-2 px-4 text-md border border-neutral-400 rounded-full">
      <div>
        <Button type="link" icon="minus" onClick={handleDecrease} />
      </div>
      <input
        type="text"
        value={quantity}
        className="text-center w-12"
        readOnly
      />
      <div>
        <Button type="link" icon="plus" onClick={handleIncrease} />
      </div>
    </div>
  );
};

export default InputQuantity;
