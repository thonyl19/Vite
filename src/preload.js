// 所有Node.js API都可以在預加載過程中使用。
// 它擁有與Chrome擴展一樣的沙盒。
window.addEventListener('DOMContentLoaded', () => {
	const replaceText = (selector, text) => {
	  const element = document.getElementById(selector)
	  if (element) element.innerText = text
	}
  
	for (const dependency of ['chrome', 'node', 'electron']) {
	  replaceText(`${dependency}-version`, process.versions[dependency])
	}
  })