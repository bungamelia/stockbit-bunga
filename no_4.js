const strings = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

function getGroupedAnagrams(strings) {
	const anagrams = {};
  	strings.forEach((string) => {
    	const sortedWord = sortString(string);

    	if (anagrams[sortedWord]) {
      		return anagrams[sortedWord].push(string);
    	}
    	
    	anagrams[sortedWord] = [string]
  	});
  	
  	return anagrams;
}

const groupedAnagrams = getGroupedAnagrams(strings);
const output = [];
for (const sortedWord in groupedAnagrams) {
	output.push(groupedAnagrams[sortedWord])
}

console.log(output)