// src/pages/Home.tsx
import React from "react";
import { features } from "../data";

const grouped = features.reduce((acc, feature) => {
  if (!acc[feature.category]) acc[feature.category] = [];
  acc[feature.category].push(feature);
  return acc;
}, {} as Record<string, typeof features>);

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-6 py-16">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
          🚀 Explore Top Tools of 2025
        </h1>

        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="mb-20">
            <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
              🔥 {category}
            </h2>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {items.map((f) => (
                <div
                  key={f.id}
                  className="bg-white rounded-3xl shadow-lg border border-gray-200 group hover:shadow-2xl transition duration-300"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-center mb-6">
                      <img
                        src={f.image}
                        alt={`${f.title} logo`}
                        className="w-24 h-24 object-contain transition-transform group-hover:scale-110"
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-indigo-600 text-center mb-2">
                      {f.title}
                    </h3>

                    <p className="text-gray-600 text-center text-sm mb-6">
                      {f.description}
                    </p>

                    <div className="text-center mt-auto">
                      <a
                        href={f.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
                      >
                        Visit Site
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
