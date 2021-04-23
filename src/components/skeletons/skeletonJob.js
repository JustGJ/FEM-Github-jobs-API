import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonJob = () => {

    return (
        <div className="skeleton__job">
            <div className="skeleton__job__header">
                <SkeletonElement typeLoader = "job" type = "logo" />
                <SkeletonElement typeLoader = "job" type = "text1" />
                <SkeletonElement typeLoader = "job" type = "button1" />
                <Shimmer type = "special" />
            </div>
            <div className="skeleton__job__body">
                <div className = "skeleton__job__body__header">
                    <div>
                        <SkeletonElement typeLoader = "job" type = "text2" />
                        <SkeletonElement typeLoader = "job" type = "text3" />
                        <SkeletonElement typeLoader = "job" type = "text4" />
                    </div>
                    <SkeletonElement typeLoader = "job" type = "button2" />
                </div>
                <div className="skeleton__job__body__content">
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text6" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <SkeletonElement typeLoader = "job" type = "text5" />
                    <Shimmer type = "normal" />
                </div>
            </div>
            <div className="skeleton__job__footer">
                <SkeletonElement typeLoader = "job" type = "text2" />
                <SkeletonElement typeLoader = "job" type = "text5" />
                <SkeletonElement typeLoader = "job" type = "text6" />
                <SkeletonElement typeLoader = "job" type = "text5" />
                <SkeletonElement typeLoader = "job" type = "text5" />
                <Shimmer type = "normal" />
            </div>
        </div>
    );
};

export default SkeletonJob;