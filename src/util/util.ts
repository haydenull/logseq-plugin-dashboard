// 监听 esc 按钮
export const listenEsc = (callback: () => void) => {
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      callback()
    }
  })
}