import { useState, useCallback } from "react";
import FleedCard  from "../"


const Admin = () => {
  const [fleets, setFleets] = useState([]);
  const [form,setForm] = useState({
    "regNo:":"",
    "category":"",
    "driver":"",
    "status":""
  });
  const handleAddFleet = () => {
    const { regNo, category, driver, status } = form;
    if (!regNo || !category || !driver || !status) {
      alert("Please fill in all fields");
      return;
    }

    setFleets((prev) => [
      ...prev,
      { id: Date.now(), ...form},
    ]);

    setForm({
      regNo: "",
      category: "",
      driver: "",
      status: ""
    });