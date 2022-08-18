
const btnSubmit1 = document.getElementById('btn-submit');

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
var tempPass = makeid(5);
document.getElementById('random-pass').innerText = tempPass ;

function authFunction(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value; 
    
    if(userEmail == 'samiul@gmail.com' && userPassword == tempPass){
        console.log('Login Permitted');
        window.location.href = 'core.html';
    } 
    else{
        document.getElementById('warning-text').innerHTML= 'Incorrect email password combination!';
    }
    
}




btnSubmit1.addEventListener('click',authFunction);
