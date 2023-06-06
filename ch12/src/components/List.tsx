import { ReactNode } from 'react';


interface ListProps<T> {

    items: T[],
    render: (item: T) => ReactNode
    children: ReactNode

}

