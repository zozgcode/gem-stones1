import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <div className="mx-auto px-20 py-[50px] text-center w-[600px]">
        <span className="text-center text-lg">
          Gemstones are minerals or organic materials that are cut or polished
          and used for adornment, art, or display. They are valued for their
          beauty, rarity, and durability.
        </span>
      </div>
      <div className="mx-auto px-20 pt-[30px] pb-10 text-center w-[600px]">
        <h3 className="text-4xl">Products</h3>
      </div>
      <Products />
    </div>
  );
}
