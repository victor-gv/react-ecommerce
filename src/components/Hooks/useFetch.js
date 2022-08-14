import { useState, useEffect } from 'react'

const useFetch = () => {

    const urlProducts = "https://shophub20-server.herokuapp.com/products";

    const urlUsers = "https://shophub20-server.herokuapp.com/users";

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


    function getUser(username) {
      return users.find(user => user.username === username);
    }

    function addNewUser(user) {
      fetch(urlUsers, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
    }

    function discountActivated(id) {
      fetch(urlUsers + "/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({discountActivated: true})
      })
      .then(res => res.json())
    }

    function getSneakers() {
      return products.filter(product => product.category === "Sneakers");
    }

  return {
    products,
    error,
    loading,
    users,
    setUsers,
    getAllUsers,
    getUser,
    addNewUser,
    discountActivated,
    getSneakers
  }
}

export default useFetch