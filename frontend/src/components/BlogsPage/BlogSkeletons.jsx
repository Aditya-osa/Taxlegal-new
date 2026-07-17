import React from 'react';
import './BlogSkeletons.css';

export const FeaturedSkeleton = () => {
  return (
    <div className="featured-skeleton skeleton-pulse">
      <div className="fs-image-placeholder skeleton-bg"></div>
      <div className="fs-content">
        <div className="fs-badge skeleton-bg"></div>
        <div className="fs-title-1 skeleton-bg"></div>
        <div className="fs-title-2 skeleton-bg"></div>
        <div className="fs-desc-1 skeleton-bg"></div>
        <div className="fs-desc-2 skeleton-bg"></div>
        <div className="fs-desc-3 skeleton-bg"></div>
        <div className="fs-btn skeleton-bg"></div>
      </div>
    </div>
  );
};

export const GridSkeleton = () => {
  return (
    <div className="grid-skeleton skeleton-pulse">
      <div className="gs-image skeleton-bg"></div>
      <div className="gs-content">
        <div className="gs-badge skeleton-bg"></div>
        <div className="gs-title-1 skeleton-bg"></div>
        <div className="gs-title-2 skeleton-bg"></div>
        <div className="gs-desc-1 skeleton-bg"></div>
        <div className="gs-desc-2 skeleton-bg"></div>
        <div className="gs-btn skeleton-bg"></div>
      </div>
    </div>
  );
};
