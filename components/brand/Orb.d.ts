import * as React from 'react';

/**
 * The house object: a violet sphere lit from the upper left with a slow
 * rotating meridian sheen and a bloom behind it. It anchors the hero and
 * returns larger and brighter in the closing section.
 *
 * @startingPoint section="Brand" subtitle="Violet sphere with bloom — hero anchor" viewport="700x360"
 */
export interface OrbProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Diameter in px. Hero ≈ 320–420, closing section ≈ 520+. @default 320 */
  size?: number;
  /** Bloom strength. @default "normal" */
  intensity?: 'quiet' | 'normal' | 'dramatic';
  /** Rotate the meridian sheen. @default true */
  spin?: boolean;
}

export declare function Orb(props: OrbProps): JSX.Element;
