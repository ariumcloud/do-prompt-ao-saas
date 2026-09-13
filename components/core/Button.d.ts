import * as React from 'react';

/**
 * Arium's action control. Primary is the violet gradient fill used for the one
 * committing action on a screen; everything else is secondary, outline or ghost.
 *
 * @startingPoint section="Core" subtitle="Primary, secondary, outline and ghost actions" viewport="700x180"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual weight. One primary per view. @default "primary" */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Glyph rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Glyph rendered after the label. */
  iconRight?: React.ReactNode;
  /** Stretch to the container width. @default false */
  fullWidth?: boolean;
  /** @default false */
  disabled?: boolean;
  /** Renders an anchor instead of a button. */
  href?: string;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
