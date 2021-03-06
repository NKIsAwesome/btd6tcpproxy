import React, {Component} from 'react';

export default class Session extends Component {
	constructor(props){
		super(props);
	}
	defaultProps = {
		name:'',
		runId:'',
		click:()=>{}
	}
	handleClick(e){
		this.props.click(this.props.runId,this.props.name);
	}
	render(){
		let {name,runId} = this.props;
		return (
			<div className='sessionBar' onClick={this.handleClick.bind(this)}>
				{name?name:runId}	
			</div>
		);
	}
	componentDidMount(){
	}
}

