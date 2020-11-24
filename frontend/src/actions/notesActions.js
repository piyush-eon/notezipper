import {
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
} from "../constants/notesConstants";
import axios from "axios";

export const listNotes = () => async (dispatch) => {
  try {
    dispatch({ type: NOTES_LIST_REQUEST });

    const { data } = await axios.get("/api/notes");

    dispatch({ type: NOTES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NOTES_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
