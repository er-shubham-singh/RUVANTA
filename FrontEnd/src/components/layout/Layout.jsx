import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import Footer from './Footer';

export default function Layout({
  children,
  title = 'Ruvanta - Professional Services',
  description = ''
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#090D1A] transition-colors">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ruvanta Technology",
            // replace with your real production URL
            "url": "https://ruvanta.example",
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Innovation Ave",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "postalCode": "94105"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-123-4567",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
