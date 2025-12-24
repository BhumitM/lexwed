import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "../components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="404 Page Not Found | LexWed"
        description="Oops! The page you are looking for on LexWed does not exist. Return to the home page for trusted marriage registration and legal services in India."
        keywords="LexWed 404, page not found, marriage legal services, court marriage, Arya Samaj marriage"
        canonical="https://www.lexwed.com/404"
        ogTitle="404 - Page Not Found | LexWed"
        ogDescription="The page you tried to access does not exist. Navigate back to LexWed home for reliable marriage registration and legal services."
        ogUrl="https://www.lexwed.com/404"
        ogType="website"
        twitterCard="summary_large_image"
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
