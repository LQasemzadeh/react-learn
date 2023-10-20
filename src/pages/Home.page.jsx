import React, {useState, useEffect} from 'react';
import SpinnerComponent from "../components/ui/Spinner.component";
import axios from "axios";
import {baseUrl} from "../constants/api";
import CoinsComponent from "../components/coins/Coins.component";

const HomePage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
       setLoading(true);
       axios(baseUrl)
           .then((response) =>{
               setLoading(false);
               console.log(response.data);
               setData(response.data);

           })
           .catch(error => {
               setError("An error occured");
           })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Crypto Tracking</h1>
                    <h4>A place to manage all of your trade information and action</h4>
                    <h4>Do not forget to always using asset and risk management!!!!!</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    {loading ? <SpinnerComponent /> : error !== "" ? <h1>{error}</h1> : <CoinsComponent data={data} /> }
                </div>
            </div>





        </div>
    );
};

export default HomePage;