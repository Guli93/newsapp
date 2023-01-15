import React from 'react'
import PropTypes from 'prop-types'

export default function (props) {
    return (
        <div>
         
            <div className="card my-2" style={{width:'18rem'}}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target="_blank"className="btn-sm btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}
