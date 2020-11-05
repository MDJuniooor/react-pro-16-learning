import { createStore, applyMiddleware } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CartReducer";
import { CommonReducer } from "./CommonReducer";
import { asyncActions } from "./AsyncMiddleware";

// 미들웨어를 래핑해 액션을 받으며, 그 결과를 데이터 스토어를 생성하는 createStore 함수에 인자로 전달.
export const SportsStoreDataStore 
    = createStore(CommonReducer(ShopReducer, CartReducer), 
      applyMiddleware(asyncActions)); 