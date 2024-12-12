import avatar from '../Components/Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

interface Avatar extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean
}

export function Avatar({hasBorder = true, src, alt, title}: Avatar) {
    return(
        <img className={hasBorder ? avatar.avatarWithBorder : avatar.avatar}
            src={src} 
            alt={alt}
            title={title}
        />
    );
}