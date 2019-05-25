function myFunction() {
    // 声明变量
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
 
    // 循环所有列表，查找匹配项
    for (i = 0; i < li.length; i++) {
    	/*
         a→打印li内的内容
    	*/
        a = li[i].getElementsByTagName("a")[0];
        /*
        innerHTML 属性设置或返回表格行的开始和结束标签之间的 HTML。
        indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置,没有则返回-1
        每一次输入都要做一次遍历，有输入的所有字符串则输出，否则不输出
        */
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}