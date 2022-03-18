import React, { cloneElement } from "react";

export default props =>{
    return (
        <div>
            {/*{React.cloneElement(props.children,{...props})}*/}
            {
                React.Children.map(props.children, (el)=>{
                    return cloneElement(el,props)
                })
            }
            
        </div>
    )
}