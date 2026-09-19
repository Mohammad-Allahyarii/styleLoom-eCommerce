import { useState } from 'react';

import CartItemRow from '@/Pages/ShoppintCart/components/CartItemRow';
import EmptyCart from '@/Pages/ShoppintCart/components/EmptyCart';
import OrderSummary from '@/Pages/ShoppintCart/components/OrderSummary';
import { CART_ITEMS } from '@/Pages/ShoppintCart/mockData/mockCartItems';
import type { CartItemType } from '@/Pages/ShoppintCart/types/cart';
import HEADER_IMAGE from '@/assets/images/elevate-section/Abstract Design.svg';
import HeaderMainSectionTemplate from '@/components/MainSectionTelmplate/components/HeaderMainSectionTemplate';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';

const QUANTITY_MIN = 1;
const QUANTITY_MAX = 99;

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(CART_ITEMS);

  const changeQuantity = (id: string, nextQuantity: number) => {
    const clampedQuantity = Math.min(
      Math.max(nextQuantity, QUANTITY_MIN),
      QUANTITY_MAX,
    );

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: clampedQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id),
    );
  };

  return (
    <SectionContainer>
      <HeaderMainSectionTemplate
        title="Your Cart, Curated with Care"
        description="Review your selected items, adjust quantities, and proceed to a seamless checkout at StyleLoom."
        imgAdress={HEADER_IMAGE}
      />
      <DashedLine />
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] relative">
          <ul className="relative flex flex-col">
            {cartItems.map((item, index) => (
              <li key={item.id}>
                <CartItemRow
                  item={item}
                  onChangeQuantity={changeQuantity}
                  onRemove={removeItem}
                />
                {!(cartItems.length == index + 1) && <DashedLine />}
              </li>
            ))}

            <DashedLine axis="vertical" className="absolute right-0 top-0" />
          </ul>

          <OrderSummary items={cartItems} />
        </div>
      )}
    </SectionContainer>
  );
};

export default ShoppingCartPage;
