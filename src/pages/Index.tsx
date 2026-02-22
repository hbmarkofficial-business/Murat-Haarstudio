import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Bochum | Murat Haarstudio</title>
        <meta
          name="description"
          content="Besuche unser Premium Murat Haarstudio in Bochum für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseursalon, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Bochum"
        />
        <link rel="canonical" href="https://murat-haarstudio.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Murat Haarstudio | Premium Friseursalon Bochum" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Look in Bochum im Murat Haarstudio."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://murat-haarstudio.de" />
        <meta property="og:image" content="https://murat-haarstudio.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Murat Haarstudio | Premium Friseursalon Bochum" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege im Murat Haarstudio Bochum."
        />
        <meta name="twitter:image" content="https://murat-haarstudio.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Murat Haarstudio",
            "image": "https://murat-haarstudio.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Musterstraße 1",
              "addressLocality": "Bochum",
              "postalCode": "44787",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.4818",
              "longitude": "7.2162"
            },
            "url": "https://murat-haarstudio.de",
            "telephone": "+49 234 1234567",
            "openingHours": "Mo-Fr 09:00-19:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "servesCuisine": "Friseur Services",
            "sameAs": [
              "https://www.facebook.com/murathaarstudio",
              "https://www.instagram.com/murathaarstudio"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

