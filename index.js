// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function (a) {
    return a.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function (a) {
    return a.startsWith(string);
  });
}

function matchName(drivers, string){
  return drivers.filter(function (a) {
    return a.name.toLowerCase() === string.toLowerCase();
  });
}
