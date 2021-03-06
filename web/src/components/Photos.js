import React, { Component } from 'react'
import { Photo } from '../components'
import './Photo.css'
import { dispatch } from '../index'
import * as PhotoActions from '../redux/actions/photo'

export default class Photos extends Component {
	componentDidMount() {
		dispatch(PhotoActions.loadPhotos())
	}

	render () {
		if (!this.props.photos)
			return null
		let photos = this.props.photos.map ( photo => {
			return (<Photo key={photo.id} photo={photo}/>)
		})
		return (
			<div className='photos'>{photos}</div>
		)
	}
}