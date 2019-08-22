import {
  TRAER_BADGES,
  ENCONTRAR_BADGES,
  CARGANDO,
  ERROR
} from "../types/badgesType";
import { UsersRequest, UserRequest } from "../api/index";

export const traerBadges = () => async dispatch => {
  dispatch({ type: CARGANDO });
  try {
    const {
      data: { data }
    } = await UsersRequest();
    dispatch({ type: TRAER_BADGES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.message });
  }
};
export const encontrarBadges = id => async dispatch => {
  dispatch({ type: CARGANDO });
  try {
    const {
      data: { data }
    } = await UserRequest(id);
    dispatch({ type: ENCONTRAR_BADGES, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, error: error.message });
  }
};
