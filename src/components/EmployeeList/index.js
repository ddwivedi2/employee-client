import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import fetchWrapper from '../../utils/fetchData';
import './index.scss'

function EmplyoeeList() {

    const pageSize = 5;
    const [employees, setEmp] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        fetchWrapper("/", {page: pageCount, count: pageSize})
            .then(response=> {
            console.log(response);
            setEmp(response);
        });
    }, []);

    const getEmp = (inc) => {
        fetchWrapper("/emp/", {page: inc ? pageCount+1: pageCount-1, count: pageSize})
            .then(response=> {
            console.log(response);
            if(response.length === 0){

            }else{
                setEmp(response);
                setPageCount(inc? pageCount+1: pageCount-1);
            }
        });
    };

    return(
        <>
            <h2 className="container-header"><center>Employee List</center></h2>
            <div className="container">
            {
                employees.map((emp, index) => (
                    <Link key={`emp-${emp.id}`} to={`/emp/${emp.id}`}>
                        <div className="row-elem" key={'emp-' + index}> 
                            <span>Name: {emp.name ? emp.name: ""}</span>
                            <span>Date of Birth: {emp.dob? emp.dob : ""}</span>
                            <span>Salary: {emp.salary? emp.salary: ""}</span>
                        </div>
                    </Link>
                ))
            }
            {pageCount > 0 && <button className={`btn dec`} onClick={() => getEmp(false)}>Back</button>}
            <button className="btn inc" onClick={()=>getEmp(true)}>More</button>
            </div>
        </>
    );
}

export default EmplyoeeList;
