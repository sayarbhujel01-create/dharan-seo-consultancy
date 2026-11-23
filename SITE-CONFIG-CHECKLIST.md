# Pre-Launch Configuration & Placeholder Checklist

This website was engineered with **zero fabricated claims, fake testimonials, or invented business records**. Before deploying to production, replace the clearly marked placeholders below across the project:

## 1. Domain & Canonical URLs
- Replace https://yourdomain.com.np across all HTML files, obots.txt, sitemap.xml, and llms.txt with your verified HTTPS canonical domain.

## 2. Business Entity & NAP Details
- **Brand Name:** Replace Dharan SEO Consultancy and [Placeholder: Official Brand Name] with your official business name.
- **Street Address:** Replace [Street Address / Ward No.], Dharan, Sunsari 56700, Koshi Province, Nepal with your exact verified address.
- **Phone Number:** Replace +977-98XXXXXXXX in HTML 	el: links, JSON-LD, and footer.
- **WhatsApp Number:** Replace 9779800000000 in HTML wa.me links and ssets/js/main.js.
- **Email:** Replace hello@yourdomain.com.np with your official email address.
- **Social sameAs URLs:** Add verified LinkedIn, Facebook, X, or Google Business Profile URLs inside the Organization JSON-LD node.

## 3. E-E-A-T & Proof Slots
- /about/: Populate founder/team bios, LinkedIn profiles, and only verifiable certifications.
- /case-studies/ & Homepage proof slots: Insert verified Google Search Console / Google Business Profile outcomes with written client consent.
- /privacy-policy/ & /terms-of-service/: Insert official launch date and any analytics tool disclosures.

## 4. Form Backend Integration
- Forms in ssets/js/main.js currently generate a pre-filled WhatsApp handoff link immediately on submit. Connect [data-seo-form] to Formspree, Cloudflare Workers, Netlify Forms, or your SMTP backend before launch.

## 5. Local Preview & Hosting
- **Preview locally on Windows (zero dependencies):**
  `powershell
  powershell -ExecutionPolicy Bypass -File .\preview.ps1
  `
  Then open http://localhost:8080/ in any browser.
- **Deploy cleanly to:** Cloudflare Pages, Netlify, Vercel, GitHub Pages, or any cPanel/Nginx/Apache web host (upload the entire directory as the static web root).