import axios from 'axios'
import React from 'react'

function Post() {

  /*  const options = data.map((d: { name: any }) => ({
        "value" : d.name,
        "label" : d.name
      }))
      this.setState({selectOptions: options})*/
    

    
    const [city,setCity]=React.useState('')
    const [data , setData]=React.useState<any>()

    const getcty=(city:any)=>{
    const api = `http://api.weatherapi.com/v1/current.json?key=18d660f829704481aad182651230702&q=${city}&aqi=no`
    React.useEffect(()=>{
    
        axios.get(api).then(res=>{
            setData(res.data)
            console.log(res.data)
    
        }
    
        )
    })}

  
   
  return (

    <div className='contienare'>
     <div className='card'>
     <input type="text"
        value={city}
        onChange={e=>setCity(e.target.value)}
        width='200px'/>
        <button onClick={()=>getcty(city)}>Choose </button>
        <div className=''>
        <h1>{city}</h1>

        {data &&<img src={data.current && data.current.condition&&data.current.condition.icon}></img> }
        </div>
     

     <select onChange={e=>setCity(e.target.value)}>
<option value='jeddah'>Jeddah</option>
<option value='Ryighd'>Ryighd</option>
<option value='Al-baha'>Al-baha</option>
<option></option>
<option></option>
         
          </select>
      
     </div>
        <div>

     

        
        </div>

     

        




    </div>



  )
        }

export default Post