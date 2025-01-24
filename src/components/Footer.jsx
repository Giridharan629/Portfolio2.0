import React from 'react'
import { ButtonPrimary } from './Button';


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Cirtifications',
      href: '#cirtifications'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/Giridharan629'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/giri-dharan-044463245/'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/GIRIDHARAN87787?t=Xm84p8GOIMG1RpioMlPC6Q&s=09'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/myself_giridharan?igsh=MXY2amM1eXhuN3UweQ=='
    },
  ];


const Footer = () => {
  return (
    <section id='footer' className="section">
        <div className="container">
            <div className=" lg:grid lg:grid-cols-2">
                <div className=" mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                    Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary
                    href="mailto:dharang036@gmail.com"
                    label='Start project'
                    icon="chevron_right"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">
                    <div>
                        <p className=" mb-2">Sitmap</p>

                        <ul>
                            {
                                sitemap.map(({label,href},key)=>(
                                    <li key={key}>
                                        <a 
                                        href={href} 
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                            {label }
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2">Socials</p>

                        <ul>
                            {
                                socials.map(({label,href},key)=>(
                                    <li key={key}>
                                        <a 
                                        href={href}
                                        target='_blank'
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                                            {label }
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className=" flex items-center justify-between pt-10 mb-8 ">
                <a 
                href="" 
                className=""
                >
                    <img 
                    src="/images/favicon1.png" 
                    width={40}
                    height={40}
                    alt="Logo" 
                    />
                </a>

                <p className="text-zinc-500 text-sm ">
                    &copy; 2025 <span className='text-zinc-200'>Its me! GiriDharan</span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default Footer