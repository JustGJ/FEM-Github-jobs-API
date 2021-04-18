import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonCardHome = () => {

    return (
        <div className="skeleton">
            <div className="skeleton__card">
                <SkeletonElement type = "logo" />
                <SkeletonElement type = "text1" />
                <SkeletonElement type = "title" />
                <SkeletonElement type = "text2" />
                <SkeletonElement type = "text3" />
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonCardHome;