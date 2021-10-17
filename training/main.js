function disemvowel(str) {
	str = str.split('');
	let forbiddenVowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

	for (let i = 0; i < str.length; i++) {
		for (vowel of forbiddenVowels) {
			if (str[i] === vowel) {
				str.splice(i, 1);
				i--;
				break;
			}
		}
	}

	return str.join('');
}

console.log(disemvowel("ever read"));