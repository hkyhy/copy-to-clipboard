/**
 * 复制带有样式的富文本，可以直接粘贴在比如邮件内
 * @param element 要复制的元素
 * @param elementId 要复制的元素 id
 * @param onSuccess 复制成功后的回调
 */
const copyTextWithStyle = ({ element, elementId, onSuccess }) => {
  const range = document.createRange();
  const curElement = element || document.getElementById(elementId); // 要复制的元素
  range.selectNode(curElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  // 按需处理想要的callback
  if (onSuccess) {
    onSuccess();
  } else {
    console.log('复制成功');
  }
}

export default copyTextWithStyle;
