import React from 'react';
import SkeletonElement from './SkeletonElement';

const SkeletonHome = () => {

    return (
        <div className="skeleton">
            <div className="skeleton__home">
                <SkeletonElement typeLoader = "home" type = "logo" />
                <SkeletonElement typeLoader = "home" type = "text1" />
                <SkeletonElement typeLoader = "home" type = "title" />
                <SkeletonElement typeLoader = "home" type = "text2" />
                <SkeletonElement typeLoader = "home" type = "text3" />
            </div>
        </div>
    );
};

export default SkeletonHome;