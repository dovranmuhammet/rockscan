import React from 'react'
import { Link } from 'react-router-dom'
import Privacy_policy from './PrivacyPolicy'
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
              <a href='Privacy_policy.jsx' target='_blank'>
                {' '}
                <Link to='/privacy-policy' target='_blank'>
                  Privacy Policy
                </Link>
              </a>
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
              <li>iPhone</li>
              <li>Android</li>
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
