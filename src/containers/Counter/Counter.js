import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
       
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubCounter}  />

                <hr></hr>
                <button onClick={()=>this.props.onResult(this.props.ctr)}>Result</button>
                <ul>
                    {this.props.result.map(rslt=>(
                        <li key={rslt.id} onClick={()=>this.props.onDlete(rslt.id)}>{rslt.value}</li>
                    ))}
                </ul>
                
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ctr:state.ctr.counter,
        result: state.res.result
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter : ()=>dispatch({type:'INCREMENT'}),
        onDecrementCounter : ()=>dispatch({type:'DECREMENT'}),
        onAddCounter : ()=>dispatch({type:'ADD', value:5}),
        onSubCounter : ()=>dispatch({type:'SUB',value:5}),
        onResult     : (value)=>dispatch({type:'RESULT', result:value}),
        onDlete      : (id)=>dispatch({type:'DELETE', id:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)