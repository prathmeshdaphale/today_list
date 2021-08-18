import React, {Component} from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './plan'





export class App extends Component {
  state={
    items:[],
    text:""
  }
 
  handleclick=(e)=>{
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text ]
      this.setState({items:items,text:""})

    }
   

  }
  handlechange=(e)=>{
    this.setState({text:e.target.value})
  }
  handleDelete=(id)=>{
    console.log("deleted",id);
    const Olditmes=[...this.state.items]
    console.log("olditems",Olditmes)
    const items =Olditmes.filter((element,i)=>{
      return  i !==id

    })
    console.log("newitems",items)
    this.setState({items:items})

  }




  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3" >
            <h2 className="text-center">Today's Plan</h2>
            <div className="row">
              <div className="col-9">
              <input type="text" className="form-control"
              placeholder="Write Plan Here" value={this.state.text} onChange={this.handlechange}/>
              
              </div>
         
            <div className="col-2">
              <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleclick}  >Add</button>
            </div>
            <div className="container-fluid">
              <ul className="list unstyled row m-5">
                {
                  this.state.items.map((value,i)=>{
                    return <Plan value={value} id={i} setdata={this.handleDelete}/>

                  })
                }
           
              </ul>
            </div>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }
}

export default App
