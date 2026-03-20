import FarmCarousel from "./components/FarmCarousel";
import ProductsPage from "./products/Page";


export default function Home() {
  return (
    <main>
      {/* Hero Section bila background image */}
      <section className="relative h-[80vh] mt-2">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-overlay-green">
          <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
            Mapinduzi ya Kilimo kwa Tija na Uhakika
          </h1>
          <p className="text-lg mb-6 max-w-2xl animate-slideUp">
            Tunauza mbolea bora, mbegu za kisasa na tunatoa ushauri wa kitaalamu kwa wakulima wa Tanzania.
          </p>
          <div className="space-x-4 animate-fadeIn">
            <a
              href="/products"
              className="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-green-100 transition"
            >
              Angalia Bidhaa
            </a>
            <a
              href="/contact"
              className="bg-green-500 px-6 py-3 rounded font-semibold hover:bg-green-600 transition"
            >
              Wasiliana Nasi
            </a>
          </div>
        </div>
      </section>

      {/* Farm Carousel Section */}
      <FarmCarousel />
      <ProductsPage />

     
    </main>
  );
}