import input from "./input.js";

const calcWindow = (idx) =>{
	const currentSum = input[idx-1] + input[idx] + input[idx+1];
	const nextSum = input[idx] + input[idx+1] + input[idx+2];

		if(nextSum > currentSum){
			return true;
		}
		return false;
}

const solution1 = () =>{
	let increasing = [];

	for(let i = 0; i < input.length-1; i++){
		if(input[i] < input[i+1]){
			increasing = [...increasing,input[i]];
		}
	}

	return increasing.length;
}





const solution2 = () =>{
	let increasing = 0;
	for(let i = 0; i< input.length -1; i++){
		if(calcWindow(i)){
			increasing = increasing +1;
		}
	}

	return increasing;
}

const solution2Refactor = (index, counter) =>{
	if(index < input.length -1){
		if(calcWindow(index)){
		return solution2Refactor(index+1, counter+1)
		}else{
		 return solution2Refactor(index+1,counter);
		}
	}else{
		return counter;
	}
}

const solution = () =>{
	const value = solution2();
	return value;
}

export default solution;
