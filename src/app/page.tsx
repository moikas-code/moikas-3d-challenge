import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Moikas 3D Modeling Challenge
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-jade-300 font-semibold">
            Master 3D Design Step by Step
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            52 self-paced steps to go from total beginner to creating functional, beautiful 3D-printable designs.<br />
            Free forever • No signup • Works with TinkerCAD, Blender, or any tool.
          </p>
          <Link
            href="/challenge"
            className="inline-block bg-jade-500 hover:bg-jade-600 text-jade font-bold py-4 px-8 rounded-lg text-xl transition"
          >
            Start the Challenge Now
          </Link>
          <p className="mt-8 text-lg">
            Support our Workshop →{" "}
            <a href="https://moikas.com" className="underline hover:text-jade-300">
              Our Store
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Challenge Structure</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold mb-2">Steps 1-10: Basics</h3>
              <p>Learn fundamental tools and navigation in your 3D software.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔲</div>
              <h3 className="text-xl font-semibold mb-2">Steps 11-25: Shapes</h3>
              <p>Create basic geometric shapes and combine them creatively.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Steps 26-40: Structures</h3>
              <p>Build complex assemblies and functional designs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🖨️</div>
              <h3 className="text-xl font-semibold mb-2">Steps 41-52: Optimization</h3>
              <p>Prepare designs for 3D printing and advanced techniques.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why This Challenge Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-semibold">Progressive Skills</h3>
            <p>Each step builds directly on the previous—no gaps.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">⏳</div>
            <h3 className="text-xl font-semibold">Self-Paced</h3>
            <p>Do one step a day or ten in a weekend. Your speed.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🖨️</div>
            <h3 className="text-xl font-semibold">Print-Ready Focus</h3>
            <p>Every design is meant to be 3D printed and tested.</p>
          </div>
        </div>
      </section>
    </main>
  );
}