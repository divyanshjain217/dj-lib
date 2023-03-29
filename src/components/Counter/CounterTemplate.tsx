import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { decrement, increment } from "./counterSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
function CounterTemplate(props:any) {
	const count = useAppSelector((state: any) => state.counter.value);
	const dispatch = useAppDispatch();
    console.log({count, dispatch});
	return (
		<div>
			<button
				aria-label="Increment value"
				onClick={() => dispatch(increment())}
			>
				Increment
			</button>
			<span>{count}</span>
			<button
				aria-label="Decrement value"
				onClick={() => dispatch(decrement())}
			>
				Decrement
			</button>
		</div>
	);
}

export default CounterTemplate;
