import * as React from 'react';

/**
 * The rounded pill that sits above nearly every headline in Arium. Also used
 * inline for status ("SOON", "AI Powered") and for signal values.
 *
 * @startingPoint section="Core" subtitle="Eyebrow and status pills" viewport="700x140"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: 'neutral' | 'glass' | 'accent' | 'solid' | 'positive';
  /** @default "md" */
  size?: 'sm' | 'md';
  /** Leading 6px filled dot in the current colour. @default false */
  dot?: boolean;
  /** Leading glyph. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
