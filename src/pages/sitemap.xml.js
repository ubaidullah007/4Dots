// import fs from "fs";

const Sitemap = () => { };

export const getServerSideProps = async ({ res }) => {

    const baseUrl = 'https://nyvdigitalsolutions.netlify.app'; 
    
    const staticPagesPath = [
        'about',
        'ai-development',
        'app-development',
        'blockchain-development',
        'contact',
        'blogs',
        'careers',
        'devops',
        'ecommerce-development',
        'game-development',
        'hire-talent',
        'iot-development',
        'salesforce-development',
        'web-development',
    ].map((staticPagePath) => (`${baseUrl}/${staticPagePath}`))
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPagesPath.map((url) => (`
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod> 
              <changefreq>weekly</changefreq> 
              <priority>1.0</priority>
            </url>
          `))
        }
    </urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
    props: {},
    };
}
export default Sitemap;




