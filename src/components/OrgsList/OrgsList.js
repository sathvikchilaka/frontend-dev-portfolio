import React from 'react'
import iitbbs_logo from '../../assets/512px-Indian_Institute_of_Technology_Bhubaneswar_Logo_white.svg.png'
import deloitte_logo from '../../assets/Deloitte-Logo.png'
import tcs_logo from '../../assets/tcs-logo-white-new.png'
import neomentors_logo from '../../assets/neomentors_logo.png'
import wiss_logo from '../../assets/wissenaire_logo.png'
import './orgsList.css'

const OrgsList = () => {
  return (
    <div className="orgs-container">
        <div className='carousel-wrapper'>
            <div className="orgs-list">
                <img className="org-logo" src={iitbbs_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={deloitte_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={tcs_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={neomentors_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={wiss_logo} alt="IIT Bhubaneswar"></img>

                {/* Duplicate the logos to create the seamless loop effect */}
                <img className="org-logo" src={iitbbs_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={deloitte_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={tcs_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={neomentors_logo} alt="IIT Bhubaneswar"></img>
                <img className="org-logo" src={wiss_logo} alt="IIT Bhubaneswar"></img>
            </div>
        </div>
        <p className="orgs-footer-text">My journey includes all of these</p>
    </div>
  )
}

export default OrgsList