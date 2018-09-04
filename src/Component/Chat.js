import React, { Component } from 'react';
class Chat extends Component{
    constructor(){
        super()
        
        this.state={
            // trigger : [
            //     ["hi","hey","hello"] 
            //     // ["how are you", "how is life", "how are things"],
            //     // ["what are you doing", "what is going on"],
            //     // ["how old are you"],
            //     // ["who are you", "are you human", "are you bot", "are you human or bot"],
            //     // ["who created you", "who made you"],
            //     // ["your name please",  "your name", "may i know your name", "what is your name"],
            //     // ["i love you"],
            //     // ["happy", "good"],
            //     // ["bad", "bored", "tired"],
            //     // ["help me", "tell me story", "tell me joke"],
            //     // ["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
            //     // ["bye", "good bye", "goodbye", "see you later"]
            //  ],
            // reply : [
            //     ["Hi","Hey","Hello"] 
                // ["Fine", "Pretty well", "Fantastic"],
                // ["Nothing much", "About to go to sleep", "Can you guest?", "I don't know actually"],
                // ["I am 1 day old"],
                // ["I am just a bot", "I am a bot. What are you?"],
                // ["Kani Veri", "My God"],
                // ["I am nameless", "I don't have a name"],
                // ["I love you too", "Me too"],
                // ["Have you ever felt bad?", "Glad to hear it"],
                // ["Why?", "Why? You shouldn't!", "Try watching TV"],
                // ["I will", "What about?"],
                // ["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome"],
                // ["Bye", "Goodbye", "See you later"]
            // ],
            //  alternative :["Haha...", "Eh..."],
            message:'',
        }
        this.onUpdatemsg=this.onUpdatemsg.bind(this);
    }
    
    onUpdatemsg(e){
      this.setState({message:e.target.value})
    }
    render(){
        var trigger = [
            ["hi","hey","hello"]
        ];
        var reply = [["hi","hey"]]; 
        var randomItem = reply[Math.floor(Math.random()*reply.length)];        
        if(trigger.includes(this.state.message)){
            // return randomItem;
        }
        return(
            <div id="main">
                <div>user: <span id="user"></span></div>
                <div>chatbot: <span id="chatbot"></span></div>
                <div><input id="input" type="text" onUpdatemsg={this.onUpdatemsg}  placeholder="say anything..." autocomplete="off" name="message"/></div>
            </div>

        )
    }
}
export default Chat;