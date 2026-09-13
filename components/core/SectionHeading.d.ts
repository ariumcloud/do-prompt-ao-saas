import * as React from 'react';

/**
 * Eyebrow pill + display headline + optional deck. The `highlight` prop renders
 * one phrase of the headline in full white against the rest in chalk-2 — the
 * two-tone headline is an Arium signature.
 *
 * @startingPoint section="Core" subtitle="Two-tone display headline with eyebrow" viewport="700x300"
 */
export interface SectionHeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Usually a `<Badge>`. */
  eyebrow?: React.ReactNode;
  /** Headline text. Keep to two lines. */
  title: string;
  /** Substring of `title` to raise to full white. */
  highlight?: string;
  /** One or two sentences of supporting copy. */
  subtitle?: string;
  /** @default "center" */
  align?: 'left' | 'center';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
