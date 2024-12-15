import { ButtonComponents } from "./Button.style"
import { colorsButton } from "./Button.style"

interface ButtonProps {
    bc?: colorsButton;
}

export function Button({bc = 'primary'}: ButtonProps) {
    return (
        <>
            <ButtonComponents bc={bc}>Enviar</ButtonComponents>
        </>
    )
}