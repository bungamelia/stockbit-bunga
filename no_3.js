function findFirstStringInBracket(str){
	if(str.length > 0){
		let indexFirstBracketFound = str.indexOf("(");
		let indexClosingBracketFound = str.indexOf(")");
		let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);

		if(indexFirstBracketFound >= 0 && indexClosingBracketFound >=0 && wordsAfterFirstBracket){
			return str.substring(str.indexOf( '(' ) + 1, str.indexOf( ')' ))
		}
	}

	return false;
}