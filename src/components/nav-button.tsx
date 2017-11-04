import * as React from 'react';

export interface NavButtonProps{
    title:string,
    iconClassName:string
}

export function NavButton(props:NavButtonProps){
    return (
        <div className="navigation-button">
            <div className={"icon " + props.iconClassName}></div>
            <span className="title">{props.title}</span>
        </div>
    );
}