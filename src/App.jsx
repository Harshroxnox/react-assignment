import { useState } from 'react'
import ContactBarItem from './components/ContactBarItem'

function App() {

  return (
    <div className="wrapper">
      <div className="bg-[#F2F7FC]">
        <div className="grid grid-cols-5 gap-32 w-full space-x-6 text-[0.8rem] py-2">
          <ContactBarItem link="https://www.sapphiresolutions.net/images/header_slicing/united_states.svg" label="For Sales: +1-754-258-7670" />
          <ContactBarItem link="https://www.sapphiresolutions.net/images/header_slicing/india.svg" label="For Sales: +91-942-970-9662" />
          <ContactBarItem link="https://www.sapphiresolutions.net/images/header_slicing/ic_teams.svg" label="Sapphire Software Solutions" />
          <ContactBarItem link="https://www.sapphiresolutions.net/images/header_slicing/gmail_new.svg" label="contact@sapphiresolutions.net" />
          <ContactBarItem link="https://www.sapphiresolutions.net/images/header_slicing/schedule.svg" label="Schedule a Meeting" />
        </div>
        <hr className='w-[95vw] m-auto border-gray-300'/>
        
        <div className="grid grid-cols-2">
          <div className="m-3">
            <img className="h-14" src="https://www.sapphiresolutions.net/images/new_header/sapphire_logo_dark.svg" alt="logo" />
          </div>
          <div className="flex justify-center items-center gap-6">
            <div>Company &#x25BE;</div>
            <div>Product &#x25BE;</div>
            <div>Services &#x25BE;</div>
            <div>Technology &#x25BE;</div>
            <div>Hire Developers &#x25BE;</div>
            <div>Our Work &#x25BE;</div>
          </div>
          <div className="buttons">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
