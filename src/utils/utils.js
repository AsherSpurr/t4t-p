import { useNavigate } from "react-router-dom";

const navigate = useNavigate

const roundNum = (num) => {
   return Number(num.toFixed(2))
}

const errorNavigation = (error) => {
   navigate('*', {replace: false}, {state: {error: '5xx'}})
}

export { roundNum }