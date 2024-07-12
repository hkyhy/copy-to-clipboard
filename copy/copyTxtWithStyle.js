const copyTxtWithStyle = (elementId, callback) => {
  const range = document.createRange();
  const element = document.getElementById(elementId); // 要复制的元素
  range.selectNode(element);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  // 按需处理想要的callback
  if (callback) {
    callback();
  } else {
    console.log('复制成功');
  }
};

export default copyTxtWithStyle;
