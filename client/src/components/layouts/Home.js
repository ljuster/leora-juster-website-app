import React, { Component} from 'react'
import News from '../containers/News'
import ImagesContainer from '../ImageSection'

class Home extends Component {
	render(){
		return (
			<div>
				<div>Welcome to My Homepage</div>

				<div>
					<News />
          <ImagesContainer />
				</div>
			</div>
		)
	}
}

export default Home