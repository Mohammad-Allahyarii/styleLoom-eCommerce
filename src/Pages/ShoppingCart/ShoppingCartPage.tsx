import CartItemRow from '@/Pages/ShoppingCart/components/CartItemRow';
import EmptyCart from '@/Pages/ShoppingCart/components/EmptyCart';
import OrderSummary from '@/Pages/ShoppingCart/components/OrderSummary';
import HEADER_IMAGE from '@/assets/images/elevate-section/abstract-design.svg';
import HeaderMainSectionTemplate from '@/components/MainSectionTemplate/components/HeaderMainSectionTemplate';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import {
  selectAppliedPromoCode,
  selectDiscount,
  selectLineCount,
  selectResolvedItems,
  selectSubtotal,
  selectTotal,
  useCartStore,
} from '@/stores/cartStore';

const ShoppingCartPage = () => {
  // rows render resolved lines (live catalog data); totals selectors resolve internally
  const items = useCartStore(selectResolvedItems);
  // an empty cart is about raw items, not available lines
  const lineCount = useCartStore(selectLineCount);
  const subtotal = useCartStore(selectSubtotal);
  const discount = useCartStore(selectDiscount);
  const total = useCartStore(selectTotal);
  const appliedPromoCode = useCartStore(selectAppliedPromoCode);

  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const applyPromoCode = useCartStore((state) => state.applyPromoCode);
  const removePromoCode = useCartStore((state) => state.removePromoCode);

  return (
    <SectionContainer>
      <HeaderMainSectionTemplate
        title="Your Cart, Curated with Care"
        description="Review your selected items, adjust quantities, and proceed to a seamless checkout at StyleLoom."
        imgAdress={HEADER_IMAGE}
      />
      <DashedLine />
      {lineCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] relative">
          <ul className="relative flex flex-col">
            {items.map((item, index) => (
              <li key={item.id}>
                <CartItemRow
                  item={item}
                  onChangeQuantity={setQuantity}
                  onRemove={removeItem}
                />
                {!(items.length == index + 1) && <DashedLine />}
              </li>
            ))}

            <DashedLine axis="vertical" className="absolute right-0 top-0" />
          </ul>

          <OrderSummary
            subtotal={subtotal}
            discount={discount}
            total={total}
            appliedPromoCode={appliedPromoCode}
            onApplyPromoCode={applyPromoCode}
            onRemovePromoCode={removePromoCode}
          />
        </div>
      )}
    </SectionContainer>
  );
};

export default ShoppingCartPage;
