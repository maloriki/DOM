function solve(){
  x = parseInt(a.value)
  if (x < 10)
    x *= x * x * x
  else if (x < 61)
    x -= Math.sin(x * x)
  return x
}

function output_answer(){
  document.getElementById("number").value = solve()
  console.log(a.value)
}
const a = document.getElementById("number")
const input = document.getElementsByTagName("input")[1]
input.addEventListener("click", output_answer)