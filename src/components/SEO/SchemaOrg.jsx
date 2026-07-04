import React from 'react';
import { seoConfig } from '../../utils/seoConfig';

const SchemaOrg = ({ type = 'Organization' }) => {
    const getSchema = () => {
        const baseSchema = {
            '@context': 'https://schema.org',
            '@type': type,
        };

        if (type === 'Organization') {
            return {
                ...baseSchema,
                name: seoConfig.siteName,
                url: seoConfig.siteUrl,
                logo: `${seoConfig.siteUrl}/logo.png`,
                description: seoConfig.siteDescription,
                telephone: seoConfig.businessInfo.telephone,
                email: seoConfig.businessInfo.email,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: seoConfig.businessInfo.streetAddress,
                    addressLocality: seoConfig.businessInfo.addressLocality,
                    addressRegion: seoConfig.businessInfo.addressRegion,
                    postalCode: seoConfig.businessInfo.postalCode,
                    addressCountry: seoConfig.businessInfo.addressCountry,
                },
                sameAs: [
                    seoConfig.socialMedia.facebook,
                    seoConfig.socialMedia.instagram,
                    seoConfig.socialMedia.linkedin,
                ],
            };
        }

        if (type === 'LocalBusiness') {
            return {
                ...baseSchema,
                name: seoConfig.businessInfo.name,
                image: `${seoConfig.siteUrl}/og-image.jpg`,
                description: seoConfig.siteDescription,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: seoConfig.businessInfo.streetAddress,
                    addressLocality: seoConfig.businessInfo.addressLocality,
                    addressRegion: seoConfig.businessInfo.addressRegion,
                    postalCode: seoConfig.businessInfo.postalCode,
                    addressCountry: seoConfig.businessInfo.addressCountry,
                },
                telephone: seoConfig.businessInfo.telephone,
                priceRange: seoConfig.businessInfo.priceRange,
                areaServed: seoConfig.businessInfo.areaServed.map(area => ({
                    '@type': 'City',
                    name: area,
                })),
                sameAs: [
                    seoConfig.socialMedia.facebook,
                    seoConfig.socialMedia.instagram,
                    seoConfig.socialMedia.linkedin,
                ],
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '127',
                },
            };
        }

        if (type === 'Person') {
            return {
                ...baseSchema,
                name: 'VittaCore',
                jobTitle: 'Nutrição Funcional',
                url: seoConfig.siteUrl,
                sameAs: [
                    seoConfig.socialMedia.facebook,
                    seoConfig.socialMedia.instagram,
                    seoConfig.socialMedia.linkedin,
                ],
            };
        }

        if (type === 'BreadcrumbList') {
            return {
                ...baseSchema,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: seoConfig.siteUrl,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Serviços',
                        item: `${seoConfig.siteUrl}/#servicos`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'Sobre',
                        item: `${seoConfig.siteUrl}/#sobre`,
                    },
                ],
            };
        }

        return baseSchema;
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
        />
    );
};

export default SchemaOrg;