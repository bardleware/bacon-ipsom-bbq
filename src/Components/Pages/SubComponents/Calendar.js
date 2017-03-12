import React, { Component } from 'react';

import './Styles/calendar.css';

class Calendar extends Component {
    render() {
        const month = "January";
        const janData = [
                    {
                        "day": 1,
                        "event": false
                    },
                    {
                        "day": 2,
                        "event": false
                    },
                    {
                        "day": 3,
                        "event": false
                    },
                    {
                        "day": 4,
                        "event": false
                    },
                    {
                        "day": 5,
                        "event": false
                    },
                    {
                        "day": 6,
                        "event": false
                    },
                    {
                        "day": 7,
                        "event": false
                    },
                    {
                        "day": 8,
                        "event": false
                    },
                    {
                        "day": 9,
                        "event": true
                    },
                    {
                        "day": 10,
                        "event": false
                    },
                    {
                        "day": 11,
                        "event": false
                    },
                    {
                        "day": 12,
                        "event": false
                    },
                    {
                        "day": 13,
                        "event": true
                    },
                    {
                        "day": 14,
                        "event": false
                    },
                    {
                        "day": 15,
                        "event": true
                    },
                    {
                        "day": 16,
                        "event": false
                    },
                    {
                        "day": 17,
                        "event": false
                    },
                    {
                        "day": 18,
                        "event": false
                    },
                    {
                        "day": 19,
                        "event": true
                    },
                    {
                        "day": 20,
                        "event": false
                    },
                    {
                        "day": 21,
                        "event": false
                    },
                    {
                        "day": 22,
                        "event": false
                    },
                    {
                        "day": 23,
                        "event": false
                    },
                    {
                        "day": 24,
                        "event": false
                    },
                    {
                        "day": 25,
                        "event": false
                    },
                    {
                        "day": 26,
                        "event": true
                    },
                    {
                        "day": 27,
                        "event": false
                    },
                    {
                        "day": 28,
                        "event": false
                    },
                    {
                        "day": 29,
                        "event": false
                    },
                    {
                        "day": 30,
                        "event": false
                    },
                    {
                        "day": 31,
                        "event": true
                    }
        ];
        const daysOfTheWeek = [
            {"name": "Sun"},
            {"name": "Mon"},
            {"name": "Tues"},
            {"name": "Wed"},
            {"name": "Thurs"},
            {"name": "Fri"},
            {"name": "Sat"}
        ];
        const eventNote = "Bacon ipsum dolor amet corned beef spare ribs tongue alcatra. Ribeye rump prosciutto jerky, turducken brisket ball tip cow bacon pastrami.";
        let dotw = daysOfTheWeek.map(function (obj, i) {
            return(
                <div key={i} className="dayHeader">{obj.name}</div>
            )
        });
        let _days = janData.map(function (obj,i) {
            function eventStyle(obj){
                if (obj.event){
                    return{ backgroundColor: '#ffc14d'};
                }
                else{
                    return{ backgroundColor: '#f3f2f2'}
                }

            }
            return(
                <div key={i} className="dayBox" style={eventStyle(obj)}>
                    <span>{obj.day}</span>
                </div>
            )
        });  //end of _days

        let _events = janData.map(function (obj,i) {
            if(obj.event){
                return(
                    <div key={i} className="eventNote">
                        <div className="noteDate">January {obj.day}</div>
                        <div className="noteText">{eventNote}</div>
                    </div>
                )
            }
            return 0;
        });

        return (
            <div className="mainCal">
                <div id="calendar">
                    <div className="calendarHeader">{month}</div>
                    <div className="daysOfTheWeek">{dotw}</div>
                    <div className="calendarWeeks">{_days}</div>
                </div>
                <div id="calNotes">
                    {_events}
                </div>
            </div>
        );
    }
}

export default Calendar;