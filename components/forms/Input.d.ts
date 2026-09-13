import * as React from 'react';

/**
 * Single-line text field on an inset ink surface. The `trailing` slot holds the
 * inline submit button used by the newsletter capture.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Caption above the field. */
  label?: string;
  /** Helper or error text below the field. */
  hint?: string;
  /** Element pinned to the right inside the field, usually a small Button. */
  trailing?: React.ReactNode;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Switch the hairline and hint to the negative signal colour. @default false */
  invalid?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;
