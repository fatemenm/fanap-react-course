import React from 'react'

const WithForm = () => {
    return function (WrappedComponent){
        return class extends React.Component{
            render(){
                return(
                    <WrappedComponent pp="property comes from withform compoenent"/>
                )
            }
        }
    }
}

export default WithForm

