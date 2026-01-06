'use client';

import { useState, useEffect } from "react";

interface Step {
   number: number;
   skill: string;
   task: string;
   buildOn: string;
   difficulty: {
     complexity: number;
     scope: number;
   };
   description: string;
   learningObjectives: string[];
   estimatedTime?: string;
}

const steps: Step[] = [
   // Phase 1: Tinkercad Foundation (Steps 1-15)
   {
     number: 1,
     skill: "Basic Primitives",
     task: "Model a simple cube with rounded edges (e.g., a dice). Add measurements for scale.",
     buildOn: "Starts from zero: Learn to place and resize basic shapes like cubes, spheres.",
     difficulty: { complexity: 1, scope: 1 },
     description: "Begin your 3D modeling journey with Tinkercad's fundamental building blocks. Understanding primitives is essential for all future modeling work.",
     learningObjectives: ["Tinkercad interface navigation", "Basic shape creation and manipulation", "Scale and measurement tools", "STL export for 3D printing"],
     estimatedTime: "1-2 hours"
   },
   {
     number: 2,
     skill: "Alignment & Grouping",
     task: "Create a basic shelf bracket by aligning and grouping rectangles and cylinders.",
     buildOn: "Builds on Step 1: Use primitives but now position them precisely together.",
     difficulty: { complexity: 1, scope: 1 },
     description: "Learn precision placement and how to combine multiple objects into cohesive designs using Tinkercad's alignment tools.",
     learningObjectives: ["Object alignment and positioning", "Grouping and ungrouping objects", "Ruler and measurement precision", "Multi-part design concepts"],
     estimatedTime: "2-3 hours"
   },
   {
     number: 3,
     skill: "Subtraction (Holes)",
     task: "Design a phone stand with cutouts for cables—subtract cylinders from a base shape.",
     buildOn: "Builds on Step 2: Grouped shapes, now remove material for functionality.",
     difficulty: { complexity: 2, scope: 1 },
     description: "Master the art of creating functional designs by removing material. This is crucial for creating usable 3D printed objects.",
     learningObjectives: ["Hole creation and subtraction", "Negative space design principles", "Functional 3D printing concepts", "Material removal techniques"],
     estimatedTime: "3-4 hours"
   },
   {
     number: 4,
     skill: "Addition & Union",
     task: "Build a keychain by unioning a ring (cylinder hole) with a custom shape like a star.",
     buildOn: "Builds on Step 3: Combine addition with subtraction for more complex forms.",
     difficulty: { complexity: 2, scope: 2 },
     description: "Combine multiple operations to create complex, unified objects. Learn how addition and subtraction work together in Tinkercad.",
     learningObjectives: ["Shape combination techniques", "Union operations", "Complex form creation", "Design hierarchy management"],
     estimatedTime: "4-5 hours"
   },
   {
     number: 5,
     skill: "Text Integration",
     task: "Add embossed text to a nameplate (e.g., \"Shalom's Desk\").",
     buildOn: "Builds on Step 4: Union text as shapes onto existing models.",
     difficulty: { complexity: 2, scope: 1 },
     description: "Incorporate text into your 3D designs, learning about typography in 3D space and embossing techniques.",
     learningObjectives: ["Text shape creation", "Embossing and debossing", "Font selection and sizing", "Text layout and positioning"],
     estimatedTime: "3-4 hours"
   },
   {
     number: 6,
     skill: "Simple Symmetry",
     task: "Model a symmetric vase using mirror tools on half a shape.",
     buildOn: "Builds on Step 5: Symmetric shapes, now apply symmetry to grouped/textured basics for efficiency.",
     difficulty: { complexity: 2, scope: 2 },
     description: "Discover the power of symmetry tools to create balanced, aesthetically pleasing designs with less work.",
     learningObjectives: ["Mirror tool usage", "Half-modeling techniques", "Symmetry principles", "Efficiency in design workflow"],
     estimatedTime: "4-5 hours"
   },
   {
     number: 7,
     skill: "Basic Scaling & Proportions",
     task: "Create a scaled-down toy car body, ensuring wheels fit proportionally.",
     buildOn: "Builds on Step 6: Symmetric shapes, now adjust sizes for real-world fit.",
     difficulty: { complexity: 2, scope: 2 },
     description: "Learn the importance of scale and proportion in creating realistic and functional designs.",
     learningObjectives: ["Scale and proportion relationships", "Real-world measurement conversion", "Assembly fit considerations", "Proportional design principles"],
     estimatedTime: "5-6 hours"
   },
   {
     number: 8,
     skill: "Multi-Part Assemblies",
     task: "Design a simple puzzle piece that interlocks with another (print two and test).",
     buildOn: "Builds on Step 7: Proportional parts that assemble post-print.",
     difficulty: { complexity: 3, scope: 2 },
     description: "Create designs that come apart and go back together, introducing the challenges of multi-part 3D printing.",
     learningObjectives: ["Assembly design principles", "Tolerance and fit testing", "Multi-part printing techniques", "Interlocking mechanism design"],
     estimatedTime: "6-8 hours"
   },
   {
     number: 9,
     skill: "Curves & Basic Shapes",
     task: "Model a curved handle for a mug or tool using Tinkercad's shape tools.",
     buildOn: "Builds on Step 8: Add smooth curves to multi-part designs.",
     difficulty: { complexity: 3, scope: 2 },
     description: "Master the creation of smooth curves using Tinkercad's available tools and shape manipulation.",
     learningObjectives: ["Curve creation techniques", "Shape manipulation for curves", "Handle design principles", "Organic form approximation"],
     estimatedTime: "6-8 hours"
   },
   {
     number: 10,
     skill: "Basic Patterns & Textures",
     task: "Create a coaster with debossed patterns using Tinkercad shapes.",
     buildOn: "Builds on Step 9: Apply pattern-based details for aesthetic appeal.",
     difficulty: { complexity: 2, scope: 2 },
     description: "Add surface detail through pattern creation techniques to enhance visual and tactile appeal.",
     learningObjectives: ["Pattern design creation", "Surface detailing methods", "Aesthetic enhancement", "Repetitive design techniques"],
     estimatedTime: "4-6 hours"
   },
   {
     number: 11,
     skill: "Supports & Structural Design",
     task: "Design a bridge-like structure with built-in supports.",
     buildOn: "Builds on Step 10: Patterned models, now optimize for printing challenges.",
     difficulty: { complexity: 3, scope: 2 },
     description: "Learn about structural integrity and how to design for successful 3D prints.",
     learningObjectives: ["Structural design principles", "Support structure concepts", "Load-bearing considerations", "Print optimization basics"],
     estimatedTime: "6-8 hours"
   },
   {
     number: 12,
     skill: "Color Planning (Design)",
     task: "Model a two-color key fob (design parts for conceptual separation).",
     buildOn: "Builds on Step 11: Structural designs, now plan for multi-material concepts.",
     difficulty: { complexity: 3, scope: 3 },
     description: "Learn to design with multiple colors in mind, planning for future multi-material printing capabilities.",
     learningObjectives: ["Color separation planning", "Multi-part color design", "Material change considerations", "Advanced printing concepts"],
     estimatedTime: "8-10 hours"
   },
   {
     number: 13,
     skill: "Remix & Iteration",
     task: "Remix Step 1's dice into a functional holder (e.g., for pens).",
     buildOn: "Combines all prior skills for a polished, useful item.",
     difficulty: { complexity: 3, scope: 3 },
     description: "Apply your accumulated skills to modify and improve existing designs, creating something new and functional.",
     learningObjectives: ["Design iteration processes", "Functional adaptation techniques", "Remixing methodologies", "Creative problem-solving"],
     estimatedTime: "8-12 hours"
   },
   {
     number: 14,
     skill: "Complex Assemblies",
     task: "Design a multi-piece assembly like a simple toy or gadget.",
     buildOn: "Builds on Step 13: Iterative designs, now create complex multi-part items.",
     difficulty: { complexity: 3, scope: 4 },
     description: "Master the creation of complex assemblies that require multiple printed parts working together.",
     learningObjectives: ["Advanced assembly design", "Part interaction planning", "Complex mechanism concepts", "System-level design thinking"],
     estimatedTime: "10-15 hours"
   },
   {
     number: 15,
     skill: "Tinkercad Mastery Project",
     task: "Create a complete functional item (e.g., phone stand, desk organizer, or custom tool).",
     buildOn: "Combines Steps 1-14: Comprehensive Tinkercad skill application.",
     difficulty: { complexity: 3, scope: 4 },
     description: "Demonstrate mastery of Tinkercad by creating a complete, functional 3D printed item from concept to finished design.",
     learningObjectives: ["Complete design workflow", "Project planning and execution", "Quality assurance techniques", "Portfolio-worthy creation"],
     estimatedTime: "12-18 hours"
    },

    // Phase 2: FreeCAD Intermediate (Steps 16-25)
    {
      number: 16,
      skill: "Parametric Modeling Intro",
      task: "Recreate your Tinkercad designs using FreeCAD's sketch-based parametric approach.",
      buildOn: "Transition from Tinkercad: Learn professional parametric design workflows.",
      difficulty: { complexity: 4, scope: 2 },
      description: "Make the transition to professional CAD software by learning parametric modeling with FreeCAD (free, open-source alternative to commercial CAD).",
      learningObjectives: ["FreeCAD interface navigation", "Sketch-based modeling", "Parametric constraints", "Professional CAD workflows"],
      estimatedTime: "8-12 hours"
    },
    {
      number: 17,
      skill: "Advanced Sketching",
      task: "Create complex sketches with proper constraints and dimensions.",
      buildOn: "Builds on Step 16: Parametric basics, now master sketch creation.",
      difficulty: { complexity: 4, scope: 3 },
      description: "Master the art of creating precise, fully-constrained sketches that form the foundation of parametric models in FreeCAD.",
      learningObjectives: ["Advanced sketching techniques", "Geometric constraints", "Dimensioning best practices", "Sketch validation"],
      estimatedTime: "10-15 hours"
    },
    {
      number: 18,
      skill: "Feature-Based Modeling",
      task: "Build complex parts using extrusions, revolutions, and feature operations.",
      buildOn: "Builds on Step 17: Constrained sketches, now create 3D features.",
      difficulty: { complexity: 4, scope: 3 },
      description: "Learn to build sophisticated 3D models using FreeCAD's feature-based parametric approach.",
      learningObjectives: ["Extrusion and revolution features", "Feature editing and modification", "Design history management", "Parametric relationships"],
      estimatedTime: "12-18 hours"
    },
    {
      number: 19,
      skill: "Assembly Design",
      task: "Create multi-part assemblies with proper constraints and joints.",
      buildOn: "Builds on Step 18: Individual features, now combine into assemblies.",
      difficulty: { complexity: 4, scope: 4 },
      description: "Master the creation of complex assemblies where multiple parts interact through precise constraints in FreeCAD.",
      learningObjectives: ["Assembly creation techniques", "Constraint and joint application", "Assembly motion simulation", "Interference checking"],
      estimatedTime: "15-20 hours"
    },
    {
      number: 20,
      skill: "Advanced Operations",
      task: "Use lofts, sweeps, and advanced boolean operations for complex shapes.",
      buildOn: "Builds on Step 19: Basic assemblies, now create organic and complex forms.",
      difficulty: { complexity: 4, scope: 4 },
      description: "Explore advanced modeling operations in FreeCAD to create complex, organic shapes that go beyond basic primitives.",
      learningObjectives: ["Loft and sweep operations", "Advanced boolean techniques", "Complex curve creation", "Surface modeling basics"],
      estimatedTime: "18-25 hours"
    },
    {
      number: 21,
      skill: "Sheet Metal Workbench",
      task: "Design sheet metal parts with bends, flanges, and manufacturing considerations.",
      buildOn: "Builds on Step 20: Complex operations, now design for metal fabrication.",
      difficulty: { complexity: 4, scope: 4 },
      description: "Learn to design parts for sheet metal manufacturing using FreeCAD's Sheet Metal workbench, including bend allowances and fabrication constraints.",
      learningObjectives: ["Sheet metal workbench usage", "Bend and flange creation", "Manufacturing constraints", "Flat pattern generation"],
      estimatedTime: "20-25 hours"
    },
    {
      number: 22,
      skill: "Injection Mold Design",
      task: "Design parts for injection molding with draft angles and parting lines.",
      buildOn: "Builds on Step 21: Metal design, now plastic manufacturing processes.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Master the design considerations for injection-molded plastic parts, including manufacturability and cost optimization in FreeCAD.",
      learningObjectives: ["Draft angle application", "Parting line design", "Ribs and bosses", "Mold design principles"],
      estimatedTime: "22-28 hours"
    },
    {
      number: 23,
      skill: "GD&T & Tolerancing",
      task: "Apply geometric dimensioning and tolerancing to your designs.",
      buildOn: "Builds on Step 22: Manufacturing design, now precision specification.",
      difficulty: { complexity: 5, scope: 3 },
      description: "Learn professional tolerancing methods to ensure your designs can be manufactured consistently and cost-effectively.",
      learningObjectives: ["GD&T symbol application", "Tolerance stack analysis", "Precision specification", "Manufacturing communication"],
      estimatedTime: "20-25 hours"
    },
    {
      number: 24,
      skill: "Design for Manufacturing",
      task: "Optimize designs for CNC machining, 3D printing, and injection molding.",
      buildOn: "Builds on Step 23: Tolerancing, now optimize for multiple manufacturing processes.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Develop expertise in optimizing designs for various manufacturing processes while maintaining functionality and cost efficiency.",
      learningObjectives: ["DFM principles", "Process-specific optimization", "Cost-benefit analysis", "Material selection guidance"],
      estimatedTime: "25-30 hours"
    },
    {
      number: 25,
      skill: "FreeCAD Professional Project",
      task: "Design a complete product with multiple parts, assembly, and manufacturing documentation.",
      buildOn: "Combines Steps 16-24: Comprehensive parametric design mastery.",
      difficulty: { complexity: 5, scope: 5 },
      description: "Demonstrate professional CAD proficiency by designing a complete product ready for manufacturing using FreeCAD.",
      learningObjectives: ["Complete product design", "Manufacturing documentation", "Design validation", "Professional presentation"],
      estimatedTime: "30-40 hours"
    },

    // Phase 3: Blender Technical Mastery (Steps 26-45)
    {
      number: 26,
      skill: "Blender Fundamentals",
      task: "Learn Blender's interface and basic mesh editing tools.",
      buildOn: "Transition from FreeCAD: Adapt parametric knowledge to mesh-based modeling.",
      difficulty: { complexity: 4, scope: 2 },
      description: "Master Blender's unique interface and workflow to unlock powerful mesh modeling capabilities.",
      learningObjectives: ["Blender interface mastery", "Basic mesh editing", "Navigation and selection", "Workflow adaptation"],
      estimatedTime: "15-20 hours"
    },
    {
      number: 27,
      skill: "Advanced Mesh Editing",
      task: "Use Blender's mesh tools to create and modify complex geometry.",
      buildOn: "Builds on Step 26: Interface basics, now advanced mesh manipulation.",
      difficulty: { complexity: 4, scope: 3 },
      description: "Develop expertise in Blender's mesh editing tools for creating detailed, precise geometry.",
      learningObjectives: ["Advanced mesh operations", "Topology optimization", "Edge flow management", "Precision modeling techniques"],
      estimatedTime: "18-25 hours"
    },
    {
      number: 28,
      skill: "UV Mapping & Texturing",
      task: "Create UV maps and apply textures to your 3D models.",
      buildOn: "Builds on Step 27: Mesh editing, now add surface detail and materials.",
      difficulty: { complexity: 4, scope: 3 },
      description: "Learn professional texturing workflows to add realistic surface detail to your models.",
      learningObjectives: ["UV unwrapping techniques", "Texture creation and application", "Material setup", "PBR texturing"],
      estimatedTime: "20-25 hours"
    },
    {
      number: 29,
      skill: "Lighting & Rendering",
      task: "Set up professional lighting and render high-quality images.",
      buildOn: "Builds on Step 28: Textured models, now create professional presentations.",
      difficulty: { complexity: 4, scope: 3 },
      description: "Master the art of lighting and rendering to create stunning visual presentations of your 3D work.",
      learningObjectives: ["Lighting setup techniques", "Render engine mastery", "Post-processing", "Composition and presentation"],
      estimatedTime: "22-28 hours"
    },
    {
      number: 30,
      skill: "Character Modeling",
      task: "Model a detailed character or figure using Blender's tools.",
      buildOn: "Builds on Step 29: Rendering basics, now create organic character forms.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Develop character modeling skills to create expressive, anatomically correct figures.",
      learningObjectives: ["Character proportions", "Anatomy understanding", "Facial modeling", "Pose and expression"],
      estimatedTime: "25-35 hours"
    },
    {
      number: 31,
      skill: "Rigging & Animation",
      task: "Create rigs and animate your 3D models.",
      buildOn: "Builds on Step 30: Static characters, now bring them to life with movement.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Learn professional rigging and animation techniques to create dynamic, moving 3D content.",
      learningObjectives: ["Rigging fundamentals", "Animation principles", "Keyframe animation", "Motion studies"],
      estimatedTime: "28-35 hours"
    },
    {
      number: 32,
      skill: "Hard Surface Modeling",
      task: "Model mechanical and architectural objects with precision.",
      buildOn: "Builds on Step 31: Organic forms, now master hard surface techniques.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Develop expertise in modeling mechanical, architectural, and industrial objects with technical precision.",
      learningObjectives: ["Hard surface techniques", "Precision modeling", "Industrial design", "Technical accuracy"],
      estimatedTime: "25-30 hours"
    },
    {
      number: 33,
      skill: "Procedural Modeling",
      task: "Use modifiers and procedural techniques for efficient modeling.",
      buildOn: "Builds on Step 32: Manual modeling, now leverage automation and efficiency.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Master Blender's procedural tools and modifiers to create complex models efficiently.",
      learningObjectives: ["Modifier stack mastery", "Procedural generation", "Efficiency techniques", "Complex pattern creation"],
      estimatedTime: "20-28 hours"
    },
    {
      number: 34,
      skill: "Sculpting Fundamentals",
      task: "Learn digital sculpting with Blender's sculpt mode.",
      buildOn: "Builds on Step 33: Procedural techniques, now organic sculpting.",
      difficulty: { complexity: 4, scope: 4 },
      description: "Discover the power of digital sculpting to create highly detailed organic forms.",
      learningObjectives: ["Sculpt mode navigation", "Brush techniques", "Detail creation", "Sculpting workflow"],
      estimatedTime: "22-30 hours"
    },
    {
      number: 35,
      skill: "Advanced Sculpting",
      task: "Create highly detailed sculptures with advanced techniques.",
      buildOn: "Builds on Step 34: Basic sculpting, now professional-level detail work.",
      difficulty: { complexity: 5, scope: 5 },
      description: "Push the boundaries of digital sculpting to create production-ready detailed models.",
      learningObjectives: ["Advanced brush control", "Detail refinement", "Sculpting best practices", "High-resolution workflows"],
      estimatedTime: "30-40 hours"
    },
    {
      number: 36,
      skill: "Retopology",
      task: "Convert high-poly sculpts to low-poly game-ready models.",
      buildOn: "Builds on Step 35: High-detail sculpting, now optimize for real-time use.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Learn professional retopology techniques to prepare sculpted models for games and real-time applications.",
      learningObjectives: ["Retopology techniques", "Quad-based topology", "Edge flow optimization", "Game asset preparation"],
      estimatedTime: "25-35 hours"
    },
    {
      number: 37,
      skill: "Normal Map Baking",
      task: "Bake high-poly details onto low-poly models.",
      buildOn: "Builds on Step 36: Retopologized models, now preserve sculpt details.",
      difficulty: { complexity: 5, scope: 3 },
      description: "Master the art of baking high-resolution detail into efficient, low-polygon models.",
      learningObjectives: ["Normal map generation", "Texture baking", "Detail preservation", "Optimization techniques"],
      estimatedTime: "20-28 hours"
    },
    {
      number: 38,
      skill: "Shader Creation",
      task: "Create custom materials and shaders for realistic rendering.",
      buildOn: "Builds on Step 37: Baked textures, now advanced material creation.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Develop custom shaders and materials to achieve photorealistic rendering results.",
      learningObjectives: ["Node-based materials", "Shader programming basics", "Advanced material properties", "Realistic material creation"],
      estimatedTime: "28-35 hours"
    },
    {
      number: 39,
      skill: "Particle Systems",
      task: "Create dynamic effects using Blender's particle system.",
      buildOn: "Builds on Step 38: Static materials, now dynamic simulations.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Harness the power of particle systems to create dynamic, realistic effects and simulations.",
      learningObjectives: ["Particle system setup", "Emitter configuration", "Force field application", "Effect optimization"],
      estimatedTime: "25-32 hours"
    },
    {
      number: 40,
      skill: "Physics Simulation",
      task: "Use Blender's physics engine for realistic simulations.",
      buildOn: "Builds on Step 39: Particle effects, now rigid/soft body dynamics.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Master physics simulations to create realistic motion and interaction in your 3D scenes.",
      learningObjectives: ["Rigid body physics", "Soft body simulation", "Cloth dynamics", "Collision detection"],
      estimatedTime: "30-38 hours"
    },
    {
      number: 41,
      skill: "Python Scripting",
      task: "Automate workflows using Blender's Python API.",
      buildOn: "Builds on Step 40: Manual processes, now introduce automation.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Learn to automate repetitive tasks and extend Blender's functionality through Python scripting.",
      learningObjectives: ["Python fundamentals", "Blender API usage", "Script creation", "Workflow automation"],
      estimatedTime: "35-45 hours"
    },
    {
      number: 42,
      skill: "Advanced Rendering",
      task: "Master Cycles and EEVEE for professional-quality renders.",
      buildOn: "Builds on Step 41: Technical skills, now focus on final presentation.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Perfect your rendering skills to create professional-quality images and animations.",
      learningObjectives: ["Advanced render settings", "Compositing techniques", "Render optimization", "Quality control"],
      estimatedTime: "28-35 hours"
    },
    {
      number: 43,
      skill: "Video Editing & VFX",
      task: "Edit rendered footage and add visual effects.",
      buildOn: "Builds on Step 42: Static renders, now create dynamic video content.",
      difficulty: { complexity: 5, scope: 5 },
      description: "Combine 3D modeling with video editing and visual effects for complete multimedia production.",
      learningObjectives: ["Video sequence editing", "VFX integration", "Motion graphics", "Post-production workflow"],
      estimatedTime: "30-40 hours"
    },
    {
      number: 44,
      skill: "Game Asset Pipeline",
      task: "Create and optimize assets for game engines.",
      buildOn: "Builds on Step 43: Video production, now game development focus.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Learn the complete pipeline for creating optimized 3D assets for modern game engines.",
      learningObjectives: ["LOD creation", "Texture optimization", "Engine-specific workflows", "Performance optimization"],
      estimatedTime: "25-35 hours"
    },
    {
      number: 45,
      skill: "AI-Assisted Modeling",
      task: "Integrate AI tools and generative techniques into your workflow.",
      buildOn: "Builds on Step 44: Traditional modeling, now leverage AI assistance.",
      difficulty: { complexity: 5, scope: 4 },
      description: "Explore how AI and machine learning can enhance and accelerate your 3D modeling workflow.",
      learningObjectives: ["AI tool integration", "Generative modeling", "Workflow enhancement", "Future-ready techniques"],
      estimatedTime: "20-30 hours"
    },

    // Phase 4: Professional Development (Steps 46-52)
    {
      number: 46,
      skill: "Community Collaboration",
      task: "Contribute to open-source projects and collaborate with the Blender community.",
      buildOn: "Builds on Step 45: Individual work, now collaborative development.",
      difficulty: { complexity: 4, scope: 3 },
      description: "Learn to work effectively within the open-source community and contribute to larger projects.",
      learningObjectives: ["Open-source contribution", "Community collaboration", "Code review processes", "Project management"],
      estimatedTime: "15-25 hours"
    },
    {
      number: 47,
      skill: "Business & Entrepreneurship",
      task: "Develop business skills for 3D modeling entrepreneurship.",
      buildOn: "Builds on Step 46: Technical collaboration, now business development.",
      difficulty: { complexity: 3, scope: 4 },
      description: "Learn the business side of 3D modeling including freelancing, pricing, and client management.",
      learningObjectives: ["Pricing strategies", "Client communication", "Project management", "Business development"],
      estimatedTime: "20-30 hours"
    },
    {
      number: 48,
      skill: "Portfolio Development",
      task: "Create a professional portfolio showcasing your best work.",
      buildOn: "Builds on Step 47: Business skills, now presentation and marketing.",
      difficulty: { complexity: 4, scope: 4 },
      description: "Develop a compelling portfolio that effectively showcases your 3D modeling skills to potential clients and employers.",
      learningObjectives: ["Portfolio curation", "Presentation design", "Personal branding", "Online presence"],
      estimatedTime: "25-35 hours"
    },
    {
      number: 49,
      skill: "Advanced Specialization",
      task: "Choose and master a specialized area (e.g., character design, architecture, product design).",
      buildOn: "Builds on Step 48: General portfolio, now develop deep expertise in one area.",
      difficulty: { complexity: 5, scope: 5 },
      description: "Become an expert in a specific niche area of 3D modeling to stand out in the competitive market.",
      learningObjectives: ["Specialization focus", "Industry standards", "Advanced techniques", "Professional networking"],
      estimatedTime: "40-60 hours"
    },
    {
      number: 50,
      skill: "Teaching & Mentoring",
      task: "Share your knowledge by teaching others or creating tutorials.",
      buildOn: "Builds on Step 49: Personal expertise, now give back to the community.",
      difficulty: { complexity: 4, scope: 4 },
      description: "Develop teaching skills and contribute to the 3D community by mentoring beginners and sharing knowledge.",
      learningObjectives: ["Teaching methodologies", "Tutorial creation", "Community engagement", "Knowledge sharing"],
      estimatedTime: "25-35 hours"
    },
    {
      number: 51,
      skill: "Industry Trends & Innovation",
      task: "Stay current with emerging technologies and industry developments.",
      buildOn: "Builds on Step 50: Teaching others, now continuous learning and adaptation.",
      difficulty: { complexity: 4, scope: 3 },
      description: "Develop the habit of continuous learning to stay relevant in the rapidly evolving field of 3D technology.",
      learningObjectives: ["Technology research", "Trend analysis", "Innovation adoption", "Future planning"],
      estimatedTime: "20-30 hours"
    },
    {
      number: 52,
      skill: "Capstone Masterpiece",
      task: "Create a comprehensive project that demonstrates your full range of skills.",
      buildOn: "Combines Steps 1-51: Complete mastery demonstration.",
      difficulty: { complexity: 5, scope: 5 },
      description: "Produce a masterpiece project that showcases your complete 3D modeling expertise across all learned disciplines.",
      learningObjectives: ["Project integration", "Skill synthesis", "Professional execution", "Career milestone achievement"],
      estimatedTime: "50-80 hours"
    }
  ];

export default function Challenge() {
   const [checked, setChecked] = useState<boolean[]>([]);
   const [expandedPhases, setExpandedPhases] = useState<Set<number>>(new Set([1])); // Phase 1 starts expanded
   const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set()); // Track expanded step details

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

   const togglePhase = (phaseNumber: number) => {
     const newExpanded = new Set(expandedPhases);
     if (newExpanded.has(phaseNumber)) {
       newExpanded.delete(phaseNumber);
     } else {
       newExpanded.add(phaseNumber);
     }
      setExpandedPhases(newExpanded);
    };

    const toggleStepDetails = (stepNumber: number) => {
      const newExpanded = new Set(expandedSteps);
      if (newExpanded.has(stepNumber)) {
        newExpanded.delete(stepNumber);
      } else {
        newExpanded.add(stepNumber);
      }
      setExpandedSteps(newExpanded);
    };

    const completed = checked.filter(Boolean).length;

   // Phase definitions
   const phases = [
     { number: 1, name: "Tinkercad Foundation", steps: steps.slice(0, 15), software: "Tinkercad", description: "Master the basics of 3D modeling" },
     { number: 2, name: "FreeCAD Intermediate", steps: steps.slice(15, 25), software: "FreeCAD", description: "Learn parametric CAD design" },
     { number: 3, name: "Blender Technical Mastery", steps: steps.slice(25, 45), software: "Blender", description: "Advanced mesh modeling & techniques" },
     { number: 4, name: "Professional Development", steps: steps.slice(45, 52), software: "Various Tools", description: "Business, portfolio & career skills" }
   ];

   return (
     <main className="min-h-screen py-12 px-6 max-w-7xl mx-auto">
       <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
         Moikas 3D Modeling Challenge
       </h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          {completed} of {steps.length} steps completed — keep going at your own pace!
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 4-Phase Learning Structure</h3>
          <p className="text-blue-700 text-sm">
            <strong>Phase 1 (Steps 1-15):</strong> Tinkercad Foundation - Basic 3D concepts<br/>
            <strong>Phase 2 (Steps 16-25):</strong> FreeCAD Intermediate - Parametric CAD mastery<br/>
            <strong>Phase 3 (Steps 26-45):</strong> Blender Technical - Advanced mesh modeling<br/>
            <strong>Phase 4 (Steps 46-52):</strong> Professional Development - Business & career skills<br/>
            <em>All software is completely free! Use FreeCAD or any parametric CAD you prefer.</em>
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase) => {
            const phaseCompleted = phase.steps.filter((_, i) => checked[phase.steps[0].number - 1 + i]).length;
            const phaseTotal = phase.steps.length;
            const isExpanded = expandedPhases.has(phase.number);

            return (
              <div key={phase.number} className="border rounded-lg shadow-md overflow-hidden">
                {/* Phase Header */}
                <div
                  className="bg-gradient-to-r from-jade-500 to-jade-600 text-black p-6 cursor-pointer hover:from-jade-600 hover:to-jade-700 transition-colors"
                  onClick={() => togglePhase(phase.number)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                         <span className="text-2xl font-bold text-black">Phase {phase.number}</span>
                         <svg
                           className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                           fill="none"
                           stroke="white"
                           viewBox="0 0 24 24"
                         >
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                         </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">{phase.name}</h2>
                        <p className="text-jade-100 text-sm">{phase.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{phaseCompleted}/{phaseTotal}</div>
                      <div className="text-sm text-jade-100">Steps Completed</div>
                      <div className="w-32 bg-jade-700 rounded-full h-2 mt-2">
                        <div
                          className="bg-white h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(phaseCompleted / phaseTotal) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center space-x-4 text-sm">
                    <span className="bg-jade-700 px-3 py-1 rounded-full">
                      📚 {phase.software}
                    </span>
                    <span className="bg-jade-700 px-3 py-1 rounded-full">
                      🎯 Steps {phase.steps[0].number}-{phase.steps[phase.steps.length - 1].number}
                    </span>
                  </div>
                </div>

                {/* Phase Content */}
                {isExpanded && (
                  <div className="bg-gray-50 p-6">
                    <div className="space-y-4">
                      {phase.steps.map((step, stepIndex) => {
                        const globalIndex = step.number - 1;
                        const isStepExpanded = expandedSteps.has(step.number);

                        return (
                          <div key={step.number} className={`border rounded-lg shadow-sm overflow-hidden ${checked[globalIndex] ? "bg-jade-50 border-jade-200" : "bg-white border-gray-200"}`}>
                            {/* Step Header */}
                            <div className="flex items-center justify-between p-4">
                              <div className="flex items-center space-x-4">
                                <input
                                  type="checkbox"
                                  checked={checked[globalIndex] || false}
                                  onChange={() => toggle(globalIndex)}
                                  className="w-5 h-5 accent-jade-600 cursor-pointer"
                                />
                                <div>
                                  <h4 className="font-semibold text-jade-700">Step {step.number}: {step.skill}</h4>
                                  <p className="text-sm text-gray-600 line-clamp-2">{step.task}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <div className="text-right">
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${checked[globalIndex] ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
                                    {checked[globalIndex] ? "Completed" : "In Progress"}
                                  </span>
                                  <div className="text-xs text-gray-500 mt-1">{step.estimatedTime}</div>
                                </div>
                                <button
                                  onClick={() => toggleStepDetails(step.number)}
                                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                  <svg
                                    className={`w-4 h-4 transform transition-transform ${isStepExpanded ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </button>
                              </div>
                            </div>

                            {/* Expanded Step Details */}
                            {isStepExpanded && (
                              <div className="px-4 pb-4 border-t bg-gray-50">
                                <div className="space-y-4 pt-4">
                                  {/* Full Task Description */}
                                  <div>
                                    <h5 className="font-medium text-gray-900 mb-2">Task Description</h5>
                                    <p className="text-sm text-gray-700">{step.description}</p>
                                  </div>

                                  {/* Builds On */}
                                  <div>
                                    <h5 className="font-medium text-gray-900 mb-2">Builds On</h5>
                                    <p className="text-sm text-gray-600">{step.buildOn}</p>
                                  </div>

                                  {/* Difficulty Ratings */}
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <h5 className="font-medium text-gray-900 mb-2">Difficulty Ratings</h5>
                                      <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                          <span className="text-sm font-medium text-gray-700">Complexity:</span>
                                          <div className="flex">
                                            {[...Array(5)].map((_, idx) => (
                                              <span key={idx} className={`text-sm ${idx < step.difficulty.complexity ? 'text-yellow-500' : 'text-gray-300'}`}>
                                                ★
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                          <span className="text-sm font-medium text-gray-700">Scope:</span>
                                          <div className="flex">
                                            {[...Array(5)].map((_, idx) => (
                                              <span key={idx} className={`text-sm ${idx < step.difficulty.scope ? 'text-blue-500' : 'text-gray-300'}`}>
                                                ★
                                              </span>
                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Learning Objectives */}
                                    <div>
                                      <h5 className="font-medium text-gray-900 mb-2">What You'll Learn</h5>
                                      <div className="space-y-3">
                                        <div>
                                          <h6 className="text-sm font-medium text-jade-700 mb-1">Technical Skills</h6>
                                          <ul className="text-sm text-gray-600 space-y-1">
                                            {step.learningObjectives.slice(0, 3).map((objective, idx) => (
                                              <li key={idx}>• {objective}</li>
                                            ))}
                                          </ul>
                                        </div>
                                        <div>
                                          <h6 className="text-sm font-medium text-jade-700 mb-1">Creative Skills</h6>
                                          <ul className="text-sm text-gray-600 space-y-1">
                                            <li>• Problem solving</li>
                                            <li>• Design thinking</li>
                                            <li>• Iterative improvement</li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Show All Learning Objectives */}
                                  {step.learningObjectives.length > 3 && (
                                    <details className="mt-4">
                                      <summary className="cursor-pointer text-sm font-medium text-jade-700 hover:text-jade-800">
                                        Show All Learning Objectives ({step.learningObjectives.length})
                                      </summary>
                                      <div className="mt-2">
                                        <ul className="text-sm text-gray-600 space-y-1">
                                          {step.learningObjectives.map((objective, idx) => (
                                            <li key={idx}>• {objective}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    </details>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-jade-500 to-jade-600 text-black rounded-lg p-8">
         <h2 className="text-2xl font-bold mb-4">Need Models to Practice With?</h2>
         <p className="text-lg mb-6">
           Grab my Dummy 13 base + armor packs for the perfect practice subjects!
         </p>
         <a
           href="https://moikas.com"
           className="inline-block bg-white text-jade-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
         >
           Buy Here
         </a>
       </div>
     </main>
   );
 }