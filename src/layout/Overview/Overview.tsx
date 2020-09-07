import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/Cards/Item';
import axios from 'axios';


interface itemsProps {
    loading: boolean, 
    data: []
}

function Overview(props: any): JSX.Element  {
   
    const [items, setItems] = useState<itemsProps>({
        loading: true,
        data: []
    });

    useEffect(() => {
       const get = async () => {
           const response = await axios.get('/items.json')
                .then(res => res.data)
                .catch(err => console.log(err))
                    setItems({
                        loading: false,
                        data: response
                    });
       }
       get()
    }, []);

    const selectedItem: any =  items.data.find((x: any)  => {
        return x.id === props.match.params.id;
    })
    console.log(selectedItem)
    return ( 
        <div>
            <h1>OVERVIEW </h1>
            <img src={`/${selectedItem.content.others.photoUrl}`} className="img-fluid" alt=""/>
        </div>
     );
}
 
export default Overview;