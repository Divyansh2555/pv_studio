export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}
        <div className="flex flex-col items-center text-center">

          <a
            
            target="_blank"
            className="bg-[#C8A96A] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#d8b97c] duration-300"
          >
            Book us now
          </a>

          <p className="mt-8 text-gray-400 text-lg">
            Made with ❤️ in India
          </p>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">

          <a
           
            target="_blank"
            className="hover:text-[#C8A96A] transition duration-300"
          >
            About
          </a>

          <a
           
            target="_blank"
            className="hover:text-[#C8A96A] transition duration-300"
          >
            Book us now
          </a>

          <a
            href="http://storiesinmotion.in/"
            target="_blank"
            className="hover:text-[#C8A96A] transition duration-300"
          >
            Stories for Brands
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          © 2026 All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}