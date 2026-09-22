import { ShoppingCart } from 'lucide-react';

import QuantityStepper from '@/Pages/ShoppintCart/components/QuantityStepper';
import Button from '@/components/button/Button';

interface PropsType {
  // 0 = product not in cart yet → show the add button; otherwise show
  // the quantity stepper (reusing the cart's control).
  quantityInCart: number;
  onAdd?: (() => void) | undefined;
  onChangeQuantity?: ((nextQuantity: number) => void) | undefined;
}

const AddToCartControl = ({
  quantityInCart,
  onAdd,
  onChangeQuantity,
}: PropsType) => {
  if (quantityInCart === 0) {
    return (
      <Button
        onClick={onAdd}
        variant="cornerBordered"
        icon={ShoppingCart}
        className="w-max"
      >
        Add To Cart
      </Button>
    );
  }
  return (
    <QuantityStepper
      value={quantityInCart}
      onChange={(nextQuantity) => onChangeQuantity?.(nextQuantity)}
      removeAtMin
    />
  );
};

export default AddToCartControl;
