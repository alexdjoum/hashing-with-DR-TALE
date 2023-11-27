// project imports
import config from '../config';



export interface State {
  isOpen: number[],
  defaultId: string,
  fontFamily: string,
  borderRadius: number,
  opened: boolean
}
export const initialState : State = {
  isOpen: [], // for active default menu
  defaultId: 'default',
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true
};

type customizationAction =
    | { type: "RESET" }
    | { type: "SET_MENU"; /*value: State["count"]*/ }
    | { type: "SET_OPENED"; /*value: State["opened"]*/ }
    | { type: "SET_BORDER_RADIUS"; borderRadius: number };

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const customizationReducer = (state: State = initialState, action: customizationAction) => {
  switch (action.type) {
    case "SET_MENU":
      return {
        ...state,
        isOpen: [1,2,3]
      };
    case "SET_OPENED": // Renommez le cas SET_MENU en SET_OPENED
      return {
        ...state,
        opened: false
      };
    case "SET_BORDER_RADIUS":
      return {
        ...state,
        borderRadius: action.borderRadius
      };
    /*case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily
      };
    */
    default:
      return state;
  }
};

export default customizationReducer;
