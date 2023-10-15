import React from 'react';
import './Footer.css';

const FooterComponent = () => {
    return (
       <footer className='footer'>
          <span>@CryptoCurrency.</span>
           <span className='d-none d-md-inline'>All rights reserved</span>
       </footer>
    );
};

export default FooterComponent;