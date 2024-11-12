import Image from "next/image";
import { gemstones } from "./mockData";

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10 pt-0">
      {gemstones.map((gemstone) => (
        <div
          key={gemstone.id}
          className="border rounded-lg p-4"
        >
          <Image
            src={gemstone.imageUrl}
            alt={gemstone.name}
            width={150}
            height={150}
            className="w-full h-[200px] object-cover rounded"
          />
          {/* <h3 className="text-lg text-center mt-2">{gemstone.name}</h3> */}
          {/* <p className="text-gray-600">{gemstone.description}</p> */}
          {/* <p className="text-blue-600 font-bold mt-2">{gemstone.price}</p> */}
          {/* <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
            Add to Cart
          </button> */}
        </div>
      ))}
    </div>
  );
}
