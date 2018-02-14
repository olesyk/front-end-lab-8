const getClosestToZero = (...values) => {
	let negativeValues = values.filter(n => n<0).sort((a,b) => b-a);
	let positiveValues = values.filter(n => n>=0).sort((a,b) => a-b);
	if (Math.abs(negativeValues[0]) > Math.abs(positiveValues[0])) {
		return positiveValues[0];
	} else if (Math.abs(negativeValues[0]) < Math.abs(positiveValues[0])) {
		return negativeValues[0];
	} else {
		return `${negativeValues[0]}, ${positiveValues[0]}`;
	}
}