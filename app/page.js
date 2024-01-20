import CategortSection from "../components/CategortSection";
import Home from "../components/Home";
import ProductSection from "../components/ProductSection";
export default function HomePage() {
  return (
    <>
      <h1>
        <Home />
        <CategortSection />
        <ProductSection />
      </h1>
    </>
  );
}
