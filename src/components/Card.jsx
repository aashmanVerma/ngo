import React from 'react'

export default function Card(props) {
  return (
    <div className="card w-[18rem]">
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-medium">{props.title}</h5>
            <p className="card-text">
              {props.text}
            </p>
            <a href={props.link} target='_blank' className="bg-green-500 px-3 inline-block py-2 rounded text-white mt-3">
              {props.btn}
            </a>
          </div>
    </div>
  )
}
