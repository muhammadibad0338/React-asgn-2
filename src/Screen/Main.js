import React from 'react'
import Card from '../Component/Card'
import { data } from '../data'

const Main = () => {
    console.log(data, "data")
    return (
        <div className='container'>
            <div class="row">
                <div class="col">
                    <h1 style={{ textAlign: 'center' }} >Card</h1>
                </div>
            </div>
            <div className='row' >

            {
                data.map((val, i) => {
                    return (
                        <div className='col-md-4 col-sm-6' key={i} style={{ display: 'flex',justifyContent:'center',alignItems:'center',marginTop:'35px' }} >
                            <Card imgSrc={val.img1} title={val.name} price={val.price} />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Main
