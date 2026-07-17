import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedAt,
  modifiedAt,
  author = 'Tax Legal Synergy',
  schemas = []
}) => {
  const location = useLocation();

  const siteName = import.meta.env.VITE_SITE_NAME || 'Tax Legal Synergy';
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://taxlegalsynergy.com';
  const twitterHandle = import.meta.env.VITE_TWITTER_HANDLE || '@TaxLegalSynergy';

  // Fallbacks
  const seoTitle = title ? `${title} | ${siteName}` : (import.meta.env.VITE_DEFAULT_TITLE || `${siteName} | Tax Litigation, GST & Corporate Legal Advisory`);
  const seoDescription = description || import.meta.env.VITE_DEFAULT_DESCRIPTION || 'Tax Legal Synergy provides expert legal advisory, GST consulting, tax litigation, corporate compliance, and strategic legal solutions across India.';
  
  // Ensure image is absolute URL
  const defaultImage = import.meta.env.VITE_DEFAULT_OG_IMAGE || `${siteUrl}/assets/social-preview.jpg`;
  let seoImage = image || defaultImage;
  if (seoImage && !seoImage.startsWith('http')) {
    // If it's a relative path, prepend site URL
    if (seoImage.startsWith('/')) {
        seoImage = `${siteUrl}${seoImage}`;
    } else {
        seoImage = `${siteUrl}/${seoImage}`;
    }
  }

  const seoUrl = url || `${siteUrl}${location.pathname}`;

  // Organization Schema
  const defaultOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': siteName,
    'url': siteUrl,
    'logo': `${siteUrl}/assets/logo.png`,
    'sameAs': [
      'https://www.linkedin.com/company/taxlegalsynergy',
      'https://twitter.com/taxlegalsynergy',
      'https://www.facebook.com/taxlegalsynergy'
    ]
  };

  // Website Schema
  const defaultWebsiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteUrl,
    'name': siteName,
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${siteUrl}/blogs?search={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  // WebPage Schema
  const defaultWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': seoTitle,
    'description': seoDescription,
    'url': seoUrl
  };

  const finalSchemas = [defaultOrganizationSchema, defaultWebsiteSchema, defaultWebPageSchema, ...schemas];

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoUrl} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph (OG) Metadata */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card Metadata */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchemas)}
      </script>
    </Helmet>
  );
};

export default SEO;
