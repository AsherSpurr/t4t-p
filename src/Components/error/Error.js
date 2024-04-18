import './Error.css'
import { useLocation } from 'react-router-dom'

const Error = () => {
    const locationError = useLocation()
    const {status, statusText} = locationError.state

    return (
        <div>
            <h2>*{status}*</h2>
            <p>{statusText}</p>
        </div>
    )
}

export default Error