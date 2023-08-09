// import { createSlice } from "@reduxjs/toolkit";

const SET_SIDO = "setSido/SET_SIDO"; //드롭메뉴에서 선택된 지역의 텍스트를 저장
const PM_ARR = "setSido/PM_ARR"; // 해당 지역의 여러 데이터중 필요한 요소만 모아서 저장. (지역, 측정소, 수치, 등급, 날짜)

//액션 생성 함수
export const settingSido = () => ({ type: SET_SIDO });
export const pm_arr = () => ({ type: PM_ARR });

//모륟의 초기값 생성
const initialState = {
  sido: "지역 선택",
  pmArr: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_SIDO":
      return {
        ...state,
        sido: action.payload,
      };
    case "PM_ARR":
      return {
        ...state,
        pmArr: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
