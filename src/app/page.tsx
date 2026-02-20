"use client"

import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureProcessSteps from '@/components/sections/feature/FeatureProcessSteps';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Flower2, Leaf, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="fluid"
      cardStyle="glass-elevated"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="extrabold"
    >
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

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Artisan Floral Creations"
          description="Handcrafted flower arrangements for every occasion. Discover the beauty of premium blooms delivered with passion and precision."
          tag="Welcome to Pandas Studio"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "fluid" }}
          imageSrc="https://img.b2bpic.net/free-photo/beautiful-bouquet-lilacs-roses-standing-rustic-hence-vase_114579-1849.jpg"
          imageAlt="Premium floral arrangement showcasing Pandas Studio artistry"
          buttons={[
            { text: "Explore Collections", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Collections"
          description="Our handpicked selection of premium floral arrangements, each thoughtfully designed to celebrate special moments."
          tag="Signature Designs"
          tagIcon={Flower2}
          tagAnimation="slide-up"
          textboxLayout="default"
          products={[
            {
              id: "1",              name: "Romantic Rose Ensemble",              price: "$89.99",              variant: "Premium Red • 24 Stems",              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-beautifully-bloomed-colorful-rose-flowers_23-2149005526.jpg",              imageAlt: "Romantic rose arrangement with premium red roses"
            },
            {
              id: "2",              name: "Lavender Dreams",              price: "$64.99",              variant: "Purple Lavender • Dried",              imageSrc: "https://img.b2bpic.net/free-photo/flowers-bouquet-package-paper-marble-table_23-2148043895.jpg",              imageAlt: "Beautiful dried lavender bouquet arrangement"
            },
            {
              id: "3",              name: "Garden Paradise Mix",              price: "$79.99",              variant: "Multicolor • 30+ Blooms",              imageSrc: "https://img.b2bpic.net/free-photo/woman-holding-bouquet-yellow-orange-dahliason-light-background_169016-39443.jpg",              imageAlt: "Vibrant mixed flower arrangement with seasonal blooms"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
          buttons={[
            { text: "Browse All", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Our Studio Story"
          description="At Pandas, we believe every flower tells a story. For over a decade, we've been crafting memorable floral experiences with sustainability and artistry at our core."
          tag="About Pandas"
          tagIcon={Leaf}
          tagAnimation="slide-up"
          imageSrc="https://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-flowers_23-2149247537.jpg"
          imageAlt="Pandas Flowers Studio workspace with artisan florist at work"
          useInvertedBackground={true}
          buttons={[
            { text: "Our Process", href: "process" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="process" data-section="process">
        <FeatureProcessSteps
          title="Our Creative Process"
          description="From selection to delivery, we ensure every arrangement meets our exacting standards of beauty and freshness."
          tag="How We Work"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          steps={[
            {
              number: "01",              title: "Consultation & Design",              tag: "Personal Touch",              description: "We listen to your vision and create custom designs that perfectly capture the emotion and occasion you want to express."
            },
            {
              number: "02",              title: "Sourcing Premium Blooms",              tag: "Quality First",              description: "We hand-select the freshest seasonal flowers from trusted growers, ensuring every petal meets our high standards."
            },
            {
              number: "03",              title: "Artisan Arrangement",              tag: "Expert Crafting",              description: "Our skilled florists craft each arrangement with precision and passion, using time-honored techniques and modern artistry."
            },
            {
              number: "04",              title: "Careful Delivery",              tag: "On Time",              description: "We deliver your arrangement fresh and beautifully presented, ready to brighten any space or celebration."
            }
          ]}
          stepsAnimation="slide-up"
          useInvertedBackground={false}
          buttons={[
            { text: "Order Now", href: "contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Clients Say"
          description="Real experiences from people who trust Pandas for their most important moments."
          tag="Customer Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarahj_events",              testimonial: "Pandas created the most stunning arrangement for our wedding. Every detail was perfection. Highly recommend!",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg",              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",              name: "Michael Chen",              handle: "@mchen_designs",              testimonial: "The quality of flowers and craftsmanship is unmatched. I've ordered multiple times and never been disappointed.",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",              imageAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Emma Rodriguez",              handle: "@emmar_boutique",              testimonial: "Amazing service and beautiful arrangements. They made my corporate event memorable with their floral designs.",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",              name: "David Park",              handle: "@davidpark_photo",              testimonial: "Fast delivery, fresh flowers, and exceptional creativity. Pandas is my go-to for all my floral needs.",              rating: 5,
              imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",              imageAlt: "David Park"
            }
          ]}
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[
            { text: "See More Reviews", href: "#" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Ready to order? Have questions about our arrangements? We'd love to hear from you. Contact us today to start creating your perfect floral moment."
          useInvertedBackground={false}
          imageSrc="https://img.b2bpic.net/free-photo/beautiful-fresh-flowers-flora-shop-work-space-business_53876-23097.jpg"
          imageAlt="Beautiful flowers arranged on studio workspace"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputs={[
            {
              name: "name",              type: "text",              placeholder: "Your Name",              required: true
            },
            {
              name: "email",              type: "email",              placeholder: "Your Email",              required: true
            }
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your floral vision...",            rows: 5,
            required: true
          }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Pandas"
          leftLink={{
            text: "Privacy Policy",            href: "#"
          }}
          rightLink={{
            text: "Terms & Conditions",            href: "#"
          }}
        />
      </div>
    </ThemeProvider>
  );
}