// popup form
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
//  setTimeout(function(){
//    loginPopup.classList.add("show");
//  },5000)

})

function showPopup(){
      const timeLimit = 3 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})


// backend

const firebaseConfig = {
    databaseURL: "https://gtyde-academy-default-rtdb.firebaseio.com"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()


// request query
function IndexRequestQuery(event){
    event.preventDefault()
    let name = document.getElementById("index_name").value
    let email = document.getElementById("index_email").value
    let mobile = document.getElementById("index_mobile").value
    let course = document.getElementById("index_course").value
    console.log(name,email,mobile,course)

    var listRef = database.ref('HomePage_Request/')
var newRef = listRef.push()
newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course
})
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name").value=""
   document.getElementById("index_email").value=""
   document.getElementById("index_mobile").value=""
    document.getElementById("index_course").value=""
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name").value=""
    document.getElementById("index_email").value=""
    document.getElementById("index_mobile").value=""
     document.getElementById("index_course").value=""
})
}





// contact query
function IndexContactQuery(event){
    event.preventDefault()
    let name1 = document.getElementById("index_name1").value
    let email1= document.getElementById("index_email1").value
    let mobile1 = document.getElementById("index_mobile1").value
    let course1 = document.getElementById("index_course1").value
    console.log(name1,email1,mobile1,course1)

    var listRef = database.ref('HomePage_contact/')
var newRef = listRef.push()
newRef.set({
    'name1': name1,
    'email1': email1,
    'mobile1': mobile1,
    "course1":course1
})
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name1").value=""
   document.getElementById("index_email1").value=""
   document.getElementById("index_mobile1").value=""
    document.getElementById("index_course1").value=""
}).catch((err)=>{
    alert("Network Error, So try after some time "+ err)
    document.getElementById("index_name1").value=""
    document.getElementById("index_email1").value=""
    document.getElementById("index_mobile1").value=""
     document.getElementById("index_course1").value=""
})
}





// impression form



function IndexImpressesQuery(event){
    event.preventDefault()
    let name2 = document.getElementById("index_name2").value
    // let email = document.getElementById("index_email").value
    let mobile2 = document.getElementById("index_mobile2").value
    let course2 = document.getElementById("index_course2").value
    console.log(name2,mobile2,course2)

    var listRef = database.ref('HomePage_impressed/')
var newRef = listRef.push()
newRef.set({
    'name': name2,
    // 'email': email,
    'mobile': mobile2,
    "course":course2
})
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name2").value=""
//    document.getElementById("index_email2").value=""
   document.getElementById("index_mobile2").value=""
    document.getElementById("index_course2").value=""
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name2").value=""
    // document.getElementById("index_email2").value=""
    document.getElementById("index_mobile2").value=""
     document.getElementById("index_course2").value=""
})
}



// Popu Form

function IndexPopupQuery(event){
    console.log("clicked")
    event.preventDefault()
    let name = document.getElementById("index_name3").value
    let email = document.getElementById("index_email3").value
    let mobile = document.getElementById("index_mobile3").value
    let course = document.getElementById("index_course3").value
    let training=document.getElementById("index_training3").value
    let location=document.getElementById("index_location3").value

    console.log(name,email,mobile,course,training,location)
    var listRef = database.ref('Enquiry_Request/')
var newRef = listRef.push()
newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course,
    "training":training,
    "location":location
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course+ "<br/><br/> Training Type: "+ training 

            console.log(body);
            Email.send({
                SecureToken:"45658e87-747d-432b-bbc3-187b7944baff",
                Host: "smtp.elasticemail.com",
                Username: "gtyde62@gmail.com",
                Password: "7377F82840DE2CF638AFCA727BEF49E86DEB",
                To: 'gtyde62@gmail.com',
                From: "gtyde62@gmail.com",
                Subject: "GTyde Enquiry",
                Body: body
            })
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name3").value=""
   document.getElementById("index_email3").value=""
   document.getElementById("index_mobile3").value=""
    document.getElementById("index_course3").value=""
    document.getElementById("index_training3").value="Select Training Type"
    // document.getElementById("index_location3").value="Select Location"
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name3").value=""
    document.getElementById("index_email3").value=""
    document.getElementById("index_mobile3").value=""
     document.getElementById("index_course3").value=""
     document.getElementById("index_training3").value=""
    //  document.getElementById("index_location3").value=""
})
}




