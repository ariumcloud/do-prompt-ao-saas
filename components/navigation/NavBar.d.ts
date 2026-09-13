import * as React from 'react';

/**
 * Page header: brand on the left, a floating glass pill of links in the centre,
 * actions on the right. The pill sits over the hero glow, never on a solid bar.
 *
 * @startingPoint section="Navigation" subtitle="Glass pill header over the hero glow" viewport="700x120"
 */
export interface NavLink {
  label: string;
  href: string;
  /** Optional trailing pill, e.g. <Badge size="sm">SOON</Badge>. */
  badge?: React.ReactNode;
}

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Wordmark element. */
  brand?: React.ReactNode;
  links?: NavLink[];
  /** Buttons on the right. */
  actions?: React.ReactNode;
  /** href of the current page. */
  activeHref?: string;
}

export declare function NavBar(props: NavBarProps): JSX.Element;
