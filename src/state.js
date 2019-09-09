import {renderEntireTree} from './redux'

const state = {
   widthArray: [],
   heightArray: [],
   cellSize: "50",
   transformY: 1,
   transformX: 1,
   visibility: 'visible'
}

const initialWidth = 4;

const initialHeight = 4;

export const addCell = (ref) => {
  if (state.widthArray.length === 1) {
    setDisplay(ref, 'flex')
  }
  const lenghtArray = state.widthArray.length +  Math.random();
  state.widthArray.push({id: lenghtArray})
  renderEntireTree(state)
}

export const addRow = (ref) => {
  if (state.heightArray.length === 1) {
    setDisplay(ref, 'flex')
  }
  console.log()
  const lenghtArray = state.heightArray.length + Math.random();
  state.heightArray.push({id:  lenghtArray})
  renderEntireTree(state)
}

export const minusCell = (ref) => {

  if (state.widthArray.length === 2) {
    setDisplay(ref, 'none')
  }

  const index = Number(ref.current.style.webkitTransform.replace(/\D+/g, "")) / 1000;
  state.widthArray.splice(index, 1);
  // state.transformX -= 1;
  renderEntireTree(state)
}

export const minusRow = (ref) => {

  if (state.heightArray.length === 2) {
    setDisplay(ref, 'none')
  }

  const index = Number(ref.current.style.webkitTransform.replace(/\D+/g, "")) / 100;
    state.heightArray.splice(index, 1);
    // state.transformY -= 1;
    renderEntireTree(state);

}

function setDisplay (elem, display) {
  elem.current.style.display = display;
}

function arrayCicle (current, array) {
  for (let i = 1; i <= current; i++) {
    array.push({ id: i })
  }
}

export const moveButton = (tRow, tTable, index, target, table) => {

  if (tRow != null && tTable != null ) {
    for (let i = 0; i < index; i++) {
      if (tTable.children[i] === tRow) {
        state.transformY = i;
      }
    };

    for (let i = 0; i < tRow.children.length; i++) {
      if(tRow.children[i] === target) {
        state.transformX = i;
      }
    };

    if (table) {
      state.visibility = 'visible'
    } else {
      state.visibility = 'hidden'
    }
    
    renderEntireTree(state);
  }
}

arrayCicle(initialWidth, state.widthArray )
arrayCicle(initialHeight, state.heightArray )





export default state