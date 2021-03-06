import React, { Component } from 'react'

export default class EventLog extends Component {
    
    render() {
        return (
            <div className="EventLogContainer">
                <p className="bold EventLogTitle">ເຫດການທີ່ເກີດຂຶ້ນ</p>
                <div className="EventLogBody">
                   {this.props.logs.map((x, index) => {
                        if(index === this.props.logs.length-1){
                            return <p className="new"><b>{"➜ "}</b> {x}</p>
                        }
                    return <p><b>{"➜ "}</b> {x}</p>
                    })}
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div> 
                </div>
            </div>
        )
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
      }
      
      componentDidMount() {
        this.scrollToBottom();
      }
      
      componentDidUpdate() {
        this.scrollToBottom();
      }
}
