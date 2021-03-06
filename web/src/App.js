import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Home, Discover, Login, Logout, Registration, MessagesPage, NotificationPage, Nav, Footer, Settings } from './pages'
import { connect } from 'react-redux'
import * as NotificationActions from './redux/actions/notification'
import { dispatch } from './index'

export const UserContext = React.createContext();

class App extends Component {
	componentDidMount() {
		if (this.props.userContext)
			dispatch(NotificationActions.loadNotifications(this.props.userContext.id))
	}

	render() {
		const { userContext, photos, users, notifications } = this.props
		return (
		<div>
			<Router>
				<UserContext.Provider value={userContext}>
					<Nav notifications={notifications}/>
					<main>
						<Route exact path='/' render={()=><Home photos={photos}/>} />
						<Route exact path='/discover' render={()=><Discover users={users}/>} />
						<Route exact path='/messages' render={()=><MessagesPage {...this.props} />} />
						<Route exact path='/notification' render={()=><NotificationPage {...this.props} />} />
						<Route exact path='/account/login' render={()=><Login/>} />
						<Route exact path='/account/logout' render={()=><Logout/>} />
						<Route exact path='/account/settings' render={()=><Settings/>} />
						<Route exact path='/account/registration' render={()=><Registration/>} />
					</main>
					<Footer/>
				</UserContext.Provider>
			</Router>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return state
}
  
export default connect(mapStateToProps)(App)