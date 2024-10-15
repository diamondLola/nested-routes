import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function InfoPage() {
  let { id } = useParams();
  // let [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);

  // const info = data.find(item => item.id == id);

  return (
    <div>
      <h1>{id} card</h1>
      {/* <h1>{info.title}</h1>
      <p>{info.body}</p> */}
    </div>
  );
}

export default InfoPage;
