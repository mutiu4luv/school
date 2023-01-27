import React from 'react'
import "../custom/custom.css"
const Custom = () => {
  return (
    <div>
      <section className='custom'> 
      <div className='container'>

        <div className='content'>

            <h6> Why You <span>Join</span> Us </h6>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Voluptate eveniet autem possimus tempore illo labore.
            </p>
      
        </div>


        <div className='row justify-content-center'>
            <div className='col-sm-5'>
                <div className='box'>
                    <h6>Expect Teacher</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora iure molestiae natus corporis, quibusdam quo consequatur beatae culpa iste.
                    </p>
                </div>
            </div>

            <div className='col-sm-5'>
                <div className='box'>
                    <h6>Trusted Certification</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora iure molestiae natus corporis, quibusdam quo consequatur beatae culpa iste.
                    </p>
                </div>
            </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Custom
