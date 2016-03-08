import {Component} from 'react';
import componentsIndex from './componentsIndex';
import {Library} from 'react-component-library';
import React, {PropTypes as RPT} from 'react';
import './style.sass'

export default class Handler extends Component {
  static propTypes = {
    children: RPT.object.isRequired,
  }

  render() {
    const {children} = this.props

    return (
      <Library children={children} componentsIndex={componentsIndex} mountPoint='component-library'/>
    )
  }
}
