import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArrowLeft from "lucide-react/dist/esm/icons/arrow-left";
import React, { useEffect } from "react";

type MediaType = "image" | "video";

interface ProjectTimelineItem {
    id: string;
    type: MediaType;
    src: string;
    label: string;
}

interface ProjectData {
    id: string;
    title: string;
    description: string;
    timeline: ProjectTimelineItem[];
}

const PROJECTS_DATA: Record<string, ProjectData> = {
    "exterior-shutter-repaint": {
        id: "exterior-shutter-repaint",
        title: "EXTERIOR SHUTTER REPAINT",
        description: "A complete refresh of exterior shutters, bringing new life to the facade.",
        timeline: [
            { id: "1", type: "image", src: "/images/projects/FeatureProjectSpecificExteriorShutterRepaintBegin.jpg", label: "Exterior Shutter Repaint 1" },
            { id: "final", type: "image", src: "/images/projects/FeatureProjectSpecificExteriorShutterRepaintFinal.jpg", label: "Exterior Shutter Repaint 2" },
        ]
    },
    "bathroom-renewal": {
        id: "bathroom-renewal",
        title: "BATHROOM RENEWAL",
        description: "An elegant, modern renewal of the bathroom space from start to finish.",
        timeline: [
            { id: "1", type: "video", src: "/images/projects/FeatureProjectSpecificBathroomRenewalBegin.mp4", label: "Bathroom Renewal 1" },
            { id: "final", type: "video", src: "/images/projects/FeatureProjectSpecificBathroomRenewalFinal.mp4", label: "Bathroom Renewal 2" },
        ]
    },
    "commercial-building": {
        id: "commercial-building",
        title: "COMMERCIAL BUILDING",
        description: "A large-scale commercial building project showcasing steady, high-quality progress.",
        timeline: [
            { id: "1", type: "image", src: "/images/projects/FeatureProjectSpecificCommercialBuildingBegin.jpg", label: "Commercial Building 1" },
            { id: "2", type: "image", src: "/images/projects/FeatureProjectSpecificCommercialBuildingProgress1.jpg", label: "Commercial Building 2" },
            { id: "3", type: "image", src: "/images/projects/FeatureProjectSpecificCommercialBuildingProgress2.jpg", label: "Commercial Building 3" },
            { id: "final", type: "image", src: "/images/projects/FeatureProjectSpecificCommercialBuildingFinal.jpg", label: "Commercial Building 4" },
        ]
    },
    "home-complete-repaint": {
        id: "home-complete-repaint",
        title: "HOME COMPLETE REPAINT",
        description: "A comprehensive interior and exterior transformation tracking each phase of painting and finishing.",
        timeline: [
            { id: "1", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintBegin.jpg", label: "Home Complete Repaint 1" },
            { id: "2", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintProgress1.jpg", label: "Home Complete Repaint 2" },
            { id: "3", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintProgress2.jpg", label: "Home Complete Repaint 3" },
            { id: "4", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintProgress3.jpg", label: "Home Complete Repaint 4" },
            { id: "5", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintProgress5.jpg", label: "Home Complete Repaint 5" },
            { id: "6", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintProgress6.jpg", label: "Home Complete Repaint 6" },
            { id: "7", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintProgress7.jpg", label: "Home Complete Repaint 7" },
            { id: "final", type: "image", src: "/images/projects/FeatureProjectSpecificHomeCompleteRepaintFinal.jpg", label: "Home Complete Repaint 8" },
        ]
    },
    "kitchen-cabinetry": {
        id: "kitchen-cabinetry",
        title: "KITCHEN CABINETRY",
        description: "Detailed step-by-step restoration and refinishing of kitchen cabinetry.",
        timeline: [
            { id: "1", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryBegin.jpg", label: "Kitchen Cabinetry 1" },
            { id: "2", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress1.jpg", label: "Kitchen Cabinetry 2" },
            { id: "3", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress2.jpg", label: "Kitchen Cabinetry 3" },
            { id: "4", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress3.jpg", label: "Kitchen Cabinetry 4" },
            { id: "5", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress4.jpg", label: "Kitchen Cabinetry 5" },
            { id: "6", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress5.jpg", label: "Kitchen Cabinetry 6" },
            { id: "7", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress6.jpg", label: "Kitchen Cabinetry 7" },
            { id: "8", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress7.jpg", label: "Kitchen Cabinetry 8" },
            { id: "9", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryProgress8.jpg", label: "Kitchen Cabinetry 9" },
            { id: "final", type: "image", src: "/images/projects/FeatureProjectSpecificKitchenCabinetryFinal.jpg", label: "Kitchen Cabinetry 10" },
        ]
    },
    "porch-revival": {
        id: "porch-revival",
        title: "PORCH REVIVAL",
        description: "Bringing structural integrity and fresh color back to an outdoor porch.",
        timeline: [
            { id: "1", type: "image", src: "/images/projects/FeatureProjectSpecificPorchRevivalBegin.jpg", label: "Porch Revival 1" },
            { id: "2", type: "image", src: "/images/projects/FeatureProjectSpecificPorchRevivalProgress1.jpg", label: "Porch Revival 2" },
            { id: "3", type: "image", src: "/images/projects/FeatureProjectSpecificPorchRevivalProgress2.jpg", label: "Porch Revival 3" },
            { id: "4", type: "image", src: "/images/projects/FeatureProjectSpecificPorchRevivalProgress3.jpg", label: "Porch Revival 4" },
            { id: "5", type: "image", src: "/images/projects/FeatureProjectSpecificPorchRevivalProgress5.jpg", label: "Porch Revival 5" },
        ]
    }
};

export default function ProjectDetail() {
    const { projectId } = useParams();
    const project = projectId ? PROJECTS_DATA[projectId] : null;

    if (!project) {
        return (
            <div className="min-h-screen bg-brand-light flex items-center justify-center pt-24">
                <div className="text-center">
                    <h1 className="text-display text-4xl uppercase mb-6">Project Not Found</h1>
                    <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-brand-accent transition-colors">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-light font-sans text-brand-ink selection:bg-brand-accent selection:text-white pb-32">
            <Header />

            {/* Hero Section */}
            <section className="pt-48 pb-24 px-6 md:px-12 max-w-[1800px] mx-auto bg-brand-ink text-white relative">
                <div className="max-w-4xl">
                    <Link to="/#featured-projects" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold mb-12 hover:text-brand-accent transition-colors opacity-60 hover:opacity-100">
                        <ArrowLeft size={14} /> Back to Projects
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-display text-5xl md:text-7xl uppercase mb-8"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl font-light max-w-2xl text-white/80 leading-relaxed"
                    >
                        {project.description}
                    </motion.p>
                </div>
            </section>

            {/* Project Timeline */}
            <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
                <div className="flex flex-col gap-24">
                    {project.timeline.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group relative"
                        >
                            <div className="mb-6 flex items-end gap-6">
                                <span className="text-[12px] md:text-[14px] font-bold tracking-widest uppercase text-brand-ink/40 w-12 border-b border-brand-ink/20 pb-2">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <h3 className="text-xl md:text-2xl font-light uppercase tracking-wide pb-2">
                                    {item.label}
                                </h3>
                            </div>

                            <div className="w-full relative bg-gray-100 overflow-hidden shadow-sm">
                                {item.type === "image" ? (
                                    <img
                                        src={item.src}
                                        alt={`${project.title} - ${item.label}`}
                                        loading="lazy"
                                        className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                                    />
                                ) : (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-auto max-h-[85vh] object-contain mx-auto"
                                    >
                                        <source src={item.src} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
