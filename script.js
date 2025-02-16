// 这里可以添加一些交互效果，比如按钮点击后的动画
document.querySelectorAll('.neon-button').forEach(button => {
    button.addEventListener('click', () => {
      button.style.transform = 'scale(1.1)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 200);
    });
  });