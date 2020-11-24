chrome.browserAction.onClicked.addListener(function(tab) {
    // 谷歌api，插件被点击监听
    //tab执行脚本，通过文件能执行多条语句。
    chrome.tabs.executeScript({file: "content.js"});//通过JS文件
});