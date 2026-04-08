"use client";

import { useEffect, useRef, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  CreditCard,
  Smartphone,
  Accessibility,
  Store,
  ShoppingBag,
  Globe,
  Heart,
  Award,
  Users,
  ExternalLink,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      ".section-fade, .feature-card-fade, .gallery-card, .hero-content"
    );
    animatedElements.forEach((el) => observer.observe(el));

    handleScroll(); // Initial check

    // Fallback: Ensure hero is visible if the observer misses it on load
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      setTimeout(() => heroContent.classList.add("is-visible"), 100);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const galleryImages = [
    {
      url: "https://raw.createusercontent.com/09a9eac2-6c27-4079-bdb0-0612d6b48d11/",
      title: "Our Storefront",
      description: "Welcome to Souvenirs Australiana",
    },
    {
      url: "https://raw.createusercontent.com/89a548c3-2ec0-420b-af97-f824dcc810b2/",
      title: "Australian Plush Toys",
      description: "Authentic koalas and kangaroos",
    },
    {
      url: "https://raw.createusercontent.com/977ef0be-5fea-4ac5-baee-6f2ca6d95625/",
      title: "Aboriginal Art",
      description: "Traditional boomerangs & artifacts",
    },
    {
      url: "https://raw.createusercontent.com/8619dba2-2312-4fac-b8fd-08ac5d59ed0c/",
      title: "Australian Apparel",
      description: "Premium t-shirts & clothing",
    },
    {
      url: "https://raw.createusercontent.com/7f9c3f06-293c-459e-b8ee-1bc15b5d8568/",
      title: "Melbourne Souvenirs",
      description: "Iconic bags & accessories",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#FAFAF5] relative">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          scrollY > 50
            ? "bg-white shadow-lg border-[#D4A574]/10 h-16"
            : "bg-[#1A1A1A]/40 backdrop-blur-md border-transparent h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <a href="/" className="flex items-center gap-3 group">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:rotate-6 ${
                  scrollY > 50
                    ? "bg-gradient-to-br from-[#D4A574] to-[#A67C52]"
                    : "bg-white/10 backdrop-blur-md"
                }`}
              >
                <Store
                  className={`w-5 h-5 transition-colors duration-500 ${
                    scrollY > 50 ? "text-white" : "text-[#D4A574]"
                  }`}
                />
              </div>
              <div>
                <h1
                  className={`text-lg font-bold font-cormorant tracking-wide transition-colors duration-500 ${
                    scrollY > 50 ? "text-[#1A1A1A]" : "text-white"
                  }`}
                >
                  Souvenirs Australiana
                </h1>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "About", href: "/#about" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Visit", href: "/#location" },
                { label: "Privacy", href: "/privacy" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm transition-colors duration-300 font-light tracking-wide ${
                    scrollY > 50
                      ? "text-[#4A4A4A] hover:text-[#D4A574]"
                      : "text-white/80 hover:text-[#D4A574]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+61396500992"
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                  scrollY > 50
                    ? "bg-gradient-to-r from-[#D4A574] to-[#A67C52] text-white shadow-md hover:shadow-xl hover:shadow-[#D4A574]/30"
                    : "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className={`w-full h-full object-cover ${
                  index === activeImage ? "cinematic-video" : ""
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/85 via-[#1A1A1A]/70 to-[#1A1A1A]/90"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="hero-content opacity-0">
            <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-6 font-light">
              Authentic Australian Souvenirs
            </p>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-cormorant leading-tight tracking-tight">
              Souvenirs
              <br />
              Australiana
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-3 font-light max-w-2xl mx-auto leading-relaxed">
              Discover genuine Aboriginal art, quality Australian souvenirs, and
              unique Melbourne treasures
            </p>
            <p className="text-sm text-[#D4A574]/90 mb-12 tracking-wide">
              Established Since 1995
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/#gallery"
                className="bg-gradient-to-r from-[#D4A574] to-[#A67C52] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#D4A574]/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Explore Collection
                <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="/#location"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-[#D4A574]/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                Find Us
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeImage ? "w-12 bg-[#D4A574]" : "w-8 bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #1A1A1A 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-4 font-light section-fade">
              Our Story
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] font-cormorant mb-6 section-fade">
              Welcome to Melbourne's
              <br />
              Authentic Souvenir Destination
            </h2>
            <div className="w-20 h-0.5 bg-[#D4A574] mx-auto mb-8"></div>
            <p className="text-lg text-[#4A4A4A] font-light leading-relaxed max-w-3xl mx-auto section-fade">
              Located in the historic Nicholas Building on Swanston Street,
              Souvenirs Australiana has been Melbourne's trusted source for
              genuine Aboriginal art, quality Australian souvenirs, and unique
              gifts since 1995.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: "Premium Quality",
                description:
                  "Only authentic, Australian-made products from trusted artisans and suppliers",
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Local Heritage",
                description:
                  "Supporting Aboriginal artists and local craftspeople for nearly three decades",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Expert Service",
                description:
                  "Knowledgeable staff ready to help you find the perfect Australian memento",
              },
            ].map((item, index) => (
              <div key={index} className="text-center feature-card-fade">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FAFAF5] text-[#D4A574] mb-6 transform transition-all duration-500 group-hover:scale-110 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 font-cormorant">
                  {item.title}
                </h3>
                <p className="text-[#666] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-28 bg-[#FAFAF5]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-4 font-light">
              Our Collection
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] font-cormorant mb-6">
              Authentic Australian Treasures
            </h2>
            <div className="w-20 h-0.5 bg-[#D4A574] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aboriginal Art & Boomerangs",
                description:
                  "Genuine returning boomerangs with traditional dot painting designs, didgeridoos, and authentic Aboriginal artifacts handcrafted by indigenous artists",
                image:
                  "https://raw.createusercontent.com/977ef0be-5fea-4ac5-baee-6f2ca6d95625/",
              },
              {
                title: "Australian Plush Toys",
                description:
                  "Premium quality koalas, kangaroos, wombats, and other native Australian animals - perfect gifts for all ages",
                image:
                  "https://raw.createusercontent.com/89a548c3-2ec0-420b-af97-f824dcc810b2/",
              },
              {
                title: "Melbourne Souvenirs",
                description:
                  "Iconic Melbourne tote bags featuring Flinders Street Station, trams, and Australian flag designs on premium canvas",
                image:
                  "https://raw.createusercontent.com/7f9c3f06-293c-459e-b8ee-1bc15b5d8568/",
              },
              {
                title: "Australian Apparel",
                description:
                  "Vibrant t-shirts, hoodies, and clothing featuring Australian themes, flags, and iconic landmarks in premium fabrics",
                image:
                  "https://raw.createusercontent.com/8619dba2-2312-4fac-b8fd-08ac5d59ed0c/",
              },
              {
                title: "Gifts & Accessories",
                description:
                  "Keyrings, magnets, pencil cases, backpacks, and unique Australian-themed accessories for every occasion",
                image:
                  "https://raw.createusercontent.com/09a9eac2-6c27-4079-bdb0-0612d6b48d11/",
              },
              {
                title: "Traditional Crafts",
                description:
                  "Gold-plated decorative plates, rock and bone art, handcrafted wooden items, and other authentic Australian crafts",
                image:
                  "https://raw.createusercontent.com/89a548c3-2ec0-420b-af97-f824dcc810b2/",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="gallery-card group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 bg-white"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/95 via-[#1A1A1A]/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3 font-cormorant">
                    {product.title}
                  </h3>
                  <p className="text-sm text-white/90 font-light leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-4 font-light">
              Why Choose Us
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] font-cormorant mb-6">
              Your Shopping Experience
            </h2>
            <div className="w-20 h-0.5 bg-[#D4A574] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Store className="w-10 h-10" />,
                title: "Personal Service",
                description:
                  "Expert staff available to assist with product selection and gift recommendations",
              },
              {
                icon: <Accessibility className="w-10 h-10" />,
                title: "Accessible Entrance",
                description:
                  "Wheelchair-accessible entrance on ground floor for all visitors",
              },
              {
                icon: <CreditCard className="w-10 h-10" />,
                title: "Payment Options",
                description:
                  "Credit cards, debit cards accepted for your convenience",
              },
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: "Contactless Pay",
                description:
                  "NFC mobile payments and tap-to-pay options available",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-[#FAFAF5] hover:bg-white transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-[#D4A574]/20 group"
              >
                <div className="inline-flex items-center justify-center w-18 h-18 rounded-full bg-white text-[#D4A574] mb-6 transform transition-all duration-500 group-hover:scale-110 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3 font-cormorant">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#666] font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-28 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#D4A574] text-xs tracking-[0.4em] uppercase mb-4 font-light">
                Visit Our Store
              </p>
              <h2 className="text-5xl font-bold mb-12 font-cormorant">
                Visit Our Store
              </h2>

              <div className="space-y-10">
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#D4A574]/10 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 border border-[#D4A574]/20">
                      <MapPin className="w-6 h-6 text-[#D4A574]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 font-cormorant">
                      Address
                    </h3>
                    <p className="text-white/80 font-light leading-relaxed mb-3">
                      Shop 2a/37 Swanston St
                      <br />
                      Melbourne VIC 3000
                      <br />
                      Australia
                    </p>
                    <p className="text-[#D4A574] text-sm">
                      Floor G • Nicholas Building
                    </p>
                    <a
                      href="https://maps.app.goo.gl/9sLn4ne35KxSpJiZ9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#D4A574] text-sm mt-3 hover:text-white transition-colors duration-300"
                    >
                      Open in Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#D4A574]/10 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 border border-[#D4A574]/20">
                      <Phone className="w-6 h-6 text-[#D4A574]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-3 font-cormorant">
                      Contact
                    </h3>
                    <a
                      href="tel:+61396500992"
                      className="text-[#D4A574] text-xl hover:text-white transition-colors duration-300"
                    >
                      +61 3 9650 0992
                    </a>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#D4A574]/10 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 border border-[#D4A574]/20">
                      <Clock className="w-6 h-6 text-[#D4A574]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-5 font-cormorant">
                      Opening Hours
                    </h3>
                    <div className="space-y-3">
                      {[
                        { day: "Monday", hours: "10:00 AM - 6:30 PM" },
                        { day: "Tuesday", hours: "10:00 AM - 6:30 PM" },
                        { day: "Wednesday", hours: "10:00 AM - 6:30 PM" },
                        { day: "Thursday", hours: "10:00 AM - 6:30 PM" },
                        { day: "Friday", hours: "10:00 AM - 6:30 PM" },
                        { day: "Saturday", hours: "10:00 AM - 6:30 PM" },
                        { day: "Sunday", hours: "10:00 AM - 6:30 PM" },
                      ].map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2.5 border-b border-white/5 hover:border-[#D4A574]/30 transition-colors duration-300"
                        >
                          <span className="font-medium text-white/90">
                            {schedule.day}
                          </span>
                          <span className="text-sm text-white/60 font-light">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-white/40 mt-5 italic">
                      Hours may vary on public holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-[650px] transform hover:scale-[1.02] transition-transform duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385247094424!2d144.96333631531654!3d-37.81406397975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642ca6d8ae3f9%3A0x5045675218ce7e0!2s37%20Swanston%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0F0F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-[#D4A574] to-[#A67C52] rounded-lg flex items-center justify-center">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-cormorant">
                    Souvenirs Australiana
                  </h3>
                </div>
              </div>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                Your trusted source for authentic Aboriginal art, quality
                Australian souvenirs, and unique Melbourne gifts since 1995.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-5 tracking-wide font-cormorant">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a
                  href="#about"
                  className="block text-sm text-white/60 hover:text-[#D4A574] transition-colors duration-300"
                >
                  About Us
                </a>
                <a
                  href="#gallery"
                  className="block text-sm text-white/60 hover:text-[#D4A574] transition-colors duration-300"
                >
                  Our Collection
                </a>
                <a
                  href="#location"
                  className="block text-sm text-white/60 hover:text-[#D4A574] transition-colors duration-300"
                >
                  Visit Us
                </a>
                <a
                  href="/privacy"
                  className="block text-sm text-white/60 hover:text-[#D4A574] transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-5 tracking-wide font-cormorant">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+61396500992"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-[#D4A574] transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  +61 3 9650 0992
                </a>
                <p className="text-sm text-white/60">
                  Shop 2a/37 Swanston St
                  <br />
                  Melbourne VIC 3000
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-white/40 text-sm font-light">
              © {new Date().getFullYear()} Souvenirs Australiana. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }

        .font-cormorant {
          font-family: 'Cormorant', serif;
        }

        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        ::selection {
          background-color: #D4A574;
          color: white;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cinematicZoom {
          from {
            transform: scale(1) translate(0, 0);
          }
          to {
            transform: scale(1.1) translate(-1%, -1%);
          }
        }

        .cinematic-video {
          animation: cinematicZoom 8s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .hero-content.is-visible {
          animation: fadeInUp 1.2s ease-out forwards;
        }

        .section-fade.is-visible {
          animation: fadeInUp 0.9s ease-out forwards;
        }

        .section-fade:nth-child(2).is-visible {
          animation-delay: 0.1s;
        }

        .section-fade:nth-child(3).is-visible {
          animation-delay: 0.2s;
        }

        .feature-card-fade.is-visible {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .feature-card-fade:nth-child(1).is-visible {
          animation-delay: 0.1s;
        }

        .feature-card-fade:nth-child(2).is-visible {
          animation-delay: 0.25s;
        }

        .feature-card-fade:nth-child(3).is-visible {
          animation-delay: 0.4s;
        }

        .gallery-card.is-visible {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .gallery-card:nth-child(1).is-visible { animation-delay: 0s; }
        .gallery-card:nth-child(2).is-visible { animation-delay: 0.1s; }
        .gallery-card:nth-child(3).is-visible { animation-delay: 0.2s; }
        .gallery-card:nth-child(4).is-visible { animation-delay: 0.3s; }
        .gallery-card:nth-child(5).is-visible { animation-delay: 0.4s; }
        .gallery-card:nth-child(6).is-visible { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
}
