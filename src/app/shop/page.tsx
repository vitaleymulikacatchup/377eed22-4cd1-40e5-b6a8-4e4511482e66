"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import ProductCatalog from "@/components/ecommerce/productCatalog/ProductCatalog";
import { useProductCatalog } from "@/hooks/useProductCatalog";
import { useState } from "react";

export default function ShopPage() {
    const {
        products,
        isLoading,
        search,
        setSearch,
        filters,
    } = useProductCatalog({ basePath: "/shop" });

    const [cartOpen, setCartOpen] = useState(false);

    if (isLoading) {
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
                    <div id="navbar" data-section="navbar">
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
                            button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                        />
                    </div>
                    <main className="min-h-screen flex items-center justify-center pt-20">
                        <p className="text-foreground">Loading products...</p>
                    </main>
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
                <div id="navbar" data-section="navbar">
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
                        button={{ text: "Cart", onClick: () => setCartOpen(true) }}
                    />
                </div>
                <div id="productCatalog" data-section="productCatalog">
                    <ProductCatalog
                        layout="page"
                        products={products}
                        searchValue={search}
                        onSearchChange={setSearch}
                        searchPlaceholder="Search products..."
                        filters={filters}
                        emptyMessage="No products found"
                    />
                </div>
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
