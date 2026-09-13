import * as React from 'react';

/**
 * The rounded square that carries an icon at the top of a feature card.
 * Arium never floats a bare glyph — icons live in a tile.
 */
export interface IconTileProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Edge length in px. @default 40 */
  size?: number;
  /** @default "default" */
  tone?: 'default' | 'accent' | 'quiet';
  /** The glyph — a 20px Lucide SVG. */
  children?: React.ReactNode;
}

export declare function IconTile(props: IconTileProps): JSX.Element;
