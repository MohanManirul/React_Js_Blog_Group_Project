import React from 'react';
import Layout from "../layout/Layout.jsx";
import {useParams} from "react-router-dom";
import BlogList from "../component/BlogList.jsx";

const ByCategoryPage = () => {
    const {id} = useParams();


    return (
       <Layout>
           <BlogList id={id}/>
       </Layout>
    );
};

export default ByCategoryPage;