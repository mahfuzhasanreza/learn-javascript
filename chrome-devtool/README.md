# Chrome Devtool Console Tab Features

[Chrome DevTools](https://developer.chrome.com/docs/devtools)

In Console:
```
const num = 2
num * num
> 4
$_
> 4
Math.sqrt($_)
> 2
```
```
document.getElementById('id')
> ...
document.querySelector('#id')
> ...
$('#id')
> ...
```
```
setting > preserve log
```
```
clear()
CTRL + L
```
```
monitor(function_name)
> ...
unmonitor(function_name)
> ...
```
```
document.body.contentEditable = true
```
```
console.time('loop')
for(;;){}
console.timeEnd('loop')
> ...
```
```
console.log(variable_name)
> ...
console.table(variable_name)
> ...
```