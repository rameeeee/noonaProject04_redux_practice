import './App.scss';
import pig from './assets/image/pig.png';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const scale = useSelector(state => state.scale)
  const scaleUp = () => {
    dispatch({type: "SCALE_UP", payload: {num: 32}})
  }
  const scaleDown = () => {
    dispatch({type: "SCALE_DOWN", payload: {num: 32}})
  }

  return (
    <div className="wrap">
      <div className='button_wrap'>
        <button type='button' onClick={scaleUp} disabled={scale >= 512}>확대</button>
        <button type='button' onClick={scaleDown} disabled={scale <= 32}>축소</button>
        
      </div>
      <div className='img_wrap' style={{width: `${scale}px`}}>
        <img src={pig} alt="pig image" />
      </div>
    </div>
  );
}

export default App;
