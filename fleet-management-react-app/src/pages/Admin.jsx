import { useState, useCallback } from "react";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);
  const [form, setForm] = useState({
    regNo: "",
    category: "",
    driver: "",
    status: "",
  });

  const handleAddFleet = () => {
    const { regNo, category, driver, status } = form;

    if (!regNo || !category || !driver || !status) {
      alert("All fields required");
      return;
    }

    setFleets((prev) => [
      ...prev,
      { id: Date.now(), ...form },
    ]);

    setForm({
      regNo: "",
      category: "",
      driver: "",
      status: "",
    });
  };

  const updateDriver = useCallback((id) => {
    const newDriver = prompt("Enter new driver name");
    if (!newDriver || !newDriver.trim()) return;

    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, driver: newDriver } : f
      )
    );
  }, []);

  const toggleStatus = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              status:
                f.status === "Available"
                  ? "Unavailable"
                  : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (!confirm("Are you sure?")) return;
    setFleets((prev) => prev.filter((f) => f.id !== id));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {/* Sidebar */}
        <div>
          <h3>Add Fleet</h3>

          <input
            placeholder="Vehicle Reg No"
            value={form.regNo}
            onChange={(e) =>
              setForm({ ...form, regNo: e.target.value })
            }
          />

          <select
            value={form.category}
            onChange={(e) =>
              setForm({ ...form, category: e.target.value })
            }
          >
            <option value="">Category</option>
            <option>Auto</option>
            <option>Car</option>
            <option>Truck</option>
            <option>Bus</option>
          </select>

          <input
            placeholder="Driver Name"
            value={form.driver}
            onChange={(e) =>
              setForm({ ...form, driver: e.target.value })
            }
          />

          <select
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option value="">Status</option>
            <option>Available</option>
            <option>Unavailable</option>
          </select>

          <button onClick={handleAddFleet}>Add Fleet</button>
        </div>

        {/* Main Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
          }}
        >
          {fleets.map((fleet) => (
            <FleetCard
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
};

export default Admin;
