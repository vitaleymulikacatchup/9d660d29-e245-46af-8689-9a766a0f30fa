"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Award, Coffee, Heart, HelpCircle, Sparkles, Star, Zap, Instagram, Facebook, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSizeMediumTitles"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Bakalaka"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Order Now", href: "#order" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="Bakalaka Coffee"
          description="Discover artisanal coffee crafted with passion. From single-origin beans to specialty drinks, every cup tells a story of quality and tradition."
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ijsrf2",              imageAlt: "Bakalaka specialty coffee with latte art"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4tra4z",              imageAlt: "Expert barista preparing espresso shot"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=91vxqg",              imageAlt: "Cozy Bakalaka coffee shop atmosphere"
            }
          ]}
          buttons={[
            { text: "Explore Menu", href: "#menu" },
            { text: "Visit Us", href: "#contact" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          tagIcon={Coffee}
          tagAnimation="blur-reveal"
          title="Passion for Perfect Coffee"
          description="Founded in 2018, Bakalaka started as a dream to bring world-class coffee to our community. Today, we source the finest single-origin beans from sustainable farms across the globe."
          subdescription="Our dedicated team of baristas undergoes continuous training to master the art of espresso, pour-overs, and specialty drinks. Every cup reflects our commitment to excellence."
          icon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lzigrx"
          imageAlt="Bakalaka Coffee team"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySeven
          title="Why Choose Bakalaka"
          description="We believe exceptional coffee comes from attention to detail, quality ingredients, and genuine care for our customers."
          tag="What Sets Us Apart"
          tagIcon={Award}
          tagAnimation="slide-up"
          features={[
            {
              id: "feature-1",              title: "Single-Origin Excellence",              descriptions: [
                "Carefully sourced beans from renowned coffee regions worldwide",                "Direct relationships with sustainable farms and roasters"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m8nxlt",              imageAlt: "specialty single origin coffee beans roasted"
            },
            {
              id: "feature-2",              title: "Cozy Atmosphere",              descriptions: [
                "Thoughtfully designed space for work, meetings, or relaxation",                "Welcoming environment that celebrates community"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4pv0pw",              imageAlt: "cozy coffee shop wood furniture seating"
            },
            {
              id: "feature-3",              title: "Expert Baristas",              descriptions: [
                "Skilled professionals passionate about coffee craftsmanship",                "Continuous training in advanced brewing techniques"
              ],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g1ux17",              imageAlt: "professional barista latte art techniques"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "Learn More", href: "#about" }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Signature Drinks"
          description="Explore our carefully curated selection of premium coffee beverages, each crafted to perfection."
          tag="Featured Menu"
          tagIcon={Zap}
          tagAnimation="opacity"
          products={[
            {
              id: "cappuccino",              name: "Cappuccino Classico",              price: "$5.50",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7fax7e",              imageAlt: "Cappuccino with perfect latte art",              initialQuantity: 1
            },
            {
              id: "americano",              name: "Pure Americano",              price: "$4.00",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=g71avr",              imageAlt: "Bold americano espresso shot",              initialQuantity: 1
            },
            {
              id: "latte",              name: "Signature Latte",              price: "$5.75",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=cjplaw",              imageAlt: "Creamy signature latte",              initialQuantity: 1
            },
            {
              id: "espresso",              name: "Double Espresso",              price: "$3.50",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7i5yj6",              imageAlt: "Rich double espresso",              initialQuantity: 1
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "View Full Menu", href: "#menu" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Coffee Enthusiasts"
          description="Hear from our customers about their experience at Bakalaka Coffee."
          tag="Customer Stories"
          tagIcon={Heart}
          tagAnimation="slide-up"
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Mitchell",              role: "Regular Customer",              testimonial: "Bakalaka has become my daily sanctuary. The coffee is exceptional, and the team always remembers my order. A true gem in our community!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ivk9pw",              imageAlt: "Sarah Mitchell",              icon: Star
            },
            {
              id: "testimonial-2",              name: "James Chen",              role: "Coffee Connoisseur",              testimonial: "The single-origin beans here rival specialty cafés in major cities. Their Ethiopian Yirgacheffe is absolutely sublime.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ldh9lk",              imageAlt: "James Chen",              icon: Star
            },
            {
              id: "testimonial-3",              name: "Emma Rodriguez",              role: "Creative Professional",              testimonial: "Perfect workspace, amazing coffee, and wonderful people. I spend half my creative time here. Bakalaka inspires me.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ydvtfg",              imageAlt: "Emma Rodriguez",              icon: Star
            },
            {
              id: "testimonial-4",              name: "Michael Thompson",              role: "Business Owner",              testimonial: "I bring all my clients here. The ambiance and quality of service set the perfect tone for business conversations.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=mwsw6s",              imageAlt: "Michael Thompson",              icon: Star
            }
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about Bakalaka Coffee, our menu, and services."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="opacity"
          faqs={[
            {
              id: "faq-1",              title: "Do you offer espresso-based drinks?",              content: "Absolutely! We specialize in espresso-based beverages including cappuccinos, lattes, macchiatos, and cortados. All made with precision and care by our expert baristas."
            },
            {
              id: "faq-2",              title: "Can I order coffee beans to take home?",              content: "Yes! We offer a selection of our single-origin beans for retail purchase. Our team can recommend beans based on your brewing method and taste preferences."
            },
            {
              id: "faq-3",              title: "Do you have seating for remote work?",              content: "We'd love to be your work-from-coffee-shop! We have comfortable seating, reliable WiFi, and outlets throughout the café. Just grab a drink and get settled."
            },
            {
              id: "faq-4",              title: "Are there vegan and dairy-free options?",              content: "Yes! We offer oat milk, almond milk, and coconut milk alternatives for all our drinks. Ask our baristas for recommendations on vegan pastry options as well."
            },
            {
              id: "faq-5",              title: "What are your opening hours?",              content: "We're open Monday-Friday 7am-7pm, Saturday 8am-6pm, and Sunday 9am-5pm. Extended hours on weekends and holidays—check our social media for updates."
            },
            {
              id: "faq-6",              title: "Do you offer catering for events?",              content: "Absolutely! We provide coffee catering for meetings, events, and celebrations. Contact us at least 48 hours in advance to discuss your needs."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Experience Bakalaka?"
          ctaDescription="Join us for a cup of perfectly crafted coffee. Visit our café, order online, or get in touch with any questions."
          ctaButton={{ text: "Contact Us", href: "mailto:hello@bakalaka.com" }}
          ctaIcon={Coffee}
          useInvertedBackground={true}
          animationType="opacity"
          faqs={[
            {
              id: "contact-faq-1",              title: "Location & Hours",              content: "Visit us at 425 Oak Street, Downtown. Open Mon-Fri 7am-7pm, Sat 8am-6pm, Sun 9am-5pm. Free parking available on-site."
            },
            {
              id: "contact-faq-2",              title: "Phone & Email",              content: "Call us at (555) 123-4567 or email hello@bakalaka.com. We're always happy to hear from you!"
            },
            {
              id: "contact-faq-3",              title: "Private Events",              content: "Have a special occasion? We host private coffee tastings and events. Contact our events team for custom packages."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Bakalaka Coffee"
          copyrightText="© 2025 Bakalaka Coffee. All rights reserved. Crafted with passion and precision."
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/bakalakacoffee",              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/bakalakacoffee",              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/bakalakacoffee",              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}