import {Component} from 'react'

import {RiEyeLine} from 'react-icons/ri'
import {GrImage} from 'react-icons/gr'
import {AiOutlinePlus} from 'react-icons/ai'

import './index.css'

class Spin extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="header-container">
          <h1 className="head">INPUTS</h1>
          <RiEyeLine size={40} className="image" />
        </div>
        <div className="input-add-container">
          <div className="input-type-container">
            <input
              type="text"
              placeholder="Input text here..."
              onChange={this.onChangeText}
              className="input"
            />
          </div>
          <button className="button" type="submit">
            <AiOutlinePlus size={25} />
          </button>
        </div>
      </div>
    )
  }
}
export default Spin
