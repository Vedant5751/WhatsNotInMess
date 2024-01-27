import React from 'react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-400 py-2 flex justify-center items-center">
      <div className="flex flex-grow justify-center ml-20">
        <span className= "mx-2"><a href= "https://github.com/piyushbaibhav" target ="blank" className = "hover:text-sky-400">Piyush Baibhav |</a></span>
        <span ><a href="https://github.com/Vedant5751" target ="blank" className = "hover:text-sky-400">Vedant Patil |</a></span>
        <span className= "mx-2"><a href="https://github.com/Augnik03" target ="blank" className = "hover:text-sky-400">Augnik Banerjee</a></span>
      </div>
      <a href= "https://github.com/Vedant5751/WhatsNotInMess" target= "blank" className= "mr-5"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/code-fork.png"/></a>
    </footer>
  )
}

