import * as React from 'react';

/**
 * Stacked question rows; the open row turns its question violet and swaps + for −.
 * One row is open by default.
 *
 * @startingPoint section="Disclosure" subtitle="FAQ list with one row open" viewport="700x320"
 */
export interface AccordionItem {
  question: string;
  answer: string;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[];
  /** Index open on mount; -1 for all closed. @default 0 */
  defaultOpen?: number;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
