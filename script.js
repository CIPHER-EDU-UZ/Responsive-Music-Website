const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');

menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

// Team information object
const teamInfo = {
    teamName: "CIPHER-EDU",
    members: ["Oybek Abduraimov"],
    project: "ResPonsive Music dashboard",
    year: 2024,
  };
  
  // Log team information to the console
  console.log("Team Information:");
  console.log("Team Name:", teamInfo.teamName);
  console.log("Team Members:", teamInfo.members.join(", "));
  console.log("Project:", teamInfo.project);
  console.log("Year:", teamInfo.year);
  