import * as React from 'react';

/**
 * A label / number / delta triplet. Used inside cards for proof figures and
 * dashboard metrics.
 */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small caption above the number. */
  label?: string;
  /** The figure itself. */
  value: React.ReactNode;
  /** Suffix rendered muted next to the figure (e.g. "USDT", "alunos"). */
  unit?: string;
  /** Signed change, e.g. "+5,7%". */
  delta?: string;
  /** Colours the delta. @default "up" */
  trend?: 'up' | 'down';
  /** @default "left" */
  align?: 'left' | 'center';
}

export declare function Stat(props: StatProps): JSX.Element;
