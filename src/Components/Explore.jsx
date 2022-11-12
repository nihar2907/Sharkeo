import React from 'react'
import "../css/Explore.css"
function Explore() {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const items = number.map(() => {
        return (
            <div className='content'>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 idea position-relative ">
                    <div className="col p-4 d-flex flex-column position-static  shadow ">
                        <strong className="d-inline-block mb-2 fs-2">Vivanta goa Panji</strong>
                        <small className='text-muted'>Panjim</small>
                        <h5 className="my-1">Best to visit</h5>
                        <div className="my-1 ">Safety,Hygiene&social distancing rooms</div>
                        <p className="text-success">Breakfast included </p>
                        <span className='text-muted' >Great Choice! Booked 50+ times in last 15 Days</span>
                        <a href="/details" className="stretched-link">Login& unlock a secret deal!</a>

                    </div>
                    <div className="col-auto d-none d-lg-block p-4">
                        <img className="bd-placeholder-img" width="240" src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/60029006.jpg?k=9af974c665a46ff690c6985d07d2e3df3fd7a5dd2a0dc7fb23b55d35af1f674f&o=&hp=1'></img>
                        <div><div className='fs-4 fw-bold'> ₹ 10,500/- </div><small>+ ₹1,890 taxes &fees</small></div><small className='text-muted'>Per Night</small>
                    </div>
                </div>

            </div>
        )
    })
    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-4">
                        <div className='category'>
                            <ul className="filterList">
                                <h1 className='mx-2 m-4'>Categories</h1>
                                <div className="container border">
                                    <div><input type="checkbox" className='mx-2 mt-4' autocomplete="off" />Safe and hygiene stay <small className='count'>99</small></div>
                                    <div><input type="checkbox" className='mx-2 mt-4' autocomplete="off" />Safe and hygiene stay <small className='count'>99</small></div>
                                    <div><input type="checkbox" className='mx-2 mt-4' autocomplete="off" />Safe and hygiene stay <small className='count'>99</small></div>
                                    <div><input type="checkbox" className='mx-2 mt-4' autocomplete="off" />Safe and hygiene stay <small className='count'>99</small></div>
                                    <div><input type="checkbox" className='mx-2 mt-4' autocomplete="off" />Safe and hygiene stay <small className='count'>99</small></div>
                                    <div><input type="checkbox" className='mx-2 mt-4' autocomplete="off" />Safe and hygiene stay <small className='count'>99</small></div>
                                    <div><input type="checkbox" className='mx-2 mt-4' autocomplete="off" />Safe and hygiene stay <small className='count'>99</small></div>
                                </div>

                            </ul>
                        </div>
                    </div>
                    <div className="col-8">
                        <input type="search" className='m-4 py-4 search text-center' value="Search here..."></input>
                        {items}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Explore