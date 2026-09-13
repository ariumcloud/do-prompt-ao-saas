import * as React from 'react';

/**
 * Renders a Lucide glyph inline, so icons inherit `color` like a webfont and
 * carry the brand's 1.5px stroke. The icon data is fetched once from the CDN on
 * first use; until it arrives the component renders an empty box of the right
 * size (never a placeholder shape).
 *
 * Arium ships no icon set of its own — Lucide (24px grid, rounded caps, no
 * fills) is the documented substitute for the unnamed set in the reference deck.
 */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Lucide icon slug, e.g. "sparkles", "credit-card", "arrow-right". */
  name: string;
  /** Rendered box in px — 16 inline, 20 in an IconTile, 34 for the seal. @default 20 */
  size?: number;
  /** @default 1.5 */
  strokeWidth?: number;
}

/** CDN URL the icon data is loaded from. Swap this to use another set. */
export declare const ARIUM_ICON_SRC: string;

export declare function Icon(props: IconProps): JSX.Element;
