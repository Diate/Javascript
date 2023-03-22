var data = [1,1,3,4,4,5,6,7,9];
var a = 8;
var data1 = data.push(a)
data1 = data.push(10)
data1 = data.unshift(5)
data1 = data.splice(4,1,11)
console.log(data1);
data1 = data.splice(3,1,2,5)
console.log(data);

// Bai2
var  data03 = ["Cam","Xoài","Mít","Bưởi","Quýt","Dưa gang"]
data03.splice(5,1,"Dưa hấu")
data03.splice(3,0,"Mận")
data03.push("Chanh")
data03.unshift("Dứa")
console.log(data03);

const newPersons = [
    {firstname : "Đào", lastname: "Văn Anh"},
    {firstname : "Nguyễn", lastname: "Hoàng"},
    {firstname : "Lê", lastname: "Hoàng"}
  ];
for (const i of newPersons) {
    i.Quequan = "Hà Nội"
}
  console.log(newPersons);

var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]

var s =0;
for (const j of arr2) {
    if (typeof(j)==='number'){
        s += j;
    }
    
}
console.log(s);

var list1 = [3,6,7,9,5]
var list2 = [3,5,7,8,6,6,7]

function sum(arra,arrb){
    let sum1 = 0,sum2 = 0;
    arra.forEach(function(value){
        sum1 += value;
    });
    arrb.forEach(function(value){
        sum2 += value;
    });
    return sum1,sum2
}

function compareNumbers(a, b) {
    return b - a;
  }
var a = sum(list1,list2);
var listn = list1.concat(list1,list2)
console.log(a);
listn.sort(compareNumbers)
console.log(listn);

// Bài 6
function unique(arr) {
    var newArr = []
    var newArr2 = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      } else{
        if (newArr2.indexOf(arr[i]) === -1){
        newArr2.push(arr[i])}
      }
    }
    return [newArr,newArr2]
  }
var mang = [1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4];
var mang1 = unique(mang);
console.log(mang1[1]);


// bài 7

var  array = [1,5,7,8,10,15]
var result = array.filter(check)
function check(arr){
  if (arr > 5) {
    return arr + 1
  }
}
console.log(result.map(result => result+1));
var result1 = array.filter(array => array % 2 == 1)
var result2 = array.slice(2)
console.log(result1);
console.log(result2);

for (var i = 0; i < array.length; i++) {
  array[i] *= 2;
}
console.log(array);

var ararr = [1,8,5,2,7,6,9,2,6];
function compareNumbers(a, b) {
  return b - a;
}
function compareFn(a, b) {
  if (a <= b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

}
ararr.sort(compareFn);
console.log(ararr);

var array3 = [1,2,3,5,1]
array = array3.concat(array)
array.pop()
console.log(array);
var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
console.log(array1.lastIndexOf(7));

array1.sort(function(a,b){
  return a-b
})

var ar = array1.filter(function(arr){
  if ((arr>5) &&  ((arr+2)%3==0)){
    return arr
  }
})
console.log(ar);


var  hoaQua = [
	{ten:"Xoài",sx:"China",sl:"100"},
	{ten:"Xoài",sx:"VietNam",sl:"130"},
	{ten:"Xoài",sx:"ThaiLan",sl:"100"},
	{ten:"Cam",sx:"China",sl:"200"},
{ten:"Cam",sx:"ThaiLan",sl:"150"},
{ten:"Nho",sx:"VietNam",sl:"120"},
{ten:"Xoài",sx:"ThaiLan",sl:"100"},
]

var h = hoaQua.filter(function(ss){
  return ss.sx == "VietNam"
})
console.log(h);

var k = hoaQua.filter(ss => ss.sl >=150)
console.log(k);

function loctheoten(a,b){
  if (a.ten <= b.ten) {
    return -1;
  }
  if (a.ten > b.ten) {
    return 1;
  }
}

function loctheonuoc(a,b){
  if (a.sx <= b.sx) {
    return -1;
  }
  if (a.sx > b.sx) {
    return 1;
  }
}

console.log(hoaQua.sort(loctheonuoc));

var arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11']

var arrso = arr.filter(ar => typeof(ar)=='number')
var arrkt = arr.filter(ar => typeof(ar)==typeof('a'))

function checknguyeto(x){
  if ((x>=2))
  {
    for (i = 2; i < x-1; i++)
        {
            if (x % i == 0){
                flag = false;
                break;
            }
  }
}}


function isNum(v) {
  return /\d/.test(v);
}

console.log(arrso.sort());
console.log(arrkt.sort());
arrso = arr.filter(ar => isNum(ar))
console.log(arrso);
var sum = 0;
arrso.forEach(tong);
function tong(xx){
  sum+= Number(xx);
}
console.log(sum);


/*Tạo hàm kiểm tra số nguyên tố trong JavaScript*/
function isprime(n){
  //flag = 0 => không phải số nguyên tố
  //flag = 1 => số nguyên tố
  
  let flag = 1;

  if (n <2) return flag = 0; /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
  
  /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
  let i = 2;
  while(i < n){
      if( n%i==0 ) {
          flag = 0;
          break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
      }
      i++;
  }

  return flag;
}

array = [5,1,2,3,4,2,6,7,8,9,10];
result = [];

/*Tìm  các số nguyên tố trong mảng*/
for (let i = 0; i < array.length; i++){
if (isprime(array[i]) == 1)  result.push( array[i] );
}

console.log(result);
console.log(array.filter(isprime));



/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function count_element_in_array(array, x){
  let count = 0;
  for(let i=0;i<array.length;i++){
    if(array[i]==x) //Tìm thấy phần tử giống x trong mảng thì cộng biến đếm
      count ++;
  }
  console.log( "Phan tu " +  x  + " xuat hien " + count +  " lan");
}

var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]

/*Xóa phần tử trùng nhau và lấy các phần tử duy nhất*/
let arrayWithNoDuplicates = data.reduce(function (accumulator, element) {
if (accumulator.indexOf(element) === -1) {
  accumulator.push(element)
}
return accumulator
}, [])


/*đếm số lần xuất hiện của các phần tử duy nhất*/
for (let i = 0; i < arrayWithNoDuplicates.length; i++) 
  count_element_in_array(data, arrayWithNoDuplicates[i]);
