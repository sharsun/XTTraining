function sortData(arr,type){
   return arr.sort(function(a,b){
      return type === 'asc'? a.id - b.id : b.id - a.id
    })
}

export {sortData}