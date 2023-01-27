
import './App.css';
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { useRef } from 'react';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { FaGithub } from 'react-icons/fa';

function App() {

  const [image, setImage] = useState('')
  const [text, setText] = useState({ first: '', second: '' })

  function handleChange(e) {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  const firsth4 = useRef()
  const secondh4 = useRef()
  const meme = useRef()

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(meme.current);
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'Elmeme', 'image/png');


  };


  return (

    <div className="App container p-5">
      <h1 className='text-light fs-5 text-center'>Write and share your meme 😎</h1>
      <div className="d-flex justify-content-center flex-column gap-3 mt-5 m-auto w-25">

        <input className='bg-secondary file' type="file" name="" id="" onChange={handleChange} />

        <div className="d-flex">
          <input className='text' type="text" name="" id="" placeholder='First line' onChange={e => setText({ ...text, first: e.target.value })} />
          <input className='w-100 h-auto' type="color" name="" id="" onChange={e => firsth4.current.style.color = e.target.value} />
        </div>

        <div className="d-flex">
          <input className='text' type="text" name="" id="" placeholder='First line' onChange={e => setText({ ...text, second: e.target.value })} />
          <input className='w-100 h-auto' type="color" name="" id="" onChange={e => secondh4.current.style.color = e.target.value} />
        </div>


        <div className='bg-secondary meme' ref={meme} style={{ position: "relative", height: "280px", backgroundImage: `url(${image})`, backgroundSize: "cover" }}>

          <div className='d-flex flex-column justify-content-between h-100 p-3'>
            <div className='w-100' style={{ zIndex: "10" }}>
              <h4 className='text-center' ref={firsth4} style={{ wordWrap: "break-word" }}>{text.first}</h4>

            </div>

            <div className='w-100' style={{ zIndex: "5" }}>
              <h4 className=' text-center' ref={secondh4} style={{ wordWrap: "break-word" }}>{text.second}</h4>

            </div>
          </div>


        </div>

        <button className='file' onClick={handleCaptureClick}>Download</button>


        <a href="">
          <footer className='d-flex flex-column align-items-center gap-2 mt-5'>
            <FaGithub className='text-white fs-1' />
            <p className='text-secondary'>Source code</p>
          </footer>

        </a>







      </div>

    </div>

  );


}

export default App;
