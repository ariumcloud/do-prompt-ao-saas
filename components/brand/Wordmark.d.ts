import * as React from 'react';

/**
 * Arium has no supplied logo mark. The brand is set in type: Sora Semibold at
 * -0.04em tracking. Use this everywhere a mark would go until real logo files
 * land in assets/.
 */
export interface WordmarkProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Cap height in px. @default 20 */
  size?: number;
  /** @default "primary" */
  tone?: 'primary' | 'muted';
}

export declare function Wordmark(props: WordmarkProps): JSX.Element;
