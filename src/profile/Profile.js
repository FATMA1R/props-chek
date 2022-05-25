import React from 'react'
import '../profile/profile.css'
import PropTypes from 'prop-types';

function Profile(props , handleAlert) {

  const   styleBtn={backgroundColor:'#1982c4',
                    color:'#f1faee',
                    fontSize:'20px',
                    fontWeight:'bold',
                    width: '200px' ,
                    height: '50px',
                    marginTop:'10px',
                    boxShadow: '0px 5px 10px 0px #457b9d',
                    border:'none'
                    },
          styleinfo={
                    color:'#0077b6'
                    } 
  return (
    <div className="profile">
      
         <h1> This is my profile !</h1>  
        <img src={props.imge} width="200"/>
        <h1 style={styleinfo}>{props.fullName}</h1>
        <h2 style={styleinfo}>{props.bio} - {props.profession}</h2>

      <div className='content'>
        {props.children}
        <button  style={styleBtn} onClick={()=>props.handleName(props.fullName)}>Click</button>
      </div>

    </div>
  )
}
Profile.defaultProps={
  user:{fullName:'Unknown',
  bio:' Unknown',
  profession:'Unknown'
}
}

Profile.prototype={
user:PropTypes.object,
handleName:PropTypes.func,
}

export default Profile;