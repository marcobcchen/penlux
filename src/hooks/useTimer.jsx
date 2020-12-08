import { useState, useEffect, useRef } from 'react';

// 接收status props來做開關
const useTimer = (status) => {
  const [second, setSecond] = useState(0);
  // 因為timer與畫面內容更新無關，所以用useRef來存放state
  const timer = useRef();

  useEffect(() => {
    const startTime = new Date().getTime();
    const startTimer = () => {
      const nowTime = new Date().getTime();
      const timeLag = Math.floor((nowTime - startTime) / 1000);
      setSecond(timeLag);
    };
    // statu ? 啟動計時 : 停止計時
    if (status) {
      timer.current = setInterval(startTimer, 1000);
    } else {
      clearInterval(timer.current);
      setSecond(0);
    }

    return () => {
      clearInterval(timer.current);
      setSecond(0);
    };
  }, [status]);

  return second;
};

export default useTimer;
