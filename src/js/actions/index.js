import axios from "axios";
import { normalize } from "normalizr";

import {
  FETCH_BUILDINGS_FAILURE,
  FETCH_BUILDINGS_REQUEST,
  FETCH_BUILDINGS_SUCCESS,
  FETCH_STATS_FAILURE,
  FETCH_STATS_REQUEST,
  FETCH_STATS_SUCCESS,
} from "./types";
import * as schema from "../data/schema";

export const fetchStats = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_STATS_REQUEST,
  });

  try {
    const res = await axios.get(
      process.env.REACT_APP_S3_BASE_URL + "scraper_stats/index.json"
    );
    const stats = res.data;
    dispatch({
      type: FETCH_STATS_SUCCESS,
      response: stats,
    });
  } catch (error) {
    const response = error.response || {
      status: 501,
      statusText: "Not Implemented",
    };
    dispatch({
      type: FETCH_STATS_FAILURE,
      error: response,
    });
  }
};

export const fetchBuildings = () => async (dispatch, getState) => {
  dispatch({
    type: FETCH_BUILDINGS_REQUEST,
  });

  try {
    const res = await axios.get("/api/buildings");
    const buildings = res.data;
    const normalizedBuildings = normalize(buildings, schema.buildingsSchema);
    const fetchedTime = new Date().toISOString();
    dispatch({
      type: FETCH_BUILDINGS_SUCCESS,
      response: {
        ...normalizedBuildings,
        fetchedTime,
      },
    });
  } catch (error) {
    const response = error.response || {
      status: 501,
      statusText: "Not Implemented",
    };
    dispatch({
      type: FETCH_BUILDINGS_FAILURE,
      error: response,
    });
  }
};
