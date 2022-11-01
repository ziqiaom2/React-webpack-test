import React, {useLayoutEffect, useRef, useState, useEffect} from 'react'

export default function index() {
  const ws = useRef(null);
  const [message, setMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  //启动
  useLayoutEffect(() => {
    ws.current = new WebSocket('ws://localhost:80/ws-test');
    ws.current.onmessage = e => {
      setMessage(e.data);
    };
    return () => {
      ws.current?.close();
    };
  }, [ws]);

  useEffect(() => {
    console.log('inputMessage:', inputMessage);
  }, [inputMessage])

  const sendMessage = () => {
    ws.current?.send(inputMessage);
  }

  return (
    <div className='App'>
      <div className='container'>
          {message}
      </div>
      <input 
        type='text'
        value={inputMessage}
        onChange={e => {setInputMessage(e.target.value)}}
      />
      <button
        onClick={sendMessage}
      >发送消息</button>
    </div>
  );
}
