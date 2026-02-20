"use client";

import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import { useBlogPosts } from "@/hooks/useBlogPosts";

export default function BlogPage() {
    const { posts, isLoading } = useBlogPosts();

    return (
        <ThemeProvider
            defaultButtonVariant="bounce-effect"
            defaultTextAnimation="reveal-blur"
            borderRadius="pill"
            contentWidth="medium"
            sizing="mediumLargeSizeLargeTitles"
            background="circleGradient"
            cardStyle="glass-elevated"
            primaryButtonStyle="diagonal-gradient"
            secondaryButtonStyle="radial-glow"
            headingFontWeight="extrabold"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarStyleFullscreen
                        navItems={[
                            { name: "Home", id: "hero" },
                            { name: "Products", id: "products" },
                            { name: "About", id: "about" },
                            { name: "Contact", id: "contact" },
                            { name: "Gallery", id: "testimonials" }
                        ]}
                        brandName="Pandas"
                        bottomLeftText="Artisan Floral Design"
                        bottomRightText="hello@pandasflowers.com"
                    />
                </div>

                {isLoading ? (
                    <div className="w-content-width mx-auto py-20 text-center">
                        <p className="text-foreground">Loading posts...</p>
                    </div>
                ) : (
                    <div id="blog" data-section="blog">
                        <BlogCardThree
                            blogs={posts}
                            title="Featured Articles"
                            description="Explore our latest insights and floral design inspiration"
                            tag="Blog"
                            textboxLayout="default"
                            useInvertedBackground={false}
                            animationType="slide-up"
                            carouselMode="buttons"
                        />
                    </div>
                )}

                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Pandas"
                        leftLink={{ text: "Privacy Policy", href: "#" }}
                        rightLink={{ text: "Terms & Conditions", href: "#" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
