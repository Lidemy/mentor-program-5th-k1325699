function capitalize(str) {
  let ans=""
  if(str[0]>'a'&&str[0]<'z'){
    ans+=str[0].toUpperCase()
  }else{
    ans+=str[0]
  }
  for(let i=1;i<str.length;i++){
    ans+=str[i]
  }
  return ans
}

console.log(capitalize('hello'));
