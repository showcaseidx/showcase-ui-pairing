
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputText: "",
      imgList: null
    }

    this.fetchImage = this.fetchImage.bind(this)
    this.textInputHandler = this.textInputHandler.bind(this)
  }

  async fetchImage() {
    try{
      let result = await fetch(`https://api.wikimedia.org/core/v1/wikipedia/en/search/page?q=${this.state.inputText}&limit=10`);
      if(result.status === 200){
        result = await result.json()
        this.setState({imgList: result})
      }
    } catch(ex){
      console.log(ex)
    }
  }

  textInputHandler(e){
    this.setState({inputText: e.target.value})
    this.fetchImage()
  }

  showThumbnails() {
    if(this.state.imgList.length){
      this.state.imgList.map(el =>{
        
      })
      return(
        <li className="imglist">Image Show</li>
      )
    }
    return (
      <li className="imglist">No Image</li>
    )
  }

  render(){
    return(
      <div className="App">
        <h1>Wiki Image Search</h1>
        <div>
          <form onSubmit={this.fetchImage}>
            <input name="name" value={this.state.inputText} onChange={this.textInputHandler} />
            <input type="submit" value="Submit" className="btn"/>
            <div className="imgresult">
              <ul>
                
              </ul>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Wiki Image Search</h1>
//       <div>
//         <form onSubmit={fetchImage}>
//           <input name="name" />
//           <input type="submit" value="Submit" className="btn"/>
//           <div className="imgresult">
//             <ul>
//               <li className="imglist">Image Show</li>
//             </ul>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

export default App;
