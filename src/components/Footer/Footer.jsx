import React, { useState } from 'react'
import Classes from './footer.module.css'

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

  const togglePrivacyPolicy = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy)
  }
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
              <li onClick={togglePrivacyPolicy}>
                <a
                  href='/privacy-policy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Privacy Policy
                </a>
              </li>
              {showPrivacyPolicy && (
                <p>
                  Last updated 26 April, 2024 **Privacy Policy** We value your
                  privacy and are committed to protecting your personal
                  information. This Privacy Policy explains how Rock Scanner
                  ("we," "us," or "our") collects and uses your information when
                  you use our website (www.rockscanner.com) and our services.
                  **Information Collection and Use** We collect and hold
                  personal information necessary for conducting our business,
                  including delivering products and services, improving user
                  experience, and fulfilling regulatory obligations. **Types of
                  Information We Collect** - User Profile: Creating a user
                  profile is optional. If you register for a user account, we
                  may collect your email address, username, and password. You
                  can also use social media login options. - User Content: We
                  collect content you create, share, or post to the website,
                  including photos and associated metadata. - Contact
                  Information: Information submitted when contacting customer
                  support or otherwise interacting with the website. - Financial
                  Data: Financial transactions are processed through secure
                  channels, and we do not directly receive personal data related
                  to transactions. - Device and Internet Usage: We may collect
                  device information and identifiers to help identify your
                  device's hardware and operating system. **Additional
                  Sections** **App Usage Data:** When you use our mobile
                  application, we may collect certain usage data, such as the
                  features you use, frequency of use, and performance data. This
                  data helps us improve the functionality and user experience of
                  our app. **Location Data:** If you enable location services in
                  our app for geo-wandering purposes, we may collect and process
                  your location data to provide you with relevant information
                  about nearby geological features. You have the option to
                  disable location tracking at any time in your device settings.
                  **Camera and Image Data:** Our app allows you to scan rocks
                  and minerals using your device's camera. When you use this
                  feature, we may access your device's camera and collect image
                  data for the purpose of rock identification. Please note that
                  images are processed locally on your device and are not shared
                  with third parties. **Data Sharing and Third-Party Services:**
                  We may share certain user data with third-party services for
                  analytics, advertising, or other purposes. However, we do not
                  share personal data with third parties without your consent.
                  Any data shared is used in accordance with our privacy policy
                  and applicable laws. **Security Measures:** We take
                  appropriate measures to protect your personal information from
                  unauthorized access, use, or disclosure. This includes
                  encryption, secure data storage practices, and regular
                  security audits to ensure the integrity of our systems. **Data
                  Retention:** We retain user data for as long as necessary to
                  fulfill the purposes outlined in this privacy policy, unless a
                  longer retention period is required or permitted by law. You
                  have the right to request deletion of your data at any time,
                  subject to certain legal limitations. **Updates to the Privacy
                  Policy:** We may update this privacy policy from time to time
                  to reflect changes in our practices or applicable laws. We
                  will notify you of any material changes to this policy by
                  posting the updated version on our website or through other
                  means of communication. If you have any questions or concerns
                  about our privacy practices, please contact us at
                  support@rockscanner.com. --- Feel free to adjust the language
                  and details as needed for your website and app.
                </p>
              )}
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
