import React from 'react';
import './Breadcrumbs.css';

const Breadcrumbs = ({ items = [] }) => {
    const defaultItems = [
        { name: 'Home', path: '/' },
    ];

    const breadcrumbItems = [...defaultItems, ...items];

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://www.drfabiano.com.br${item.path}`,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav className="breadcrumbs" aria-label="Navegação estrutural">
                {breadcrumbItems.map((item, index) => (
                    <span key={index} className="breadcrumb-item">
                        {index > 0 && <span className="breadcrumb-separator">/</span>}
                        {index === breadcrumbItems.length - 1 ? (
                            <span className="breadcrumb-current">{item.name}</span>
                        ) : (
                            <a href={item.path}>{item.name}</a>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
};

export default Breadcrumbs;