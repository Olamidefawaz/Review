const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/img1.jpeg") {
    myImage.setAttribute("src", "images/img2.jpeg");
  } else {
    myImage.setAttribute("src", "images/img1.jpeg");
  }
};

let myHeading = document.querySelector("h1");

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
  };


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to my Front End Development Session, ${myName}`;
    }
    let myButton2 = document.querySelector("button");
    myButton2.textContent = `Thank you Mr, ${myName}`;

  }

  
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = "";
    myHeading.textContent = `Welcome to Front End Development Session, ${storedName}`;
  }

 
  