// components/Banner.js
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div
      className="relative bg-cover bg-center h-[300px] sm:h-[500px] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://i.imgur.com/5g5JjFU.png" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay for readability */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the World of Gemstones
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore our exclusive collection of precious and semi-precious stones.
        </p>

        {/* <Link href="/shop">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Contact Us
          </button>
        </Link> */}
      </div>
    </div>
  );
}
