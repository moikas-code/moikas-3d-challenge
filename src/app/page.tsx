import Link from "next/link";

export default function Home() {
   return (
     <main className="min-h-screen">
       <section className="bg-gradient-to-r from-jade-500 to-jade-600 text-black py-20 px-6">
         <div className="max-w-4xl mx-auto text-center">
           <h1 className="text-4xl md:text-5xl font-bold mb-6">
             Moikas 3D Modeling Challenge
           </h1>
           <p className="text-xl md:text-2xl mb-8 text-jade-100 font-medium">
             52 Steps from Beginner to Professional 3D Designer
           </p>
           <p className="text-lg md:text-xl mb-10 text-black max-w-3xl mx-auto leading-relaxed">
             Master 3D design through our comprehensive 4-phase learning journey.
             From basic primitives to professional portfolio pieces—all completely free.
           </p>
           <Link
             href="/challenge"
             className="inline-block bg-white text-jade-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-xl transition-colors duration-200 shadow-lg"
           >
             Start Your Journey
           </Link>
           <p className="mt-8 text-base text-jade-100">
             Free forever • No signup required • Works with any 3D software
           </p>
         </div>
       </section>

       <section className="py-16 px-6 bg-gray-50">
         <div className="max-w-5xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold mb-4">4-Phase Learning Journey</h2>
             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
               Our structured approach takes you from complete beginner to professional 3D designer through four distinct phases of skill development.
             </p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-jade-500">
               <div className="text-4xl mb-4">🎯</div>
               <h3 className="text-xl font-semibold mb-2 text-jade-700">Phase 1: Foundation</h3>
               <p className="text-gray-600 mb-3">Steps 1-15 • Tinkercad</p>
               <p className="text-sm">Master 3D basics, navigation, and fundamental design concepts.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-jade-500">
               <div className="text-4xl mb-4">⚙️</div>
               <h3 className="text-xl font-semibold mb-2 text-jade-700">Phase 2: CAD Mastery</h3>
               <p className="text-gray-600 mb-3">Steps 16-25 • FreeCAD</p>
               <p className="text-sm">Learn parametric design, assemblies, and professional CAD workflows.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-jade-500">
               <div className="text-4xl mb-4">🎨</div>
               <h3 className="text-xl font-semibold mb-2 text-jade-700">Phase 3: Technical Skills</h3>
               <p className="text-gray-600 mb-3">Steps 26-45 • Blender</p>
               <p className="text-sm">Advanced modeling, texturing, animation, and rendering techniques.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-jade-500">
               <div className="text-4xl mb-4">🚀</div>
               <h3 className="text-xl font-semibold mb-2 text-jade-700">Phase 4: Professional</h3>
               <p className="text-gray-600 mb-3">Steps 46-52 • Portfolio</p>
               <p className="text-sm">Business skills, portfolio development, and career advancement.</p>
             </div>
           </div>
         </div>
       </section>

       <section className="py-16 px-6 bg-white">
         <div className="max-w-5xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-12">Why This Challenge Works</h2>
           <div className="grid md:grid-cols-3 gap-8 mb-12">
             <div className="text-center">
               <div className="text-5xl mb-4">📚</div>
               <h3 className="text-xl font-semibold text-jade-700 mb-3">Structured Learning Path</h3>
               <p className="text-gray-600">Four distinct phases build progressively from basics to professional mastery.</p>
             </div>
             <div className="text-center">
               <div className="text-5xl mb-4">🎯</div>
               <h3 className="text-xl font-semibold text-jade-700 mb-3">Practical Focus</h3>
               <p className="text-gray-600">Every step creates real, usable 3D designs you can print and share.</p>
             </div>
             <div className="text-center">
               <div className="text-5xl mb-4">🛠️</div>
               <h3 className="text-xl font-semibold text-jade-700 mb-3">Tool Flexibility</h3>
               <p className="text-gray-600">Use any 3D software you prefer—Tinkercad, FreeCAD, Fusion 360, or Blender.</p>
             </div>
           </div>
         </div>
       </section>

       <section className="py-16 px-6 bg-gradient-to-r from-jade-500 to-jade-600 text-black">
         <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl font-bold mb-6">Ready to Start Your 3D Journey?</h2>
           <p className="text-xl mb-8 text-jade-100">
             Join thousands of makers who've transformed their skills through our comprehensive challenge.
           </p>
           <Link
             href="/challenge"
             className="inline-block bg-white text-jade-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-xl transition-colors duration-200 shadow-lg mb-8"
           >
             Begin the Challenge
           </Link>
         </div>
       </section>
     </main>
   );
 }