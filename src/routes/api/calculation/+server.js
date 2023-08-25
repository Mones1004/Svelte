import { json } from '@sveltejs/kit';
import { equationObject } from '$lib/expression.js'


export function GET() {
	let equation = []
	let ans, i

	console.log(equationObject)

	for (let i = 0; i < equationObject.length; i++) {
		equation[i] = equationObject[i].char
		console.log(equationObject[i].char)
	}

	console.log(equation);

	while (equation.includes('/') == true || equation.includes('*') == true) {
		for (i = 0; i < equation.length; i++) {
			if(equation[i] == '/') {
				ans = equation[i-1] / equation[i+1];
				equation.splice(i-1, 3, ans)
				break
			}
			else if(equation[i] == '*') {
				ans = equation[i-1] * equation[i+1];
				equation.splice(i-1, 3, ans)				
				break
			}
			console.log(equation)
		}
	}

	while (equation.includes('+') == true || equation.includes('-') == true) {
		for (i = 0; i < equation.length; i++) {
			if(equation[i] == '+') {
				ans = equation[i-1] + equation[i+1]
				equation.splice(i-1, 3, ans)
				break
			}
			else if(equation[i] == '-') {
				ans = equation[i-1] - equation[i+1]
				equation.splice(i-1, 3, ans)				
				break
			}
			console.log(equation)
		}
	}

	console.log(equation)
	
	//remove all data from equationObject
	while (equationObject.length > 0){
		equationObject.pop()
	}

	return json(equation);
}
