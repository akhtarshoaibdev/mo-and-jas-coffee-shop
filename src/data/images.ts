/**
 * IMAGE REGISTRY & OWNER ASSET HANDOFF GUIDE
 * ==========================================
 * For Mo & Ja's Coffee Shop Client Pitch & Production Launch:
 * 
 * 1. LOGO:
 *    - Current file: '/logo.jpg' (Sourced directly from Mo & Ja's verified Facebook page profile).
 * 
 * 2. FOOD & INTERIOR PHOTOGRAPHS:
 *    - All images are currently stored in '/public/images/' and mapped below.
 *    - Each item represents Mo & Ja's verified offerings (Afternoon Tea, Full English, BLT, Cakes, Cheese & Potato Pie).
 *    - When the café owner provides additional original high-resolution photos, simply drop their files into
 *      '/public/images/' and update the paths or keep the standard filenames below.
 */

export interface ImageConfig {
  key: string;
  name: string;
  currentPath: string;
  verifiedDish: string;
  aspectRatio: string;
  notesForClient: string;
}

export const CAFE_IMAGE_REGISTRY: Record<string, ImageConfig> = {
  logo: {
    key: "logo",
    name: "Mo & Ja’s Official Brand Mark",
    currentPath: "/logo.jpg",
    verifiedDish: "Official branding circle badge",
    aspectRatio: "1:1",
    notesForClient: "Retrieved directly from Mo & Ja's Facebook profile. Ready for production or vector replacement.",
  },
  hero: {
    key: "hero",
    name: "Hero Afternoon Tea Spread",
    currentPath: "/images/hero_afternoon_tea.jpg",
    verifiedDish: "Traditional Afternoon Tea Tiered Stand",
    aspectRatio: "4:3",
    notesForClient: "Showcases the iconic 3-tier tea with fresh scones and teapot. Replace with owner's best table photo if preferred.",
  },
  breakfast: {
    key: "breakfast",
    name: "Full English Breakfast",
    currentPath: "/images/breakfast.jpg",
    verifiedDish: "Full English Cooked Breakfast",
    aspectRatio: "4:3",
    notesForClient: "Depicts sausages, eggs, bacon, beans, mushrooms and toast. Matches Mo & Ja's highly rated morning menu.",
  },
  blt: {
    key: "blt",
    name: "BLT on Bloomer with Crisps & Salad",
    currentPath: "/images/sandwich_blt.jpg",
    verifiedDish: "Customer Favourite BLT Bloomer",
    aspectRatio: "4:3",
    notesForClient: "Matches customer reviews praising the generous BLT served with crisps and salad.",
  },
  cakes: {
    key: "cakes",
    name: "Fresh Homemade Cake Counter",
    currentPath: "/images/cakes_counter.jpg",
    verifiedDish: "Victoria Sponge, Scones & Traybakes",
    aspectRatio: "4:3",
    notesForClient: "Captures the daily baked counter atmosphere.",
  },
  drinks: {
    key: "drinks",
    name: "Artisan Coffee & Loose Leaf Tea",
    currentPath: "/images/coffee_and_tea.jpg",
    verifiedDish: "Barista Flat White & Steaming Teapot",
    aspectRatio: "4:3",
    notesForClient: "Highlights hot beverages, barista skills, and relaxing tearoom mornings.",
  },
  pie: {
    key: "pie",
    name: "Homemade Cheese & Potato Pie",
    currentPath: "/images/cheese_potato_pie.jpg",
    verifiedDish: "Local Special Cheese & Potato Pie",
    aspectRatio: "4:3",
    notesForClient: "Features Mo & Ja's famed custom-ordered cheese and potato pie bake.",
  },
  interior: {
    key: "interior",
    name: "Welcoming Café Ambiance",
    currentPath: "/images/cafe_interior.jpg",
    verifiedDish: "Cozy Dining Room & Atmosphere",
    aspectRatio: "4:3",
    notesForClient: "Reflects the warm, unpretentious community atmosphere of 110 The Straits.",
  },
};
