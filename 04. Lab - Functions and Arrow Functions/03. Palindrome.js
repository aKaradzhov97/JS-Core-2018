function palindrome(word) {
    let lastIndex = Number(word.length - 1);
    let isPalindrome = true;
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] === word[lastIndex]) {
            lastIndex--;
            continue;
        } else {
            isPalindrome = false;
            break;
        }
    }
    console.log(isPalindrome);
}