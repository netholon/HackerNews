import React from 'react'

const About = ({ data }) => {
    const { name, email, phone} = data

    return (
        <div>
            <h1>About Me</h1>
            
            <ul className='about'>
                <li>
                    {name &&
                        <div>
                            <strong>Name: </strong> {name}  
                        </div>
                    }
                </li>
                <li>
                    {email &&
                        <div>
                            <strong>Email: </strong> {email}  
                        </div>
                    }
                </li>
                <li>
                    {phone &&
                        <div>
                            <strong>Phone: </strong> {phone}  
                        </div>
                    }
                </li>
            </ul>

        </div>
    )
}

export default About
