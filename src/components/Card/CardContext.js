import { createContext, useContext } from "react";

export const CardContext = createContext({
	collapsible: false,
	isCollapsed: false,
	toggleCollapse: () => {},
	collapseTrigger: "button",
});

export const useCardContext = () => {
	return useContext(CardContext);
};
