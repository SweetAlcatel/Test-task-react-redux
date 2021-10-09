import React, { useEffect } from 'react';
import './app.css';
import Breed from '../Breed/breed';
import { fetchData } from '../Actions/actions';
import { connect } from 'react-redux';

const App = ({ data, fetchData }) => {

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='app'>
            {
                data.map((item) => {
                    return (
                        <ul key={item.id}>
                            <Breed name={item.name} temperament={item.temperament} description={item.description}/>
                        </ul>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = ({ data }) => {
    return {
        data: data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(fetchData())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);