const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";

})
signInButton.addEventListener('click',function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})


  let users = [];
  
  
  document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;
  
    
    if (name && email && password) {
      
      users.push({ name, email, password });
      alert("Registration successful! Please log in.");
      document.getElementById("signUp").style.display = "none";
      document.getElementById("signIn").style.display = "block";
    } else {
      alert("Please fill in all fields.");
    }
  });
  
  
  document.getElementById("signInForm").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const email = document.getElementById("signInEmail").value;
    const password = document.getElementById("signInPassword").value;
  
   
    const user = users.find((user) => user.email === email && user.password === password);
  
    if (user) {
      document.getElementById("signIn").style.display = "none";
      const welcomeMessage = document.getElementById("welcomeMessage");
      welcomeMessage.textContent = `Welcome, ${user.name}!`;
      welcomeMessage.style.display = "block";
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  
  
  