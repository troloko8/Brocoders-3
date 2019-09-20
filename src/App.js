import React from 'react';
import './App.css';
import TableBody from './components/TableBody/TableBody';
import RowButtons from './components/TableHead/RowButtons/RowButtons';

// const state = {
//   widthArray: [],
//   heightArray: [],
//   cellSize: 50,
//   transformY: 1,
//   transformX: 1,
//   visibility: 'visible',
//   initialWidth: 4,
//   initialHeight: 4,
//   opacity: 0
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widthArray: [],
      heightArray: [],
      cellSize: 50,
      transformY: 1,
      transformX: 1,
      visibility: 'visible',
      initialWidth: 4,
      initialHeight: 4,
      opacity: 0
    }
    this.visibilityButton = this.visibilityButton.bind(this)
    this.tableFn = this.tableFn.bind(this)
    this.addCell = this.addCell.bind(this)
    this.addRow = this.addRow.bind(this)
    this.minusCell = this.minusCell.bind(this)
    this.minusRow = this.minusRow.bind(this)
    this.setDisplay = this.setDisplay.bind(this)
    this.arrayCicle = this.arrayCicle.bind(this)
    this.arrayCicle(this.state.initialWidth, this.state.widthArray)
    this.arrayCicle(this.state.initialHeight, this.state.heightArray)
  }

  arrayCicle = (current, array) => {
    for (let i = 1; i <= current; i++) {
      array.push({
        id: i
      })
    }
  }

  setDisplay = (elem, display) => {
    elem.style.display = display;
  }

  visibilityButton = (e) => {
    const targetButtonMinus = e.target.classList.contains('button_minus')
    const targetData = e.target.classList.contains('table__data')

    if (targetButtonMinus || targetData) {
      this.setState({
        visibility: 'visible',
        opacity: 1
      })
    } else {
      this.setState({
        visibility: 'hidden',
        opacity: 0
      })
    }
  }

  tableFn = (e) => {
    const target = e.target,
      targetRow = e.target.closest('tr'),
      targetTable = e.target.closest('tbody'),
      index = e.target.closest('table').children[1].children.length;

    if (targetRow != null && targetTable != null) {
      for (let i = 0; i < index; i++) {
        if (targetTable.children[i] === targetRow) {
          this.setState({
            transformY: i
          })
        }
      };

      for (let i = 0; i < targetRow.children.length; i++) {
        if (targetRow.children[i] === target) {
          this.setState({
            transformX: i
          })
        }
      };
    }
  }

  addCell = (ref) => {
    const widthArray = this.state.widthArray;

    if (widthArray.length === 1) {
      this.setDisplay(ref, 'flex')
    }
    const lenghtArray = widthArray.length + Math.random();
    widthArray.push({
      id: lenghtArray
    })
    this.setState({
      widthArray: widthArray
    })
  }

  addRow = (ref) => {
    const heightArray = this.state.heightArray;

    if (heightArray.length === 1) {
      this.setDisplay(ref, 'flex')
    }

    const lenghtArray = heightArray.length + Math.random();
    heightArray.push({
      id: lenghtArray
    })
    this.setState({
      heightArray: heightArray
    })
  }

  minusCell = (ref) => {
    const widthArray = this.state.widthArray;

    if (widthArray.length === 2) {
      this.setDisplay(ref, 'none')
    }

    const index = Number(ref.style.webkitTransform.replace(/\D+/g, "")) / 1000;
    widthArray.splice(index, 1);
    this.setState({
      widthArray: widthArray
    })

    if (widthArray.length === index) {
      this.setState({
        transformX: this.state.transformX - 1
      })
    }
  }

  minusRow = (ref) => {
    const heightArray = this.state.heightArray;

    if (heightArray.length === 2) {
      this.setDisplay(ref, 'none')
    }

    const index = Number(ref.style.webkitTransform.replace(/\D+/g, "")) / 100;
    heightArray.splice(index, 1);
    this.setState({
      heightArray: heightArray
    })

    if (heightArray.length === index) {
      this.setState({
        transformY: this.state.transformY - 1
      })
    }
  }

  render() {

    return (
      <div className="wrapper" onMouseMove={this.visibilityButton} >
        <table className="table" onMouseMove={this.tableFn} >
          <thead className="table__head" >
            <RowButtons addCell={this.addCell}
              addRow={this.addRow}
              minusCell={this.minusCell}
              minusRow={this.minusRow}
              visibility={this.state.visibility}
              transformY={this.state.transformY}
              transformX={this.state.transformX}
              opacity={this.state.opacity}
            />
          </thead>
          <TableBody
            cellSize={this.state.cellSize}
            widthArray={this.state.widthArray}
            heightArray={this.state.heightArray} />
        </table>
      </div>
    );
  }
}

export default App;