import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen';
import Navbar from './Navbar'

const TodoHome = () => {
    let [todoList, setTodoList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    // const abc=()=>{
    //   console.log("abc");
    // }
    // abc();
    useEffect(
      ()=>{
        getData();
      },[]
    )
    const getData = ()=>{
      axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(
        (response)=>{
          console.log(response.data);
          setTodoList(response.data)
          setIsLoading(false);
        }
      )
      .catch()


    }
  return (
    <div>
      {isLoading == true? (<LoadingScreen />) : (
        <div className="container">
        <Navbar />
          <div className="row ">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <table class="table">
                  <thead>
                      <tr>
                      <th scope="col">UserID</th>
                      <th scope="col">ID</th>
                      <th scope="col">Title</th>
                      <th scope="col">Completed</th>
                      </tr>
                  </thead>
                    {
                      todoList.map((value, key)=>{
                        return  <tbody>
                        <tr>
                        <th scope="row">{value.userId}</th>
                        <td>{value.id}</td>
                        <td>{value.title}</td>
                        <td><input type="checkbox" name="" id="" checked={value.completed} /></td>
                        </tr>
                    </tbody>
                      })
                    }
                  </table>
              </div>
          </div>
      </div>
      ) }
    </div>
  )
}

export default TodoHome