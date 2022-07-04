// alert('hello')
console.log(Date.now())
const button = document.getElementById('hello')
console.log(button)

button.addEventListener('click', () => {
  const para = document.getElementById('para')
  para.innerHTML = 'hello world'
})

const link = document.getElementById('a')
console.log(link.href)

function talksAbout (node, string) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    for (const child of node.childNodes) {
      if (talksAbout(child, string)) {
        return true
      }
    }
    return false
  } else if (node.nodeType === Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1
  }
}

console.log(talksAbout(document.body, 'something'))

const cat = document.getElementById('cat')
cat.addEventListener('click', function changeImage () {
  if (document.getElementById('cup').src = './ostrich.png') {
    document.getElementById('cup').src = './index.jpg'
  } else {
    document.getElementById('cup').src = './ostrich.png'
  }
})
function elt (type, ...children) {
  const node = document.createElement(type)
  for (const child of children) {
    if (typeof child !== 'string') node.appendChild(child)
    else node.appendChild(document.createTextNode(child))
  }
  return node
}

document.getElementById('quote').appendChild(
  elt('footer', '—',
    elt('strong', 'Karl Popper'),
    ', preface to the second edition of ',
    elt('em', 'The Open Society and Its Enemies'),
    ', 1950'))
