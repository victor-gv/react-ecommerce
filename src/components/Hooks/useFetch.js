import { useState, useEffect } from 'react'

const useFetch = () => {

    const urlProducts = "http://localhost:5000/products";

    const urlUsers = "http://localhost:5000/users";

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setError(false);
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(urlProducts);
          const products = await response.json();
          setProducts(products);
        } catch (error) {
          setError(true);
        }
        setLoading(false);
      };
      fetchData();
    }, [urlProducts]);

    useEffect(() => {
      setError(false);
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(urlUsers);
          const users = await response.json();
          setUsers(users);
        } catch (error) {
          setError(true);
        }
        setLoading(false);
      };
      fetchData();
    } , [urlUsers]);


    function getAllUsers() {
      return users;
    }


    function getUser(email) {
      return users.find(user => user.email === email);
    }

    function addNewUser(user) {
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
    }

  return {
    products,
    error,
    loading,
    users,
    setUsers,
    getAllUsers,
    getUser,
    addNewUser
  }
}

export default useFetch