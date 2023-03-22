var bienLai = [
    { ten: "an", giaTri: 300 },
    { ten: "binh", giaTri: 180 },
    { ten: "hoang", giaTri: 170 },
    { ten: "van", giaTri: 100 },
    { ten: "lam", giaTri: 200 },
    { ten: "thinh", giaTri: 210 },
    { ten: "diep", giaTri: 100 },
    { ten: "huong", giaTri: 100 },
  ];
  var bienLai1 = [
    { ten: "an", giaTri: 300 },
    { ten: "binh", giaTri: 180 },
    { ten: "hoang", giaTri: 170 },
    { ten: "van", giaTri: 100 },
    { ten: "lam", giaTri: 200 },
    { ten: "thinh", giaTri: 210 },
    { ten: "diep", giaTri: 100 },
    { ten: "huong", giaTri: 100 },
  ];
  console.log(bienLai.length);
  
  var bien = bienLai.filter(xx => xx.giaTri>200)
  var timlan = bienLai.map(e => e.ten).indexOf("lam")
  var timlam = bienLai.findIndex(e => e.ten == "lam")

  console.log(bien);
  console.log(timlan);
  console.log(timlam);

//   var xuatdata = bienLai.map(function(element){
//     var a = []
//     a.push(element);
//     // (element.ten != key.ten) &&
//     for (const key of bienLai) {
//         if (element.giaTri == key.giaTri)
//             {
//             a.push(key)
//             console.log(bienLai.indexOf(element));
//             bienLai.splice(bienLai.indexOf(key),1)
//         }          
//         }
//     if (a[0]!=a[1]) return a
// })

// for (const i of xuatdata) {
//     if (i!= undefined) console.log(i);
// }

var themrank = bienLai1.map(function(e){
    if(e.giaTri >200)
        e.rank = "vip"
    else e.rank = "nomal"
    return e
})

console.log(themrank);

console.log(bienLai1.sort(function(a,b){
    return  b.giaTri-a.giaTri
}));

var xuatdata = bienLai.forEach(function(element){
    var a = []
    a.push(element);
    // for (const key of bienLai) {
    //     if ((element.ten != key.ten) && (element.giaTri == key.giaTri))
    //         {
    //         a.push(key)
    //         bienLai.splice(bienLai.indexOf(key),1) 
    //     }          
    //     }
    bienLai.forEach(function(key){
        if ((element.ten != key.ten) && (element.giaTri == key.giaTri))
            {
            a.push(key)
            bienLai.splice(bienLai.indexOf(key),1) 
        } 
    })
        if (bienLai.indexOf(element) != undefined) bienLai.splice(bienLai.indexOf(element),1)
        if (a.length > 1) console.log(a);
})



