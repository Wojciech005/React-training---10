class Form extends React.Component {
  state = {
    city: "",
    text: "",
    isLiked: true,
    number: "0"

  }

  handleChange = (e) => {
    console.log(e.target.type)
    if(e.target.type === "checkbox") {
    this.setState ({
      [e.target.name]: e.target.checked
    })
  } else {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }
  }
 
   

  render() {
    return (
      <div>
        <label>
          Select a city
          <input name = "city" value = {this.state.city} onChange = {this.handleChange} type="text"/>
        </label>
        <br/>
<label>Write something about this place</label>
<textarea name = "text" value = {this.state.text} onChange = {this.handleChange}></textarea>
<br/>

<label> 
  Do you like this town ?
  <input name = "isLiked" type="checkbox"  checked = {this.state.isLiked} onChange = {this.handleChange}/>
  </label>
<br/>
      <label>
        How often do you visit this town ?  
        <select name = "number" value={this.state.number} onChange ={this.handleChange}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="more">more</option>
        </select>
      </label>

      </div>

    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'))
