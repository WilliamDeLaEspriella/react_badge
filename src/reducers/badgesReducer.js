import {
  TRAER_BADGES,
  ENCONTRAR_BADGES,
  CARGANDO,
  ERROR
} from "../types/badgesType";
const INITAL_STATE = {
  badges: [],
  badge: {},
  cargando: false,
  error: undefined
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case TRAER_BADGES:
      return {
        ...state,
        badges: action.payload,
        cargando: false,
        error: undefined
      };
    case ENCONTRAR_BADGES:
      return {
        ...state,
        badge: action.payload,
        cargando: false,
        error: undefined
      };
    case CARGANDO:
      return { ...state, cargando: true };
    case ERROR:
      return { ...state, error: action.error, cargando: false };
    default:
      return state;
  }
};
