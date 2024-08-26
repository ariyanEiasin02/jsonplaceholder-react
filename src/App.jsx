import { useEffect } from "react";
import { useState } from "react";
import Form from "./Compennts/Form/Form";
import ListItem from "./Compennts/ListItem/ListItem";
import Table from "./Compennts/Table/Table";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState("users")
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`)
        const data = await response.json()
        setItems(data)
      }catch (err){
        console.log("please check your value");
      }
    }
    fetchItems()
  }, [reqType])
  return (
    <>
      <h2 className="text-center bg-gray-500 py-6 uppercase text-4xl text-white mb-4 font-medium">jsonplaceholder</h2>
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <ListItem items={items} /> */}
      <Table items={items} />
    </>
  )
}

export default App
