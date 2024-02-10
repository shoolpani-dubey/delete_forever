import { useRef, useState } from 'react'
import './App.css'
function App() {
  const r= useRef(null);
  const [showButton, setShowButton] = useState(true);
  const onClickMe=()=>{
    setShowButton(false);
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
    </div>
  )
}

export default App
