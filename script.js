//Random Color
function Random_color(){
    var length=5;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    alert(`#${password};`)
}
 

 //Timer
function timer() {
  var a = prompt('Enter Your Seconds');
  var b = Number(a);
  alert(`Task Completed ${Math.floor(b / 60)} Minutes`);
}
