import React,{useState} from 'react'
import Classes from './FAQ.module.css'

const Accordian = (props) => {
    const [isActive, setIsActive] = useState(false);
    const { title, content } = props;
  return (
    <div className={Classes.accordianWrapper}>
        <div className="accordion-item">
          <div className={`${Classes.accordianHead} d-flex justify-content-between align-items-center`} onClick={() => setIsActive(!isActive)}>
            <div className={Classes.title}>{title}</div>
            <div className={Classes.icon}>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className={`${Classes.content} p-3`}>{content}</div>}
        </div>
      </div>
  )
}

export default Accordian