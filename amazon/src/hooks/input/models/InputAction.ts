export const INPUT_ACTION_CHANGE = 'CHANGE';
export const INPUT_ACTION_BLUR = 'BLUR';
export const INPUT_ACTION_CLEAR = 'CLEAR';

export type InputActionType =
  | typeof INPUT_ACTION_CHANGE
  | typeof INPUT_ACTION_BLUR
  | typeof INPUT_ACTION_CLEAR;
