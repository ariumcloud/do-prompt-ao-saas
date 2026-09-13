import * as React from 'react';

/**
 * The container that holds almost all content in Arium: ink surface, 1px alpha
 * hairline, 20px corner. `glow` adds the violet light welling up from the
 * bottom edge that marks the one card a section wants you to read.
 *
 * @startingPoint section="Core" subtitle="Ink, glass, glow and accent surfaces" viewport="700x260"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "default" */
  tone?: 'default' | 'raised' | 'glass' | 'glow' | 'accent';
  /** @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Corner radius token. @default "lg" */
  radius?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Lift and brighten the hairline on hover. @default false */
  interactive?: boolean;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
