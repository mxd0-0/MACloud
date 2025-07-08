import React from 'react';

export function LineConnector({ heroPoint, targetPoints }) {
  if (!heroPoint || !targetPoints || targetPoints.length === 0) {
    return null;
  }

  return (
    <svg
      // Set z-index very low (e.g., z-0) on all screens, but hide on small.
      // Or, hide on small and give a specific z-index on large.
      // Option A: Hide completely on small, show on large with a moderate z-index
      className="hidden lg:block fixed top-0 left-0 w-full h-full pointer-events-none z-[5]" // z-[5] is a custom value between z-0 and z-10
      // Or if your content has z-index 10 or higher, make lines lower, e.g., z-[1] or z-[5]
      // Make sure your hero text and card content don't have extremely low z-index
      style={{ overflow: 'visible' }}
    >
      {targetPoints.map((targetPoint, index) => {
        const startX = heroPoint.x;
        const startY = heroPoint.y;
        const endX = targetPoint.x;
        const endY = targetPoint.y;

        return (
          <line
            key={index}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="#27AE60"
            strokeWidth="2"
            strokeDasharray="5 5"
            className="animate-draw-line"
          />
        );
      })}
    </svg>
  );
}