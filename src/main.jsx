import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// import React, { useRef, useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { gsap } from "gsap";
// import Countdown from "./components/countdown";

// import bg1 from "/img/background1.png";
// import bg2 from "/img/background2.png";
// import bg3 from "/img/background3.png";
// import bg4 from "/img/background4.jpg";
// import bg5 from "/img/background5.jpg";
// import bg6 from "/img/background6.jpg";
// import card from "/img/card.png";
// import bni from "/img/BNI.png";
// import cincin from "/img/cincin.png";
// import wayang1 from "/img/wayang1.png";
// import wayang2 from "/img/wayang2.png";

// export default function App() {
//   const section1Ref = useRef(null);
//   const section2Ref = useRef(null);
//   const section3Ref = useRef(null);
//   const btnRef = useRef(null);
//   const wayang1Ref = useRef(null);
//   const wayang2Ref = useRef(null);

//   const [guestName, setGuestName] = useState("Fulan");

//   const playAnimation = () => {
//     const tl = gsap.timeline();

//     // Section 1 keluar ke atas
//     tl.to(section1Ref.current, {
//       y: "-100%",
//       duration: 1,
//       ease: "power2.inOut",
//     });

//     // Section 2 masuk
//     tl.fromTo(
//       section2Ref.current,
//       { y: "100%", opacity: 1 },
//       { y: "0%", opacity: 1, duration: 1, ease: "power2.inOut" },
//       "<"
//     );

//     // Wayang kiri ke kiri, kanan ke kanan
//     tl.to(wayang1Ref.current, {
//       x: "-150",
//       duration: 1,
//       ease: "power2.out",
//     });
//     tl.to(
//       wayang2Ref.current,
//       {
//         x: "150",
//         duration: 1,
//         ease: "power2.out",
//       },
//       "<"
//     );

//     // Zoom seluruh layar Section 2
//     tl.to(section2Ref.current, {
//       scale: 3, // perbesar section
//       opacity: 0,
//       duration: 1.5,
//       ease: "power3.inOut",
//       transformOrigin: "center center",
//     });

//     // Setelah zoom selesai → sembunyikan Section 1 & 2
//     tl.to(section2Ref.current, {
//       opacity: 0,
//       duration: 0.5,
//       onComplete: () => {
//         // tampilkan section 3
//         section1Ref.current.style.display = "none";
//         section2Ref.current.style.display = "none";
//         section3Ref.current.style.display = "block";

//         // paksa browser reflow biar GSAP detect element visible
//         void section3Ref.current.offsetHeight;

//         // scroll ke atas
//         window.scrollTo({ top: 0, behavior: "auto" });

//         // jalankan fade in GSAP utk div pertama
//         const firstDiv = section3Ref.current.querySelector(".section3-wrapper");
//         if (firstDiv) {
//           gsap.fromTo(
//             firstDiv,
//             { opacity: 0, y: 50 },
//             { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
//           );
//         }

//         // refresh AOS setelah delay sedikit
//         setTimeout(() => {
//           AOS.refreshHard();
//         }, 300);
//       },
//     });
//   };

//   useEffect(() => {
//     // ambil query param `to`
//     const params = new URLSearchParams(window.location.search);
//     const to = params.get("to");
//     if (to) {
//       setGuestName(decodeURIComponent(to));
//     }

//     AOS.init({
//       duration: 1000, // durasi animasi scroll
//       once: true, // hanya animasi sekali
//     });

//     // pasang event listener untuk tombol
//     const btn = btnRef.current;
//     if (btn) {
//       const handleClick = (e) => {
//         e.preventDefault();
//         playAnimation();
//       };
//       btn.addEventListener("click", handleClick);

//       // cleanup event listener biar gak dobel
//       return () => {
//         btn.removeEventListener("click", handleClick);
//       };
//     }
//   }, []);

//   return (
//     <div className="w-[463px] max-w-md h-screen mx-auto bg-white overflow-x-hidden relative">
//       {/* Section 1 */}
//       <section
//         ref={section1Ref}
//         className="absolute top-0 left-0 w-full h-screen  bg-center flex flex-col items-center justify-center px-4 text-center z-20"
//         style={{ backgroundImage: `url(${bg1})`, backgroundSize: "cover" }}
//       >
//         <img
//           src={wayang1}
//           className="mt-[7rem] mx-auto"
//           alt=""
//           width="80"
//           height="120"
//         />

//         <h4 className="text-[#ffffff] mb-[0.3rem]">THE WEDDING OF</h4>

//         <h2 className="text-[2.5rem] font-serif text-[#E6D3A3] mb-[0.3rem]">
//           Santi &amp; Mantri
//         </h2>

//         <h4 className="text-[#ffffff] mb-[3rem]">MINGGU, 21 SEPTEMBER 2025</h4>

//         <div className="text-center mb-6">
//           <p className="text-[#ffffff]">Kepada Yth:</p>
//           <p className="text-[#ffffff] mb-[0.4rem]">Bpk/Ibu/Saudara/i</p>
//           <p
//             className="text-[1.6rem] font-medium text-[#d6b183] mb-[0.4rem]"
//             style={{ fontWeight: "600" }}
//           >
//             {guestName}
//           </p>
//           <p className="text-[#ffffff] mb-[1rem]">Di Tempat</p>
//         </div>

//         <a
//           href="#"
//           ref={btnRef}
//           className="bg-[#E6D3A3] px-[2.6rem] py-[0.3rem] rounded-[0.3rem] text-[1rem] no-underline inline-block"
//         >
//           Buka Undangan
//         </a>
//       </section>

//       {/* Section 2 */}
//       <section
//         ref={section2Ref}
//         className="absolute top-0 left-0 w-full h-screen  bg-center flex flex-col items-center justify-center text-center z-10"
//         style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover" }}
//       >
//         <div className="relative w-[220px] h-[50px] mb-[15rem]">
//           <img
//             ref={wayang1Ref}
//             src={wayang1}
//             alt=""
//             className="absolute top-0 left-0"
//             width="220"
//             height="50"
//           />
//           <img
//             ref={wayang2Ref}
//             src={wayang2}
//             alt=""
//             className="absolute top-0 left-0 opacity-70"
//             width="220"
//             height="50"
//           />
//         </div>
//       </section>

//       {/* Section 3 (scrollable) */}
//       <section
//         ref={section3Ref}
//         style={{ display: "none" }}
//         className="relative w-full  bg-center flex flex-col items-center justify-start text-center"
//       >
//         <div
//           style={{ backgroundImage: `url(${bg3})`, backgroundSize: "cover" }}
//           className="section3-wrapper h-screen w-full  bg-center flex flex-col items-center justify-center px-4 text-center"
//         >
//           <div className="bg-[#e6cebe] w-[23rem] h-[40rem] rounded-[14rem] border-[10px] border-[#59362b]">
//             <div className="flex flex-col items-center justify-center h-full text-center px-6">
//               <h5 className="text-[1rem]">THE WEDDING OF</h5>
//               <h1 className="text-[3rem]">Santi</h1>
//               <h3 className="text-[2rem]">&amp;</h3>
//               <h1 className="text-[3rem]">Mantri</h1>
//               <h5 className="text-[1rem]">MINGGU, 21 SEPTEMBER 2025</h5>
//             </div>
//           </div>
//         </div>

//         <div
//           className="h-[35rem] w-full  bg-center flex flex-col items-center justify-center px-4 bg-[#5c3e33]"
//           data-aos="fade"
//         >
//           <img
//             src={wayang1}
//             alt=""
//             width="140"
//             height="120"
//             className="mb-[1rem]"
//           />
//           <h2 className="text-[#caaa91] text-[1.4rem] mb-[1.4rem]">
//             WE FOUND LOVE
//           </h2>
//           <p className="text-[#caaa91] text-[13px] mb-[1.4rem]">
//             "Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya
//             <br />
//             untukmu pasangan hidup dari jenismu sendiri supaya kamu dapat
//             <br />
//             ketenangan hati dan dijadikannya kasih sayang di antara kamu.
//             <br /> Sesungguhnya yang demikian itu menjadi tanda-tanda
//             kebesaran-Nya
//             <br />
//             bagi orang-orang yang berpikir."
//           </p>
//           <p className="text-[#caaa91] mb-[2rem] text-[14px]">
//             QS.Ar-Rum Ayat 21
//           </p>
//         </div>

//         <div
//           className="h-[50rem] w-full  bg-center flex flex-col items-center justify-center px-4"
//           style={{ backgroundImage: `url(${bg4})`, backgroundSize: "cover" }}
//           data-aos="fade"
//         >
//           <div className="bg-[#e6cebe] w-[23rem] h-[48rem] rounded-[14rem] border-[10px] border-[#59362b]">
//             <div className="flex flex-col items-center justify-center h-full text-center px-6">
//               <h2 className="text-[2rem] mb-[1.4rem] font-bold">
//                 BRIDE &amp;
//                 <br />
//                 GROOM
//               </h2>
//               <p className="text-[14px] mb-[1.4rem]">
//                 Assalamu'alaikum Warahmatullahi Wabarakatuh
//                 <br />
//                 Dengan mohon rahmat dan ridho Allah Swt. kami
//                 <br />
//                 bermaksud mengundang Bapak/Ibu/Saudara/i untuk
//                 <br />
//                 menghadiri acara pernikahan putra-putri kami:
//               </p>
//               <h1 className="text-[2rem]">Santi</h1>
//               <h3 className="text-[1.2rem]">Tri Susanti</h3>
//               <p className="text-[1.1rem]">
//                 Putri Ketiga dari
//                 <br />
//                 Bpk. Kamilin &amp; Ibu Endang Kurniati
//               </p>
//               <h1 className="text-[4rem]">&amp;</h1>
//               <h1 className="text-[2rem]">Mantri</h1>
//               <h3 className="text-[1.2rem]">Mantri</h3>
//               <p className="text-[1.1rem] mb-[3rem]">
//                 Putra Ketiga dari
//                 <br />
//                 Bpk. Miit Tonin &amp; Ibu Puah
//               </p>
//             </div>
//           </div>
//         </div>

//         <div
//           className="h-[70rem] w-full  bg-center flex flex-col items-center justify-center px-4 bg-[#5c3e33]"
//           data-aos="fade"
//         >
//           <div
//             className=" w-[25rem] h-[33rem] rounded-[1rem] mb-[2rem] flex flex-col items-center justify-center text-center px-6"
//             style={{
//               backgroundImage: `url(${bg6})`,
//               backgroundSize: "cover",
//             }}
//           >
//             <img
//               src={cincin}
//               alt=""
//               width={90}
//               height={70}
//               className="mb-[0.5rem]"
//             />
//             <h1
//               className="text-[#613d34] text-[1.8rem] mb-[0.5rem]"
//               style={{ fontWeight: "bold" }}
//             >
//               AKAD NIKAH
//             </h1>
//             <h3
//               className="text-[#694c42] text-[1.4rem] mb-[0.5rem]"
//               style={{ fontWeight: "600" }}
//             >
//               Minggu, 21 September 2025
//             </h3>
//             <h5
//               className="text-[#6e5448] text-[1.1rem] mb-[5rem]"
//               style={{ fontWeight: "600" }}
//             >
//               Pukul: 09.00 WIB
//             </h5>
//             <h5
//               className="text-[#61453e] text-[14px] mb-[0.5rem]"
//               style={{ fontWeight: "bold" }}
//             >
//               Bertempat dikediaman mempelai wanita
//             </h5>
//             <p className="text-[#80685c] text-[14px] mb-[0.5rem]">
//               Rw. Panjang, Kecamatan Bojonggede,
//               <br />
//               Kabupaten Bogor, Jawa Barat 16920
//             </p>
//             <a
//               href="https://maps.app.goo.gl/NqNUfkEM6TjamRNU9"
//               className="bg-[#8b6448] text-[#ffffff] px-[1rem] py-[0.5rem] rounded-[1rem] text-[1rem] no-underline inline-block mb-[2rem]"
//             >
//               OPEN MAPS
//             </a>
//           </div>
//           <div
//             className="bg-[#e6cebe] w-[25rem] h-[33rem] rounded-[1rem] flex flex-col items-center justify-center text-center px-6"
//             style={{
//               backgroundImage: `url(${bg6})`,
//               backgroundSize: "cover",
//             }}
//           >
//             <h1
//               className="text-[#613d34] text-[1.8rem] mb-[0.5rem]"
//               style={{ fontWeight: "bold" }}
//             >
//               RESEPSI
//             </h1>
//             <h3
//               className="text-[#694c42] text-[1.4rem] mb-[0.5rem]"
//               style={{ fontWeight: "600" }}
//             >
//               Minggu, 21 September 2025
//             </h3>
//             <h5
//               className="text-[#6e5448] text-[1.1rem] mb-[5rem]"
//               style={{ fontWeight: "600" }}
//             >
//               Pukul: 11.00 WIB s.d selesai
//             </h5>
//             <h5
//               className="text-[#61453e] text-[14px] mb-[0.5rem]"
//               style={{ fontWeight: "bold" }}
//             >
//               Bertempat dikediaman mempelai wanita
//             </h5>
//             <p className="text-[#80685c] text-[14px] mb-[0.5rem]">
//               Rw. Panjang, Kecamatan Bojonggede,
//               <br />
//               Kabupaten Bogor, Jawa Barat 16920
//             </p>
//             <a
//               href="https://maps.app.goo.gl/NqNUfkEM6TjamRNU9"
//               className="bg-[#8b6448] text-[#ffffff] px-[1rem] py-[0.5rem] rounded-[1rem] text-[1rem] no-underline inline-block mb-[2rem]"
//             >
//               OPEN MAPS
//             </a>
//           </div>
//         </div>

//         <div
//           className="h-[20rem] w-full bg-center flex flex-col items-center justify-center px-4 bg-[#e6cbba]"
//           data-aos="fade"
//         >
//           <div>
//             <h2
//               className="text-[#613d34] text-[1.8rem] mb-[1.5rem]"
//               style={{ fontWeight: "bold" }}
//             >
//               Counting The Day
//             </h2>
//             <Countdown />
//             <a
//               href=""
//               className="bg-[#543022] text-[#ffffff] px-[1.4rem] py-[0.8rem] rounded-[5rem] text-[0.9rem] no-underline inline-block mb-[2rem] mt-[2rem]"
//             >
//               SIMPAN DI KALENDER
//             </a>
//           </div>
//         </div>

//         <div
//           className="w-[100%] bg-[#e6cbba] flex flex-col items-[center] justify-[start] px-[1rem] py-[2rem]"
//           data-aos="fade"
//         >
//           <h2
//             className="text-[2rem] mb-[1.5rem] text-[#593528] ml-[12rem]"
//             style={{ fontWeight: "bold" }}
//           >
//             Our Moment
//           </h2>

//           <div className="grid grid-cols-3 gap-[0.5rem] w-[100%] max-w-[425px] auto-rows-[150px]">
//             {/* Landscape */}
//             <div className="col-span-[2]">
//               <img
//                 src="/img/cewekcowok3.jpg"
//                 alt=""
//                 className="w-[100%] h-[100%] object-cover rounded-[0.5rem]"
//               />
//             </div>

//             {/* Portraits */}
//             <div className="row-span-[2]">
//               <img
//                 src="/img/cowok1.jpg"
//                 alt=""
//                 className="w-[100%] h-[100%] object-cover rounded-[0.5rem]"
//               />
//             </div>
//             <div className="row-span-[2]">
//               <img
//                 src="/img/cewekcowok1.jpg"
//                 alt=""
//                 className="w-[100%] h-[100%] object-cover rounded-[0.5rem]"
//               />
//             </div>
//             <div className="row-span-[2]">
//               <img
//                 src="/img/cewekcowok2.jpg"
//                 alt=""
//                 className="w-[100%] h-[100%] object-cover rounded-[0.5rem]"
//               />
//             </div>
//             <div className="row-span-[2]">
//               <img
//                 src="/img/cewek1.jpg"
//                 alt=""
//                 className="w-[100%] h-[100%] object-cover rounded-[0.5rem]"
//               />
//             </div>

//             {/* Landscape */}
//             <div className="col-span-[2]">
//               <img
//                 src="/img/cewekcowok5.jpg"
//                 alt=""
//                 className="w-[100%] h-[100%] object-cover rounded-[0.5rem]"
//               />
//             </div>
//             <div className="col-span-[2]">
//               <img
//                 src="/img/cewekcowok4.jpg"
//                 alt=""
//                 className="w-[100%] h-[100%] object-cover rounded-[0.5rem]"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           className="h-[25rem] w-full bg-center flex flex-col items-center justify-center px-4 bg-[#e6cbba]"
//           data-aos="fade"
//         >
//           <h2 className="text-[#6e4f40] text-[2.4rem] mb-[0.6rem]">
//             Wedding gift
//           </h2>
//           <p
//             className="text-[#6e4f40] text-[14px] mb-[1.4rem]"
//             style={{ fontWeight: "600" }}
//           >
//             Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah
//             <br />
//             pernikahan dapat melalui nomer rekening di bawah ini
//           </p>
//           <div
//             className="w-[22.2rem] h-[14rem]"
//             style={{ backgroundImage: `url(${card})` }}
//           >
//             <img
//               src={bni}
//               alt=""
//               width={100}
//               className="mt-[1.5rem] ml-[14rem]"
//             />
//             <div className="mt-[5.5rem] mr-[12rem]">
//               <h2
//                 className="text-[1.3rem] mb-[0.4rem]"
//                 style={{ fontWeight: "bold" }}
//               >
//                 1910451894
//               </h2>
//               <h2 className="text-[1.3rem]" style={{ fontWeight: "400" }}>
//                 Tri Susanti
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div
//           className="h-[40rem] w-full  bg-center flex flex-col items-center justify-center px-4 bg-[#5c3e33]"
//           data-aos="fade"
//         >
//           <img
//             src={wayang1}
//             alt=""
//             width={130}
//             height={130}
//             className="mt-[1.2rem]"
//           />
//           <h1 className="text-[#ccaf8b] text-[3rem] mb-[0.8rem]">
//             Best Wishes
//           </h1>
//           <p className="text-[#ccaf8b] text-[15px] mb-[0.8rem]">
//             Sampaikan do'a dan ucapan terbaik anda
//           </p>
//           <form
//             action=""
//             className="flex flex-col bg-[#ffffff] p-[1rem] rounded-[0.5rem] w-[100%] max-w-[420px] mx-[auto] mb-[1.2rem]"
//           >
//             {/* Input nama tamu */}
//             <input
//               type="text"
//               placeholder="Nama Tamu"
//               name="nama_tamu"
//               id="nama_tamu"
//               className="w-[100%] border border-[#ccc] rounded-[0.3rem] px-[0.8rem] py-[0.5rem] mb-[0.8rem] text-[0.9rem]"
//             />

//             {/* Select konfirmasi */}
//             <select
//               name="kehadiran"
//               id="kehadiran"
//               className="w-[100%] border border-[#ccc] rounded-[0.3rem] px-[0.8rem] py-[0.5rem] mb-[0.8rem] text-[0.9rem]"
//             >
//               <option value="">Konfirmasi Kehadiran</option>
//               <option value="hadir">Hadir</option>
//               <option value="tidak_hadir">Tidak Hadir</option>
//             </select>

//             {/* Textarea ucapan */}
//             <textarea
//               name="ucapan"
//               id="ucapan"
//               placeholder="Tulis ucapan"
//               className="w-[100%] border border-[#ccc] rounded-[0.3rem] px-[0.8rem] py-[0.5rem] mb-[0.8rem] text-[0.9rem] h-[6rem] resize-none"
//             ></textarea>

//             {/* Tombol kirim */}
//             <div className="flex justify-[end]">
//               <button
//                 type="submit"
//                 className="bg-[#5c3e33] text-[#fff] px-[1.5rem] py-[0.5rem] rounded-[0.3rem] text-[0.9rem]"
//               >
//                 Kirim
//               </button>
//             </div>
//           </form>
//         </div>

//         <div
//           className="w-full h-[40rem] bg-center flex flex-col items-center justify-center px-4"
//           style={{ backgroundImage: `url(${bg5})`, backgroundSize: "cover" }}
//           data-aos="fade"
//         >
//           <p
//             className="text-[#6e4f40] text-[14px] mb-[0.5rem]"
//             style={{ fontWeight: "600" }}
//           >
//             Merupakan suatu kebahagian dan kehormatan bagi kami, apabila
//             <br />
//             Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu
//             <br />
//             kepada kami
//           </p>
//           <h2 className="text-[#593a2b] font-[bold] mb-[0.5rem]">
//             KAMI YANG BERBAHAGIA
//           </h2>
//           <h1
//             className="text-[#4b2a1b] text-[1.4rem]"
//             style={{ fontWeight: "bold" }}
//           >
//             Santi &amp; Mantri
//           </h1>
//         </div>
//       </section>
//     </div>
//   );
// }
