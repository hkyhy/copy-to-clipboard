/**
 * 复制不带样式的纯文本
 * @param text 要复制的文本
 * @param element 要复制的文本元素
 * @param elementId 要复制的元素 id
 * @param onSuccess 复制成功后的回调
 */
const copyText = ({text, element, elementId, onSuccess}) => {
  // 获取目标元素的innerHTML
  let innerHtml = text || element?.innerHTML || document.getElementById(elementId).innerHTML || '';
  // 处理innerHTML,使用转义符代替<br>标签
  const html = innerHtml.replace(/<br>/g, '\n').replace(/<[^>]*>/g, '');

  // 这是比较新的API，是一个异步方法
  navigator.clipboard.writeText(html).then(() => {
    // 按需处理想要的callback
    if (onSuccess) {
      onSuccess();
    } else {
      console.log('复制成功');
    }
  });
};

export default copyText;
