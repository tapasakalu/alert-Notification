import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-holder">
      {children}
      <GrFormClose className="close-end" />
    </div>
  )
}
export default Notification
