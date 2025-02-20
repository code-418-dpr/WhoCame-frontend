import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "WhoCame",
        short_name: "WhoCame",
        description: "A Progressive Web App for WhoCame project",
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
