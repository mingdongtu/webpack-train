
require('./world.js')
// 意思是在引用style.css文件前需要用 css-loader 处理
require('./style.css')
function hello(str){
	  alert(str)
}
hello('你好aaaaa')