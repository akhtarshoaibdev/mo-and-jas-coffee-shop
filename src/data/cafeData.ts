export interface MenuItem {
  name: string;
  description: string;
  tag?: string;
  priceNote?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  items: MenuItem[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  caption: string;
  orientation?: 'landscape' | 'portrait' | 'square';
}

export interface ReviewItem {
  id: string;
  reviewer: string;
  date: string;
  title: string;
  quote: string;
  source: 'Tripadvisor' | 'Facebook';
  verifiedHighlight: string;
}

export const CAFE_DATA = {
  name: "Mo & Ja’s",
  fullName: "Mo & Ja’s Coffee Shop",
  tagline: "Good coffee. Lovely food. Time well spent.",
  eyebrow: "YOUR LOCAL COFFEE SHOP",
  subheading: "A welcoming little spot for relaxed breakfasts, comforting favourites, and leisurely afternoon tea.",
  
  location: {
    addressLine: "110 The Straits",
    suburb: "Lower Gornal",
    town: "Dudley",
    region: "West Midlands",
    postcode: "DY3 3BA",
    country: "England, UK",
    fullAddress: "110 The Straits, Lower Gornal, Dudley, West Midlands, DY3 3BA",
    googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=110+The+Straits+Dudley+DY3+3BA",
  },

  contact: {
    phoneDisplay: "01902 884239",
    phoneTel: "tel:01902884239",
    facebookUrl: "https://www.facebook.com/p/Mo-jas-coffee-shop-100083493576786/",
    tripadvisorUrl: "https://www.tripadvisor.com/Restaurant_Review-g187065-d27817700-Reviews-Mo_Ja_s_Coffee_Shop-Dudley_West_Midlands_England.html",
  },

  hours: [
    { days: "Tuesday – Friday", time: "9:30 AM – 3:00 PM" },
    { days: "Saturday", time: "9:00 AM – 3:00 PM" },
    { days: "Sunday & Monday", time: "Closed" },
  ],
  hoursNotice: "Planning a visit? Please call ahead to confirm daily opening hours or bank holiday times.",

  highlights: [
    { title: "Dog-Friendly", desc: "Well-behaved four-legged friends are always warmly welcomed." },
    { title: "Locally Loved", desc: "Rated ~4.8 stars for friendly service & homemade comforts." },
    { title: "Afternoon Tea", desc: "Freshly prepared tiered spreads with unlimited tea or coffee." },
    { title: "Community Heart", desc: "A cozy neighbourhood gathering space in The Straits." },
  ],

  menuCategories: [
    {
      id: "breakfast",
      title: "Breakfast & Light Bites",
      subtitle: "Hearty morning plates, golden toasties, and comforting starts to the day.",
      items: [
        {
          name: "Full English Breakfast",
          description: "Generous traditional breakfast with Cumberland pork sausages, crispy bacon, golden eggs, baked beans, grilled tomato, sautéed mushrooms, and warm buttered toast.",
          tag: "Customer Favourite",
        },
        {
          name: "Eggs & Smashed Avocado on Toast",
          description: "Freshly poached eggs served over seasoned smashed avocado on thick crusty sourdough with a pinch of cracked black pepper and chilli flakes.",
          tag: "Popular",
        },
        {
          name: "Warm Toasted Teacake",
          description: "Traditional fruit teacake, lightly toasted and served bubbling hot with generous farm butter and berry preserve.",
        },
        {
          name: "Breakfast Bloomer Sandwiches",
          description: "Thick-cut butcher's bacon, sizzling pork sausages, or fried free-range eggs on fresh soft white or granary bread.",
        },
      ],
    },
    {
      id: "sandwiches",
      title: "Sandwiches & Café Favourites",
      subtitle: "Freshly assembled bloomer sandwiches, hot bakes, and comforting homemade classics.",
      items: [
        {
          name: "Signature BLT Bloomer",
          description: "Crispy grilled bacon, crisp garden lettuce, and ripe sliced tomatoes on rustic thick bloomer bread, served with hand-cooked kettle crisps and fresh side salad.",
          tag: "Customer Acclaim",
        },
        {
          name: "Homemade Cheese & Potato Pie",
          description: "Our beloved house specialty: comforting creamy mature cheddar and sliced potato bake, served warm with crisp dressed garden salad.",
          tag: "House Special",
        },
        {
          name: "Warm Paninis & Toasties",
          description: "Melted cheese, ham, tuna crunch, and seasonal savoury fillings pressed golden and served with crisps and salad garnish.",
        },
        {
          name: "Steaming Jacket Potatoes",
          description: "Oven-baked potato with crispy skin and fluffy centre, filled with your choice of baked beans, melted cheddar, or homemade coleslaw.",
        },
      ],
    },
    {
      id: "cakes",
      title: "Cakes & Sweet Treats",
      subtitle: "Bespoke homemade sponges, golden scones, and tempting counter traybakes.",
      items: [
        {
          name: "Victoria Sponge with Fresh Cream",
          description: "Light golden sponge dusted with confectioner's sugar, layered with sweet strawberry conserve and whipped fresh cream.",
          tag: "Daily Bake",
        },
        {
          name: "Warm Fruit Scones & Clotted Cream",
          description: "Freshly baked fruit or plain scone served warm with thick clotted cream and rich strawberry preserve.",
          tag: "Tradition",
        },
        {
          name: "Artisan Counter Traybakes",
          description: "A rotating daily selection of gooey chocolate brownies, zesty lemon drizzle slices, and hearty oat flapjacks.",
        },
        {
          name: "Gluten-Free Sweet Selections",
          description: "Tasteful gluten-free cakes and treats prepared with care—ask our team for today's freshly baked options.",
          tag: "GF Available",
        },
      ],
    },
    {
      id: "drinks",
      title: "Coffee, Tea & Refreshments",
      subtitle: "Carefully pulled barista coffees, comforting teapots, and refreshing cold drinks.",
      items: [
        {
          name: "Barista Espresso Coffees",
          description: "Silky flat white, cappuccino, latte, and rich Americano brewed with quality roasted beans and textured fresh milk.",
        },
        {
          name: "Steaming Pot of Tea",
          description: "A proper British pot of tea for one or two, served with fresh cold milk and a small sweet biscuit on the side.",
          tag: "Essential",
        },
        {
          name: "Specialty Herbal & Fruit Infusions",
          description: "Fragrant loose leaf and pyramid infusions including fragrant Earl Grey, soothing chamomile, and invigorating peppermint.",
        },
        {
          name: "Luxury Hot Chocolate",
          description: "Rich velvety hot cocoa topped with fluffy whipped cream, chocolate dusting, and mini marshmallows.",
        },
        {
          name: "Chilled Sodas & Fruit Pressés",
          description: "Sparkling elderflower pressé, cloudy lemonade, traditional ginger beer, and pure fruit juices.",
        },
      ],
    },
  ],

  afternoonTea: {
    heading: "Make a little occasion of it.",
    eyebrow: "TRADITIONAL AFTERNOON TEA",
    supporting: "Gather over a pot of tea, savour a lovely spread, and enjoy a slower moment together.",
    description: "Served on traditional tiered stands with freshly cut finger sandwiches, homemade savoury bites such as warm sausage rolls, freshly baked scones with thick clotted cream and strawberry jam, and an assortment of dainty homemade cakes. Accompanied by unlimited tea or coffee.",
    features: [
      "Traditional three-tier presentation",
      "Handmade sandwiches & savoury bites",
      "Freshly baked scones with clotted cream & preserve",
      "Dainty daily cakes & sweet pastries",
      "Unlimited freshly brewed tea or coffee",
      "Gluten-free alternatives accommodated on request",
    ],
    bookingNote: "Available by advance enquiry. Please call us on 01902 884239 to discuss dates and dietary preferences.",
  },

  galleryPhotos: [
    {
      id: "photo-tea",
      title: "Traditional Afternoon Tea Spread",
      category: "Afternoon Tea",
      src: "/images/hero_afternoon_tea.jpg",
      alt: "Three-tier afternoon tea stand with finger sandwiches, warm scones, and delicate cakes served with a vintage teapot",
      caption: "Our celebrated tiered afternoon tea, featuring fresh finger sandwiches, homemade scones with clotted cream, and unlimited tea.",
      orientation: "landscape" as const,
    },
    {
      id: "photo-breakfast",
      title: "Full English Breakfast",
      category: "Breakfast",
      src: "/images/breakfast.jpg",
      alt: "Generous traditional Full English breakfast with sausages, crispy bacon, sunny eggs, beans, mushrooms, and toast",
      caption: "A hearty, generous full English cooked fresh to order with quality ingredients and warm buttered toast.",
      orientation: "landscape" as const,
    },
    {
      id: "photo-blt",
      title: "Signature BLT on Bloomer Bread",
      category: "Café Favourites",
      src: "/images/sandwich_blt.jpg",
      alt: "Freshly prepared BLT sandwich on thick rustic bloomer bread served with kettle crisps and garden salad",
      caption: "Thick-cut bacon, crisp lettuce, and ripe tomatoes on granary bloomer, served with kettle crisps and fresh salad.",
      orientation: "landscape" as const,
    },
    {
      id: "photo-cakes",
      title: "Fresh Homemade Cake Counter",
      category: "Cakes & Bakes",
      src: "/images/cakes_counter.jpg",
      alt: "Victoria sponge, warm scones, and daily traybakes on a rustic wooden cake counter",
      caption: "Our counter display of freshly baked Victoria sponges, golden fruit scones, and daily handcrafted traybakes.",
      orientation: "landscape" as const,
    },
    {
      id: "photo-drinks",
      title: "Artisan Coffee & Loose Leaf Tea",
      category: "Hot Drinks",
      src: "/images/coffee_and_tea.jpg",
      alt: "Velvety flat white with latte art beside a steaming glass teapot with loose leaf tea",
      caption: "Carefully extracted barista coffees and proper pots of steaming tea served in comfortable, relaxed surroundings.",
      orientation: "landscape" as const,
    },
    {
      id: "photo-pie",
      title: "Homemade Cheese & Potato Pie",
      category: "Comfort Food",
      src: "/images/cheese_potato_pie.jpg",
      alt: "Slice of golden baked homemade cheese and potato pie served with fresh crisp salad",
      caption: "A comforting local favourite—hearty homemade cheese and potato pie baked until golden brown and bubbling.",
      orientation: "landscape" as const,
    },
    {
      id: "photo-interior",
      title: "Our Warm & Welcoming Café",
      category: "Atmosphere",
      src: "/images/cafe_interior.jpg",
      alt: "Cozy interior of Mo & Ja's coffee shop with wooden tables, soft sage green walls, and welcoming ambiance",
      caption: "A quiet, friendly neighbourhood nook in The Straits where everyone is warmly welcomed, including your dogs.",
      orientation: "landscape" as const,
    },
  ] as GalleryPhoto[],

  reviews: [
    {
      id: "rev-1",
      reviewer: "Local Visitor",
      date: "Recent Tripadvisor Review",
      title: "A true hidden gem in Dudley",
      quote: "What a lovely, welcoming little place! The afternoon tea was absolutely incredible—so generous, fresh, and beautifully presented with unlimited tea. The staff couldn't do enough for us.",
      source: "Tripadvisor",
      verifiedHighlight: "Afternoon Tea & Generous Portions",
    },
    {
      id: "rev-2",
      reviewer: "Regular Guest",
      date: "Customer Review",
      title: "Best BLT and lovely atmosphere",
      quote: "Popped in for breakfast and had the BLT sandwich with proper crisps and a lovely salad. The cafe is spotlessly clean, cozy, and the owners make you feel right at home from the moment you walk through the door.",
      source: "Tripadvisor",
      verifiedHighlight: "Warm Hospitality & Fresh Food",
    },
    {
      id: "rev-3",
      reviewer: "Weekend Patron",
      date: "Customer Feedback",
      title: "Dog friendly and delightful cakes",
      quote: "So refreshing to find an independent coffee shop where you can sit quietly, have a fabulous cup of coffee, and enjoy a warm scone with clotted cream. Bonus that our dog was treated like royalty!",
      source: "Tripadvisor",
      verifiedHighlight: "Dog-Friendly & Delicious Bakes",
    },
  ],
};
