function help(){
helpfh=console.log("提示(value):无返回\n打印(value):无返回\nloc存储(key,value):无返回\nloc读取(key):返回变量locdq\nloc删除(key):无返回\nloc删除全部():无返回\nloc遍历():返回变量locfh,locfha,locfhb\n写入(value):无返回\n输入弹窗(value):返回变量srtcfh\n跳转(value):无返回\nloc索引(number):返回变量locsy");
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
