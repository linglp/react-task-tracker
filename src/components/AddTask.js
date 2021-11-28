import { useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import {useEffect} from 'react';
import moment from 'moment';


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [start_time, setStartTime] = useState('')
  const [reminder, setReminder] = useState(false)
  const [address, setAddress] = useState('')
  const [end_time, setEndTime] = useState('')

  /* 
    Update with your own Client Id and Api key 
  */
    var CLIENT_ID = "" //add your client id here
    var API_KEY = "" //add your api key here
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events" //read/write access to Events
    
  
  const AddtoCalendar =()=>{

   var end_time_new = moment(end_time); 
   var start_time_new = moment(start_time);


    window.gapi.load('client:auth2', () => {

      window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
    })

    window.gapi.auth2.getAuthInstance().signIn().then(() => {
      
    var event = {
        'summary': text,
        'location': address,
        'description': text,
        'start': {
          'dateTime': start_time_new.format(),
          'timeZone': 'America/New_York'
        },
        'end': {
          'dateTime': end_time_new.format(),
          'timeZone': 'America/New_York'
        },
        // 'recurrence': [
        //   'RRULE:FREQ=DAILY;COUNT=2'
        // ],
        // 'attendees': [
        //   {'email': 'lpage@example.com'},
        //   {'email': 'sbrin@example.com'}
        // ],
        'reminders': {
          'useDefault': false,
          'overrides': [
            {'method': 'email', 'minutes': 24 * 60},
            {'method': 'popup', 'minutes': 10}
          ]
        }
      }

      var request = window.gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': event,
      })

      request.execute(event => {
        console.log(event)
        window.open(event.htmlLink)
      })
  
    })


  


  })
}



  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, start_time, end_time, address, reminder })

    setText('')
    setStartTime('')
    setEndTime('')
    setAddress('')
    setReminder(false)
  }

  return (
    <div>
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Set Start Time</label>
        <input
          type='text'
          placeholder='Format YYYY-MM-DDTHH:MM:SS(Eastern Time Zone)'
          value={start_time}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>

      <div className='form-control'>
        <label>Set End Time</label>
        <input
          type='text'
          placeholder='Format YYYY-MM-DDTHH:MM:SS(Eastern Time Zone)'
          value={end_time}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>



      <div className='form-control'>
        <label>Location</label>

      <PlacesAutocomplete 
        value={address}
        // onChange={setAddress}
        onChange = {setAddress}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            {/* <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p> */}

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor:"#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
              
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>


      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onClick={AddtoCalendar}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
    </div>
    
  )
}

export default AddTask;
