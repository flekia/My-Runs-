let editId = null; 
    document.addEventListener("DOMContentLoaded", function() {
  updateAll();         
});
      let IP = ('');
async function fetchingIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    IP = data.ip;
  }
  catch (error) {
    console.error('Error fetching IP:', error);
  }
}
//transition
function transition() {
    const transitionImages = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaH-7pHe2PMr8FZbAl4LdJ5SkprlqFZcuc9Q&s", //haha
      "https://media1.tenor.com/m/7pi5Ja3WcRoAAAAC/mustard-kendrick-lamar.gif", //hehe
      "https://i.pinimg.com/736x/c9/31/92/c93192b782081d4d1d70b03a3c1cf011.jpg", //fartnite
      "https://i.pinimg.com/736x/5c/c3/e4/5cc3e49257b1ff5e5f257cfbd9e98788.jpg", //car
      "https://media.tenor.com/YKIh_2GoZIoAAAAM/10years-in-the-joint.gif", //nikishi tuff
      "https://media.tenor.com/5ACLg7xFFloAAAAM/ichiban-ichibum.gif", //ichiban tuff
      "https://i.imgflip.com/9po71x.jpg", //cat
      "https://media.tenor.com/tERiuqTAHlAAAAAm/spongebob-spongebob-meme.webp", //ill have uhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      "https://media.tenor.com/Tfj0zysntJMAAAAM/patrick-star.gif", //that one friend
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkvMHFDO10nxx3lVvpJvz-QpdE11h8Bg1Rg&s", //tyler
      "https://media.tenor.com/gDDm8YwvWKEAAAAM/jork.gif", //man face george the pig
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYGlcdmKdGSCW8cRw9FvBME--e3udX6Dyxg&s", //i dont even know what kind of thumbnail is ts
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JzChhIVG2NoaA2X4PfCs8hBdIeZrmPkD7g&s", //cornball
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeEDjnMSlVs__GxaUrHKpibZTnztDPlfEqQ&s", //bruzz photoshopped grass😭🙏
      "https://media1.tenor.com/m/Rze6ZnVMFgsAAAAC/i-don%27t-know-what-to-say.gif" //alden richards
    ];

    const random = transitionImages[Math.floor(Math.random() * transitionImages.length)];
    console.log(`Selected image: ${random}`);
    const hehe = document.createElement("img");
    hehe.src = random;
    hehe.style.position = "fixed";
    hehe.style.top = "0";
    hehe.style.left =  "0";
    hehe.style.width = "100vw";
    hehe.style.height = "100vh";
    hehe.style.zIndex = "9999";
    hehe.style.pointerEvents = "none";
    hehe.style.transition = "1s ease-in-out";
    hehe.style.backgroundRepeat = "no-repeat";
    hehe.style.backgroundSize = "cover";
      document.body.appendChild(hehe);
        setTimeout(() => {
          hehe.style.opacity = "0";
          hehe.style.transition = "5s ease-out";
          setTimeout(() => {
            document.body.removeChild(hehe);
          }, 5000); //duration
        }, 500); //end

  } 

  const form = document.getElementById("publish-form");
//publish section
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const runDate = document.getElementById("run-date").value;
    const dateOnly = runDate.split("T")[0];
    const runStart = document.getElementById("run-start").value;
    const runLocation = document.getElementById("run-location").value;
    const runMinutes = document.getElementById("run-minutes").value;
    const runSeconds = document.getElementById("run-seconds").value;



fetchingIP();

async function checkthem() {

  await fetchingIP();

  const videos = ["https://www.youtube.com/embed/tXEPbotEjZE", //thick of it
    "https://www.youtube.com/embed/k2fCur3tzEI", //can i beat minecraft while beating myself 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNWnf47pEbMPGKDtGgvbqe15NjFsETTxsJQ&s", //u mad
    "https://www.youtube.com/embed/8pghr5JXdlU", //i put the new forgis
    "https://www.youtube.com/embed/dQw4w9WgXcQ", //rickroll
    "https://www.youtube.com/embed/1-nLxw5K3eA", //start digging in yo butt twin🥀😂✌️
    "https://flekia.github.io/My-Runs-/" //siteception
  ];
  const spinning = videos[Math.floor(Math.random() * videos.length)];
  const nunMuch = document.getElementById("nothingName");
  const popup = document.getElementById("popupOverlayVid");
  const random = Math.floor(Math.random() * 101) + 1;
  console.log(`${random}`);
 if (random <= 100) {
  popup.style.display = "block";
  const button = document.getElementById("closePopVid");
  button.innerHTML = "WHAT THE!!";
  button.addEventListener("click", function() {
  popup.style.display = "none";
  nunMuch.src = '';});  
  nunMuch.src = spinning;
  } else {
    const laying = document.getElementById("popupOverlayIP");
    const IPA = document.getElementById("IPGrabber");
    const butt = document.getElementById("closePopIP");
    laying.style.display = "block";
    IPA.innerHTML = `Your IP is: ${IP}`;
    butt.addEventListener("click", function() {
      laying.style.display = "none";
    });
  }
}

//error so that it doesn't show

 if (runDate === "" && runStart === "" && runLocation === "" && runMinutes !== "" && runSeconds !== "") {

 } else{

    if (!runDate || !runStart|| !runLocation || runMinutes === "" || runSeconds === "") {
      const layman = document.getElementById("popupOverlayIPC");
      const IAgree = document.getElementById("closePopIPY");
      const IDisagree = document.getElementById("closePopIPN");
      layman.style.display = "block";
      IAgree.addEventListener("click", function() {
        layman.style.display = "none";
        checkthem();
      }, {once: true});
      IDisagree.addEventListener("click", function(){
        layman.style.display = "none";
      });
      return;
    }
  }


//renamed for id
    const duration = `${padTime(Number(runMinutes))}:${padTime(Number(runSeconds))}`;
    const newRun = {
      id: editId !== null ? editId : Date.now(),
      date: dateOnly,
      where: runStart,
      location: runLocation,
      duration: duration
    };

    let runs = JSON.parse(localStorage.getItem("runs")) || [];
    
    if (editId !== null) {
      runs = runs.map(run => (run.id === editId ? {...newRun, id: editId} : run));
      editId = null;
    } else {
      runs.push(newRun);
    }
    localStorage.setItem("runs", JSON.stringify(runs));

    form.reset();
    updateAll();
  });


//calculation
function padTime(time) {
  return time.toString().padStart(2, "0");
}


function timeToSeconds(duration) {
  const [m, s] = duration.split(":").map(Number);
  return m * 60 + s;
}

function updateAll() {
  let runs = JSON.parse(localStorage.getItem("runs")) || [];
  try{
 
  runs.sort((a, b) => timeToSeconds(a.duration) - timeToSeconds(b.duration));

  updateLeaderboard(runs);
  updateFilteredRuns(runs, "Outside", "going-runs");
  updateFilteredRuns(runs, "Home", "home-runs");
  } catch (error) {
    console.error("Error! Cannot update runs.", error);
    const leaderboard = document.getElementById("leaderboard-table");
    leaderboard.innerHTML = "<p>Error loading runs. Please try again.</p>";
  }
}

function updateLeaderboard(runs) {
  const leaderboard = document.getElementById("leaderboard-table");
  leaderboard.innerHTML = generateTable(runs);
}
function updateFilteredRuns(runs, time, containerId) {
  const filtered = runs.filter(run => run.where === time);
  const container = document.getElementById(containerId);
  container.innerHTML = generateTable(filtered);
}
    //leaderboard format + award
function generateTable(data) {
  if (!data.length) return '<p style="text-align: center; font-size: 24px;">Nothing?? <img src="https://c.tenor.com/v7hqpHXFfg8AAAAC/tenor.gif" style="width: 20px; height: 20px;"></p>';

  let table = `<table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Where it started</th>
        <th>Location</th>
        <th>Duration</th>
        <th>Action</th>
      </tr>
    </thead><tbody>`;

  data.forEach((run, i) => {
    let award = "";
  if (i === 0){
    award = `<div class="awards top1"></div>`;
} else if (i === 1){
    award = `<div class="awards top2"></div>`;
} else if (i === 2){
  award = `<div class="awards top3"></div>`;
} else {
  award = "";
  } console.log("Awards and rank are working.");
  table += `<tr>
      <td>${award} ${run.date}</td>
      <td>${run.where}</td>
      <td>${run.location}</td>
      <td>${run.duration}</td>
      <td>
        <div class="tablebutts">
        <button id="tablebuttdel" onclick="deleteRun(${run.id})">Delete</button> 
        <button id="tablebuttedit" onclick="editRun(${run.id})">Edit</button></td> 
          </div>
        </tr>`;
  });
  table += "</tbody></table>";
  return table;
}
//delete option
function deleteRun(id, hehe = true) {
  const confirmation = document.getElementById("popupOverlaydelrCon");
  const yesYes = document.getElementById("closePopdelrY");
  const pleaseStop = document.getElementById("closePopdelrN");
  const conCon = document.getElementById("popupOverlaydelrCom");
  confirmation.style.display = "block";
  pleaseStop.addEventListener("click", function() {
    confirmation.style.display = "none";
  });
  yesYes.addEventListener("click", function() {
    confirmation.style.display = "none";

  
  let runs = JSON.parse(localStorage.getItem("runs")) || [];
  runs = runs.filter(run => run.id !== id);
  localStorage.setItem("runs", JSON.stringify(runs));
  updateAll(); 
  console.log(`Deleted ${id}.`);
  conCon.style.display = "block";
  const IDOfRun = document.getElementById("delrCom");
  const closeing = document.getElementById("closePopdelrC");
  IDOfRun.innerHTML = id;
  closeing.addEventListener("click", function () {
    conCon.style.display = "none";
  });
  if (!hehe) {
      closeing.addEventListener("click", function () {
    conCon.style.display = "none";
      });
      return;
  } else{

  } return;


});
  
  
}

//if user wants to delete all of the runs

function deletion() {
  const laymansTerms = document.getElementById("popupOverlaydeleCon");
  const theyDidIt = document.getElementById("closePopdalleY");
  const theyDidntDoIt = document.getElementById("closePopdalleN");
  const laymansTermsY = document.getElementById("closePopdeerY");
  const laymansTermsN = document.getElementById("closePopdeerN");
  const theyDidItButt = document.getElementById("popupOverlaydeleY");
  const theyDidntDoItButt = document.getElementById("popupOverlaydeleN");
  laymansTerms.style.display = "block";
  laymansTermsY.addEventListener("click", function() {
    laymansTerms.style.display = "none";
    localStorage.removeItem("runs");
    updateAll();
    theyDidItButt.style.display = "block";
    theyDidIt.addEventListener("click", function() {
      theyDidItButt.style.display = "none";
    console.log("User deleted all of their runs.");
    });
  });
 
    laymansTermsN.addEventListener("click", function() {
      laymansTerms.style.display = "none";
      theyDidntDoItButt.style.display = "block";
      theyDidntDoIt.addEventListener("click", function() {
        theyDidntDoItButt.style.display = "none";
    console.log("User didn't delete their runs.");
      });
    });
}

// edit option

function editRun(id) {
 let runs = JSON.parse(localStorage.getItem("runs")) || [];
 const laying = document.getElementById("popupOverlayeditR");
 const horseOfAgreement = document.getElementById("closePopeditY");
 const horseOfDisagreement = document.getElementById("closePopeditN");
 laying.style.display = "block";
  const runToEdit = runs.find(run => run.id === id);
  if (runToEdit) {
    horseOfAgreement.addEventListener("click", function() {
      laying.style.display = "none";
      transition();
      
    
    const format = new Date(runToEdit.date).toISOString().slice(0, 16);
    document.getElementById("run-date").value = format;
    document.getElementById("run-start").value = runToEdit.where;
    document.getElementById("run-location").value = runToEdit.location;
    const [minutes, seconds] = runToEdit.duration.split(":");
    document.getElementById("run-minutes").value = minutes;
    document.getElementById("run-seconds").value = seconds;
    
    editId = id;
    document.querySelectorAll(".topnav a").forEach(nav => nav.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

    document.querySelector(".topnav a[href='#publish']").classList.add("active");
    document.getElementById("publish").classList.add("active");
    
    }, {once: true});
    horseOfDisagreement.addEventListener("click", function() {
      laying.style.display = "none";
      transition();
      console.log("Run not found/cancelled.");
    }, {once: true}); 
}
}

//if about editing the dropdown table

function editValues(event){
  event.preventDefault();
  const editTableValue = document.getElementById("newest").value.trim();
  const editTableOption = document.getElementById("run-location");


  if (!editTableValue) {
    const overlay = document.getElementById("popupOverlayEdit");
    overlay.style.display = "block";
    document.getElementById("closePopeditAgree").onclick = function() {
      overlay.style.display = "none";
      const mustard67Mangoes = document.getElementById("popupOverlayVid");
      const closeer = document.getElementById("closePopVid");
      closeer.innerHTML = "LEBRON!!";
      mustard67Mangoes.style.display = "block";
      const itMayNotBeNothingtoYall = document.getElementById("nothingName");
      itMayNotBeNothingtoYall.src = "https://www.youtube.com/embed/eDuRoPIOBjE"; //LEBRON!!
      mustard67Mangoes.style.display = "block";
      closeer.addEventListener("click", function() {
        mustard67Mangoes.style.display = "none"; 
        button.innerHTML = "WHAT THE!!";
        itMayNotBeNothingtoYall.src = "";});
    };
    document.getElementById("closePopeditDisagree").onclick = function() {
      overlay.style.display = "none";
    };
    return;
  }


  const selectedOp = editTableOption.options[editTableOption.selectedIndex];

    //if user overrides no value
    if (selectedOp.disabled) {
    const overlay = document.getElementById("popupOverlayEditB");
    overlay.style.display = "block";
    document.getElementById("closePopedditB").onclick = function() {
      overlay.style.display = "none";
    };
    return;
  }
  const overlayConfirm = document.getElementById("popupOverlayEdit");
  overlayConfirm.style.display = "block";
  document.getElementById("closePopeditAgree").onclick = function() {
    overlayConfirm.style.display = "none";
  selectedOp.textContent = editTableValue;
  selectedOp.value = editTableValue;
  saveTheRoutesDamnit();
const overlaySuccess = document.getElementById("popupOverlayEditC");
    overlaySuccess.style.display = "block";
    document.getElementById("closePopedditC").onclick = function() {
      overlaySuccess.style.display = "none";
    };
  };
    document.getElementById("closePopeditDisagree").onclick = function() {
    overlayConfirm.style.display = "none";
  };
}

//add routes
function addValue() {
  const newValue = document.getElementById("newest").value.trim();
  const newRoute = document.getElementById("run-location");
  
  if (!newValue) {
    const overlay = document.getElementById("popupOverlayAddB");
    overlay.style.display = "block";
    document.getElementById("closePopaddB").onclick = function() {
      overlay.style.display = "none";
    };
    return;
  } 
    const dupes = document.getElementById("run-location");

    const existentialCrisis = Array.from(dupes.options).some(opt => opt.value === newValue);
    if (existentialCrisis) {
    const overlay = document.getElementById("popupOverlayAddD");
    overlay.style.display = "block";
    document.getElementById("closePopaddD").onclick = function() {
      overlay.style.display = "none";
    };
      return;
    }
    const newOption = document.createElement("option");
    newOption.value = newValue;
    newOption.textContent = newValue;
    newRoute.appendChild(newOption);
    saveTheRoutesDamnit();
    const overlay = document.getElementById("popupOverlayAddC");
    overlay.style.display = "block";
    document.getElementById("closePopaddC").onclick = function() {
      overlay.style.display = "none";
    };
  

}

//delete route

function deleteOption() {
  const overlayConfirm = document.getElementById("popupOverlayDellCon");
  if (!overlayConfirm) return;
  overlayConfirm.style.display = "block";

  const btnNo = document.getElementById("closePopdelCondisree");
  if (btnNo) {
    btnNo.onclick = function () {
      overlayConfirm.style.display = "none";
    };
  }

  const btnYes = document.getElementById("closePopdelCongree");
  if (btnYes) {
    btnYes.onclick = function () {
      overlayConfirm.style.display = "none";

      const select = document.getElementById("run-location");
      if (!select) return;

      if (select.value === "") {
        const overlayBlank = document.getElementById("popupOverlayDellB");
        if (overlayBlank) {
          overlayBlank.style.display = "block";
          const btnBlank = document.getElementById("closePopdelB");
          if (btnBlank) {
            btnBlank.onclick = function () {
              overlayBlank.style.display = "none";
            };
          }
        }
        console.log("Route was not deleted.");
      } else {
        select.remove(select.selectedIndex);

        const overlayDone = document.getElementById("popupOverlayDellCom");
        if (overlayDone) {
          overlayDone.style.display = "block";
          const btnDone = document.getElementById("closePopdelCom");
          if (btnDone) {
            btnDone.onclick = function () {
              overlayDone.style.display = "none";
            };
          }
        }
        console.log("Route deleted.");
        saveTheRoutesDamnit();
      }
    };
  }
}

//load routes when user changes

function myLoad() {
  const storeThem = JSON.parse(localStorage.getItem("routes")) || [
    "Harmony",
    "Shorterville",
    "Midville",
    "Longerville",
    "Hospital"
  ];

  const options = document.getElementById("run-location");
  options.innerHTML = "";

  const defaulting = document.createElement("option");
  defaulting.value = "";
  defaulting.disabled = true;
  defaulting.selected = true;
  defaulting.textContent = "Location";
  options.appendChild(defaulting);

  storeThem.forEach(route => {
    const option = document.createElement("option");
    option.value = route;
    option.textContent = route;
    options.appendChild(option);
  });
}

//saves changes

function saveTheRoutesDamnit() {
  const options = Array.from(document.getElementById("run-location").options) 
  .filter(opt => opt.value && opt.value !== "")
  .map(opt => opt.value);

  localStorage.setItem("routes", JSON.stringify(options));
  myLoad();
}
//error on storage

try {
  let runs = JSON.parse(localStorage.getItem("runs")) || [];
} catch (error) {
  console.error("Error parsing runs from localStorage:", error);
  localStorage.setItem("runs", JSON.stringify([]));
  alert("Error loading runs. Please try again.");
}
    console.log("leaderboard.js loaded.");

    document.addEventListener("DOMContentLoaded", myLoad);
  
    //tabs
    document.addEventListener("DOMContentLoaded", function() {
  const hyperlink = document.querySelectorAll(".topnav a");
  const tabs = document.querySelectorAll(".tab-content");
  
  
  
  hyperlink.forEach(link => {
    link.addEventListener('click', function(e) {
      
      if (this.classList.contains("closebtn")) return;

      e.preventDefault();
    
    
    hyperlink.forEach(nav => nav.classList.remove("active"));
    tabs.forEach(tab => tab.classList.remove("active"));
    
    
   const tabId = this.getAttribute("href").substring(1);

   if (!tabId) {
    console.error("Cannot find tab.");
    return
   }
   const content = document.getElementById(tabId);

   if (content) {
    content.classList.add("active");
   } else{
    console.error(`${tabId} is not found.`);
   }
   this.classList.add("active");
    });
  });
});
    console.log("tabs.js loaded.");
  
    document.addEventListener("DOMContentLoaded", () => {
 updateAll();
//save
function exportRuns() {
  const runs = JSON.parse(localStorage.getItem("runs")) || [];
  if (runs.length === 0) {
    const nothing = document.getElementById("popupOverlaySave");
    nothing.style.display = "block";
    const closed = document.getElementById("closePopSave");
    closed.addEventListener("click", function() {
      nothing.style.display = "none";
    });
    return;
  }
  const savedP = document.getElementById("popupOverlaySaveP");
  savedP.style.display = "block";
  const cancel = document.getElementById("closePopSaveN");
  const confirmed = document.getElementById("closePopSaveY");


  const newConfirmed = confirmed.cloneNode(true);
  confirmed.parentNode.replaceChild(newConfirmed, confirmed);

  cancel.addEventListener("click", function() {
    savedP.style.display = "none";
  });

  newConfirmed.addEventListener("click", function() {
    savedP.style.display = "none";
    const userInputField = document.getElementById("penisWarts");
    let userInput = userInputField ? userInputField.value.trim() : "";

    if (!userInput) {
      userInput = "runs.json";
    } else if (!userInput.endsWith(".json")) {
      userInput += ".json";
    }

    const json = JSON.stringify(runs, null, 2);
    const blob = new Blob([json], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = userInput;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);

    const name = document.getElementById("popupOverlaySaveN");
    name.style.display = "block";
    const closeSave = document.getElementById("closePopSaveClose");
    const input = document.getElementById("useraI");
    input.innerHTML = userInput;
    closeSave.addEventListener("click", function() {
      name.style.display = "none";
    });
    console.log(`Run exported successfully as ${userInput}.`);
    return;
  });
}


//load
function importRuns(event) {
  const file = event.target.files[0];
    const read = new FileReader();
    read.onload = function(event) {
        try{
        const runs = JSON.parse(event.target.result);
        if (!Array.isArray(runs)) {
            throw new Error("Invalid.")
        }
        localStorage.setItem("runs", JSON.stringify(runs));
        const overlay = document.getElementById("popupOverlayLoad");
        overlay.style.display = "block";
        const close = document.getElementById("closePopLoad");
        close.addEventListener("click", function() {
          overlay.style.display = "none";
        });
        updateAll();
        } catch (error) {
            console.error("Cannot load file.")
            const overlaid = document.getElementById("popupOverlayLoadW");
            const close = document.getElementById("closePopLoadW");
            overlaid.style.display = "block";
            close.addEventListener("click", function() {
              overlaid.style.display = "none";            
            });
        }
    };
    read.readAsText(file);
}
document.getElementById("export-button").addEventListener("click", exportRuns);
document.getElementById("import-button").addEventListener("change", importRuns);

window.exportRuns = exportRuns;
window.importRuns = importRuns;
});
    console.log("import/export.js loaded.");
  
    //side navbar
      const tabside = document.getElementById("tabside");
      const morebtn = document.getElementById("morebtn");
      const opener = document.getElementById("morebtnm");
      const closebtn = document.getElementById("closebtn");
      let isDragging = false;
      let slidingWoooo = true;
      morebtn.classList.remove("itson");
      const switcheroni = document.getElementById("switchState");
      function updateWidth(clientX) {
      tabside.classList.add("active");
      const minWidth = 0;
      const maxWidth = 100;
      let newWidth = clientX;

      if (newWidth < minWidth) newWidth = minWidth;
      if (newWidth > maxWidth) newWidth = maxWidth;

      tabside.style.width = `${newWidth}px`;
      morebtn.style.left = `${newWidth}px`;
      }
  function openNav() {
      const top = document.getElementById("tabside");
      const opener = document.getElementById("morebtnm");
      const closebtn = document.getElementById("closebtn");
      top.classList.add("mobile", "active");
      top.classList.remove("closed");
      top.style.width = "100px";
      top.style.transition = "width 0.3s ease-in-out";
      opener.style.display = "none";
      closebtn.style.display = "block";
      document.body.classList.remove("nav-collapsed");
    }
    function closeNav() {
      const top = document.getElementById("tabside");
      const opener = document.getElementById("morebtnm");
      top.classList.remove("mobile");
      top.classList.add("closed");
      top.style.width = "0";
      opener.style.display = "block";
      top.style.transition = "width 0.3s ease-in-out";
      document.body.classList.add("nav-collapsed");

      const activeTab = document.querySelector('.topnav a.active');
      if (activeTab){
        const tabId = activeTab.getAttribute('href').substring(1);
        const content = document.getElementById(tabId);
        if (content) {
          content.classList.add('active');
        }
      }
      
    }
      function reset() {
      const tabside = document.getElementById("tabside");
      const morebtn = document.getElementById("morebtn");
      if (tabside) tabside.style.width = "0";
      if (morebtn) morebtn.style.left = "0";
    }
    function enableMe() {
      slidingWoooo = true;
      localStorage.setItem("navMode", "slider");
      switcheroni.innerHTML = "Slider Mode";
      morebtn.classList.add("itson");
      opener.style.display = "none";
      closebtn.style.display = "none";
      tabside.classList.remove("mobile", "closed");
      tabside.classList.add("active");
      tabside.style.transition = "none";
      reset();
      if (!morebtn.hasDragListeners) {
        morebtn.addEventListener("touchstart", () => isDragging = true);
        document.addEventListener("touchmove", (e) => {
          if (!isDragging) return;
          updateWidth(e.touches[0].clientX);
        });
        document.addEventListener("touchend", () => isDragging = false);
        morebtn.hasDragListeners = true;
      }
    }
    function suchATurnOff() {
      slidingWoooo = false;
      localStorage.setItem("navMode", "button");
      switcheroni.innerHTML = "Button Mode";
      morebtn.classList.remove("itson");
      opener.style.display = "block";
      closebtn.style.display = "none";
      tabside.classList.remove("active");
      tabside.style.transition = "width 0.3s ease-in-out";
      tabside.style.width = "0";
      reset();
      closeNav();
    }
    switcheroni.addEventListener("click", () => {
      if (!slidingWoooo) {
        enableMe();
      } else {
        suchATurnOff();
      }
    });
    document.addEventListener("touchend", (e) => {
      if (isDragging) {
        isDragging = false;
      }
    });
    function mesugaki(){
    const mode = localStorage.getItem("navMode");
    if (mode === "slider") {
      enableMe();
    } else if (mode === "button") {
      suchATurnOff();
    }
  }
    console.log("navbar.js loaded.");
console.log("Edit roulette is working.");
  
    //filter/search bar

    //home tab
    document.getElementById("search-home").addEventListener("input", function() {
      const query = this.value.toLowerCase();
      const rows = document.querySelectorAll("#leaderboard-table table tbody tr");
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        let found = false;
        cells.forEach(cell => {
          if (cell.textContent.toLowerCase().includes(query)) 
            found = true;
        });
        row.style.display = found ? "" : "none";
      });
    });

    //going tab
    document.getElementById("search-goes").addEventListener("input", function() {
      const query = this.value.toLowerCase();
      const rows = document.querySelectorAll("#going-runs table tbody tr");
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        let found = false;
        cells.forEach(cell => {
          if (cell.textContent.toLowerCase().includes(query))
            found = true;
        });
        row.style.display = found ? "" : "none";
      });
    });

    //ho(me) tab
    document.getElementById("search-ho").addEventListener("input", function() {
      const query = this.value.toLowerCase();
      const rows = document.querySelectorAll("#home-runs table tbody tr");
      rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        let found = false;
        cells.forEach(cell => {
          if (cell.textContent.toLowerCase().includes(query)) 
            found = true;        
        });
        row.style.display = found ? "" : "none";
      });
    });
    
  
    document.addEventListener("DOMContentLoaded", function() {
      let runs = JSON.parse(localStorage.getItem("runs")) || [];
    generateTable(runs); 
  });
 
    //popup
    document.addEventListener("DOMContentLoaded", function() {
      const popUpOverlay = document.getElementById("popupOverlay");
      const closePop = document.getElementById("closePop");
      const popUp = document.getElementById("popUp");
      function openPopUp() {
        popUpOverlay.style.display = "block";
      }
      function closePopping(){
        popUpOverlay.style.display = "none";
      }
     openPopUp();

    closePop.addEventListener("click", closePopping);

    popUpOverlay.addEventListener("click", function (event){
      if (event.target === popUpOverlay) {
        closePopping();
      }
    });
    });