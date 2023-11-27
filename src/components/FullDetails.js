
import React, { useState } from 'react'

export const FullDetails = () => {
  const [Formdata, setFormdata] = useState({
    firstname: "", lastname: "", email: "", city:"",country: "India",state:"",
    Streetadress:"", zippostalcode: "", byemail: "", pushnotifications: "",comments:false,
     offers:false,candidates:false
  })
  function changeHandler(event) {
    console.log(Formdata)
    const { name, value ,type,checked} = event.target
    setFormdata((prevdata) => {
      // console.log("hi")
      return {
        ...prevdata,
        [name]:type === "checkbox" ?checked:value
      }
    })
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(Formdata)
  }


  return (
    <div className='bg-yellow-200'>
      <form onSubmit={submitHandler} className='formbox'>
        <label htmlFor='firstname' className='lbl'>firstname:</label><br />
        <input type="text" value={Formdata.firstname} onChange={changeHandler} name='firstname' className='input' /><br />

        <label htmlFor='lastname' className='lbl'>lastname:</label><br />
        <input type="text" value={Formdata.lastname} onChange={changeHandler} name='lastname' className='input' /><br />

        <label htmlFor='email adress'className='lbl'>email adress:</label><br />
        <input type="email" value={Formdata.email} onChange={changeHandler} name='email' className='input' /><br />

        <label htmlFor='country' name="country"className='lbl'>Country</label><br />
        <select name="country" value={Formdata.country} onChange={changeHandler}>
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>MExico</option>
        </select><br/>

        <label htmlFor='city' className='lbl'>City</label><br />
        <input type="text" value={Formdata.city} onChange={changeHandler} name='city' className='input' /><br />
        
        <label htmlFor='state' className='lbl'>State/Province</label><br />
        <input type="text" value={Formdata.state} onChange={changeHandler} name='state' className='input' /><br />
        
        <label htmlFor='zippostalcode' className='lbl'>Zip/Postal Code</label><br />
        <input type="text" value={Formdata.zippostalcode} onChange={changeHandler} name='zippostalcode' className='input' /><br />
        
        <label htmlFor='Streetadress' name='Streetadress' className='lbl'>Streetadress</label><br />
        <input type="text" value={Formdata.Streetadress} onChange={changeHandler} name='Streetadress' className='input' /><br />
        
<fieldset>
  <legend>By email</legend>
        {/* <label htmlFor='byemail'name="byemail" className='lbl' >By Email</label><br/> */}

        <input type="checkbox" value={Formdata.comments} onChange={changeHandler} name='comments' />
        
        <label  className='lbl'>Comments</label><br/>
        <p>Get Notified when someone posts a comment on aposting</p>

        <input type="checkbox" value={Formdata.candidates} onChange={changeHandler} name='candidates' />
        <label  className='lbl'>Candidates</label><br/>
        <p> Get notified when a candidates applies for a job</p>


        <input type="checkbox" value={Formdata.offers} onChange={changeHandler} name='offers' />
        <label  className='lbl'>Offers</label><br/>
        <p>GEt notified when a candidate accepts or rejects an offer</p>
</fieldset>
        
<fieldset>
  <legend>Push Notifications</legend>
        {/* <label  className='lbl'htmlFor='pushnotifications' name="pushnotifications">Push notifications for everything</label> */}
        <p> These are delivered via SMS to your mobile phone</p>
        <input type="radio" value={Formdata.pushnotifications} onChange={changeHandler} name="pushnotifications" />
        <label className='lbl' htmlFor='Everything'>Everything</label>
        <input type="radio" value={Formdata.pushnotifications} onChange={changeHandler} name="pushnotifications" />
        <label className='lbl' htmlFor='Same as email'name='Same as email' >Same as email</label>
        <input type="radio" value={Formdata.pushnotifications} onChange={changeHandler} name="pushnotifications" />
        <label  className='lbl'htmlFor='no push notifications'>NO push Notifications</label>
        </fieldset>
<button>save</button>
      </form>
    </div>
  )
}



export default FullDetails