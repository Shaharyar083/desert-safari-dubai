import React from 'react'
import './login.css'
import Header from  "../Header"

const index = () => {
  return (
	<>
	<Header/>
	<div className='login_main'>
		<div className='d-flex justify-content-center'>
			
			<div className='fff2'>
			<div className='loginHeading'>Admin Login</div>
			<div className='login_wrapper'>
				<div className='ip_tag'>Your Email</div>
				<div className='input_wrapper_login'>
					<input placeholder='Enter Your email' type='email' className='login_input' />
				</div>
				<div className='ip_tag1'>Your Password</div>
				<div className='input_wrapper_login '>
					<input placeholder='Enter Your password' type='password' className='login_input' />
				</div>
				<div className='Login_btn'>Login</div>
			</div>
			</div>
			
			 </div>
	</div>
	
	
	
	</>
  )
}

export default index