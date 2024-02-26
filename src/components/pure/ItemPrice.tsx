type TItemPrice = {
  className: string;
  classPrice: string;
  discount?: boolean | string | undefined;
  discountPrice: string | undefined;
  price: string | boolean | undefined;
};

export const ItemPrice = ({
  className,
  classPrice,
  discount,
  discountPrice,
  price,
}: TItemPrice) => {
  return (
    <div className={className}>
      {discount && (
        <button className="bg-epic-blue-100 w-10 h-5 rounded-md text-xs">
          {discount}
        </button>
      )}
      <div className={classPrice}>
        {discount && (
          <span className="opacity-80 line-through">MX${discountPrice}</span>
        )}

        <span>MX${price}</span>
      </div>
    </div>
  );
};
