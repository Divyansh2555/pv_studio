"use client";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";


import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import p7 from "../../assets/p7.jpg";
import p8 from "../../assets/p8.jpg";
import p9 from "../../assets/p9.jpg";
import p10 from "../../assets/p10.jpg";
import p11 from "../../assets/p11.jpg";
import p12 from "../../assets/p12.jpg";
import p13 from "../../assets/p13.jpg";
import p14 from "../../assets/p14.jpg";
import p15 from "../../assets/p15.jpg";

const images = [
  p1, p2, p3, p4, p5,
  p6, p7, p8, p9, p10,
  p11, p12, p13, p14, p15,
];


export default function Portfolio() {
  return (
    <>

      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <Header />
      </header>

      <main className=" w-full h-screen  ">

        <section className="bg-amber-200 flex pt-21 overflow-hidden ">
          <div className="flex  flex-col  w-full  ">




            <div className="w-full overflow-hidden">

              <motion.div
                className="flex  w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >



                {/* First Set */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>


                {/* Same Set Again */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>



              </motion.div>

            </div>


            <div className="w-full overflow-hidden">

              <motion.div
                className="flex w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >

                {/* First Set */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>


                {/* Same Set Again */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>

              </motion.div>

            </div>


            <div className="w-full overflow-hidden">

              <motion.div
                className="flex  w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >



                {/* First Set */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>


                {/* Same Set Again */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>



              </motion.div>

            </div>

            <div className="w-full overflow-hidden">

              <motion.div
                className="flex w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 70,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >

                {/* First Set */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>


                {/* Same Set Again */}

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p1} alt="Portfolio 1" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p2} alt="Portfolio 2" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p3} alt="Portfolio 3" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p4} alt="Portfolio 4" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p5} alt="Portfolio 5" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p6} alt="Portfolio 6" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p7} alt="Portfolio 7" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p8} alt="Portfolio 8" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p9} alt="Portfolio 9" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p10} alt="Portfolio 10" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p11} alt="Portfolio 11" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p12} alt="Portfolio 12" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p13} alt="Portfolio 13" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p14} alt="Portfolio 14" fill className="object-cover" />
                </div>

                <div className="w-[200px] min-w-[200px] h-[120px] relative overflow-hidden">
                  <Image src={p15} alt="Portfolio 15" fill className="object-cover" />
                </div>

              </motion.div>

            </div>






            










            

          </div>


        </section>




      </main>


      <Footer />
    </>



  );

}