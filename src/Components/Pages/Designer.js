import React, { Component } from 'react';
import './PageStyles/designer.css';

class Designer extends Component {
    constructor() {
        super();
        this.state = { value: "Use this box to save notes and keep track of processes and issues you might have" }
    }
    render() {
        const noteArr =[
            {
                "author": "Jon",
                "time": "12:00:00 PM",
                "note": "Bacon ipsum dolor amet corned beef spare ribs tongue alcatra. Ribeye rump prosciutto jerky, turducken brisket ball tip cow bacon pastrami. Ribeye leberkas cupim sirloin pork, shoulder shank beef ribs ball tip hamburger turkey. "
            },
            {
                "author": "Paul",
                "time": "01:00:00 AM",
                "note": "Chicken beef swine bacon cupim turducken fatback. Swine shank short ribs meatloaf, shankle jowl flank kielbasa. Hamburger chicken jowl corned beef beef fatback tri-tip tail picanha bacon brisket cupim."
            },
            {
                "author": "Simon",
                "time": "02:00:00 AM",
                "note": "T-bone tri-tip filet mignon tongue brisket andouille spare ribs pancetta leberkas."
            },
            {
                "author": "Garth",
                "time": "12:00:00 PM",
                "note": "Tenderloin short loin beef rump, fatback jerky bresaola flank jowl. Kielbasa drumstick alcatra burgdoggen bresaola pancetta leberkas rump strip steak chuck capicola ribeye frankfurter. "
            },
            {
                "author": "Rita",
                "time": "01:00:00 AM",
                "note": "Tenderloin short loin beef rump, fatback jerky bresaola flank jowl. Kielbasa drumstick alcatra burgdoggen bresaola pancetta leberkas rump strip steak chuck capicola ribeye frankfurter. "
            },
            {
                "author": "Suzy",
                "time": "02:00:00 AM",
                "note": "Shank chuck beef ball tip alcatra pork belly. Shankle sausage doner, biltong chicken andouille spare ribs frankfurter bresaola short ribs jowl cow alcatra. Fatback pastrami shoulder cow kielbasa. "
            },
            {
                "author": "Jane",
                "time": "12:00:00 PM",
                "note": "Hamburger drumstick short ribs pork loin turkey kielbasa meatloaf, chuck rump pancetta sausage short loin shank cupim jowl. Swine shank salami jerky kielbasa burgdoggen cow fatback jowl frankfurter sirloin pig pork belly. Frankfurter landjaeger tongue shank. Corned beef bacon strip steak tail bresaola swine tri-tip alcatra kielbasa capicola rump. Doner beef ribs tongue short ribs meatloaf turducken burgdoggen, flank ham hock. Filet mignon drumstick andouille shoulder, sausage bacon biltong beef ribs jowl turkey chicken ground round spare ribs brisket."
            },
            {
                "author": "Jon",
                "time": "12:00:00 PM",
                "note": "Bacon ipsum dolor amet corned beef spare ribs tongue alcatra. Ribeye rump prosciutto jerky, turducken brisket ball tip cow bacon pastrami. Ribeye leberkas cupim sirloin pork, shoulder shank beef ribs ball tip hamburger turkey. "
            },
            {
                "author": "Paul",
                "time": "01:00:00 AM",
                "note": "Chicken beef swine bacon cupim turducken fatback. Swine shank short ribs meatloaf, shankle jowl flank kielbasa. Hamburger chicken jowl corned beef beef fatback tri-tip tail picanha bacon brisket cupim."
            },
            {
                "author": "Simon",
                "time": "02:00:00 AM",
                "note": "T-bone tri-tip filet mignon tongue brisket andouille spare ribs pancetta leberkas."
            },
            {
                "author": "Garth",
                "time": "12:00:00 PM",
                "note": "Tenderloin short loin beef rump, fatback jerky bresaola flank jowl. Kielbasa drumstick alcatra burgdoggen bresaola pancetta leberkas rump strip steak chuck capicola ribeye frankfurter. "
            },
            {
                "author": "Rita",
                "time": "01:00:00 AM",
                "note": "Tenderloin short loin beef rump, fatback jerky bresaola flank jowl. Kielbasa drumstick alcatra burgdoggen bresaola pancetta leberkas rump strip steak chuck capicola ribeye frankfurter. "
            },
            {
                "author": "Suzy",
                "time": "02:00:00 AM",
                "note": "Shank chuck beef ball tip alcatra pork belly. Shankle sausage doner, biltong chicken andouille spare ribs frankfurter bresaola short ribs jowl cow alcatra. Fatback pastrami shoulder cow kielbasa. "
            },
            {
                "author": "Jane",
                "time": "12:00:00 PM",
                "note": "Hamburger drumstick short ribs pork loin turkey kielbasa meatloaf, chuck rump pancetta sausage short loin shank cupim jowl. Swine shank salami jerky kielbasa burgdoggen cow fatback jowl frankfurter sirloin pig pork belly. Frankfurter landjaeger tongue shank. Corned beef bacon strip steak tail bresaola swine tri-tip alcatra kielbasa capicola rump. Doner beef ribs tongue short ribs meatloaf turducken burgdoggen, flank ham hock. Filet mignon drumstick andouille shoulder, sausage bacon biltong beef ribs jowl turkey chicken ground round spare ribs brisket."
            }
        ]


        let notes = noteArr.map(function (obj, i) {
            return(
                <div key={i} className="note">
                    <p className="noteI noteText">{obj.note}</p>
                    <div className="noteData">
                        <p className="noteI noteTime">{obj.time}</p>
                        <p className="noteI noteAuthor">{obj.author}</p>

                    </div>
                </div>
            )

        })
        return (
            <div className="app-view Designer">
                <div id="designerWorkspace">
                    <div id="accountHeader"></div>
                    <div id="accountCal"></div>
                    <div id="officeInfo"></div>
                </div>
                <div id="noteBar">
                    <div id="noteBox" className="noteBarElem">
                        <textarea className="noteTextArea" id="textArea" placeholder={this.state.value} />
                    </div>
                    <div id="saveBtn" className="noteBarElem">
                        <span id="saveTxt">SAVE</span>
                    </div>
                    <div id="noteThread" className="noteBarElem">
                        {notes}
                    </div>
                </div>
            </div>
        );
    }
}

export default Designer;