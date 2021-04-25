function reverse(str) {
  let ans=""
  for(i=0;i<str.length;i++){
    ans+=str[str.length-i-1]
  }
  return ans
}

console.log(reverse('hello'));
