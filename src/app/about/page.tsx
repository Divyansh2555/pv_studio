import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
export default function About() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <Header />
      </header>

      <main className="min-h-screen bg-red-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            About Us
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stories by Joseph Radhik is an international award-winning team of
            photographers who believe in stories of love, laughter, and happily
            ever after.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}