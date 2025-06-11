
function ProductItem({ name, image }) {
  return (
    <div className="flex flex-col items-center m-[50px]">
      <div className="w-32 h-48 bg-gray-300 rounded-md flex items-center justify-center text-gray-500">
        <img src={image} alt={name} className="max-w-full max-h-full" />
      </div>
      <p className="mt-2 text-sm text-gray-500">{name}</p>
    </div>
  );
}

export default ProductItem;