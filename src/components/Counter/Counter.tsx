import React from "react";
import { RootState, store } from "../../app/store";
import { useDispatch, Provider } from "react-redux";

import CounterTemplate from "./CounterTemplate";
export default function Counter() {
	return (
        <Provider store={store}>
            <CounterTemplate/>
        </Provider>
	);
}
