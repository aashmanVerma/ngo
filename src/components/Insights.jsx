import React from 'react'
import Card from './Card'
import I1 from '../assets/i1.png'
import I2 from '../assets/i2.jpg'
import I3 from '../assets/i3.jpeg'

export default function Insights() {
  return (
    <div className='flex flex-col w-[85%] mx-auto items-center my-[6rem]'>
        <div className=''>
            <i className='text-lg sm:text-xl'>More Insights</i>
        </div>
        <div className='my-4 flex flex-col gap-y-3 sm:flex-row sm:flex-wrap md:gap-x-10'>
            <div>
                <Card title="Join the change" text="Be a part of this amazing community, With this drive we hope to provide chances for education, personal development, and inspiration." img={I1} link="https://surveyheart.com/form/636e16ede5fab37a9ba82483" btn="Join us" />
            </div>
            <div>
                <Card title="Contribute towards nation" text="Be a part of this amazing community, Contribute to the betterment of the society and nation." img={I2} link="" btn="Donate" />
            </div>
            <div>
                <Card title="Transparency" text="Get all updates about our organisation on our instagram handle" img={I3} link="https://www.instagram.com/kshitikshafoundation/?hl=en" btn="Instagrm" />
            </div>
        </div>
    </div>
  )
}
