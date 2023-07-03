import React from 'react'
import Classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={Classes.footerWrapper}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <h1 className={Classes.footerTitle}>Social</h1>
            <ul className={`${Classes.infoList} list-unstyled`}>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h1 className={Classes.footerTitle}>Privacy & Terms</h1>
            <ul className={`${Classes.infoList} list-unstyled`}>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Cookies Setting</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h1 className={Classes.footerTitle}>Help & Support</h1>
            <ul className={`${Classes.infoList} list-unstyled`}>
              <li>FAQ</li>
              <li>
                Contact Us:
                <br />
                support@rockscanner.com{' '}
              </li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h1 className={Classes.footerTitle}>Download (Coming soon)</h1>
            <ul className={`${Classes.infoList} list-unstyled`}>
              <li>Android</li>
              <li>iPhone</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Classes.footerBottom}>
        <div className={Classes.copyright}>
          Copyright © Next Vision Limited. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
