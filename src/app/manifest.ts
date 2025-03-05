import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "VZOR AI",
        short_name: "VZOR",
        description: "A Progressive Web App for VZOR AI project",
        start_url: "/",
        display: "standalone",
        background_color: "#08091D",
        theme_color: "#08091D",
        icons: [
            {
                src: "/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
