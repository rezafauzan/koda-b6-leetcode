// 9. Palindrome Number
var isPalindrome = function(x) {
    x = x.toString()
    let correct = 0
    for(i = 0 ; i<x.length;i++){
        if(x[i] === x[x.length - 1 -i]){
            correct++
        }
    }
    if(correct === x.length){
        return true
    }
    return false
}

isPalindrome(11222211)