import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import Styles from './ImagesSection.css'

export class ImagesToolbar extends Component {
  constructor (props) {
    super(props)
  }

  onChange = (ev) => {
    // const { section } = this.props
    // this.props.openModal(MODAL_MAP[section])
    return ev.preventDefault()
  }

  render () {
    const { brandId, section } = this.props

    return (
      <div className={Styles.imgToolbarContainer}>
        <span className={Styles.button}>
          <Select
            // ref={this.updateRef}
            name={'Myname'}
            value={'option1'}
            options={['option1', 'option2']}
            // arrowRenderer={arrowRenderer}
            onChange={this.onChange}
            placeholder={'placeholder'}
          >
          </Select>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

ImagesToolbar.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesToolbar)
