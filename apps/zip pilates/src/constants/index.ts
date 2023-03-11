export const MENU_STATES = { CLOSED: `CLOSED`, OPEN: `OPEN` } as const;
export type MenuStates = (typeof MENU_STATES)[keyof typeof MENU_STATES];
