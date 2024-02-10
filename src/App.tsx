import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from 'react-modal';
Modal.setAppElement('#root');
function App() {
  const r= useRef(null);
  const [count, setCount] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  const onClickMe=()=>{
    setShowButton(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  function deleteForever(){
    alert('Count till 5 and its deleted for real.');
    alert('Deleted');
    window.location.reload();
  }
  return (
    <div className='wrapper'>
      {showButton && <button className={'openModal'} onClick={onClickMe}>Click Here, You need this</button>}
      {!showButton
      && <div className='darkWeb'>
        <div className='darkWebH1'><h1>Delete it for REAL</h1></div>
        <div className='darkWebConditions'>
          <div className='darkWebConditionsDetails'>
            <h2>Terms & Conditions. Read carefully</h2>
            <div>
              <ol>
                <li>
                  Make a folder of all the images you want to delete.
                </li>
                <li>
                  Save the folder on the site.
                </li>
                <li>
                  Hit 'Delete Forever' button
                </li>
                <li>
                  You will delete everything from the image for real.
                </li>
                <li>
                  Count till 5
                </li>
                <li>
                  Once done, you can't revert it.
                </li>
                <li>
                  Be careful what you delete. :)
                </li>
              </ol>
              <div>
              <input ref={r} type="file" multiple/>
              <button onClick={deleteForever}>Delete Forever</button>
                </div>
              
            </div>
          </div>
        </div>
      </div>}
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal> */}
    </div>
  )
}

export default App
