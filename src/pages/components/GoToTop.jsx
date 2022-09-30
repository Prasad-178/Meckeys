import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GoToTop() {
    const route = useLocation()
    const onTop = () => {
        window.scrollTo(0,0)
    }
    useEffect(() => {
        onTop()
    }, [route])
}

export default GoToTop