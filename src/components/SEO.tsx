import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export const SEO = ({
  title = "Yashnee Tech – Next-Gen Staffing & Talent Solutions",
  description = "Yashnee Tech is your next-gen talent partner, providing expert staffing and recruitment solutions across IT, Healthcare, Finance, and more.",
  canonical = "https://yashneetech.com"
}: SEOProps) => {
  const fullTitle = title.includes("Yashnee Tech") ? title : `${title} | Yashnee Tech`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};
