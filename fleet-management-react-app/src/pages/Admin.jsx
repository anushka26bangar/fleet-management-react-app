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

    const updateDriver = useCallback((id) => {
      const newDriver = prompt("Enter new driver name:");
      if (!newDriver || newDriver.trim()) return

      setFleets((prev) =>
        prev.map((f) =>
          f.id === id ? { ...f, driver: newDriver } : f
        )
      );
    };

    const toggleStatus = useCallback((id) => {
      setFleets((prev) =>
        prev.map((f) =>
          f.id === id
            ? { ...f, status: f.status === "Available" ? "Unavailable" : "Available" }
            : f
        )
      );
    }, []);

    const deleteFleet = useCallback((id) => {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }, []);

    return(
      <div>
        <h1>Admin Dashboard</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div>
            <h3>Add Fleet</h3>
            <input
              type="text"
              placeholder="Registration Number"
              value={form.regNo}
              onChange={(e) => setForm({...form, regNo: e.target.value})}
            />
            <select
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({...form, category: e.target.value})}
            >
              <option value="">Select Category</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="Bus">Bus</option>
              <option value="Auto">Auto</option>
            </select>
            <input
              type="text"
              placeholder="Driver"
              value={form.driver}
              onChange={(e) => setForm({...form, driver: e.target.value})}
            />
            <select
              value={form.status}
              onChange={(e) => setForm({...form, status: e.target.value})}
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
            <button onClick={handleAddFleet}>Add Fleet</button>
          </div>
          <div style ={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {fleets.map((fleet) => (
              <FleedCard
                key={fleet.id}
                fleet={fleet}
                onUpdateDriver={updateDriver}
                onToggleStatus={toggleStatus}
                onDelete={deleteFleet}
              />
            ))}

          </div>
        </div>
      </div>
    );

    export default Admin;