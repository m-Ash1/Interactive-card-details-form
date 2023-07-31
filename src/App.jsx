import backCard from './assets/bg-card-back.png'
import faceCard from './assets/bg-card-front.png'
import image from './assets/bg-main-desktop.png'
import './css/App.scss'

function App() {
  return <>
    <div className="background">
      <img src={image} alt="background" />
    </div>

    <div className="main-container">
      <div className="cards">
        <div className="card face">
          <div className="photo-placeholder"></div>
          <img src={faceCard} alt="face card" />
          <div className="card-number">9591 6489 6389 1OIE</div>
          <div className="holder-name">ASHLEY</div>
          <div className="date">09/00</div>
        </div>
        <div className="card back">
          <img src={backCard} alt="face card" />
          <div className="cvc">000</div>
        </div>
      </div>
      <div className="form">
        <div className="input">
          <label>CARDHOLDER NAME</label>
          <input maxLength={30} type="text" placeholder='e.g. Nada Khaled' />
        </div>
        <div className="input">
          <label>CARD NUMBER</label>
          <input type="text" placeholder='e.g. 1234 5678 9123 4567' maxLength={16} />
        </div>
        <div className='inline-input'>
          <div className="input">
            <label>EXP. DATE (MM/YY)</label>
            <div className="inline-input">
              <input className='date' type="text" placeholder='MM' />
              <input className='date' type="text" placeholder='YY' />
            </div>
          </div>
          <div className="input cvc">
            <label>CVC</label>
            <input type="text" placeholder='e.g. 123' />
          </div>
        </div>
        <button>Confirm</button>
      </div>
    </div>
  </>
}

export default App
