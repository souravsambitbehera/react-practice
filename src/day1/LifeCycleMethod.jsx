import React ,{Component} from "react";
class LifeCycleMethod extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
        };
    };
    handleClick = ()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        })) 
    }
    render(){
        return(
            <div>

                Hello This is a class component.
                <button  onClick={this.handleClick}>Click Here</button>
                <h3>Total {this.state.count}</h3>
            </div>
        )
    }
}
export default LifeCycleMethod