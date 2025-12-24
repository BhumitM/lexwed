import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  schema?: Record<string, any>;
}

export default function SEOHead({
  title,
  description,
  keywords = "marriage registration, legal services, court marriage, marriage assistance",
  ogTitle,
  ogDescription,
  canonical,
  schema,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("property", "og:title", ogTitle || title);
    updateMetaTag("property", "og:description", ogDescription || description);

    // Update canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute("href", canonical);
    }

    // Add schema markup if provided
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"][data-seo="custom"]');
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        schemaScript.setAttribute("data-seo", "custom");
        document.head.appendChild(schemaScript);
      }
      schemaScript.innerHTML = JSON.stringify(schema);
    }
  }, [title, description, keywords, ogTitle, ogDescription, canonical, schema]);

  return null;
}

function updateMetaTag(
  attrName: "name" | "property",
  attrValue: string,
  content: string
) {
  let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attrName, attrValue);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}
