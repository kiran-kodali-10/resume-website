import React, { useEffect, useState } from 'react';
// import './AnimatedText.css'; // Import the CSS file

const AnimatedText = (props) => {
  const finalText = "Kiran Kodali";
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
   console.log(props.finalText)
},[])


  useEffect(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let intervalId;
    let timeoutId;

    const generateRandomText = () => {
      if (currentIndex < props.finalText.length) {
        setText((prevText) => {
          let newText = prevText.split('');
          newText[currentIndex] = characters.charAt(Math.floor(Math.random() * characters.length));
          return newText.join('');
        });
      } else {
        clearInterval(intervalId);
      }
    };

    const updateCharacter = () => {
      if (currentIndex < props.finalText.length) {
        setText((prevText) => prevText.slice(0, currentIndex) + props.finalText[currentIndex] + prevText.slice(currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      }
    };

    intervalId = setInterval(generateRandomText, 100); // Update random characters every 100ms

    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      intervalId = setInterval(updateCharacter, 60); // Change to final characters every 150ms
    }, 100); // Start updating to final text after 3 seconds

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  return <>{text}</>;
};

export default AnimatedText;
