import React from 'react'
import WithForm from './WithForm'
import Form from './Form'

const Withorm_HOC = WithForm()(Form)
class DisplayData extends React.Component{
    
    render(){
        return (
            <div>
                Display Data
                {/* <Withorm_HOC/> */}
            </div>
        )
    }
}


export default DisplayData