import React, { Component } from 'react';
class Chatbot extends Component {
    constructor() {
        super();

        this.state = {
            messages: [],
            replies: [],
            message:''
        }
    }
    onUpdate(e) {
        this.setState({
            message: e.target.value
        })
    }
    getReply() {
        var message = this.state.message;
         const replies = [{ author: "bot", message: "hi may i help you", replyDate: new Date() },
                             { author: "bot", message: "Good mormnig", replyDate: new Date() },
                    { author: "bot", message: "good to see you", replyDate: new Date() },
                    { author: "bot", message: "Sorry i can't understand", replyDate: new Date() },
                    { author: "bot", message: "wow good to hear that", replyDate: new Date() },
                    { author: "bot", message: "ehhh....", replyDate: new Date() },
                    { author: "bot", message: "u can do that", replyDate: new Date() },
                    { author: "bot", message: "I am bot", replyDate: new Date() }
                        ]
        

        fetch("/")
            .then((response) => {
                this.setState({
                    replies: replies
                },()=>{
                console.log(JSON.stringify(this.state.replies))

                })
            })
    }
    // items[Math.floor(Math.random()*items.length)];

    render() {
        if(this.state.replies.length>0){
            return (
                <div style={{margin: 0, padding: 0, "box-sizing": "border-box",}}>
                    <ul id="messages">
                  
                        {this.state.replies[Math.floor(Math.random()*this.state.replies.length)].message}
                                       </ul>
                    <input style={{ "border": 0, "padding": "10px", "width": "90%","margin-right": ".5%", }} id="message" value={this.state.message}  onChange={this.onUpdate.bind(this)} />
                    <button style={{"width": "9%","background": "rgb(130, 224, 255)", "border": "none", "padding": "10px"}}onClick={this.getReply.bind(this)}>Send</button>
                </div>
            )  
        }
        return (
            <div>
                
                <input style={{ "border": 0, "padding": "10px", "width": "90%","margin-right": ".5%", }} id="message" value={this.state.message}  onChange={this.onUpdate.bind(this)} />
                    <button style={{"width": "9%","background": "rgb(130, 224, 255)", "border": "none", "padding": "10px"}}onClick={this.getReply.bind(this)}>Send</button>
            </div>
        )
    }
}
export default Chatbot;