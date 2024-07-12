import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, Input, Label } from 'reactstrap';

export default function ContactForm() {
    React.useEffect(() => {
        console.log("inside contact Form")
    })


    const contactDetails = [
        {
            "socialName": "LinkedIn",
            "icon": faLinkedin,
            "link": "https://www.linkedin.com/in/kiran-kodali/ ",
            "renderLink": true,
        },
        {
            "socialName": "Github",
            "icon": faGithub,
            "link": "https://github.com/kiran-kodali-10",
            "renderLink": true,
        },
        {
            "socialName": "Phone",
            "icon": faPhone,
            "link": "+1(669) 666-4652",
            "renderLink": false,
        },
        {
            "socialName": "Email",
            "icon": faEnvelope,
            "link": "kiran.kodali10@gmail.com",
            "renderLink": false
        },
    ]


    return (
        <div className="contact-page-container">
            <Row>
                {
                    contactDetails.map((value, key) => {
                        console.log(value);
                        console.log(key);
                        return (
                            <Col  key={key}>
                                {
                                    value['renderLink'] ?
                                        <a href={value['link']} className="icon-link" target="_blank" rel="noopener noreferrer" >
                                            <div className='icon-container'>
                                                <FontAwesomeIcon icon={value['icon']} className='circular-icon' />
                                            </div>
                                            <p className='icon-text-socials'> {value['socialName']} </p>
                                        </a>
                                        :
                                        <div className='icon-link'>
                                            <div className='icon-container'>
                                                <FontAwesomeIcon icon={value['icon']} className='circular-icon' />
                                            </div>
                                            <p className='icon-text-socials'> {value['link']} </p>
                                        </div>
                                }

                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}