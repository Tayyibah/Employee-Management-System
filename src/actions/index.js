
export const incrementByFive=(num)=>{
	return {
    type:'INCREMENTByFive',
    payload:num
	};
}
export const increment=()=>{
	return {
	type:'INCREMENT'
	};
}
export const decrement=()=>{
	return {
	type:'DECREMENT'
	};
}