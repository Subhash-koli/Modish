import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { ProductModal, Product } from "./ProductModal";


// Batch 1 imports (images 3–11)
import img3_tshirts from "../../imports/Modish catalog/3.webp";
import img4_rneck_spec from "../../imports/Modish catalog/4.webp";
import img5_rneck_colors from "../../imports/Modish catalog/5.webp";
import img6_oversized from "../../imports/Modish catalog/6.webp";
import img7_oversized_spec from "../../imports/Modish catalog/7.webp";
import img8_oversized_colors from "../../imports/Modish catalog/8.webp";
import img9_polo from "../../imports/Modish catalog/9.webp";
import img10_polo_spec from "../../imports/Modish catalog/10.webp";
import img11_polo_colors from "../../imports/Modish catalog/11.webp";

// Batch 2 imports (images 12–18)
import img12_hoodies from "../../imports/Modish catalog/12.webp";
import img13_hoodies_spec from "../../imports/Modish catalog/13.webp";
import img14_hoodies_colors from "../../imports/Modish catalog/14.webp";
import img15_gymvest from "../../imports/Modish catalog/15.webp";
import img16_gymvest_spec from "../../imports/Modish catalog/16.webp";
import img17_accessories from "../../imports/Modish catalog/17.webp";
import img18_totebag_spec from "../../imports/Modish catalog/18.webp";

const WA_BASE = "https://wa.me/919136867622";

const products: Product[] = [
  // ─── T-SHIRTS (6 items) ───
  {
    id: "rneck-classic",
    name: "Classic Crew T-Shirt",
    category: "T-Shirts",
    categoryImage: img3_tshirts,
    specImage: img4_rneck_spec,
    colorsImage: img5_rneck_colors,
    descriptor: "100% bio-wash combed cotton",
    badge: "Bestseller",
    specs: ["180 GSM", "100% Cotton", "Biowash", "Unisex Fit", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#1A5C2A", "#EA5B0C", "#800020", "#1C3260"],
    colorNames: ["Black", "White", "Bottle Green", "Orange", "Maroon", "Navy"],
    bestFor: ["College Events", "Startup Kits", "Team Wear", "Daily Use"],
    printing: ["DTF Printing", "Screen Printing", "Embroidery"],
    description: "Our most requested t-shirt. Lightweight, bio-washed cotton keeps it soft and comfortable through daily wear and washing. Double-needle stitched hems for durability.",
  },
  {
    id: "rneck-premium",
    name: "Premium Combed Tee",
    category: "T-Shirts",
    categoryImage: img3_tshirts,
    specImage: img4_rneck_spec,
    colorsImage: img5_rneck_colors,
    descriptor: "200 GSM heavy-weight combed cotton",
    specs: ["200 GSM", "100% Combed Cotton", "Premium Finish", "Unisex Fit", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#9E9E9E", "#1C3260"],
    colorNames: ["Black", "White", "Grey", "Navy"],
    bestFor: ["Brand Merch", "Corporate Gifting", "Premium Uniforms"],
    printing: ["Embroidery", "DTF Printing"],
    description: "A thick, luxury t-shirt fabric designed for high-end retail brands. Ringspun combed cotton fibers provide an extremely smooth surface for detailed prints.",
  },
  {
    id: "rneck-eco",
    name: "Organic Eco T-Shirt",
    category: "T-Shirts",
    categoryImage: img3_tshirts,
    specImage: img4_rneck_spec,
    colorsImage: img5_rneck_colors,
    descriptor: "100% certified organic cotton",
    badge: "Eco-Friendly",
    specs: ["170 GSM", "Organic Cotton", "Sustainable Inks", "Regular Fit", "S–2XL"],
    colors: ["#F5F5DC", "#FFFFFF", "#0A0A0A", "#556B2F"],
    colorNames: ["Natural", "White", "Black", "Olive Green"],
    bestFor: ["Sustainable Brands", "Corporate Social Responsibility", "Eco-Events"],
    printing: ["Water-based Screen Print", "DTF Printing"],
    description: "Made from sustainably sourced organic cotton with zero harmful pesticides. Paired with water-based eco inks for the ultimate green merchandise statement.",
  },
  {
    id: "rneck-sports",
    name: "Active Dry-Fit Tee",
    category: "T-Shirts",
    categoryImage: img9_polo,
    specImage: img4_rneck_spec,
    colorsImage: null,
    descriptor: "Moisture-wicking micro-polyester",
    specs: ["160 GSM", "Micro-Polyester", "Dry-Fit Tech", "Athletic Fit", "S–3XL"],
    colors: ["#1C3260", "#FFFFFF", "#0A0A0A", "#DC2626", "#F5C400"],
    colorNames: ["Navy", "White", "Black", "Red", "Yellow"],
    bestFor: ["Marathons", "Gym Wear", "Sports Events", "Outdoor Events"],
    printing: ["Sublimation Printing", "DTF Printing"],
    description: "High-performance dry-fit fabric designed to wick sweat away and keep athletes cool. Unmatched breathability with full-color sublimation capabilities.",
  },
  {
    id: "rneck-vneck",
    name: "Premium V-Neck Tee",
    category: "T-Shirts",
    categoryImage: img3_tshirts,
    specImage: img4_rneck_spec,
    colorsImage: img5_rneck_colors,
    descriptor: "Stylish ribbed V-neck cut",
    specs: ["180 GSM", "100% Cotton", "Ribbed Collar", "Slim Fit", "S–2XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#9E9E9E"],
    colorNames: ["Black", "White", "Grey"],
    bestFor: ["Fashion Brands", "Cafe Staff Wear", "Personalized Merch"],
    printing: ["DTF Printing", "Screen Printing"],
    description: "A refined silhouette featuring a clean ribbed V-neck. Tailored slim fit styling provides a fashionable alternative to traditional crew necks.",
  },
  {
    id: "rneck-slub",
    name: "Slub Textured Tee",
    category: "T-Shirts",
    categoryImage: img3_tshirts,
    specImage: img4_rneck_spec,
    colorsImage: null,
    descriptor: "Unique textured slub knit yarn",
    specs: ["170 GSM", "Textured Slub", "Pre-washed", "Regular Fit", "S–2XL"],
    colors: ["#9E9E9E", "#0A0A0A", "#800020"],
    colorNames: ["Grey", "Black", "Maroon"],
    bestFor: ["Indie Brands", "Retail Store Uniforms", "Casual Workwear"],
    printing: ["Screen Printing", "DTF Printing"],
    description: "Textured slub yarns create natural, stylish line patterns across the fabric. Highly breathable, soft-washed fabric that commands a premium look.",
  },

  // ─── OVERSIZED T-SHIRTS (6 items) ───
  {
    id: "oversized-heavy",
    name: "Heavy Drop-Shoulder Tee",
    category: "Oversized",
    categoryImage: img6_oversized,
    specImage: img7_oversized_spec,
    colorsImage: img8_oversized_colors,
    descriptor: "240 GSM heavy loopknit loopback",
    badge: "Trending",
    specs: ["240 GSM", "100% Combed Cotton", "Heavy Loopknit", "Boxy Fit", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#C4A5D0", "#800020", "#556B2F"],
    colorNames: ["Black", "White", "Lavender", "Maroon", "Olive"],
    bestFor: ["Streetwear Clothing Brands", "Influencer Drops", "College Merchandise"],
    printing: ["High-Density Screen Print", "Puff Print", "DTF Printing"],
    description: "The ultimate heavy-weight streetwear essential. Dropped shoulders, boxy silhouette, and premium heavy-knit feel that holds its structured shape perfectly.",
  },
  {
    id: "oversized-loop",
    name: "Classic Streetwear Tee",
    category: "Oversized",
    categoryImage: img6_oversized,
    specImage: img7_oversized_spec,
    colorsImage: img8_oversized_colors,
    descriptor: "220 GSM classic streetwear fit",
    specs: ["220 GSM", "Cotton Blend", "Pre-shrunk", "Boxy Fit", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#EA5B0C", "#9E9E9E"],
    colorNames: ["Black", "White", "Orange", "Grey"],
    bestFor: ["Fashion Labels", "Event Volunteers", "Music Merch"],
    printing: ["DTF Printing", "Screen Printing"],
    description: "A comfortable middle-ground between standard and ultra-heavyweight. Features slightly dropped shoulders and relaxed sleeves for a modern look.",
  },
  {
    id: "oversized-acid",
    name: "Acid Wash Streetwear Tee",
    category: "Oversized",
    categoryImage: img6_oversized,
    specImage: img7_oversized_spec,
    colorsImage: img8_oversized_colors,
    descriptor: "Custom mineral/acid wash effect",
    badge: "Limited Edition",
    specs: ["240 GSM", "Mineral Wash Yarn", "Vintage Feel", "Boxy Fit", "S–2XL"],
    colors: ["#2B2B2B", "#4A3C31", "#1B2A47"],
    colorNames: ["Charcoal Acid", "Brown Acid", "Navy Acid"],
    bestFor: ["Boutique Labels", "Designer Merch", "Streetwear Enthusiasts"],
    printing: ["Discharge Screen Print", "Vintage DTF"],
    description: "Individually washed to create a unique mineral/acid fade texture on every single piece. Premium vintage hand-feel with heavy rib collars.",
  },
  {
    id: "oversized-graphic",
    name: "Urban Boxy Graphic Tee",
    category: "Oversized",
    categoryImage: img6_oversized,
    specImage: img7_oversized_spec,
    colorsImage: null,
    descriptor: "Optimized for large graphic backprints",
    specs: ["220 GSM", "100% Combed Cotton", "Biowash", "Wide Print Area", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF"],
    colorNames: ["Black", "White"],
    bestFor: ["Skate Brands", "Artist Collabs", "Concert Merchandise"],
    printing: ["Giant Back DTF", "Puff Screen Print"],
    description: "Specially patterned to minimize seam interference, allowing giant, uninterrupted back-panel graphic prints. Built with broad neck bands.",
  },
  {
    id: "oversized-stripe",
    name: "Striped Streetwear Knit",
    category: "Oversized",
    categoryImage: img6_oversized,
    specImage: img7_oversized_spec,
    colorsImage: null,
    descriptor: "Yarn-dyed custom striped pattern",
    specs: ["230 GSM", "Yarn-dyed Knit", "Biowash", "Oversized Fit", "S–2XL"],
    colors: ["#0A0A0A", "#C4A5D0"],
    colorNames: ["Black/White Stripe", "Lavender/Black Stripe"],
    bestFor: ["Designer Streetwear", "Premium Casual Uniforms"],
    printing: ["Minimal Chest Embroidery", "Small DTF Patch"],
    description: "Premium yarn-dyed stripes that won't fade or crack. Elegant heavy drape, perfect for high-end streetwear drops wanting a clean look.",
  },
  {
    id: "oversized-french",
    name: "French Terry Oversized Tee",
    category: "Oversized",
    categoryImage: img6_oversized,
    specImage: img7_oversized_spec,
    colorsImage: img8_oversized_colors,
    descriptor: "Premium French Terry back-looping",
    specs: ["250 GSM", "French Terry Cotton", "Loopback Knit", "Loose Fit", "S–3XL"],
    colors: ["#9E9E9E", "#F5F5DC", "#0A0A0A"],
    colorNames: ["Melange Grey", "Beige", "Black"],
    bestFor: ["Luxury Loungewear", "Brand Capsules", "VIP Gifting"],
    printing: ["Tonal Embroidery", "DTF Branding"],
    description: "Made from thick, breathable French Terry with loops on the inside. Luxuriously soft, heavy drape, and high moisture absorption for hot weather comfort.",

  // ─── POLOS (6 items) ───
  },
  {
    id: "polo-classic",
    name: "Classic Honeycomb Polo",
    category: "Polos",
    categoryImage: img9_polo,
    specImage: img10_polo_spec,
    colorsImage: img11_polo_colors,
    descriptor: "220 GSM classic piqué honeycomb",
    badge: "Bestseller",
    specs: ["220 GSM", "Honeycomb Cotton", "Biowash", "Regular Fit", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#1C3260", "#800020", "#9E9E9E"],
    colorNames: ["Black", "White", "Navy", "Maroon", "Grey"],
    bestFor: ["Corporate Uniforms", "Office Wear", "Exhibition Staff"],
    printing: ["Embroidery", "Screen Printing", "DTF Printing"],
    description: "The gold standard for office and team polo shirts. Honeycomb piqué weave provides structured lines, breathability, and excellent embroidery backing.",
  },
  {
    id: "polo-dryfit",
    name: "Sport Active Collar Polo",
    category: "Polos",
    categoryImage: img9_polo,
    specImage: img10_polo_spec,
    colorsImage: null,
    descriptor: "Moisture-wicking honeycomb dry-fit",
    specs: ["180 GSM", "Micro-Polyester", "Dry-fit Collar", "Athletic Polo Fit", "S–3XL"],
    colors: ["#1C3260", "#DC2626", "#0A0A0A", "#FFFFFF"],
    colorNames: ["Navy", "Red", "Black", "White"],
    bestFor: ["Golf Tournaments", "Sports Academies", "Outdoor Workwear"],
    printing: ["Sublimation", "DTF Printing"],
    description: "An athletic polo shirt that combines collar structure with high-performance dry-fit cooling tech. Resists wrinkles, sweat marks, and fading.",
  },
  {
    id: "polo-corporate",
    name: "Executive Tipped Polo",
    category: "Polos",
    categoryImage: img9_polo,
    specImage: img10_polo_spec,
    colorsImage: img11_polo_colors,
    descriptor: "Contrast colored tipping on collars",
    badge: "Premium Quality",
    specs: ["240 GSM", "Double Piqué Cotton", "Contrast Tipping", "Regular Fit", "S–3XL"],
    colors: ["#1C3260", "#0A0A0A", "#FFFFFF"],
    colorNames: ["Navy with White Tip", "Black with Yellow Tip", "White with Black Tip"],
    bestFor: ["Executive Gifting", "Hotel Management Staff", "Premium Events"],
    printing: ["High-stitch Embroidery", "Subtle DTF Logo"],
    description: "Designed for premium brand positioning. Features stylish contrast color double-tipping lines on collar and cuffs for a modern corporate look.",
  },
  {
    id: "polo-supima",
    name: "Supima Luxe Collar Polo",
    category: "Polos",
    categoryImage: img9_polo,
    specImage: img10_polo_spec,
    colorsImage: img11_polo_colors,
    descriptor: "100% premium long-staple Supima cotton",
    specs: ["220 GSM", "Supima Cotton", "Silk Wash Finish", "Tailored Fit", "S–2XL"],
    colors: ["#0A0A0A", "#1C3260", "#800020"],
    colorNames: ["Luxe Black", "Luxe Navy", "Luxe Maroon"],
    bestFor: ["VIP Gifting", "Boardroom Wear", "Premium Retail Merchandise"],
    printing: ["Laser Precision Embroidery"],
    description: "Crafted from long-staple Supima cotton, providing double the strength, softness, and color retention of regular cotton. Premium silk-washed finish.",
  },
  {
    id: "polo-knit",
    name: "Textured Cable-Knit Polo",
    category: "Polos",
    categoryImage: img9_polo,
    specImage: img10_polo_spec,
    colorsImage: null,
    descriptor: "Retro knit pattern polo styling",
    specs: ["250 GSM", "Knit Cotton Yarn", "Breathable Mesh Yarn", "Tailored Fit", "S–2XL"],
    colors: ["#F5F5DC", "#0A0A0A", "#556B2F"],
    colorNames: ["Cream", "Black", "Sage Green"],
    bestFor: ["Designer Boutiques", "Summer Resort Wear"],
    printing: ["Minimal Tonal Embroidery"],
    description: "A trendy cable-knit retro collar polo. Features vertical knit textures that deliver a high-fashion, vintage casual aesthetic.",
  },
  {
    id: "polo-mandarin",
    name: "Mandarin Collar Sport Polo",
    category: "Polos",
    categoryImage: img9_polo,
    specImage: img10_polo_spec,
    colorsImage: null,
    descriptor: "Modern collarless button stand",
    specs: ["210 GSM", "Honeycomb Cotton", "Mandarin Band Collar", "Slim Fit", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#9E9E9E"],
    colorNames: ["Black", "White", "Grey"],
    bestFor: ["Modern Tech Startups", "Creative Agency Teams"],
    printing: ["DTF Print on Left Chest", "Embroidery"],
    description: "Features a modern band/mandarin collar stand instead of traditional heavy collars. Sleek, minimal, and ideal for progressive creative groups.",

  // ─── HOODIES (6 items) ───
  },
  {
    id: "hoodie-premium",
    name: "Premium Pullover Hoodie",
    category: "Hoodies",
    categoryImage: img12_hoodies,
    specImage: img13_hoodies_spec,
    colorsImage: img14_hoodies_colors,
    descriptor: "320 GSM heavyweight brushed fleece",
    badge: "Bestseller",
    specs: ["320 GSM", "100% Cotton Face", "Brushed Fleece Inside", "Structured Hood", "S–3XL"],
    colors: ["#0A0A0A", "#9E9E9E", "#1C3260", "#800020", "#FFFFFF"],
    colorNames: ["Black", "Grey Melange", "Navy", "Maroon", "White"],
    bestFor: ["Premium Winter Merch", "College Club Hoodies", "Corporate Gifts"],
    printing: ["Embroidery", "DTF Printing", "Puff Print"],
    description: "Thick, structured, and double-lined hood with flat drawstrings. Combed cotton surface ensures printing is sharp and wash-resistant.",
  },
  {
    id: "hoodie-zipup",
    name: "Classic Zip-Up Hoodie",
    category: "Hoodies",
    categoryImage: img12_hoodies,
    specImage: img13_hoodies_spec,
    colorsImage: img14_hoodies_colors,
    descriptor: "YKK metal zipper fleece hoodie",
    specs: ["300 GSM", "Cotton Blend Fleece", "YKK Zippers", "Regular Fit", "S–3XL"],
    colors: ["#0A0A0A", "#9E9E9E", "#1C3260"],
    colorNames: ["Black", "Grey Melange", "Navy"],
    bestFor: ["Startup Swag Packs", "Daily Workwear Jackets"],
    printing: ["Left-chest Embroidery", "DTF Back Print"],
    description: "Convenient zip-front styling featuring premium YKK hardware, split kangaroo pockets, and soft fleece backing for easy layering.",
  },
  {
    id: "hoodie-crewneck",
    name: "Urban Crewneck Sweatshirt",
    category: "Hoodies",
    categoryImage: img12_hoodies,
    specImage: img13_hoodies_spec,
    colorsImage: null,
    descriptor: "Clean streetwear crewneck collar",
    badge: "Must Have",
    specs: ["320 GSM", "Heavy fleece loops", "Ribbed Neckline", "Regular Fit", "S–3XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#C4A5D0"],
    colorNames: ["Black", "White", "Lavender"],
    bestFor: ["Tech Startup Uniforms", "Minimalist Streetwear"],
    printing: ["Minimal Center Chest Embroidery", "Puff Print"],
    description: "Collared fleece pullover with thick ribs on neck, cuffs, and hem. Clean, minimalist look, loved by modern tech teams.",
  },
  {
    id: "hoodie-oversized",
    name: "Oversized Street Hoodie",
    category: "Hoodies",
    categoryImage: img12_hoodies,
    specImage: img13_hoodies_spec,
    colorsImage: img14_hoodies_colors,
    descriptor: "360 GSM ultra-heavy boxy fleece",
    badge: "Streetwear Pick",
    specs: ["360 GSM", "Ultra-heavy Loopknit", "Boxy Fit", "Seamless Hood", "S–3XL"],
    colors: ["#0A0A0A", "#C4A5D0", "#F5F5DC"],
    colorNames: ["Black", "Lavender", "Beige"],
    bestFor: ["Premium Streetwear Drops", "Artist Swag"],
    printing: ["Puff Print", "Embroidery", "DTF Print"],
    description: "Super heavy weight streetwear hoodie. Features a crossover neck band, no drawstrings for a clean look, and wide sleeves for boxy draping.",
  },
  {
    id: "hoodie-colorblock",
    name: "Color-Block Fleece Hoodie",
    category: "Hoodies",
    categoryImage: img12_hoodies,
    specImage: img13_hoodies_spec,
    colorsImage: null,
    descriptor: "Contrast sleeve and hood design",
    specs: ["300 GSM", "Fleece Cotton Blend", "Colorblock styling", "Regular Fit", "S–2XL"],
    colors: ["#0A0A0A", "#9E9E9E"],
    colorNames: ["Black/Grey", "Navy/White"],
    bestFor: ["School Spirit Wear", "Sports Fan Merchandise"],
    printing: ["Bold Chest Screen Print", "Embroidery"],
    description: "High-contrast panels on raglan sleeves and inside hood. A sporty, eye-catching hoodie design that showcases varsity and team colors.",
  },
  {
    id: "hoodie-light",
    name: "Summer Terry Lightweight Hoodie",
    category: "Hoodies",
    categoryImage: img12_hoodies,
    specImage: img13_hoodies_spec,
    colorsImage: null,
    descriptor: "240 GSM unbrushed light Terry",
    specs: ["240 GSM", "Unbrushed French Terry", "Lightweight Hood", "Slim Fit", "S–2XL"],
    colors: ["#FFFFFF", "#9E9E9E", "#F5F5DC"],
    colorNames: ["Off-White", "Melange Grey", "Sand"],
    bestFor: ["Gym Layering", "Mild Winter Wear", "Corporate Casuals"],
    printing: ["DTF Print", "Embroidery"],
    description: "Breathable, thin loopback French Terry fabric. Designed for cool summer evenings, gym warmup wear, or office layers.",

  // ─── GYM VESTS (3 items) ───
  },
  {
    id: "gym-vest-classic",
    name: "Performance Tank Top",
    category: "Gym Vests",
    categoryImage: img15_gymvest,
    specImage: img16_gymvest_spec,
    colorsImage: null,
    descriptor: "180 GSM bio-wash athletic cut",
    badge: "Athletic Fit",
    specs: ["180 GSM", "100% Combed Cotton", "Biowash", "Racerback Design", "S–2XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#1C3260"],
    colorNames: ["Black", "White", "Navy"],
    bestFor: ["Fitness Trainers", "Athletic Merchandise", "Gym Promos"],
    printing: ["DTF Printing", "Screen Printing"],
    description: "Durable athletic tank with clean hem bindings. Stays soft and holds shape through heavy sweat and gym washes.",
  },
  {
    id: "gym-vest-stringer",
    name: "Deep racerback Stringer",
    category: "Gym Vests",
    categoryImage: img15_gymvest,
    specImage: img16_gymvest_spec,
    colorsImage: null,
    descriptor: "Deep armhole gym stringer design",
    specs: ["170 GSM", "Ringspun Cotton Yarn", "Deep Armhole", "Raw Edge Cut", "S–XL"],
    colors: ["#0A0A0A", "#DC2626", "#F5C400"],
    colorNames: ["Gym Black", "Gym Red", "Gym Yellow"],
    bestFor: ["Bodybuilding Gyms", "Powerlifting Merch"],
    printing: ["Bold Center Chest Screenprint", "DTF"],
    description: "Engineered specifically for bodybuilders. Deep cut neck and racerback straps maximize range of motion and showcase physique prints.",
  },
  {
    id: "gym-vest-dryfit",
    name: "Dry-Fit Performance Tank",
    category: "Gym Vests",
    categoryImage: img15_gymvest,
    specImage: img16_gymvest_spec,
    colorsImage: null,
    descriptor: "Sweat-wicking micro-knit poly",
    specs: ["150 GSM", "Active Micro-Poly Mesh", "Fast Drying", "Reflective trims", "S–2XL"],
    colors: ["#0A0A0A", "#FFFFFF", "#EA5B0C"],
    colorNames: ["Black Mesh", "White Mesh", "Active Orange"],
    bestFor: ["Crossfit Boxes", "Marathons", "Gym Workouts"],
    printing: ["Sublimation", "DTF Printing"],
    description: "Ultra-lightweight mesh knit fabric that keeps air flowing and dries instantly. Flatlock seams prevent chafing during long workouts.",

  // ─── ACCESSORIES (5 items) ───
  },
  {
    id: "tote-bag-classic",
    name: "Premium Canvas Tote",
    category: "Accessories",
    categoryImage: img17_accessories,
    specImage: img18_totebag_spec,
    colorsImage: null,
    descriptor: "100% thick organic canvas cotton",
    badge: "Eco Hero",
    specs: ["12 oz Canvas Cotton", "Standard size 15×16 in", "Heavy duty loops", "Biodegradable"],
    colors: ["#F5F5DC", "#0A0A0A"],
    colorNames: ["Natural Canvas", "Black Canvas"],
    bestFor: ["Promotional Kits", "Boutique Retailers", "Eco Campaigns"],
    printing: ["Water-based Screen Printing", "DTF Printing"],
    description: "A thick canvas cotton tote that holds up to heavy grocery runs or book loads. Reinforced handle stitches ensure durability.",
  },
  {
    id: "acc-coasters",
    name: "Custom Print Wood Coasters",
    category: "Accessories",
    categoryImage: img17_accessories,
    specImage: null,
    colorsImage: null,
    descriptor: "Premium wood/cork backing drink coasters",
    specs: ["MDF Wood / Cork backing", "Size 3.5×3.5 in", "Gloss / Matte Finish", "Water Resistant"],
    colors: ["#FFFFFF", "#0A0A0A"],
    colorNames: ["Full Color White Base", "Wood Texture Base"],
    bestFor: ["Corporate Desktop Giftsets", "Cafes & Bars", "New Joinee Kits"],
    printing: ["High-gloss UV Print", "Laser Engraving"],
    description: "Square MDF coasters with high-quality full-color print surfaces and protective cork backings. Perfect for branding office desks.",
  },
  {
    id: "acc-mousepad",
    name: "Speed-Tex Custom Mousepad",
    category: "Accessories",
    categoryImage: img17_accessories,
    specImage: null,
    colorsImage: null,
    descriptor: "Smooth tracking textured fabric pad",
    badge: "Office Essential",
    specs: ["Textured Speed Fabric", "Rubber anti-slip base", "Thickness 3mm", "Size 8.5×7 in"],
    colors: ["#0A0A0A", "#FFFFFF"],
    colorNames: ["Black Base", "White Print Base"],
    bestFor: ["Tech Startups", "Office workstation setups", "Gaming Swag"],
    printing: ["Dye Sublimation Full Color", "DTF"],
    description: "Smooth tracking polyester speed surface with non-slip rubber base. Beautiful edge stitching prevents fraying over years of daily mouse usage.",
  },
  {
    id: "acc-magnet",
    name: "Glossy Badge Fridge Magnet",
    category: "Accessories",
    categoryImage: img17_accessories,
    specImage: null,
    colorsImage: null,
    descriptor: "Vibrant high-gloss badge fridge magnets",
    specs: ["Badge Tin Plate", "Heavy ferrite magnet", "Size 2.25 in Round", "UV Protective coat"],
    colors: ["#FFFFFF"],
    colorNames: ["Full Color Base"],
    bestFor: ["Event Souvenirs", "Mass Giveaways", "Band Merch Collections"],
    printing: ["High Gloss UV Print", "Sublimation"],
    description: "Round tin button fridge magnets wrapped in water-resistant high-gloss UV protection coats. Fun, budget-friendly bulk promos.",
  },
  {
    id: "acc-keychains",
    name: "Bespoke Acrylic/Metal Keychain",
    category: "Accessories",
    categoryImage: img17_accessories,
    specImage: null,
    colorsImage: null,
    descriptor: "Sturdy custom cut key rings",
    specs: ["Laser Cut Acrylic / Metal", "Strong split ring", "Various Custom Shapes", "Double Sided Print"],
    colors: ["#FFFFFF", "#0A0A0A"],
    colorNames: ["Clear Acrylic", "Black Brushed Metal"],
    bestFor: ["New Employee Welcomes", "Real Estate Promos", "Brand Merchandise"],
    printing: ["Laser Precision Cutting & Engraving", "UV Print"],
    description: "Custom key chains cut precisely to match your logo shape in high-strength acrylic or sleek brushed metal finish. Keeps your brand in pockets daily.",
  },
];

function ColorSwatch({ color, name }: { color: string; name: string }) {
  return (
    <div
      title={name}
      style={{
        width: "clamp(14px, 2.5vw, 18px)",
        height: "clamp(14px, 2.5vw, 18px)",
        borderRadius: "50%",
        background: color,
        border: color === "#FFFFFF" || color === "#F5F5DC" ? "1.5px solid var(--modish-grey-200)" : "2px solid var(--modish-white)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        cursor: "default",
        flexShrink: 0,
      }}
    />
  );
}

function SpecChip({ label }: { label: string }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "clamp(2px, 0.8vw, 4px) clamp(5px, 1.5vw, 10px)",
      borderRadius: "var(--modish-radius-full)",
      background: "var(--modish-grey-100)",
      border: "1px solid var(--modish-grey-200)",
      fontFamily: "var(--font-body)",
      fontWeight: 500,
      fontSize: "clamp(8px, 1.8vw, 11px)",
      color: "var(--modish-grey-700)",
    }}>
      {label}
    </span>
  );
}

function ProductCard({ product, onViewDetails }: { product: Product; onViewDetails: (p: Product) => void }) {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  const waMsg = `Hi Modish! I'm interested in your ${product.name}. Can you share pricing?`;
  const waUrl = `${WA_BASE}?text=${encodeURIComponent(waMsg)}`;

  return (
    <article
      style={{
        background: "var(--modish-white)",
        border: "1px solid var(--modish-grey-200)",
        borderRadius: "var(--modish-radius-lg)",
        boxShadow: hovered ? "var(--modish-shadow-lg)" : "var(--modish-shadow-sm)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minHeight: "360px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge Area — Reserved Space */}
      <div style={{
        position: "absolute",
        top: "12px",
        left: "12px",
        zIndex: 1,
        height: "24px",
      }}>
        {product.badge && (
          <div style={{
            background: "var(--modish-yellow)",
            color: "var(--modish-black)",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "11px",
            padding: "3px 10px",
            borderRadius: "var(--modish-radius-full)",
            letterSpacing: "0.04em",
          }}>
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Image — real catalog photo */}
      <div className="modish-product-image" style={{
        overflow: "hidden",
        background: "var(--modish-grey-50)",
        position: "relative",
      }}>
        <img
          src={product.categoryImage}
          alt={`Custom printed ${product.name} by Modish Mumbai — ${product.descriptor}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
            display: "block",
          }}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div style={{ padding: "clamp(5px, 1.2vw, 12px)", flex: 1, display: "flex", flexDirection: "column", gap: "clamp(2px, 0.3vw, 6px)" }}>
        <div style={{ maxHeight: "clamp(35px, 7vw, 48px)", overflow: "hidden" }}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(12px, 2.8vw, 16px)", color: "var(--modish-black)", margin: "0 0 1px 0", lineHeight: 1.2 }}>
            {product.name}
          </h3>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "clamp(9px, 1.8vw, 12px)", color: "var(--modish-grey-500)", margin: 0, lineHeight: 1.2 }}>
            {product.descriptor}
          </p>
        </div>

        {/* Description */}
        <p style={{ margin: 0, color: "var(--modish-grey-700)", fontSize: "8px", lineHeight: 1.2, display: "-webkit-box", WebkitLineClamp: 3 as any, WebkitBoxOrient: "vertical" as any, overflow: "hidden" }}>
          {product.description}
        </p>

        {/* Spec Chips — Fixed Height */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(3px, 0.5vw, 8px)", minHeight: "26px", alignContent: "flex-start" }}>
          {product.specs.slice(0, 2).map(spec => (
            <SpecChip key={spec} label={spec} />
          ))}
        </div>

        {/* Color Swatches — Fixed Height */}
        <div style={{ display: "flex", gap: "clamp(4px, 1vw, 8px)", flexWrap: "wrap", minHeight: "22px", alignContent: "flex-start" }}>
          {product.colors.slice(0, 4).map((c, i) => (
            <ColorSwatch key={i} color={c} name={product.colorNames[i]} />
          ))}
          {product.colors.length > 4 && (
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11px", color: "var(--modish-grey-500)", alignSelf: "center" }}>
              +{product.colors.length - 4}
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "6px",
          marginTop: "auto",
          flexDirection: isMobile ? "column" : "row",
          width: "100%"
        }}>
          <button
            onClick={() => onViewDetails(product)}
            style={{
              flex: isMobile ? "none" : "1 1 calc(50% - 6px)",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: isMobile ? "10px" : "13px",
              padding: isMobile ? "6px 8px" : "8px 12px",
              border: "1.5px solid var(--modish-black)",
              borderRadius: "var(--modish-radius-sm)",
              background: "transparent",
              color: "var(--modish-black)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.background = "var(--modish-black)"; b.style.color = "var(--modish-yellow)"; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.background = "transparent"; b.style.color = "var(--modish-black)"; }}
          >
            <Eye size={isMobile ? 12 : 14} />
            <span className="modish-button-text">View Details</span>
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: isMobile ? "none" : "1 1 calc(50% - 6px)",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: isMobile ? "10px" : "14px",
              padding: isMobile ? "6px 8px" : "9px 14px",
              borderRadius: "var(--modish-radius-sm)",
              background: "var(--modish-whatsapp)",
              color: "var(--modish-white)",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp-dark)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "var(--modish-whatsapp)"; }}
          >
            {/* Inline WhatsApp icon */}
            <svg width={isMobile ? 12 : 18} height={isMobile ? 12 : 18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.373 0 .01 5.364.01 12c0 2.115.56 4.078 1.53 5.8L0 24l6.42-1.67A11.92 11.92 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.2-3.48-8.52z" fill="var(--modish-whatsapp)" />
              <path d="M17.5 14.2c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.1l-.5.5c-.1.1-.4.2-.8.1-.8-.1-2.5-1.5-3.3-3.1-.2-.4.2-.8.4-1l.5-.5c.3-.3.3-.5.1-.8-.1-.2-1-2.4-1.4-3.3-.2-.5-.7-.6-1-.6-.4 0-.8.1-1.2.2-.3.1-.8.3-1.2.6-.4.3-.9.8-1.1 1.3-.2.6-.1 1.2.6 2.6.8 1.6 4 6.6 8.4 8.7 3 .95 3.9.4 4.6.3.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.5-.1-.3-1.2-1-1.5-1.1z" fill="#fff" />
            </svg>
            <span className="modish-button-text">WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "var(--modish-space-10)" }}>
      <span style={{ display: "block", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--modish-grey-500)", margin: "0 0 8px 0" }}>
        {eyebrow}
      </span>
      <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 30px)", color: "var(--modish-black)", margin: "0 0 12px 0", lineHeight: 1.1 }}>
        {title}
      </h2>
      <p style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "15px", color: "var(--modish-grey-500)", maxWidth: "600px", margin: "0 auto" }}>
        {subtitle}
      </p>
    </div>
  );
}

const categoryFilters = [
  { label: "All", category: null },
  { label: "T-Shirts", category: "T-Shirts" },
  { label: "Oversized", category: "Oversized" },
  { label: "Polos", category: "Polos" },
  { label: "Hoodies", category: "Hoodies" },
  { label: "Gym Vests", category: "Gym Vests" },
  { label: "Accessories", category: "Accessories" },
];

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProducts = activeFilter
    ? products.filter((p) => p.category === activeFilter)
    : products;

  return (
    <section id="products" className="modish-section" style={{ background: "var(--modish-white)" }}>

      <div className="modish-container">
        <SectionHeading
          eyebrow="OUR PRODUCTS"
          title="What We Make"
          subtitle="Premium custom merchandise, crafted to represent your brand."
        />

        {/* Filter Pills */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "var(--modish-space-8)",
          }}
          role="group"
          aria-label="Filter products by category"
        >
          {categoryFilters.map((f) => {
            const isActive = activeFilter === f.category;
            return (
              <button
                key={f.label}
                onClick={() => setActiveFilter(f.category)}
                aria-pressed={isActive}
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "13px",
                  padding: "8px 18px",
                  borderRadius: "var(--modish-radius-full)",
                  border: isActive ? "none" : "1.5px solid var(--modish-grey-200)",
                  background: isActive ? "var(--modish-black)" : "var(--modish-white)",
                  color: isActive ? "var(--modish-yellow)" : "var(--modish-black)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  minHeight: "40px",
                  whiteSpace: "nowrap",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="modish-product-grid">
          {filteredProducts.map((product, i) => (
            <div
              key={product.id}
              id={product.id}
              className="reveal-on-scroll modish-product-card-wrapper"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProductCard product={product} onViewDetails={setSelectedProduct} />
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}

export { products };
