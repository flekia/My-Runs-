    //themes
    function themeChange(theme) {
    const allOfThem = ["default", "leaf", "vanta", "white", "purple"];
    document.body.classList.remove(...allOfThem);
    document.body.classList.add(theme);
    localStorage.setItem("preferredTheme", theme);

    //gifs
    const gifs = {
    default: [
    "https://media.tenor.com/f5nzCB1r7u4AAAAm/topaz-honkai.webp",
    "https://media.tenor.com/HBH9itCejo8AAAAM/topaz-numby.gif",
    "https://media.tenor.com/gvSdu1BR6d8AAAAm/topaz-numby.webp",
    "https://media.tenor.com/WU1hYzex5twAAAAm/seseren.webp",
    "https://media.tenor.com/gQdcOsUoiXcAAAAi/seseren.gif",
    "https://media.tenor.com/PGQ_Qxjid28AAAAi/topaz-honkai-star-rail.gif"
    ],
    leaf: [
    "https://media.tenor.com/hmxNexJ1j1wAAAAm/honkai-hsr.webp",
    "https://media.tenor.com/qAdEL6HOxggAAAAm/huohuo-hsr.webp",
    "https://media.tenor.com/u-WI__pGMuAAAAAm/fofo-hsr.webp",
    "https://media.tenor.com/DOglfepYslMAAAAm/honkai-hsr.webp",
    "https://media.tenor.com/8jYIwJKtAuQAAAAm/honkai-hsr.webp",
    "https://media.tenor.com/TO7govdHZLoAAAAm/huo-huo.webp"
    ],
    vanta: [
    "https://media.tenor.com/9HmmIm4V1m8AAAAm/emote-emoji.webp",
    "https://media.tenor.com/8yMaKNefB98AAAAm/genshin-impact-emote.webp",
    "https://media.tenor.com/5pkkS-EAVBQAAAAj/xinyan-genshin-impact.gif",
    "https://media.tenor.com/YoV_tBt-zOcAAAAM/xinyan-bongo.gif",
    "https://media.tenor.com/TD98lHebGgQAAAA1/xinyan-bocchi-the-rock.webp",
    "https://media.tenor.com/DXz-7QOJ3RAAAAAM/xinyan-gi-xinyan.gif"
    ],
    white: [
    "https://media.tenor.com/u3mqzhX4JcwAAAAm/anby-%EC%A0%A0%EB%A0%88%EC%8A%A4.webp",
    "https://media.tenor.com/MDHPyikmQFUAAAAm/anby-demara-zenless-zone-zero.webp",
    "https://media.tenor.com/SoMb_HaNi08AAAAm/anby-demara-zenless-zone-zero.webp",
    "https://media.tenor.com/1QdnK6AkjH4AAAAm/anby-demara-zenless-zone-zero.webp",
    "https://media.tenor.com/V-v_afgiOdcAAAAm/zzz.webp",
    "https://media.tenor.com/Q03pawk9lqkAAAAm/anby-demara-zenless-zone-zero.webp"
    ],
    purple: [
    "https://media.tenor.com/q7llUSysOG0AAAAj/jade-honkai-star-rail.gif",
    "https://media.tenor.com/aM4kKMfpwK4AAAAm/jade-honkai-star-rail.webp",
    "https://media.tenor.com/rZHUdyq6GkoAAAAm/jade-honkai-star-rail.webp",
    "https://media.tenor.com/gXIiaymM-IgAAAAm/jade-honkai-star-rail.webp",
    "https://cdn3.emoji.gg/emojis/6819-yaemiko-deadinside.png",
    "https://upload-os-bbs.hoyolab.com/upload/2022/02/07/13005748/6926ef4653633868ac4b3cb168e89779_8133525685464146317.gif"
    ],
  };
  
  const list = gifs[theme];
  const change = document.querySelectorAll(".gifs");

  if (list && list.length === change.length) {
    change.forEach((img, hehe) => {
    img.src = list[hehe];
    });
  } else {
    console.error("Can't handle more...");
  }
  updateAll();
}
    function isMobile() {
      return window.innerWidth <= 768;
    }
    function adjustNavLayout() {
      const topnav = document.getElementById("tabside");
      if (!isMobile()) {
        document.body.classList.add("desktop");
        document.body.classList.remove("mobile");
        topnav.classList.add("desktop");
        topnav.style.width = "100%";
        topnav.style.height = "auto";
        topnav.style.position = "static";
        topnav.style.flexDirection = "row";
        document.querySelectorAll('.tab-content').forEach(tab => tab.style.marginLeft = "0");
        if (morebtn) morebtn.style.display = "none";
      } else {
        document.body.classList.add("mobile");
        document.body.classList.remove("desktop");
        topnav.classList.remove("desktop");
        topnav.style.width = "0";
        topnav.style.height = "100%";
        topnav.style.position = "fixed";
        topnav.style.flexDirection = "column";
        document.querySelectorAll('.tab-content').forEach(tab => tab.style.marginLeft = "");
       if (morebtn) morebtn.style.display = "block";

      }
    }
        //loading screen
    var screen;

    function loadingRoulette() {

      const load = document.getElementById("loading-screen");
      load.style.display = "block";
      const gifsOnLoad = [
      "https://c.tenor.com/mE8nn_h06gEAAAAd/tenor.gif", //topaz
      "https://media1.tenor.com/m/mL10Z_GmC2MAAAAC/zzz-zenless.gif", //nagi
      "https://media.tenor.com/5ghu_DSDgCEAAAAM/zzz-zenless-zone-zero.gif", //LICK ME PLEASE
      "https://media.tenor.com/4I-78PH3xygAAAAM/honkai-reverist-calico.gif", //pardo
      "https://media1.tenor.com/m/S4y6ielXV0cAAAAC/doro-nikke.gif", //me when yanagi
      "https://media1.tenor.com/m/pT1hsherWc0AAAAd/kendrickcreepysmile-kendrick-lamar.gif", //i'm coming
      "https://media1.tenor.com/m/SH8ydUM4vlcAAAAC/yanfei.gif", //yanfei
      "https://media1.tenor.com/m/ZtaRHHgji5kAAAAd/dark-mango-psychology-tuff.gif", //tuff
      "https://media1.tenor.com/m/p-Z9nSROXNEAAAAC/zani-zani-wuwa.gif", //zani
      "https://media.tenor.com/8jNOnQrTh88AAAAM/eye-of-rah-tik-tok.gif", //tuff
      "https://media.tenor.com/a2OzLZVaDSsAAAA1/yixuan-yi-xuan-zzz.webp", //dance
      "https://media.tenor.com/jG6bh2_e474AAAAm/%EC%9E%8E%EC%83%88%EB%B2%84%EC%84%AF-ysirius.webp", //tuff
      "https://media.tenor.com/1q87rqAhzgkAAAAM/blue-archive-meme.gif", //tuff
      "https://media.tenor.com/HmpJYb5Q9VoAAAAm/kayoko-blue-archive.webp", //kayoko
      "https://media.tenor.com/96nPlHM2enYAAAAM/carthetiya-rover.gif", //tuff
      "https://media.tenor.com/IWRYIvGoe80AAAAm/genshin-charlotte.webp", //tuff
      "https://media.tenor.com/QGX83HXecF0AAAAi/honkai-ai.gif", //ai hyperion
      "https://media.tenor.com/zTQfeuVPWhEAAAAm/mobius-honkai.webp", //mobius
      "https://media.tenor.com/Nm7aYCOXdqMAAAAM/okayu-nekomata-okayu.gif", //tuff
      "https://media.tenor.com/qUxg4zwWhigAAAAM/vtuber.gif", //tuff
      "https://media.tenor.com/Hs3P2MOIZ4EAAAAM/zenless-zone-zero-yixuan.gif", //tuff
      "https://media.tenor.com/Crb1U9cCIQgAAAAm/ellen-joe-zenless-zone-zero.webp", //tuff
      "https://media.tenor.com/rUh5SElHgsAAAAA1/mizuki-yumemizuki-mizuki.webp", //FREAK
      "https://media1.tenor.com/m/oVXJDLhT0dUAAAAC/doro-dorothy.gif", //tuff
      "https://media1.tenor.com/m/hIAkWeic5mYAAAAC/troll-troll-face.gif", //epic fail
      "https://media.tenor.com/cegjpdalM4MAAAAM/zenless-zone-zero-zzz.gif", //check out this move dipshit
      "https://media.tenor.com/Xl7Pk5aazdoAAAAM/zhu-yuan-zzz.gif", //tuff
      "https://media.tenor.com/PMeuaj7O20QAAAAm/dynamite-teri-teri.webp", //tuff
      "https://media.tenor.com/iem0YYteD4wAAAAM/thelema-thelemanutriscu.gif", //tufflema
      "https://media.tenor.com/BYGtvYo5-G0AAAAM/saata-andagii.gif", //sata andagi propaganda
      "https://media.tenor.com/rsbaMamvwTIAAAA1/pat-patrick-bateman.webp" //patrick
    ];
    const selection = gifsOnLoad[Math.floor(Math.random() * gifsOnLoad.length)];
    console.log(`Selected image: ${selection}`);
    const bust = document.createElement("img");
    bust.src = selection;

    load.appendChild(bust);
    load.style.display = "block";
    }

  function isIt() {
      loadingRoulette();
      document.body.classList.remove("loads-ugh");
  }
    function isLoading() {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("loader").style.display = "block"; 
    }
    window.addEventListener("resize", adjustNavLayout);
    window.themeChange = themeChange;
    document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("preferredTheme") || "default";
    themeChange(savedTheme);
    adjustNavLayout();
    isIt();
    setTimeout(() =>{
      isLoading();
      document.body.classList.add("loads-ugh");
    }, 3000);
  });
  console.log("Loading loaded.");
  console.log("themes.js loaded.");
      navigator.serviceWorker.register('/My-Runs-/sw.js', {scope: '/My-Runs-/'});

  