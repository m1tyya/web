import { create } from 'zustand';

type AppStore = {
	is_menu_open: boolean;
	toggle_menu: () => void;
};

export const use_app_store = create<AppStore>()((set) => ({
	is_menu_open: false,
	toggle_menu: (): void => {
		set((state) => ({ is_menu_open: !state.is_menu_open }));
	},
}));
