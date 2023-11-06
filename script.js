var typed = new Typed(".typing", {
    strings: ["Good marketing makes the company look smart." , "Great marketing makes the customer feel smart."],
    typeSpeed: 80,
    backSpeed: 100,
    loop: true
});

const firebaseConfig = {
    apiKey: "AIzaSyD5U47JEPujGTeKklwZUqfFGgjLOakzPfA",
    authDomain: "digitaldynamics-d64e7.firebaseapp.com",
    projectId: "digitaldynamics-d64e7",
    storageBucket: "digitaldynamics-d64e7.appspot.com",
    messagingSenderId: "949156558770",
    appId: "1:949156558770:web:9c473497898fafc434d6ab"
  };

firebase.initializeApp(firebaseConfig)


var fileText= document.querySelector('.fileText')
var uploadPercentage = document.querySelector('.uploadPercentage')
var progress= document.querySelector('.progress')
var name1= document.querySelector('.name').value
var percentVal;
var fileItem;
var fileName;

function getFile(event){
    name1= document.querySelector('.name').value
    fileItem=event.target.files[0]
    fileName=fileItem.name;
    fileText.innerHTML=fileName
}

function uploadImage(){
    name1= document.querySelector('.name').value
    let storageRef= firebase.storage().ref(name1+"/"+fileName)
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot )
        percentVal=Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100)
        console.log (percentVal)
        uploadPercentage.innerHTML=percentVal+"%"
        progress.style.width=percentVal+"%"
        

    },(error)=>{
        console.warn(error)
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log(url)

        })
    })
}

var typed = new Typed(".typing", {
    strings: ["Good", "marketing"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});
