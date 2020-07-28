import React, { Component } from 'react'

export default class SearchFilter extends Component {
    render() {
        let type=["All","single","double","family","presidential"]
        let capacity=["1","2","3","4","5","6"]
        let minPrice=0
        let maxPrice=600
        let price=600
        return (
            <div>
                <h2>Filter by</h2>
                <form className="filter-form">
                    {/*select type*/}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type" value={type}
                        className="form-control" onChange={handleChange}>
                            {type}
                        </select>
                    </div>
                    {/*end of select type*/}
                    {/*select capacity*/}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select name="capacity" id="capacity" value={capacity}
                        className="form-control" onChange={handleChange}>
                            {capacity}
                        </select>
                    </div>
                    {/*end of select capacity*/}
                    {/*price */}
                    <div className="form-group">
                        <label htmlFor="price">
                            Room price ${price}
                        </label>
                        <input type="range" name="price" min={minPrice}
                        max={maxPrice} id="price" value={price} onChange={handleChange}
                        className="form-control"/>
                    </div>
                    {/*end of price */}
                    
                </form>
                <form className="filter-form1">
                    {/*extras */}
                    <div className="form-group1">
                        <div className="single-extra">
                            <input type="checkbox" 
                            name="airconditioner" id="airconditioner" 
                            checked={airconditioner} onChange={handleChange}/>
                            <label htmlFor="airconditioner" className="l">
                                airconditioner</label>
                        </div>
                    </div>
                    <div className="form-group1">
                        <div className="single-extra">
                            <input type="checkbox" 
                            name="kitchen" id="kitchen" 
                            checked={kitchen} onChange={handleChange}/>
                            <label htmlFor="kitchen">
                            kitchen</label>
                        </div>
                    </div>
                    <div className="form-group1">
                        <div className="single-extra">
                            <input type="checkbox" 
                            name="carpark" id="carpark" 
                            checked={carpark} onChange={handleChange}/>
                            <label htmlFor="carpark">
                            carpark</label>
                        </div>
                    </div>
                    <div className="form-group1">
                        <div className="single-extra">
                            <input type="checkbox" 
                            name="wifi" id="wifi" 
                            checked={wifi} onChange={handleChange}/>
                            <label htmlFor="wifi">
                            wifi</label>
                        </div>
                    </div>
                    <div className="form-group1">
                        <div className="single-extra">
                            <input type="checkbox" 
                            name="gym" id="gym" 
                            checked={gym} onChange={handleChange}/>
                            <label htmlFor="gym">
                            gym</label>
                        </div>
                    </div>
                    <div className="form-group1">
                        <div className="single-extra">
                            <input type="checkbox" 
                            name="pets" id="pets" 
                            checked={pets} onChange={handleChange}/>
                            <label htmlFor="pets">
                            pets</label>
                        </div>
                    </div>
                    <div className="form-group1">
                        <div className="single-extra">
                            <input type="checkbox" 
                            name="breakfast" id="breakfast" 
                            checked={breakfast} onChange={handleChange}/>
                            <label htmlFor="breakfast">
                            breakfast</label>
                        </div>
                    </div>
                    {/*extras */}
                </form>
            </div>
        )
    }
}
