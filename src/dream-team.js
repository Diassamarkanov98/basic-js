module.exports = function createDreamTeam(members) {
  if(members instanceof Array){
    return members.map(element => {
      if (typeof element === "string") return element.toUpperCase().trim().split('').slice(0, 1);
    }).sort().join('');
  } else {
    return false;
  }
};
