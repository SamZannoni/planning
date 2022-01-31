window.addEventListener("load", setup);

var canvasWidth = window.innerWidth;
var canvasHeight =  window.innerHeight;
var canvas;
var ctx;

function setup() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  rect = canvas.getBoundingClientRect();

  // Le canvas s'adapte à la taille de la fenêtre.
  window.onresize = function() {
    canvas.width = window.innerWidth ;
    canvas.height = window.innerHeight ;
    // Canvas.ratio = Canvas.width < Canvas.height ? Canvas.width : Canvas.height;
  };
  window.onresize();
  createCalendarPage(28, "février 2022", 0, 1);
  createCalendarPage(31, "mars 2022", 1, 1);
  createCalendarPage(30, "avril 2022", 2, 4);
  createCalendarPage(31, "mai 2022", 3, 6);
  createCalendarPage(30, "juin 2022", 4, 2);
  createCalendarPage(31, "juillet 2022", 5, 4);

  var fevrier = 0;
  var mars = 1;
  var avril = 2;
  var mai = 3;
  var juin = 4;
  var juillet = 5;

  var fevB = 1;
  var marsB = 1;
  var avrB = 4;
  var maiB= 6;
  var juinB = 2;


  // Février 0
  fromToDate(12, 28, "☆Vacances de février", "vacances", fevrier, fevB)
  addInfo(1,"●Rdv Jérémie framework", fevrier, "rdvs", fevB);
  addInfo(2,"●10h-12h Magazine", fevrier, "cours", fevB);
  addInfo(2,"●14h-17h DigitalTools", fevrier, "cours", fevB);
  addInfo(11,"●9h30 Présentation DigitalTools", fevrier, "cours", fevB);

  // Mars 1
  addInfo(1,"·Réfectoire des nonnes réservé, montage de l'expo UR", mars, "expo", marsB);
  fromToDate(1, 7, "Expo UR numérique", "expo", mars, marsB)
  fromToDate(7, 11, "Workshop Résidence E.Becquemin", "workshops", mars, marsB)
  fromToDate(23, 25, "Fin expo UR", "expo", mars, marsB)

  // Avril 2
  addInfo(6,"●Début de la biennale", avril, "expo", avrB);
  addInfo(7,"●14h-16h Conduite", avril, "autres", avrB);
  addInfo(8,"●14h-16h Conduite", avril, "autres", avrB);
  addInfo(11,"●13h-15h Conduite", avril, "autres", avrB);
  addInfo(13,"●11h-13h Conduite", avril, "autres", avrB);
  addInfo(19,"●14h-16h Conduite", avril, "autres", avrB);
  addInfo(20,"●11h-13h Conduite", avril, "autres", avrB);
  addInfo(25,"●14h-16h Conduite", avril, "autres", avrB);
  addInfo(27,"●11h-13h Conduite", avril, "autres", avrB);
  // fromToDate(23, 25, "23", "expo", 3, 6)

  // mai


  // Juin 4
  addInfo(4,"Départ Chambéry", juin, "autres", juinB);
  addInfo(30,"●Fin de la biennale", juin, "expo", juinB);


  // Tous les mois
  // repeatInfoSameDays("Vendredi","●17h Rdv Dol recherche", "rdvs",false,juillet);
  repeatInfoSameDays("Jeudi", "●10h-13h Séminaire UR numérique", "rdvs", true, juillet);
  repeatInfoSameDays("Mardi", "≃16h/17h Rdv Dol recherche??", "rdvs", true, juillet);

  cancelEvent(fevrier, "Jeudi", 15, 2, fevB)
  cancelEvent(fevrier, "Jeudi", 17, 2, fevB)
  cancelEvent(fevrier, "Jeudi", 22, 2, fevB)
  cancelEvent(fevrier, "Jeudi", 24, 2, fevB)

}
function cancelEvent(month, day, dayNumber, wichInfo,blankDays){
  var gridDay = document.getElementsByClassName("grid-item"+month);
  var ciaoEvent = gridDay[dayNumber].childNodes[wichInfo];
  console.log(ciaoEvent);
  var garbage =  gridDay[dayNumber].removeChild(ciaoEvent);


}
function fromToDate(day, tillNextDay, wichInfo, wichKind, wichMonth, blankDays){

  var gridDay = document.getElementsByClassName("grid-item"+wichMonth);

  for(i=day+blankDays-1; i<tillNextDay+blankDays; i++){
    var info = document.createElement("p");
    info.className = "info"+ wichMonth;
    info.classList.add("info");
    info.classList.add(wichKind);
    info.innerHTML += wichInfo;
    gridDay[i].appendChild(info);
  }

}

function repeatInfoSameDays(day, wichInfo, wichKind, yesNo, notThisMonth){
  var activ = yesNo;
  var days = document.getElementsByClassName(day);



  for(i=0; i<days.length;i++){
    if ( activ == false){{
      var info = document.createElement("p");
      info.className = "info";
      info.classList.add(wichKind);
      info.innerHTML += wichInfo;
      days[i].appendChild(info);
    }}
    if ( activ == true){
      if (!days[i].classList.contains("grid-item"+notThisMonth)){
        var info = document.createElement("p");
        info.className = "info";
        info.classList.add(wichKind);
        info.innerHTML += wichInfo;
        days[i].appendChild(info);
      }
    }
  }
}

function createCalendarPage(numberOfDay, theMonth, theMonthNumber, blankDays){
  var calendrier = document.getElementById("Calendrier");
  // Création du nom du mois
  var newMonth = document.createElement("div");
  newMonth.className = "month";
  newMonth.innerHTML = theMonth;
  calendrier.appendChild(newMonth);
  // Création du container du mois
  var newGridContainer = document.createElement("div");
  newGridContainer.className = "grid-container" + theMonthNumber;
  newGridContainer.classList.add("grid-container");
  calendrier.appendChild(newGridContainer);


  var gridcontainer = document.getElementsByClassName("grid-container");
  var compteurJours = 0;
  var compteurJours2 = 0 + blankDays;
  var compteurJoursRequired = 0;
  var jours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

  // création de blank days
  for (i=0; i< blankDays; i++){
    var firstCaseEmpty = document.createElement("div");
    firstCaseEmpty.className = "grid-item" + theMonthNumber;
    firstCaseEmpty.classList.add("blank-item");
    // firstCaseEmpty.classList.add("grid-item");
    var paillettes = document.createElement("p");
    paillettes.className = "paillettes";
    paillettes.innerHTML += "jagalgidefkl";
    firstCaseEmpty.appendChild(paillettes);
    gridcontainer[theMonthNumber].appendChild(firstCaseEmpty);

  }

  for (i=1; i<numberOfDay+1; i++){

    var gridDay = document.createElement("div");
    gridDay.className = "grid-item" + theMonthNumber;
    gridDay.classList.add(jours[compteurJours2]);

    if(compteurJours < numberOfDay+1){
      compteurJours2++;
      if(compteurJours2 > 6){
        compteurJours2 = 0;
      }
    }
    gridDay.classList.add("grid-item");
    var nombreDate = document.createElement("p");
    nombreDate.innerHTML += i;
    nombreDate.className  = "nombreDate";
    gridDay.appendChild(nombreDate)
    gridcontainer[theMonthNumber].appendChild(gridDay);


  }

  for(i=0; i<gridcontainer.length; i++){
    gridcontainer[i].appendChild(gridDay);

  }

  var gridDay = document.getElementsByClassName("grid-item"+theMonthNumber);
  for (i=0; i<7; i++){
    var date = document.createElement("p");
    date.className = "date";
    date.innerHTML += jours[compteurJours];
    gridDay[i].appendChild(date);
    compteurJours++;
  }

}

function addInfo(wichDay, wichInfo, wichMonth, wichKind, blankDays){
  var gridDay = document.getElementsByClassName("grid-item"+wichMonth);
  var info = document.createElement("p");
  info.className = "info";
  info.classList.add(wichKind);
  info.innerHTML += wichInfo;
  gridDay[wichDay+blankDays-1].appendChild(info);
}
