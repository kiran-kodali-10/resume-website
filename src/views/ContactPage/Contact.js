import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Row, Col, Card, CardHeader, CardBody, Input, Label } from 'reactstrap';

export default function ContactForm() {


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
            "socialName": "+1(669) 666-4652",
            "icon": faPhone,
            "link": "tel:+16696664652",
            "renderLink": false,
        },
        {
            "socialName": "krian.kodali10@gmail.com",
            "icon": faEnvelope,
            "link": "mailto:kiran.kodali10@gmail.com",
            "renderLink": false
        },
        // {
        //     "socialName": "Resume",
        //     "icon": faEnvelope,
        //     "link": "mailto:kiran.kodali10@gmail.com",
        //     "renderLink": false
        // },

    ]


    return (
        <div className="contact-page-container">
            <Row>
                {
                    contactDetails.map((value, key) => {

                        return (
                            <Col key={key} md={6} sm={6} lg={3}>
                                {
                                    // value['renderLink'] ?
                                    <a href={value['link']} className="icon-link" target="_blank" rel="noopener noreferrer" >
                                        <div className='icon-container'>
                                            <FontAwesomeIcon icon={value['icon']} className='circular-icon' />
                                        </div>
                                        <p className='icon-text-socials'> {value['socialName']} </p>
                                    </a>
                                }
                            </Col>
                        )
                    })
                }
            </Row>
        </div>
    )
}