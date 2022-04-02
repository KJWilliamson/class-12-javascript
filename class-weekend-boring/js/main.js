document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  //Conditionals go here
  if (day == "tuesday" || day == "thursday") {
    document.querySelector("#placeToSee").innerText =
      "Class Day!!! All Aboard The Hype Train!!!";
    document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/YZTYehfo3pIAAAAC/the-smurfs-smurfette.gif')";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundSize = "1488px";
  } else if (day == "friday" || day == "saturday" || day == "sunday") {
    document.querySelector("#placeToSee").innerText =
      "It's the weekend, yo. Let's get crazy!";
    document.querySelector("body").style.backgroundImage =
      "url('https://c.tenor.com/di0TpXGK6mAAAAAC/the-smurfs-cheering-fans.gif')";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundSize = "1488px";
  } else if (day == "monday" || day == "wednesday") {
    document.querySelector("#placeToSee").innerText =
      "Alas, no class. It's a boring & disappointing day";
    document.querySelector("body").style.backgroundImage =
      "url('https://www.icegif.com/wp-content/uploads/smurfs-surprise-icegif.gif')";
    document.querySelector("body").style.backgroundRepeat = "no-repeat";
    document.querySelector("body").style.backgroundSize = "1488px";
  }
}


