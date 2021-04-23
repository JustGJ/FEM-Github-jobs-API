import React from 'react';
import Shimmer from './Shimmer';
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
            <Shimmer type = "normal" />
        </div>
    );
};

export default SkeletonHome;