const CartItem = ({ product, onRemove, onUpdateQty }) => {
  const productData = product.productId;


  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={productData?.images?.[0]?.url} alt={productData?.name} className="w-32 h-32 rounded object-cover" />

      <div className="flex-1">
        <h2 className="font-semibold">{productData?.name}</h2>

        <div className="flex items-center mt-2 gap-2">
          <button
            onClick={() => onUpdateQty(productData._id, product.quantity - 1)}
            className="px-2 border rounded"
          >
            -
          </button>

          <span>{product.quantity}</span>

          <button
            onClick={() => onUpdateQty(productData._id, product.quantity + 1)}
            className="px-2 border rounded"
          >
            +
          </button>
        </div>
      </div>

      <p className="text-gray-500">₹{product.price}</p>

      <button
        onClick={() => onRemove(productData._id)}
        className="text-red-500 hover:text-red-700 text-xl"
      >
        🗑
      </button>
    </div>
  );
};

export default CartItem;

