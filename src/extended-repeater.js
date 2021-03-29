module.exports = function repeater(str, options) {
	if (!options.hasOwnProperty('separator')) {
		options.separator = '+';
	 }
	 if (!options.hasOwnProperty('additionSeparator') && options.hasOwnProperty('additionRepeatTimes')) {
		options.additionSeparator = '|';
	 }
	 if (options.hasOwnProperty('addition') && options.addition === null) {
			options.addition = 'null';
	 }
	 let addArr = new Array(options.additionRepeatTimes).fill(options.addition);
	 let addStr = addArr.join(options.additionSeparator);
	 let partStr = str + addStr;
	 let resultArr = new Array(options.repeatTimes).fill(partStr);
	 let result = resultArr.join(options.separator);
  return result;
};
