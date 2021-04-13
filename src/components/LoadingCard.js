import React from 'react';
import ContentLoader from 'react-content-loader'

const LoadingCard = () => {
    return (
        <div className="card__loading">
            <ContentLoader 
                speed={2}
                width={350}
                height={228}
                viewBox="0 0 300 160"
                backgroundColor="#b1b1b1"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="66" rx="3" ry="3" width="180" height="13" /> 
                <rect x="0" y="90" rx="3" ry="3" width="240" height="13" /> 
                <rect x="0" y="120" rx="3" ry="3" width="160" height="13" /> 
                <rect x="0" y="150" rx="3" ry="3" width="110" height="12" /> 
                <rect x="0" y="0" rx="5" ry="5" width="40" height="40" />
            </ContentLoader>
        </div>
    );
};

export default LoadingCard;