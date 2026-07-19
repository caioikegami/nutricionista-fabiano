import { useEffect } from 'react';

const useSEO = ({
    title = 'VittaCore - Nutrição Funcional',
    description = 'Nutricionista especializado em nutrição funcional, equilíbrio bioquímico e longevidade. Consultas personalizadas em São Paulo.',
    canonical = 'https://www.drfabiano.com.br',
    ogImage = 'https://www.drfabiano.com.br/og-image.jpg',
    ogType = 'website',
    twitterHandle = '@drfabiano',
    keywords = 'nutricionista, nutrição funcional, saúde digestiva, bem-estar',
}) => {
    useEffect(() => {
        // Title
        document.title = title;

        // Meta Description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            metaDescription.setAttribute('content', description);
            document.head.appendChild(metaDescription);
        }

        // Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords);
        } else {
            metaKeywords = document.createElement('meta');
            metaKeywords.setAttribute('name', 'keywords');
            metaKeywords.setAttribute('content', keywords);
            document.head.appendChild(metaKeywords);
        }

        // Canonical
        let link = document.querySelector('link[rel="canonical"]');
        if (link) {
            link.href = canonical;
        } else {
            link = document.createElement('link');
            link.rel = 'canonical';
            link.href = canonical;
            document.head.appendChild(link);
        }

        // Open Graph
        const ogTags = [
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: ogImage },
            { property: 'og:url', content: canonical },
            { property: 'og:type', content: ogType },
            { property: 'og:site_name', content: 'Dr. Fabiano Rodrigues' },
        ];

        ogTags.forEach(tag => {
            let meta = document.querySelector(`meta[property="${tag.property}"]`);
            if (meta) {
                meta.setAttribute('content', tag.content);
            } else {
                meta = document.createElement('meta');
                meta.setAttribute('property', tag.property);
                meta.setAttribute('content', tag.content);
                document.head.appendChild(meta);
            }
        });

        // Twitter Card
        const twitterTags = [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: ogImage },
            { name: 'twitter:creator', content: twitterHandle },
        ];

        twitterTags.forEach(tag => {
            let meta = document.querySelector(`meta[name="${tag.name}"]`);
            if (meta) {
                meta.setAttribute('content', tag.content);
            } else {
                meta = document.createElement('meta');
                meta.setAttribute('name', tag.name);
                meta.setAttribute('content', tag.content);
                document.head.appendChild(meta);
            }
        });

        return () => {
            // Cleanup if needed
        };
    }, [title, description, canonical, ogImage, ogType, twitterHandle, keywords]);
};

export default useSEO;