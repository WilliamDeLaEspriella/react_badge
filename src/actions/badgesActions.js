import { TRAER_BADGES, CARGANDO, ERROR } from "../types/badgesType";
import { UsersRequest } from "../api/index";

export const traerBadges = () => async (dispatch) => {
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