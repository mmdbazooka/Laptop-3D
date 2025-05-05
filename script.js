document.onmousemove = function(e) {
    laptop.style.transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg) scale(70%)`
}
back.onclick = function() {
    topOfLaptop.classList.toggle("open")
    if(windows.className == "windows-on") {
      windows.classList.remove("windows-on")
      for(i=0;i<keys.length;i++) {
        keys[i].classList.remove("on")
      }
    }
}
document.onkeydown = function(e) {
    if(e.keyCode == "83") document.onmousemove = function(e) {return false}
    if(e.keyCode == "79") {
      topOfLaptop.classList.toggle("open")
      if(windows.className == "windows-on") {
        windows.classList.remove("windows-on")
        for(i=0;i<keys.length;i++) {
          keys[i].classList.remove("on")
        }
      }
    }
}
document.onkeyup = function(e) {
    if(e.keyCode == "83") document.onmousemove = function(e) {
        laptop.style.transform = `rotateX(${e.pageY}deg) rotateY(${e.pageX}deg) scale(70%)`
    }
}
let keys = document.querySelectorAll("#laptop > #bottomOfLaptop > div > div")
turnOnOff.onclick = function() {
  windows.classList.toggle("windows-on")
  for(i=0;i<keys.length;i++) keys[i].classList.toggle("on")
}

let startMenuLeft = document.querySelector(".start-menu-left")
let powerMenu = document.querySelector(".power-menu")
let power = document.querySelector(".power")
let shutDownBtn = document.querySelector(".shut-down-btn")
let shutDown = document.querySelector(".shut-down")
let startingWindow = document.querySelector(".starting-window")
let shutingDownWindow = document.querySelector(".shuting-down-window")
let restart = document.querySelector(".restart")
let sleep = document.querySelector(".sleep")

winSearch.value = ""
windowsLogo.onclick = function() {
    if(startMenuLeft.style.bottom == "-550px"){
      startMenuLeft.style.bottom = "-60px"
    } else {
      startMenuLeft.style.bottom = "-550px"
      powerMenu.style.visibility = "hidden"
    }
}
power.onclick = function() {
    if(powerMenu.style.visibility == "hidden") {
      powerMenu.style.visibility = "visible"
      powerMenu.style.bottom = "50px"
    }else {
      powerMenu.style.visibility = "hidden"
      powerMenu.style.bottom = "0px"
    }
}
shutDownBtn.onclick = function() {
    if(shutDown.style.visibility == "hidden") {
      shutingDownWindow.style.visibility = "visible"
      shutDown.style.visibility = "visible"
      startMenuLeft.style.bottom = "-550px"
      setTimeout(() => {
        shutingDownWindow.style.visibility = "hidden"
      }, 4000);
    }else {
      shutDown.style.visibility = "hidden"
    }
}
shutDown.onclick = function() {
    setTimeout(() => {
      startingWindow.style.visibility = "visible"
      setTimeout(() => {
        shutDown.style.visibility = "hidden"
        startingWindow.style.visibility = "hidden"
    }, 3000);
    }, 1000);
}
restart.onclick = function() {
    window.location.reload()
}
sleep.onclick = function() {
    if(shutDown.style.visibility == "hidden") {
      shutDown.style.visibility = "visible"
      setTimeout(() => {
        shutingDownWindow.style.visibility = "hidden"
      }, 1);
    }else {
      shutDown.style.visibility = "hidden"
    }
}
let thisPc = document.querySelector("#thisPc")
let thisPcHeader = document.querySelector(".this-pc-header")
let maximize = document.querySelector(".maximize")
let minimizePage = document.querySelector(".minimize")
let closePage = document.querySelector(".close")
let fileExplore = document.querySelector(".this-pc-files")
let thisPcDownIcon = document.querySelector(".folders > img")
let thisPcFolders = document.querySelector(".folders > ul")
let thisPcDrives = document.querySelector(".disks > ul")
let thisPcDownIconDrives = document.querySelector(".disks > img")
let zIndex = 0
thisPc.addEventListener("dblclick" , ()=>{
   fileExplore.style.visibility = "visible"
   fileExplore.style.zIndex = zIndex ++
})
thisPcHeader.addEventListener("dblclick" , ()=> {
 fileExplore.classList.toggle("file-100-percent")
 fileExplore.style.left = "0%"
 fileExplore.style.top = "0%"
})
fileExplore.addEventListener("click" , ()=> {
 fileExplore.style.zIndex = zIndex ++
})
maximize.addEventListener("click" , ()=> {
 fileExplore.classList.toggle("file-100-percent")
 fileExplore.style.left = "0%"
 fileExplore.style.top = "0%"
})
closePage.addEventListener("click" , ()=> {
 fileExplore.style.visibility = "hidden"
 thisPcDrives.className = ""
 thisPcFolders.className = ""
})
minimizePage.addEventListener("click" , ()=> {
 fileExplore.style.visibility = "hidden"
 thisPcDrives.className = ""
 thisPcFolders.className = ""
})
thisPcDownIcon.addEventListener("click" , ()=> {
  thisPcFolders.classList.toggle("active")
  setTimeout(() => {
    thisPcDownIcon.classList.toggle("active-icon")
  }, 300);
})
thisPcDownIconDrives.addEventListener("click" , ()=> {
  thisPcDrives.classList.toggle("active")
  setTimeout(() => {
    thisPcDownIconDrives.classList.toggle("active-icon")
  }, 300);
})