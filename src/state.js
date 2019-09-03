import {renderEntireTree} from './redux'

let state = {
   widthArray: [],
   heightArray: [],
   cellSize: "50"
}

let initialWidth = 4;

let initialHeight = 4;

export let addCell = () => {
  console.log(state.widthArray.length)
  if (state.widthArray.length == 1) {
    setDisplay('.button_minus-data', 'flex')
  }

  state.widthArray.push({id: 1})
  renderEntireTree(state)
}

export let addRow = () => {
  if (state.heightArray.length == 1) {
    setDisplay('.button_minus-row', 'flex')
  }

  state.heightArray.push({id: 1})
  renderEntireTree(state)
}

export let minusCell = () => {
  if (state.widthArray.length == 2) {
    setDisplay('.button_minus-data', 'none')
  }
  const minusData = document.querySelector('.button_minus-data');
  let index = Number(minusData.style.webkitTransform.replace(/\D+/g, "")) / 100;
  state.widthArray.splice(index, 1)
  renderEntireTree(state)
}

export let minusRow = () => {
  if (state.heightArray.length == 2) {
    setDisplay('.button_minus-row', 'none')
  }
  const minusRow = document.querySelector('.button_minus-row');
  let index = Number(minusRow.style.webkitTransform.replace(/\D+/g, "")) / 100;
    state.heightArray.splice(index, 1)
    renderEntireTree(state)

}

function setDisplay (elem, display) {
  document.querySelector(elem).style.display = display;
}

function arrayCicle (current, array) {
  for (let i = 1; i <= current; i++) {
    array.push({ id: i })
  }
}

arrayCicle(initialWidth, state.widthArray )
arrayCicle(initialHeight, state.heightArray )





export default state