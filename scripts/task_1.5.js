function solve(){
  d = parseFloat(diameter.value);
  w = parseFloat(width.value);
  diagonal = w * Math.sqrt(2) / 2;
  radius = d / 2;
  if (radius >= diagonal)
    return true;
  return false;
}

function verify_result(){
    check = solve();
    if (check)
        result.value = "можно выпилить брус из бревна";
    else
        result.value = "нельзя";

}

function send(){
    verify_result();
    if (check){
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ввод некорректен. Повторите ввод.")
    }
}
let check = false;
const diameter = document.getElementById("diameter");
diameter.addEventListener("input", verify_result);

const width = document.getElementById("width");
width.addEventListener("input", verify_result);

const result = document.getElementById("result");
const verify = document.getElementById("verify");
const submit = document.getElementById("send_server");
verify.addEventListener("click", verify_result)
submit.addEventListener("click", send)