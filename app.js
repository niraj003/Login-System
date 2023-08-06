var main = document.getElementById('root');
document.getElementById("footer").innerHTML=`  <footer class="bg-green-100 bg-opacity-75 text-slate-900 fixed bottom-1 rounded-lg shadow m-4">
<div class="w-full flex justify-center mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span class="text-sm text-slate-900 sm:text-center " >Made With ❤️ <a
            href="https://niraj-ghetiya.vercel.app/" class="hover:underline">Niraj Ghetiya™</a>.
    </span>
<!-- <input type="email" name="" id="" required> -->
</div>
</footer>`;
var name;
var email;
var password;


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseConfig = {
    apiKey: "AIzaSyAAOh_fJxezzQB6X3CWFGuC_GeaBNlW1Po",
    authDomain: "loging-systam.firebaseapp.com",
    databaseURL: "https://loging-systam-default-rtdb.firebaseio.com",
    projectId: "loging-systam",
    storageBucket: "loging-systam.appspot.com",
    messagingSenderId: "306693633923",
    appId: "1:306693633923:web:700f8db3d7c880dd8968b6"
  };
firebase.initializeApp(firebaseConfig);
// var contactDB = firebase.database().ref("data");
// console.log(contactDB);

// var newdata = contactDB.push();
// // const dbRef = firebase.database().ref();

// contactDB.on('value',(snap)=>{
//     console.log(snap.val());
//   });
 

  

 


main.innerHTML = ` 

<div class="flex justify-center items-center min-h-screen ">
<button type="button" class=" bg-opacity-70 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 " id="signup">SignUp</button>
<button type="button" class="bg-opacity-70  py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 " id="login">Login</button>
</div></div>`;

document.getElementById("signup").addEventListener("click",signup);
document.getElementById("login").addEventListener("click",login);



function signup() {
    main.innerHTML =`<div class="flex justify-center items-center m-auto min-h-screen"><!-- component -->
    <div class="min-h-screen bg-teal-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <div>
                        <h1 class="text-2xl font-semibold">SignUp Form</h1>
                    </div>

                    <div class="divide-y divide-gray-200">
                        <div">
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7" >
                        <div class="relative">
                        <input autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" required/>
                        <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">User Name</label>
                    </div>
                            <div class="relative">
                                <input autocomplete="off" id="email" name="email" type="email" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div class="relative">
                                <input  id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
                                <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div class="relative">
                                <button class="bg-blue-500 text-white rounded-md px-2 py-1"onclick="subs()">Submit</button>
                            </div>
                            <div class="relative">
                                <button class=" text-gray-950 rounded-md px-2 py-1" onclick="login()">go to Login</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div>`;
}

function login(){
    main.innerHTML =`<div class="flex justify-center items-center m-auto min-h-screen"><!-- component -->
    <div class="min-h-screen bg-teal-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <div>
                        <h1 class="text-2xl font-semibold">Login Form</h1>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div >
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        
                            <div class="relative">
                                <input  id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                            </div>
                            <div class="relative">
                                <input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
                                <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                            </div>
                            <div class="relative">
                                <button type="submit" class="bg-blue-500 text-white rounded-md px-2 py-1" onclick="subl()">Submit</button>
                            </div>
                           
                            <div class="relative">
                            <button class=" text-gray-950 rounded-md px-2 py-1" id="gos" onclick="signup()">go to signup</button>
                        </div> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div>`;
}

async function subl(){
   email= document.getElementById('email').value;
   pass = document.getElementById('password').value;
   db=firebase.firestore().collection("deyaPayusers");
   db.where("Email", "==", email)
       .get()
       .then((querySnapshot) => {
           console.log(querySnapshot);
           if(querySnapshot.empty == true){alert("User is not exist.");}
           querySnapshot.forEach((doc) => {
               // doc.data() is never undefined for query doc snapshots
               console.log(doc.id, " => ", doc.data());
               if(doc.empty == true){alert("User is not exist.");}else{
                var data = doc.data();
                if(email== data.Email && pass == data.password){ 
                // email= data.Email;
                 sendEamil(data.Email,"Thank you for login","login");
                main.innerHTML=`<div class="flex justify-center items-center m-auto min-h-screen">
                <div class="flex flex-col justify-center  max-w-xs p-6 shadow-md rounded-xl sm:px-12 ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMRxiyCryzAiYkXR9ILzZEVVLHqrnwLmsPll5CxUxEepB8NsvOeZt6emOJ28thpKz3Wc&usqp=CAU" alt="" class="w-32 h-32 mx-auto rounded-full aspect-square">
                <div class="space-y-4 text-center divide-y divide-gray-700">
                    <div class="my-2 space-y-1">
                        <h2 class="text-xl font-semibold sm:text-2xl">${ data.Name}</h2>
                        <p class="px-5 text-xs sm:text-base ">${data.Email}</p>
                    </div>
                </div>
            </div></div>`;}else{
                alert("invelid password !");
            }
               }
           });
       })
       .catch((error) => {
           console.log("Error getting documents: ", error);
       });
    
}

function subs(){
    email = document.getElementById('email').value;
    name = document.getElementById('name').value;
    password = document.getElementById('password').value;
    var otp = Math.floor(Math.random() * 10000) + 1000;
    console.log(email);

    
    Email.send({
        SecureToken : "cdff1f67-e096-432d-a49b-1733355ded7c",
        To : `${email}`,
        From : "rajghetiya80@gmail.com",
        Subject : "SignUp Otp",
        Body : `<!DOCTYPE html>
       
           <h1>Welcom ${name}</h1>
           <h4>Your OTP: ${otp}</h4>
          `,
    }).then(
      message => {
        // alert(message);
        if(message){
            
            
            main.innerHTML =`<div class="flex justify-center items-center m-auto min-h-screen"><!-- component -->
    <div class="min-h-screen bg-teal-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <div>
                        <h4 class="text-2xl font-semibold">send otp on: ${email}</h4>
                    </div>
                    <div class="divide-y divide-gray-200">
                        <div >
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        
                            <div class="relative">
                                <input autocomplete="off" id="otp" name="otp" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="otp" required />
                                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">otp</label>
                            </div>
                            
                            <div class="relative">
                                <button type="submit" class="bg-blue-500 text-white rounded-md px-2 py-1" onclick="chackOtp(${otp});" >verify</button>
                            </div>
                           
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div></div>`;
        }else{
            alert("invelit email id");
        }
      }
    );
}



function chackOtp(otp){
    var uotp = document.getElementById('otp').value;
    console.log(otp);
    console.log(uotp);
    if(uotp==otp){
        signupOk()
        body = `<h1>${name}</h1><h2>Successfully register</h2>
        <a href="https://login-system-mu.vercel.app/">login using this link</a>
        `;
        sub=`Successfully`;

        sendEamil(email,body,sub);
    }else{
        alert("invalid otp");
    }
    
}

async function signupOk(){
    
    main.innerHTML=`<div class="flex-col justify-center items-center m-auto min-h-screen">
    <h1>Welcom ${name}</h1>
    <h4>email: ${email}</h4>

    </div>`;
    // db conection
    var db=firebase.firestore().collection("deyaPayusers");

  
//   Realtime Database data add
    // var newdata = contactDB.push();
    // newdata.set({
    //     name: name,
    //     emailid: email,
    //     pass : password,
    // })

    db.where("Email", "==", email)
    .get()
    .then((querySnapshot) => {
        console.log(querySnapshot);
        if(querySnapshot.empty == true){ 
        // data add Cloud Firestore 
            db.add({
            Name:name,
            Email:email,
            password:password,
            
        
        
        }).then(function() {
        
        console.log("Document successfully wriiten!");
        })}else{
            alert("this email id is already register");
        }
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     if(doc.empty == true){alert("brabar");}
        // });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    console.log(name);
    console.log(email);
}


// query on Cloud Firestore

// db.where("Email", "==", "n@g.c")
//     .get()
//     .then((querySnapshot) => {
//         console.log(querySnapshot);
//         if(querySnapshot.empty == true){alert("hi");}
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//             if(doc.empty == true){alert("brabar");}
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });

function sendEamil(email,body, sub){
    Email.send({
        SecureToken : "cdff1f67-e096-432d-a49b-1733355ded7c",
        To : `${email}`,
        From : "rajghetiya80@gmail.com",
        Subject : sub,
        Body : body,
    }).then(
      message => {return message;})
}