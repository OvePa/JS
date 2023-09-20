function checkAnagram(str1, str2) {
    let num = 0;
    // Write you code here
    let lowStr1 = str1.toLowerCase(); // Converting string 1 to lowercase
    let lowStr2 = str2.toLowerCase(); // Converting string 2 to lowercase
    let sortedStr1 = lowStr1.split('').sort().join(''); // Converting the string 1 into characters and sort them
    let sortedStr2 = lowStr2.split('').sort().join(''); // Converting the string 2 into characters and sort them
    if (sortedStr1 == sortedStr2) {
        num = 1; // If both strings are equal, assign value 1 to variable num
        console.log("The strings are anagrams.");
    } else {
        num = -1; // otherwise, assign value -1 to variable num 
        console.log("The strings are not anagrams.");
    }
    return num;
}