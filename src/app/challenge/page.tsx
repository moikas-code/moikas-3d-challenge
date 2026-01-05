'use client';

import { useState, useEffect } from "react";

interface Step {
  number: number;
  skill: string;
  task: string;
  buildOn: string;
}

const steps: Step[] = [
  { number: 1, skill: "Basic Primitives", task: "Model a simple cube with rounded edges (e.g., a dice). Add measurements for scale.", buildOn: "Starts from zero: Learn to place and resize basic shapes like cubes, spheres." },
  { number: 2, skill: "Alignment & Grouping", task: "Create a basic shelf bracket by aligning and grouping rectangles and cylinders.", buildOn: "Builds on Step 1: Use primitives but now position them precisely together." },
  { number: 3, skill: "Subtraction (Holes)", task: "Design a phone stand with cutouts for cables—subtract cylinders from a base shape.", buildOn: "Builds on Step 2: Grouped shapes, now remove material for functionality." },
  { number: 4, skill: "Addition & Union", task: "Build a keychain by unioning a ring (cylinder hole) with a custom shape like a star.", buildOn: "Builds on Step 3: Combine addition with subtraction for more complex forms." },
  { number: 5, skill: "Text Integration", task: "Add embossed text to a nameplate (e.g., \"Shalom's Desk\").", buildOn: "Builds on Step 4: Union text as shapes onto existing models." },
  { number: 6, skill: "Simple Symmetry", task: "Model a symmetric vase using mirror tools on half a shape.", buildOn: "Builds on Step 5: Apply symmetry to grouped/textured basics for efficiency." },
  { number: 7, skill: "Basic Scaling & Proportions", task: "Create a scaled-down toy car body, ensuring wheels fit proportionally.", buildOn: "Builds on Step 6: Symmetric shapes, now adjust sizes for real-world fit." },
  { number: 8, skill: "Multi-Part Assemblies", task: "Design a simple puzzle piece that interlocks with another (print two and test).", buildOn: "Builds on Step 7: Proportional parts that assemble post-print." },
  { number: 9, skill: "Curves & Beziers", task: "Model a curved handle for a mug or tool using bezier paths.", buildOn: "Builds on Step 8: Add smooth curves to multi-part designs." },
  { number: 10, skill: "Basic Textures (Emboss/Deboss)", task: "Create a coaster with debossed patterns (e.g., geometric indents).", buildOn: "Builds on Step 9: Apply curve-based details for aesthetic appeal." },
  { number: 11, skill: "Simple Supports & Overhangs", task: "Design a bridge-like structure with built-in supports (removable post-print).", buildOn: "Builds on Step 10: Textured models, now optimize for printing challenges." },
  { number: 12, skill: "Color Separation (Multi-Material)", task: "Model a two-color key fob (design parts for filament swaps).", buildOn: "Builds on Step 11: Supported structures, now plan for your PLA Matte Black/Jade White." },
  { number: 13, skill: "Remix Basics", task: "Remix Step 1's dice into a functional holder (e.g., for pens).", buildOn: "Combines all prior skills for a polished, useful item." },
  { number: 14, skill: "Mesh Editing (Intro to Blender)", task: "Import a TinkerCAD model into Blender and smooth edges.", buildOn: "Builds on Step 13: Transition to Blender for finer control over meshes." },
  { number: 15, skill: "Boolean Operations", task: "Use Blender booleans to create a hollow sphere with windows.", buildOn: "Builds on Step 14: Advanced subtraction/addition on meshes." },
  { number: 16, skill: "UV Mapping Basics", task: "Add simple surface details (e.g., engraved lines) to a box.", buildOn: "Builds on Step 15: Boolean models, now prep for print-friendly \"textures.\"" },
  { number: 17, skill: "Subdivision Surfaces", task: "Model a smooth organic shape like an apple.", buildOn: "Builds on Step 16: Detailed surfaces, now subdivide for curves without high poly count." },
  { number: 18, skill: "Armatures (Basic Rigging)", task: "Create a posable figure arm (for Dummy 13 inspiration—simple joints).", buildOn: "Builds on Step 17: Organic shapes, now add movable parts for functionality." },
  { number: 19, skill: "Modifiers Stack", task: "Apply array modifier to make a repeating pattern (e.g., chain links).", buildOn: "Builds on Step 18: Rigged parts, now duplicate efficiently." },
  { number: 20, skill: "Lattice Deformation", task: "Deform a basic shape into something wavy (e.g., flexible phone grip).", buildOn: "Builds on Step 19: Modified arrays, now warp for unique forms." },
  { number: 21, skill: "Particle Systems (Simple)", task: "Simulate scattered details on a base (e.g., studs on a plate).", buildOn: "Builds on Step 20: Deformed shapes, now add randomized elements." },
  { number: 22, skill: "Curve Modeling Advanced", task: "Design a coiled spring or cable organizer.", buildOn: "Builds on Step 21: Particles on curves for functional twists." },
  { number: 23, skill: "Topology Optimization", task: "Clean up a model's topology for better printing (reduce tris).", buildOn: "Builds on Step 22: Complex curves, now ensure manifold meshes." },
  { number: 24, skill: "Multi-View Modeling", task: "Create a tool holder viewed from orthographic angles.", buildOn: "Builds on Step 23: Optimized topology, now model accurately from blueprints." },
  { number: 25, skill: "Basic Animation (For Preview)", task: "Animate a simple assembly (e.g., lid opening) for YouTube demo.", buildOn: "Builds on Step 24: Multi-view models, leverage your Blender video skills." },
  { number: 26, skill: "Intermediate Remix", task: "Remix Step 13's holder into a modular system (e.g., stackable).", buildOn: "Combines intermediate skills: Functional, printable set." },
  { number: 27, skill: "Functional Mechanisms", task: "Model a basic hinge (e.g., for a box lid).", buildOn: "Builds on Step 26: Modular parts, now add moving mechanisms." },
  { number: 28, skill: "Snap-Fit Joints", task: "Design interlocking clips for assembly (no glue).", buildOn: "Builds on Step 27: Hinges, now friction-based connections." },
  { number: 29, skill: "Threaded Parts", task: "Create a screw-cap bottle (printable threads).", buildOn: "Builds on Step 28: Joints, now helical for secure fits." },
  { number: 30, skill: "Gears & Cogs", task: "Model a simple gear set (test rotation).", buildOn: "Builds on Step 29: Threaded motion, now interlocking rotation." },
  { number: 31, skill: "Flexible Materials Sim", task: "Design a bendable part (e.g., phone case flap) for PETG.", buildOn: "Builds on Step 30: Gears, now consider material properties." },
  { number: 32, skill: "Ergonomics", task: "Model a handle grip shaped for hand comfort.", buildOn: "Builds on Step 31: Flexible designs, now user-centered." },
  { number: 33, skill: "Structural Strength", task: "Reinforce a thin model with ribs/internal supports.", buildOn: "Builds on Step 32: Ergonomic shapes, now durable." },
  { number: 34, skill: "Heat Resistance (Design)", task: "Create a coaster with air gaps for insulation (PETG-friendly).", buildOn: "Builds on Step 33: Strong structures, now functional for heat." },
  { number: 35, skill: "Water-Tight Designs", task: "Model a vase or cup that's fully sealed.", buildOn: "Builds on Step 34: Insulated, now leak-proof." },
  { number: 36, skill: "Modular Systems Advanced", task: "Design a customizable Dummy 13 armor piece (scalable).", buildOn: "Builds on Step 35: Sealed models, now interchangeable parts." },
  { number: 37, skill: "Organic Sculpting", task: "Sculpt a detailed figure face (Blender sculpt mode).", buildOn: "Builds on Step 36: Modular, now artistic details." },
  { number: 38, skill: "High-Poly to Low-Poly", task: "Bake details from high-poly sculpt to low-poly printable mesh.", buildOn: "Builds on Step 37: Sculpted organics, now optimize for print time." },
  { number: 39, skill: "Advanced Remix", task: "Remix Step 26's modular into a full functional toy (e.g., posable Dummy 13).", buildOn: "Combines advanced skills: Strong, detailed item." },
  { number: 40, skill: "Aesthetic Detailing", task: "Add filigree patterns to decor (e.g., wall hook).", buildOn: "Builds on Step 39: Remixed toys, now beauty-focused." },
  { number: 41, skill: "Color Blending (Design)", task: "Model for multi-filament prints (e.g., gradient effect).", buildOn: "Builds on Step 40: Detailed aesthetics, now color planning." },
  { number: 42, skill: "Lighting Simulation", task: "Preview model shading in Blender for realistic appeal.", buildOn: "Builds on Step 41: Colored designs, now visual polish." },
  { number: 43, skill: "Custom Textures", task: "Create bump maps for surface realism (printable as geometry).", buildOn: "Builds on Step 42: Lit models, now tactile details." },
  { number: 44, skill: "Parametric Design", task: "Use Blender geometry nodes for adjustable parameters (e.g., size-variant holder).", buildOn: "Builds on Step 43: Textured, now scriptable—tap your Python skills." },
  { number: 45, skill: "AI-Assisted Modeling", task: "Generate base shapes with Midjourney, import/refine in Blender.", buildOn: "Builds on Step 44: Parametric, now integrate AI for ideas." },
  { number: 46, skill: "Community Remix", task: "Find a free model online, remix it legally for print (add functionality).", buildOn: "Builds on Step 45: AI bases, now collaborative ethics." },
  { number: 47, skill: "Market-Ready Optimization", task: "Reduce material use in a design while keeping strength.", buildOn: "Builds on Step 46: Remixed, now cost-effective for sales." },
  { number: 48, skill: "Packaging Design", task: "Model a custom stand or holder for displaying prints.", buildOn: "Builds on Step 47: Optimized, now presentation for Etsy/Shopify." },
  { number: 49, skill: "Series Creation", task: "Design a themed set (e.g., Dummy 13 skins variants).", buildOn: "Builds on Step 48: Packaged, now product lines." },
  { number: 50, skill: "User Feedback Integration", task: "Iterate a past model based on hypothetical feedback (e.g., make sturdier).", buildOn: "Builds on Step 49: Series, now refinement loop." },
  { number: 51, skill: "Full Prototype", task: "Create a complete sellable item (functional + aesthetic, e.g., custom tool).", buildOn: "Builds on Step 50: Iterated, now business-ready." },
  { number: 52, skill: "Capstone Portfolio", task: "Remix your favorite step into a premium version; compile highlights into a showcase.", buildOn: "Builds on everything: Polished portfolio ready for Etsy/Shopify sales." }
];

export default function Challenge() {
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("progressive3dProgress");
    if (saved) {
      setChecked(JSON.parse(saved));
    } else {
      setChecked(new Array(steps.length).fill(false));
    }
  }, []);

  const toggle = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
    localStorage.setItem("progressive3dProgress", JSON.stringify(newChecked));
  };

  const completed = checked.filter(Boolean).length;

  return (
    <main className="min-h-screen py-12 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Moikas 3D Modeling Challenge
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        {completed} of {steps.length} steps completed — keep going at your own pace!
      </p>

      <div className="overflow-x-auto shadow-2xl rounded-xl border border-gray-200 bg-white">
        <table className="w-full table-auto bg-white divide-y divide-gray-200 min-w-[800px]">
          <thead className="bg-gradient-to-r from-jade-500 to-jade-600 text-white sticky top-0">
            <tr>
              <th className="px-3 py-4 text-left font-semibold min-w-[80px]">Done</th>
              <th className="px-3 py-4 text-left font-semibold min-w-[70px]">Step</th>
              <th className="px-3 py-4 text-left font-semibold min-w-[150px]">Core Skill</th>
              <th className="px-3 py-4 text-left font-semibold min-w-[250px]">Task</th>
              <th className="px-3 py-4 text-left font-semibold min-w-[250px]">Builds On</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((step, i) => (
              <tr key={i} className={`${checked[i] ? "bg-jade-50 border-l-4 border-jade-500" : "even:bg-gray-50"} hover:bg-gray-100 transition-colors duration-200`}>
                <td className="px-3 py-4 text-center">
                  <input
                    type="checkbox"
                    checked={checked[i] || false}
                    onChange={() => toggle(i)}
                    className="w-5 h-5 accent-jade-600 cursor-pointer"
                  />
                </td>
                <td className="px-3 py-4 font-semibold text-jade-700">Step {step.number}</td>
                <td className="px-3 py-4 font-medium">{step.skill}</td>
                <td className="px-3 py-4">{step.task}</td>
                <td className="px-3 py-4 text-gray-600 text-sm">{step.buildOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg mb-6">
          Need models to practice with? Grab my Dummy 13 base + armor packs!
        </p>
        <a
          href="https://moikas.com"
          className="inline-block bg-jade-500 hover:bg-jade-600 text-black font-bold py-3 px-6 rounded-lg"
        >
          Buy Here
        </a>
      </div>
    </main>
  );
}