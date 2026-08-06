import Header from "../../components/header";
import Image from "next/image";
import hbg from "../../assets/hbg.avif";
import Footer from "../../components/footer";

export default function Homes() {
  return (
    <>
      <main>
        <div className="relative w-full min-h-screen">
          {/* Background Image */}
          <Image
            src={hbg}
            alt="Background"
            fill
            className="object-cover -z-10"
            priority
          />

          <Header />

          <div className="flex items-center justify-center min-h-screen">
            <p className="text-white text-5xl font-bold">
              Welcome to Our Studio
            </p>
          </div>
        </div>



        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center mb-12">
              Our Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">📸 Photography</h3>
                <p>Professional photography for every occasion.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">🎥 Videography</h3>
                <p>High-quality cinematic video production.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">🚁 Drone Shoot</h3>
                <p>Beautiful aerial photography and videos.</p>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition">
                <h3 className="text-2xl font-semibold mb-3">💍 Wedding</h3>
                <p>Capture your special moments forever.</p>
              </div>

            </div>

          </div>
        </section>




      </main>


      <Footer />




    </>

  );

}