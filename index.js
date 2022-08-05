var activeTab = "1";

function onTab(option) {
  if (activeTab == option) {
    return;
  }

  switch (option) {
    case "1":
      showCurrentTab(option);
      hidePreviousTab();
      activeTab = option;

      break;

    case "2":
      showCurrentTab(option);
      hidePreviousTab();
      activeTab = option;
      break;

    case "3":
      showCurrentTab(option);
      hidePreviousTab();
      activeTab = option;
      break;

    case "4":
      showCurrentTab(option);
      hidePreviousTab();
      activeTab = option;
      break;

    case "5":
      showCurrentTab(option);
      hidePreviousTab();
      activeTab = option;
      break;
  }
}
function hidePreviousTab() {
  var previousTab = document.getElementById(activeTab).classList;
  previousTab.add("dNone");
}
function showCurrentTab(option) {
  var currentTab = document.getElementById(option).classList;
  currentTab.remove("dNone");
}

var activeTab = 1;

function forward() {
  if (activeTab < 5) {
    var currentId = document.getElementById(activeTab).classList;
    currentId.add("dNone");
    activeTab++;
    var currentId = document.getElementById(activeTab).classList;
    currentId.remove("dNone");
  }
}

function backward() {
  if (activeTab > 1) {
    var currentId = document.getElementById(activeTab).classList;
    currentId.add("dNone");
    activeTab--;
    var currentId = document.getElementById(activeTab).classList;
    currentId.remove("dNone");
  }
}
