interface PropsType {
  count: number;
}

// absolute overlay on a relative wrapper; renders nothing at zero (no "0" badge)
const CartBadge = ({ count }: PropsType) => {
  if (count <= 0) {
    return null;
  }

  return (
    <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-brown-60 px-1 text-[11px] font-roboto-mono-medium text-absolute-white">
      {count}
    </span>
  );
};

export default CartBadge;
