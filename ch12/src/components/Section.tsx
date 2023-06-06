import {ReactNode} from 'react';

type SectionsProps = {
    title?: string,
    children: ReactNode
}


const Section = ({title, children}: SectionsProps) => { 
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Section;