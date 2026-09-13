import * as React from 'react';

/**
 * Binary toggle. 44×26 track, violet when on, white knob.
 */
export interface SwitchProps {
  /** @default false */
  checked?: boolean;
  /** Called with the next value. */
  onChange?: (next: boolean) => void;
  /** Text rendered to the right of the track. */
  label?: React.ReactNode;
  /** @default false */
  disabled?: boolean;
}

export declare function Switch(props: SwitchProps): JSX.Element;
