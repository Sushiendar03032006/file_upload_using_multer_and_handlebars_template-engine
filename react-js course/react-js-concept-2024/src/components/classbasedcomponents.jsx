import { Component } from "react";

class ClassBasedComponents extends Component{

    state={
        showtext:false,
        changecolor:false,
        count:0,
        changecount:false

    }
    componentDidMount(){
        const { showtext, changecolor } = this.state;
        this.setState({
            showtext: !showtext,
            changecolor: !changecolor


        })
    }

    componentDidUpdate(prevProps, prevState){
        const {showtext,changecolor,count}=this.state;
        if(prevState && prevState.count!==count && prevState.count==9){
            this.setState({
                changecount:!this.state.changecount
                
            })
        }


    }

    componentWillUnmount(){
        this.setState({
            showtext:!this.state.showtext
        })
    }

    handleclick = () => {
        const { showtext, changecolor } = this.state;
        

        this.setState({
            showtext: !showtext,
            changecolor: !changecolor
        });
    }

    

    handlecount=()=>{
        const {count } = this.state;
        this.setState({
            ...this.state,

            count:count+1

        })


    }
    render(){
        const { showtext, changecolor,count,changecount } = this.state;
        return(
            

            <div>
               
                {
                    showtext?<h1 style={{color:changecolor?"red":"black",fontSize:changecolor?"50px":"20px"}}>Class Based components</h1>:null

                }
             
                <button onClick={this.handleclick}>Toggle Text</button>

                <button onClick={this.handlecount}>Count</button>

                <h2 style={{fontSize:changecount?"50px":"12px"}}>Count is {count}</h2>
            </div>
        );
    }
}

export default ClassBasedComponents;