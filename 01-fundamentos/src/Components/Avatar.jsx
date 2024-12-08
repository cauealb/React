import avatar from '../Components/Avatar.module.css'

export function Avatar({hasBorder = true, src}) {
    return(
        <img className={hasBorder ? avatar.avatarWithBorder : avatar.avatar}
            src={src} 
        />
    );
}