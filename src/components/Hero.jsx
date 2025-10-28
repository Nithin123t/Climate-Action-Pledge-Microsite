import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 text-white bg-gradient-to-r from-emerald-600 to-sky-600">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')]"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          Take the Climate Action Pledge
        </h1>
        <p className="mt-6 text-lg md:w-2/3 mx-auto opacity-90">
          Together, we can create a greener, cleaner tomorrow.
        </p>
        <a
          href="#pledge"
          className="inline-block mt-8 bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-emerald-100 transition"
        >
          Take the Pledge
        </a>
      </div>
    </section>
  );
}
