import React from 'react'


const About = () => {

    const aboutItems = [
        {
          label: "Project's done",
          number: 7
        },
        // {
        //   label: 'Years of experience',
        //   number: 10
        // }
      ];

  return (
    <section 
    id='about' 
    className="section">
        <div className="container">
            <div className=" aboutBg bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
                <p className="nightPara text-zinc-300 mb-4 md:mb-8md
                text-xl md:max-w-[60ch]">
                Welcome! I&apos;m Giri, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                </p>

                <div className=" flex flex-wrap items-center gap-4 md:gap7">
                    {
                        aboutItems.map(({label,number},key)=>(
                            <div key={key}>

                                <div className="flex items-center md:mb-2">

                                    <span className="number text-2xl font-semibold md:text-4xl">{number}</span>

                                    <span className='text-sky-400 font-semibold md:text-3xl'>+</span>

                                </div>
                                
                                <p className="smText text-xs text-zinc-400 md:text-sm">{label}</p>

                            </div>
                        ))
                    }

                    <img 
                    src="/images/favicon1.png" 
                    alt="Logo" 
                    width={40}
                    height={40}
                    className='ml-auto md:w-[50px] md:h-[50px]'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About