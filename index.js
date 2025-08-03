function help(){
console.log("提示(value):无返回\n打印(value):无返回\nloc存储(key,value):无返回\nloc读取(key):返回变量locdq\nloc删除(key):无返回\nloc删除全部():无返回\nloc遍历():返回变量locfh,locfha,locfhb\n写入(value):无返回\n输入弹窗(value):返回变量srtcfh\n跳转(value):无返回\nloc索引(number):返回变量locsy\n进制转换(64进制数):返回变量szshi,szer\n转二进制(10进制数):返回变量szera");
}
function 提示(value){
alert(value);
}
function 打印(value){
console.log(value);
}
function loc存储(key,value){
localStorage.setItem(key,value);
}
function loc读取(key){
var locdq=localStorage.getItem(key);
return locdq;
}
function loc删除(key){
localStorage.removeItem(key);
}
function loc删除全部(){
localStorage.clear();
}
var locfh="";
var locfha="";
var locfhb="";
function loc遍历(){
for(var qiwiei=0;qiwiei<localStorage.length;qiwiei++){
var lockey=localStorage.key(qiwiei);
var locval=localStorage.getItem(lockey);
locfh+=lockey+","+locval;
locfha+=lockey+","+locval+"\n";
locfhb+=lockey+","+locval+"<br>";
}
return locfh;
return locfha;
return locfhb;
}
function 写入(value){
document.write(value);
}
var srtcfh="";
function 输入弹窗(value){
srtcfh=window.prompt(value);
return srtcfh;
}
function 跳转(value){
window.location.href=value;
}
var locsy="";
function loc索引(number){
locsy=localStorage.key(number);
return locsy;
}
var mapzh=new Map([["A",0],["B",1],["C",2],["D",3],["E",4],["F",5],["G",6],["H",7],["I",8],["J",9],["K",10],["L",11],["M",12],["N",13],["O",14],["P",15],["Q",16],["R",17],["S",18],["T",19],["U",20],["V",21],["W",22],["X",23],["Y",24],["Z",25],["a",26],["b",27],["c",28],["d",29],["e",30],["f",31],["g",32],["h",33],["i",34],["j",35],["k",36],["l",37],["m",38],["n",39],["o",40],["p",41],["q",42],["r",43],["s",44],["t",45],["u",46],["v",47],["w",48],["x",49],["y",50],["z",51],["0",52],["1",53],["2",54],["3",55],["4",56],["5",57],["6",58],["7",59],["8",60],["9",61],["+",62],["/",63]]);
var fhmap=[];
var fhafh;
var szshi=0;
var bsbs=0;
let scesza;
let szer;
function 进制转换(value){
fhmap=[];
szshi=0;
bsbs=0;
for(const szzz of value){
if(!mapzh.has(szzz)){
szshi="NaN";
return szshi;
}
fhafh=mapzh.get(szzz)*(Math.pow(64,value.length-1-bsbs));
fhmap.push(fhafh);
bsbs++;
}
for(var jaa=0;jaa<fhmap.length;jaa++){
szshi+=fhmap[jaa];
}
scesza=szshi;
if(szshi > 9007199254740991){
szshi="undefined";
return szshi;
}
szer=BigInt(scesza).toString(2);
return szshi;
return szer;
}
var szera;
function 转二进制(number){
szera=BigInt(number).toString(2);
return szera;
}
