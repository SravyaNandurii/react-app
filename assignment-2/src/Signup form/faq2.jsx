import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function Faq2() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className='Faqtotal'>
      <div className='Faqtotal__onequestion'>
        <div className='Faqtotal__onequestion__firstquestion'>
          <a>Where can I watch</a>
          <button className='Faqtotal__onequestion__firstquestion__plusbutton' onClick={toggleDescription}>
            <AddIcon />
          </button>
        </div>
        {showDescription && (
          <div className='des'>
           Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
          </div>
        )}
      </div>
      <p></p>

    </div>
  );
}

export default Faq2;
