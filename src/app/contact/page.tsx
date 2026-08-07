import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
export default function Contact() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-red-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">
            Contacts Us
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