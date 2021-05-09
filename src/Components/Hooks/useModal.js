import { useState } from "react"

export function useModal(defaultState = false) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return { isOpen, toggle }
}