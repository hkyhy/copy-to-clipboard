/**
 * 复制带有样式的富文本，可以直接粘贴在输入区内
 * @param element 要复制的元素
 * @param elementId 要复制的元素 id
 * @param onSuccess 复制成功后的回调
 */
const copyTextWithStyle = ({ element, elementId, onSuccess }) => {
  const copyDOM = element || document.getElementById(elementId); // 要复制的元素
  if (copyDOM && copyDOM?.innerHTML !== '') {
    const range = document.createRange(); // 创建一个 range
    window?.getSelection()?.removeAllRanges(); // 清除页面中已有的 selection
    range?.selectNode(copyDOM); // 选中需要复制的节点
    window?.getSelection()?.addRange(range); // 执行选中元素
    document.execCommand('copy'); // 执行 copy 操作
    window?.getSelection()?.removeAllRanges(); // 移除选中的元素
    // 按需处理想要的callback
    if (onSuccess) {
      onSuccess();
    } else {
      console.log('复制成功');
    }
  }
}

export default copyTextWithStyle;
