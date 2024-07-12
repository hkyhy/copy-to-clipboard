const copyElement = (elementId, callback) => {
  // 获取目标元素的innerHTML
  let innerHtml = document.getElementById(elementId).innerHTML || ''
  // 处理innerHTML,使用转义符代替<br>标签
  const html = innerHtml.replace(/<br>/g, '\n');

  // 这是比较新的API，是一个异步方法
  navigator.clipboard.writeText(html).then(() => {
    // 按需处理想要的callback
    if (callback) {
      callback();
    } else {
      console.log('复制成功');
    }
  });
}

export default copyElement;
