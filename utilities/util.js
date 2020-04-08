function sortData(arr,type){
   return arr.sort(function(a,b){
      return type.toUpperCase() === 'ASC'? a.id - b.id : b.id - a.id
    })
}

function dateDiff(dateold, datenew)
{
  dateold = new Date(dateold);
  var ynew = datenew.getFullYear();
  var mnew = datenew.getMonth();
  var dnew = datenew.getDate();
  var yold = dateold.getFullYear();
  var mold = dateold.getMonth();
  var dold = dateold.getDate();
  var diff = ynew - yold;
  if(mold > mnew) diff--;
  else
  {
    if(mold == mnew)
    {
      if(dold > dnew) diff--;
    }
  }
  return diff;
}

export {sortData,dateDiff}