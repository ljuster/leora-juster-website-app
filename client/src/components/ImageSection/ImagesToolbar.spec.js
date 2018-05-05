import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ImagesToolbar from './ImagesToolbar'

describe('ImagesToolbar', () => {
  it('renders without props', () => {
    const wrapper = shallow(<ImagesToolbar />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
