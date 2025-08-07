const CartItem = ({ product, onRemove, onUpdateQty }) => {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={product.image} alt={product.name} className="w-32 h-32 rounded object-cover" />
      <div className="flex-1">
        <h2 className="font-semibold">{product.name}</h2>
       
        <div className="flex items-center mt-2 gap-2">
          <button
            onClick={() => onUpdateQty(product.id, product.quantity - 1)}
            className="px-2 border rounded"
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            onClick={() => onUpdateQty(product.id, product.quantity + 1)}
            className="px-2 border rounded"
          >
            +
          </button>
        </div>
      </div>
     <p className="text-gray-500">₹{product.price}</p>
      <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700 text-xl"
      >
        🗑
      </button>
    </div>
  );
};

export default CartItem;
