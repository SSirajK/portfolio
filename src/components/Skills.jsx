import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faEnvira, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import '../components/Layout/index.scss'

const Skills = () => {
  return (
    <div name='skills' className='text-gray-300 md:mt-52 mt-80 px-4 lg:ml-64 md:h-screen mb-0'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-700 lg:ml-96 mb-0'>Skills</p>
            <br /><br />
            <div className='hidden md:block text-gray-300'>
            <p className='py-4 lg:ml-64'>//These are the technologies I've worked with</p><br /><br />
            <p className='inline'> NodeJs</p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;|&emsp;&emsp;&emsp;<p className='inline'>HTML5</p>&emsp;&emsp;&emsp;&emsp;|&emsp;&emsp;<p className='inline'>CSS3</p><br /><br />
            <p className='inline'> MongoDb</p>&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;|&emsp;&emsp;&emsp;<p className='inline'>React</p>&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;|&emsp;&emsp;<p className='inline'>JavaScript</p><br /><br />
            <p className='inline'>Animation with CSS</p>&emsp;|&emsp;&emsp;&emsp;<p className='inline'>Express JS</p>
            </div>
        </div>
        <div className='stage-cube-cont md:ml-0 md:mr-0 mr-24 lg:mt-52 mt-96'>
            <div className='cubespinner md:ml-56 lg:mt-12 mt-48'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faNodeJs} color="#41893E" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faEnvira} color="#60c529" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills