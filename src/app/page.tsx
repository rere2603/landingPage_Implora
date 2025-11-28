"use client"; 
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const [email, setEmail] = useState("");

  const heroImages = [
    "/hero.webp",
    "/hero2.jpg", 
    "/hero3.webp",
    "/hero4.webp",
    "/hero5.webp"
  ];

  const bestSellerProducts = [
    {
      id: 1,
      image: "/cushion.webp",
      name: "Healthy Glow Cushion",
      price: "Rp 50.000 - 87.000"
    },
    {
      id: 2,
      image: "/foundation.webp",
      name: "Even Better Liquid Foundation",
      price: "Rp 32.857"
    },
    {
      id: 3,
      image: "/powder.webp",
      name: "Sueluttu Powder Cake",
      price: "Rp 22.500"
    },
    {
      id: 4,
      image: "/blush.webp",
      name: "Cheek Blossom Blush On",
      price: "Rp 22.000"
    },
    {
      id: 5,
      image: "/lipbullet.webp",
      name: "implora day to day lip bullet",
      price: "IDR 35.750",
    },
    {
      id: 6,
      image: "/lipcream.webp",
      name: "implora day to day lite matte lip cream",
      price: "IDR 38.870",
    },
    {
      id: 7,
      image: "/mascara.webp",
      name: "implora urban volume mascara",
      price: "IDR 40.000",
    },
    {
      id: 8,
      image: "/cream mate.webp",
      name: "implora urban lip cream matte",
      price: "IDR 27.000",
    },
    {
      id: 9,
      image: "/cleanser.webp",
      name: "implora bengkoang cleanser series",
      price: "IDR 15.000",
    },
    {
      id: 10,
      image: "/skinbarier.webp",
      name: "implora 8+ ceramide skin barrier moisturizing gel",
      price: "IDR 35.000-72.500",
    },
    {
      id: 11,
      image: "/tratment.webp",
      name: "implora acne spot treatment",
      price: "IDR 35.000",
    },
    {
      id: 12,
      image: "/moisturizing.webp",
      name: "implora essential sheet mask",
      price: "IDR 5.500",
    },
    {
      id: 13,
      image: "/serum.webp",
      name: "implora crsytalice eye serum",
      price: "IDR 50.000",
    },
    {
      id: 14,
      image: "/sunscreen30.webp",
      name: "implora perfect shield gel sunscreen SPF 30 PA+++",
      price: "IDR 35.350",
    },
    {
      id: 15,
      image: "/sunscreen40.webp",
      name: "implora perfect shield sunscreen",
      price: "IDR 38.500",
    },
    {
      id: 16,
      image: "/mask.webp",
      name: "implora hydra veli sleeping mask",
      price: "IDR 33.000",
    },
    {
      id: 17,
      image: "/eyeliner.webp",
      name: "implora urban liquid eyeliner",
      price: "IDR 35.000",
    },
    {
      id: 18,
      image: "/pencil.webp",
      name: "implora urban eyebrow pencil",
      price: "IDR 15.000",
    },
    {
      id: 19,
      image: "/eyeshadow.webp",
      name: "implora urban eyeshadow palatte",
      price: "IDR 50.000",
    },
    {
      id: 20,
      image: "/waycake.webp",
      name: "implora day to day two way cake",
      price: "IDR 49.400-74.750",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div>
      <header className="flex justify-between items-center px-10 py-4 shadow-md bg-white sticky top-0 z-50">
        <div className="relative w-40 h-12">
          <Image 
            src="/implora-logo.png"
            alt="IMPLORA Logo"
            width={160}
            height={48}
            className="object-contain"
            priority
          />
        </div>
        <nav className="flex gap-6">
          <a href="#about" className="hover:text-red-500">About Us</a>
          <a href="#products" className="hover:text-red-500">Products</a>
          <a href="#news" className="hover:text-red-500">News</a>
          <a href="#store" className="hover:text-red-500">Store</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>
      </header>

      <section className="relative bg-gray-100 h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {heroImages.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentHeroIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image 
                src={src} 
                alt={`Hero ${index + 1}`} 
                width={1600} 
                height={600} 
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className="group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-1 w-12 transition-all duration-300 ${
                index === currentHeroIndex 
                  ? "bg-white" 
                  : "bg-white/50 group-hover:bg-white/70"
              }`} />
            </button>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentHeroIndex + 1} / {heroImages.length}
        </div>
      </section>

      <section className="w-full flex items-center bg-gray-100 border-b border-gray-200">
        <div className="bg-black text-white px-6 py-3 font-bold w-fit flex-shrink-0">
          #BeraniJadiAku
        </div>

        <div className="flex-1 overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap text-black font-medium py-3">
            Beli produk di Implora dan dapatkan promo menarik • Promotion • Free Shipping • Cashback 10Rb • Cash on Delivery • Limited Time Offer • Special Discount • New Arrivals • Exclusive Deals •
          </div>
        </div>
      </section>

      <section id="products" className="px-10 py-16 relative bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Best Seller</h2>
          <p className="text-lg font-bold cursor-pointer hover:underline">SEE ALL</p>
        </div>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg border z-10 hover:bg-gray-50 transition-colors"
            onClick={() => setCurrentProductIndex(
              currentProductIndex === 0 ? bestSellerProducts.length - 1 : currentProductIndex - 1
            )}
          >
            ◀
          </button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {bestSellerProducts
              .slice(currentProductIndex, currentProductIndex + 4)
              .map((product, index) => (
                <div
                  key={product.id}
                  className="text-center transition-all duration-300 hover:scale-105"
                >
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    width={200} 
                    height={200} 
                    className="mx-auto rounded-lg shadow-md bg-white p-2"
                  />
                  <p className="mt-2 font-semibold text-sm">{product.name}</p>
                  <p className="text-red-500 font-bold">{product.price}</p>
                </div>
              ))}
          </div>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg border z-10 hover:bg-gray-50 transition-colors"
            onClick={() => setCurrentProductIndex(
              currentProductIndex + 4 >= bestSellerProducts.length ? 0 : currentProductIndex + 4
            )}
          >
            ▶
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(bestSellerProducts.length / 4) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                Math.floor(currentProductIndex / 4) === index 
                  ? "bg-red-500 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentProductIndex(index * 4)}
            />
          ))}
        </div>

        <div className="text-center mt-4 text-gray-600">
          Showing {currentProductIndex + 1}-{Math.min(currentProductIndex + 4, bestSellerProducts.length)} of {bestSellerProducts.length} products
        </div>
      </section>

      <section className="px-10 py-16 flex flex-col md:flex-row gap-10 items-center bg-white">
        <Image src="/urban.png" alt="Urban Series" width={600} height={600} className="rounded-2xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-semibold">Implora Urban Series</h2>
          <p className="mt-4 text-gray-600 font-bold">
           mplora Urban Series is a makeup series designed to create a bold and confident look. Each product in this series has intense colors and long-lasting formulations. Suitable for those of you who want to stand out in the midst of the hustle and bustle of the city, Urban Series is here to emphasize character and self-expression through bold yet elegant makeup.
          </p>
          <button className="mt-6 border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
            Get It Now
          </button>
        </div>
      </section>

      <div className="relative w-full h-[500px]">
        <Image src="/latest.png" alt="Urban Series" width={1920} height={600} className="object-cover w-full h-full" />
      </div>

      <section className="w-full overflow-hidden bg-white py-4">
        <div className="animate-marquee  font-bold text-gray-600">
          #BeraniJadiAku • IMPLORA • #BeraniJadiAku • IMPLORA 
        </div>
      </section>

      <section id="news" className="px-10 py-16 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Image src="/discoun.jpg" alt="Discount" width={600} height={600} className="rounded-xl shadow-lg" />
          <p className="text-lg text-gray-700">
            Implora as a local beauty brand is increasingly showing consistency and innovation by routinely launching skincare, makeup, and personal care products based on the high demand of Indonesian people for beauty products....
          </p>
        </div>
      </section>

      <section id="gallery" className="px-10 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">
          FOLLOW US ON INSTAGRAM @imploracosmetics
        </h2>
        <div className="flex gap-6 justify-center overflow-x-auto pb-4">
          {["/gallery1.jpg","/gallery.jpg","/gallery2.jpg","/gallery3.jpg","/gallery4.jpg"].map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Gallery ${idx + 1}`}
              width={400}
              height={300}
              className="rounded-xl shadow-md object-cover hover:scale-105 transition-transform bg-white p-2 flex-shrink-0"
            />
          ))}
        </div>
      </section>

      <footer className="bg-white text-black">
        <div className="container mx-auto px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Implora Beauty Head Quarter</h3>
              <div className="space-y-2 text-gray-700">
                <p>Sentrai Senayan 1 Lantai 10 (PT Implora Sukses Abadi Office)</p>
                <p>JI. Asia Afrika no. 8 Gelora Bung Karno-senayan,</p>
                <p>Kecamatan Tanah Abang, Kota Jakarta Pusat,</p>
                <p>Daerah Khusus Ibukota Jakarta 10270.</p>
                <p className="mt-4">📞 021-5731009</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Subscribe Newsletter</h3>
              <p className="text-gray-700 mb-6">
                Subscribe to our newsletter for early access to sales and promotions
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  SUBSCRIBE
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <span>Language:</span>
                  <select className="bg-white border border-gray-300 rounded px-3 py-1 text-black focus:outline-none focus:ring-1 focus:ring-red-500">
                    <option>ENGLISH</option>
                    <option>INDONESIA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/imploracosmetics" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400 transition-colors">
                    Instagram
                  </a>
                  <a href="mailto:info@implora.com" className="text-gray-600 hover:text-black transition-colors">
                    Email
                  </a>
                  <a href="tel:0215731009" className="text-gray-600 hover:text-black transition-colors">
                    Phone
                  </a>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} Implora Beauty. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}