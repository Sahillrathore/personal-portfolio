import React from 'react'

// import projImg1 from '../../assets/ecomAppSnip.png'
// import projImg2 from '../../assets/stravelImg.png'

const ProjectCard = ({ title, img, stack, liveLink, codeLink, desc, imgWidth = 'w-1/2'}) => {
  return (

    // <div className='card p-4 bg-white h-full'>
    <>
      <div className={`card-img lg:${imgWidth} h-fit w-full overflow-hidden rounded-2xl transition-transform`}>
        <a href={liveLink} target='_blank'>
          <img src={img} alt="proimg" className=' w-full rounded-2xl hover:scale-105 transition-transform h-52' />
        </a>
      </div>

      <div className={`card-text flex flex-col lg:gap-3 gap-2 lg:${imgWidth} w-full h-fit mt-2 `}>
        <span className='flex flex-wrap gap-2'>
          {stack?.map((item)=> (
            <span key={item} className='tech-stack bg-purple-600 px-3 rounded-xl text-white font-light sm:text-sm text-sm'>{item}</span>
        ))}
        </span>
        <h2 className='card-title lg:text-3xl text-2xl text-zinc-800 font-bold '>{title}</h2>
        {/* <p className='text-sm text-zinc-700'>{desc}</p> */}
        <div className="anchor-links flex gap-4 mt-2 items-center">
          <a href={codeLink} target='_blank' className='bg-zinc-00 px-2 py rounded- text-4xl'><i className="fa-brands fa-github"></i></a>
          <a href={liveLink} target='_blank' className='text-md bg-gray-900 text-white px-3 py-2 rounded-md active:scale-90'>Visit Project</a>
        </div>
      </div>
      {/* // </div> */}
    </>
  )
}

export default ProjectCard