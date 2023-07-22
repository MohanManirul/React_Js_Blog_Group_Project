import {useEffect, useState} from 'react';
import {getAllCategoriesOfPost} from "../ApiRequest/PostApiRequest.js";
import {Link} from "react-router-dom";

const Layout = (props) => {
    const [categories,setCategories]=useState([]);
    // call links list from api cat list usEffect
    useEffect(()=>{
//iif
        (async () => {
            let res= await getAllCategoriesOfPost();
            console.log(res);
            setCategories(res);
        })()

    },[]);
    return (
        <div>
<ul>
           <li> <Link to="/">Home</Link></li>
            {
                categories && categories.map((cat,index)=>(<li key={index}><Link to={`/byCategory/${cat.id}`} >{cat.name}</Link></li>))
            }

</ul>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </div>
    );
};

export default Layout;