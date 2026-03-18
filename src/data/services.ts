export interface ServiceDetail {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    category: "Interior" | "Exterior";
    ctaText: string;

    // Media configuration for the main Services List page
    listMediaType: "video" | "video-single" | "mixed" | "image";
    listMedia?: string;
    listBeforeMedia?: string;
    listAfterMedia?: string;
    listPoster?: string;

    // Media configuration for the Individual Service Page Hero
    heroImage: string;

    // Gallery arrays
    galleryImages: string[];
    galleryVideos: string[];
}

export const SERVICES: ServiceDetail[] = [
    {
        id: "interior-renewal",
        title: "Interior Renewal",
        shortDescription: "Transform your living spaces with precision and care.",
        longDescription: "From full room repaints to delicate trim work, we breathe new life into your home's interior. Our comprehensive interior renewal service covers everything from surface preparation to the final coat, ensuring flawless finishes that elevate your daily living experience. Whether you're refreshing a single room or redesigning your entire home's color palette, our team works meticulously to minimize disruption while delivering stunning, precise results.",
        category: "Interior",
        ctaText: "Request an Interior Consultation",
        listMediaType: "video",
        listBeforeMedia: "/images/services/WalkthroughlivingroomBefore.mp4",
        listAfterMedia: "/images/services/WalkthroughlivingroomAfter.mp4",
        heroImage: "/images/transformations/room-1-after.jpg",
        galleryImages: [],
        galleryVideos: ["/images/services/LivingroomrepaintAfter2.mp4", "/images/services/WalkthroughlivingroomAfter.mp4", "/images/services/Interior3.mp4"]
    },
    {
        id: "kitchen-cabinetry",
        title: "Kitchen Cabinetry & Repainting",
        shortDescription: "Update the heart of your home without the cost of a full remodel.",
        longDescription: "Our expert cabinet refinishing provides a factory-smooth, durable finish. The kitchen is the centerpiece of any home, and outdated cabinets can drag down the entire space. Instead of a costly and time-consuming full replacement, our specialized cabinetry painting process restores and modernizes your existing woodwork. We use premium, high-durability coatings designed specifically for high-traffic cabinet surfaces, resulting in a finish that looks and feels brand new.",
        category: "Interior",
        ctaText: "Get a Kitchen Estimate",
        listMediaType: "mixed",
        listPoster: "/images/services/KitchenrepaintBefore2.jpg",
        listAfterMedia: "/images/services/KitchenrepaintAfter2.mp4",
        heroImage: "/images/services/kitchen-cabinetry-hero.jpg",
        galleryImages: [],
        galleryVideos: ["/images/services/KitchenGallery1.mp4", "/images/services/KitchenGallery2.mp4", "/images/services/KitchenGallery3.mp4"]
    },
    {
        id: "drywall-repair",
        title: "Drywall Repair & Finishing",
        shortDescription: "Flawless walls are the foundation of a perfect paint job.",
        longDescription: "We handle all levels of drywall repair, ensuring seamless textures and smooth surfaces. A beautiful paint job is only as good as the canvas it's painted on. Our drywall experts seamlessly repair holes, cracks, water damage, and uneven textures. We take pride in our rigorous preparation processes, blending the repair perfectly into the surrounding wall so that once painted, the damage is completely invisible.",
        category: "Interior",
        ctaText: "Schedule Drywall Service",
        listMediaType: "video-single",
        listMedia: "/images/services/DrywallRepairandRepaint.mp4", // Mapping listMedia to listBeforeMedia for the interface temporarily if needed, but we used listMedia in Services.tsx
        listBeforeMedia: "/images/services/DrywallRepairandRepaint.mp4", // Using this as the single video source
        heroImage: "/images/services/drywall-repair-hero.jpg",
        galleryImages: [],
        galleryVideos: ["/images/services/DrywallRepairFinish1.mp4", "/images/services/DrywallRepairFinish2.mp4", "/images/services/DrywallRepairFinish3.mp4"]
    },
    {
        id: "garage-finishing",
        title: "Garage Finishing",
        shortDescription: "Elevate your functional space.",
        longDescription: "From durable floor coatings to crisp wall finishes, we create clean, bright, and resilient garage environments. The garage is often a forgotten space, but a professional finish can transform it into a functional, clean extension of your home. We provide comprehensive wall painting and repair, alongside durable surface treatments designed to withstand the unique demands of a garage environment.",
        category: "Interior",
        ctaText: "Upgrade Your Garage",
        listMediaType: "video",
        listBeforeMedia: "/images/services/GarageRepaintbefore.mp4",
        listAfterMedia: "/images/services/GarageRepaintAfter.mp4",
        heroImage: "/images/services/garage-finishing-hero.jpg",
        galleryImages: [],
        galleryVideos: ["/images/services/GarageFinish1.mp4", "/images/services/GarageRepaintAfter.mp4"]
    },
    {
        id: "exterior-restoration",
        title: "Exterior Restoration",
        shortDescription: "Protect and beautify your home's exterior against the elements.",
        longDescription: "We utilize premium, weather-resistant products for lasting curb appeal. Your home's exterior is its first line of defense against the elements and its defining feature from the street. Our exterior restoration services go beyond simply applying paint; we meticulously wash, scrape, repair, and prime surfaces to ensure maximum adhesion and longevity. We use industry-leading, advanced coatings designed to withstand UV damage and severe weather.",
        category: "Exterior",
        ctaText: "Request an Exterior Quote",
        listMediaType: "image",
        listBeforeMedia: "/images/services/ExteriorRestorationBefore.jpg",
        listAfterMedia: "/images/services/ExteriorRestorationAfter.jpg",
        heroImage: "/images/transformations/exterior-1-after.jpg",
        galleryImages: [],
        galleryVideos: [
            "/images/services/exteriorrestore1.mp4",
            "/images/services/exteriorrestore2.mp4",
            "/images/services/exteriorrestore3.mp4"
        ]
    },
    {
        id: "deck-revival",
        title: "Deck Revival",
        shortDescription: "Restore the natural beauty of your outdoor living spaces.",
        longDescription: "Our comprehensive washing, staining, and sealing processes protect wood and enhance its grain. Decks bear the brunt of sun, rain, and foot traffic, quickly losing their luster if not properly maintained. Our deck revival service strips away years of wear, deeply cleaning the wood before applying premium stains and sealants that nourish the timber and protect it from rot, splintering, and fading.",
        category: "Exterior",
        ctaText: "Get a Deck Revival Quote",
        listMediaType: "image",
        listBeforeMedia: "/images/services/DeckRevivalBefore.jpg",
        listAfterMedia: "/images/services/DeckRevivalAfter.jpg",
        heroImage: "/images/transformations/deck-1-after.jpg",
        galleryImages: [],
        galleryVideos: [
            "/images/services/DeckRestore1.mp4",
            "/images/services/DeckRestore2.mp4",
            "/images/services/DeckRestore3.mp4"
        ]
    }
];

export const getServiceById = (id: string) => {
    return SERVICES.find(service => service.id === id);
};
