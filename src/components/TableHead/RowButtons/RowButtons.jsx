import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  let classNames = require('classnames');

  const btnClass = classNames({
    button: true,
    'button_minus-data button_minus': props.minusData,
    'button_minus-row button_minus': props.minusRow,
    'button_plus-data button_plus': props.plusData,
    'button_plus-row button_plus': props.plusRow,
  })

  return (
    <td
      className={btnClass}
      onClick={props.click}
      style={{
        visibility: props.visible,
        opacity: props.opacity,
        transform: `translate(${props.moveX * 100}%, ${props.moveY * 100}%)`
      }}
    >{props.name}</td>
  )
}

Button.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  moveX: PropTypes.number,
  moveY: PropTypes.number,
  opacity: PropTypes.number,
  visible: PropTypes.string,
}

const RowButtons = (props) => {

  const addData = (e) => {
    for (let i = 0; i < e.target.closest('tr').children.length; i++) {

      if (e.target.closest('tr').children[i].classList.contains('button_minus-data')) {
        props.addCell(e.target.closest('tr').children[i]);
      }
    }
  }

  const addRow = (e) => {
    for (let i = 0; i < e.target.closest('tr').children.length; i++) {

      if (e.target.closest('tr').children[i].classList.contains('button_minus-row')) {
        props.addRow(e.target.closest('tr').children[i]);
      }
    }
  }

  const minusCell = (e) => {
    props.minusCell(e.target);
  }

  const minusRow = (e) => {
    props.minusRow(e.target);
  }

  return (
    <tr className="row-buttons">
      <Button name="+" styleName="button_plus-row " click={addRow} plusRow={' '} />
      <Button name="+" styleName="button_plus-data " click={addData} plusData={' '} />
      <Button
        name="-"
        visible={props.visibility}
        opacity={props.opacity}
        moveX={0}
        moveY={props.transformY}
        styleName="button_minus-row"
        click={minusRow}
        minusRow={' '}
      />
      <Button
        name="-"
        opacity={props.opacity}
        visible={props.visibility}
        moveY={0}
        moveX={props.transformX}
        styleName="button_minus-data "
        click={minusCell}
        minusData={' '}
      />
    </tr>
  )
}

RowButtons.propTypes = {
  addCell: PropTypes.func.isRequired,
  addRow: PropTypes.func.isRequired,
  minusCell: PropTypes.func.isRequired,
  minusRow: PropTypes.func.isRequired,
  opacity: PropTypes.number,
  transformX: PropTypes.number,
  transformY: PropTypes.number,
}

export default RowButtons;