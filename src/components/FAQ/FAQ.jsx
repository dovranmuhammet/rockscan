import React from 'react'
import Classes from './FAQ.module.css'
import Accordian from './Accordian'

const FAQ = () => {
  const accordianData = () => {
    return (
      <>
        <p>
          I’m glad to hear that you’d like to share the information with your
          friends. To do so, here are instructions:
        </p>
        <ol>
          <li>Launch the app&gt;Go to Me section</li>
          <li>Tap the rock picture you’d like to share</li>
          <li>Launch the app&gt;Go to Me section</li>
          <li>Tap “Share” button on the top right</li>
          <li>Select a channel to export the information out</li>
        </ol>
      </>
    )
  }
  const manageAccountDataFirst = () => {
    return (
      <>
        <p>
          To do that, you can simply create an account if you haven't already
          registered with Rock Scan and let others log into the same account on
          their devices. To do so, please follow the instructions below:
        </p>
        <ol>
          <li> Launch Rock Scan app;</li>
          <li>
            Tap “Sign in” at the top of the "Me" page and sign up with your
            email.
          </li>
        </ol>
        <p>
          Then go here to sign in with your registered account on another
          device.
        </p>
      </>
    )
  }
  const manageAccountDataSecond = () => {
    return (
      <>
        <p>
          If you have an active subscription to Rock Identifier Premium,
          "Restore Purchase" helps you regain access to it.
        </p>
        <ol>
          <li>
            {' '}
            Make sure you are logged in with the same Apple ID/Google account
            that you used to subscribe;
          </li>
          <li>Launch the Rock Scan app;</li>
          <li>Tap "Services" on the homepage;</li>
          <li>Tap "Restore" at the top left of the subscription offer page.</li>
        </ol>
        <p>
          Then go here to sign in with your registered account on another
          device.
        </p>
      </>
    )
  }
  const manageAccountDataFour = () => {
    return (
      <>
        <p>You can view and update your profile by the following steps:</p>
        <ol>
          <li> Go to “Me” tab;</li>
          <li> Tap "Settings" icon in the upper right corner;</li>
          <li>Tap "Edit Profile".</li>
        </ol>
        <p> Then you could change your profile photo and username.</p>
      </>
    )
  }
  const SubscriptionSecond = () => {
    return (
      <>
        <p>To check this, follow these steps:</p>
        <ol>
          <li> Go to the “Me” page;</li>
          <li>Tap the "Settings" icon in the upper right corner;</li>
          <li>
            You can see your premium membership status under "My Premium
            Service". If your premium membership status is Premium Membership,
            it means you are enjoying Rock Scan Premium. If your premium
            membership status is Free, it means that you are in the free mode.
          </li>
        </ol>
      </>
    )
  }
  const paymentMethod = () => {
    return (
      <>
        <p>
          You can easily manage your payment method in your phone’s setting.
          Please follow the instructions below:
        </p>
        <ol>
          <li>iOS:https://support.apple.com/HT201266</li>
          <li>Android:https://support.google.com/googleplay/answer/4646404</li>
        </ol>
      </>
    )
  }
  const cancelSubscribe = () => {
    return (
      <>
        <p>
          If you find Rock Scan Premium doesn't fit your needs, you can cancel
          your Rock Identifier subscription's auto-renewal at any time by
          following the steps below, and you will continue to have access to the
          premium content until the subscription's expiration date.
        </p>
        <p>For information, please follow the link below.</p>
        <ol>
          <li>App Store:https://support.apple.com/kb/ht4098 </li>
          <li>
            Google Play: https://support.google.com/googleplay/answer/7018481
          </li>
        </ol>
      </>
    )
  }
  return (
    <div id='FAQ'>
      <div className={Classes.faqWrapper}>Frequently Asked Questions</div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className={Classes.accordianBlockWrapper}>
              <div className='mb-4'>
                <h1 className={Classes.blockTitle}>Using Rock Scan</h1>
                <Accordian
                  title='How do I delete unwanted pictures from the app?'
                  content='You can tap the 3-dots at the bottom right of the picture and select “delete” to remove an unwanted picture.'
                />
                <Accordian
                  title='How do I share my Rock Scan with friends?'
                  content={accordianData()}
                />
                <Accordian
                  title='How can I save photos I take in the app?'
                  content='You could manually save a single photo by tapping the photo on the details page and long press to save.'
                />
                <Accordian
                  title='One of the identifications is not accurate, what should I do?'
                  content='Since the app relies on a single picture to identify, sometimes changing the angle or distance a bit can help and please make sure the camera is focused on the species you want to identify. If you do know the correct name, you could correct the identification on the result page. After taking or uploading a picture, please scroll to the end, then tap “Suggest a name” to input the name manually. If you don’t know the name, please feel free to contact our human experts to identify.'
                />
              </div>
              <div className='mb-4'>
                <h1 className={Classes.blockTitle}>Managing Your Account</h1>
                <Accordian
                  title='How do I share the account with others?'
                  content={manageAccountDataFirst()}
                />
                <Accordian
                  title='How to restore my Premium membership on a new device?'
                  content={manageAccountDataSecond()}
                />
                <Accordian
                  title='Do l need to sign up to use Rock Scan?'
                  content='Signing up is not mandatory for our users to use the Rock Scan app. Once you successfully download and open Rock Identifier, our system will assign a unique secure account for you to use on your current device. You can access everything with this account. No user-created account is required even if you upgrade to Rock Identifier Premium. However, we do recommend signing up with email to keep your data safe if you lose or change your device.'
                />
                <Accordian
                  title='How to edit my profile?'
                  content={manageAccountDataFour()}
                />
              </div>
              <div className='mb-4'>
                <h1 className={Classes.blockTitle}>Subscription</h1>
                <Accordian
                  title='What privileges do Rock Scan Premium offer?'
                  content='Rock Scan Premium unlocks unlimited smart identifications and full access to info. Ads are also removed for Premium members. You can access everything through the Rock Scan app, available on iPhone and iPad.
                  The Premium subscription includes:
                  Identify rocks without limits
                  Ask our rock experts
                  Rich contents on thousands of types of rocks
                  Exclusive support team that answers your question within 24 hours
                  No watermarks or ads'
                />
                <Accordian
                  title='How to check if I am Rock Scan Premium or Rock Identifier Free?'
                  content={SubscriptionSecond()}
                />
                <Accordian
                  title='How do I purchase the Premium membership?'
                  content="If you haven't started the free trial, please tap 'Services' on the homepage, and then 'Continue' to activate the 7-day free trial. Due to the auto-renewable nature of subscriptions, the annual Premium service will automatically renew after the free trial ends, so you don’t need to do anything if you start the free trial and choose not to cancel it."
                />
                <Accordian
                  title='How can I change the payment method?'
                  content={paymentMethod()}
                />
                <Accordian
                  title='How do I turn off auto-renewal or cancel my subscription?'
                  content={cancelSubscribe()}
                />
              </div>
              <div className='mb-4'>
                <h1 className={Classes.blockTitle}>Others</h1>
                <Accordian
                  title='Some function is not working, what should I do?'
                  content='Re-installing the app usually solves most technical issues. The account is bound with your Apple ID/Google account, so it’s safe to re-install. If the problem persists, please feel free to find us at support@rockidentifier.com.'
                />
                <Accordian
                  title='How do I delete my account?'
                  content='If you choose to delete the account, all your data will be permanently deleted and cannot be recovered. So please reconsider before deleting the account.
                  To permanently delete the account, you could tap “Privacy Policy” in the app settings, and tap the icon on the top right hand to “Data Management” page, then tap “Delete Account”.'
                />
                <Accordian
                  title='Is my information safe?'
                  content='We are cautious about sharing personal information. Although we require access to your photo gallery, we never process any photos without your permission. Rest assured that we will NEVER share your information with anyone.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
