import {useState} from "react";

export const useToggle = (defaultValue: boolean) => {
    const [toggle, setToggle] = useState<boolean>(defaultValue)
    const handleToggle = () => setToggle(prevState => !prevState)
    return {toggle, handleToggle}
}