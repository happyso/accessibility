import React from 'react';
import './Style.css';
import Readable from './components/Readable';
import Template from './components/Template';


function App() {
  return (
    <>
      <Readable />
      <Template>안녕하세요 여기서 텍스트 변화를 확인 합니다.</Template>
    </>
    
  );
}

export default App;
