const isValidChar = (char : string) =>{
    const validChars = "abcdefghijklmnopqrstuvwxyz1234567890"
    return validChars.toLowerCase().includes(char.toLocaleLowerCase())
}

const isPalindrome = (str: string) => {
    let start = 0;
    let end = str.length - 1;

    while (start <= end){
        // if start char is invalid, continue to next statement
        if (! isValidChar(str[start])){
            start += 1;
            continue
        }

        // if start char is invalid, continue to next statement
        if (! isValidChar(str[end])){
            end -= 1;
            continue
        }

        // compare valid chars with lowercase if they mismatch, its not a palindrome
        if(str[start].toLowerCase() !== str[end].toLowerCase()) return false

        // if they match, move to next chars
        start +=1
        end -=1
    }
    // if loop completes, all chars matched, so its a palindrome
    return true
}

const result = isPalindrome("A man, a plan, a canal: Panama")
console.log("🚀 ~ result:", result)

// Space Complexity = O(1) as we used just 2 pointers
// Time complexity = O(n) as we have 