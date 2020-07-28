import React,{Component} from 'react'
import Search from '../Coponent/Search';
import Navibar from '../Coponent/Navibar';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            s:{}
        }
        this.handlesearchdata=this.handlesearchdata.bind(this);
        this.handle_out=this.handle_out.bind(this);
        
    }
    handlesearchdata(data){
        this.setState({
            s:data
        });
        
        this.props.handles(data)
    }
    handle_out(){
        this.props.handlelogout()
    }
    
    
    render() {
        return (
            <div>
                <Navibar loggedinstatus={this.props.loggedinstatus} handle_out={this.handle_out}/>
                <Search handlesearchdata={this.handlesearchdata}/>
            </div>
            
        );
    }
}

