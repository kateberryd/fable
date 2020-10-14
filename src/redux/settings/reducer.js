import {
    LOGO_BG,
    NAVBAR_BG,
    SIDEBAR_BG,
    THEME,
    DIRECTION,
    SIDEBAR_POSITION,
    HEADER_POSITION,
    LAYOUT,
    SIDEBAR_TYPE
} from '../constants/';

const INIT_STATE = {
    activeDir: "ltr",
    activeThemeLayout: "vertical",
    activeTheme: "light",
    activeSidebarType: "full",
    activeLogoBg: "skin6",
    activeNavbarBg: "skin5",
    activeSidebarBg: "skin6",
    activeSidebarPos: "fixed",
    activeHeaderPos: "fixed",
    activeLayout: "full"
}

export default (state = INIT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOGO_BG:
            return {
                ...state,
                activeLogoBg: payload
            };
        case NAVBAR_BG:
            return {
                ...state,
                activeNavbarBg: payload
            };
        case SIDEBAR_BG:
            return {
                ...state,
                activeSidebarBg: payload
            };
        case THEME:
            return {
                ...state,
                activeTheme: payload
            };
        case DIRECTION:
            return {
                ...state,
                activeDir: payload
            };
        case SIDEBAR_POSITION:
            return {
                ...state,
                activeSidebarPos: payload
            };
        case HEADER_POSITION:
            return {
                ...state,
                activeHeaderPos: payload
            };
        case LAYOUT:
            return {
                ...state,
                activeLayout: payload
            };
        case SIDEBAR_TYPE:
            return {
                ...state,
                activeSidebarType: payload
            };
        default:
            return state;
    }
};