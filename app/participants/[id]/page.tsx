'use client';

import { use, useEffect, useState } from 'react';

interface Participant {
  id: number;
  name: string;
  dob: string;
  gender: string;
  contact: string;
  medicalHistory: string;
  trialId: number;
}

export default function ParticipantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const [participants, setParticipants] = useState<Participant[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const[isRemove,setRemove ]=useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    contact: '',
    medicalHistory: '',
  });

  useEffect(() => {
    fetchParticipants();
  },[]);

  const fetchParticipants = async () => {
    const res = await fetch(`https://ctis-dged.vercel.app/api/participants/${id}`);
    const data = await res.json();
    setParticipants(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const NEW = () => {
    setFormData({
      name: '',
      dob: '',
      gender: '',
      contact: '',
      medicalHistory: '',
    });
    setIsEditing(false);
    setEditingId(null);
    setShowForm(true);
  };

  const edit = (p: Participant) => {
    setFormData({
      name: p.name,
      dob: p.dob?.split('T')[0] ?? '',
      gender: p.gender,
      contact: p.contact,
      medicalHistory: p.medicalHistory,
    });
    setEditingId(p.id);
    setIsEditing(true);
    setShowForm(true);
  };

  const remove = async (participantId: number) => {
    await fetch(`https://ctis-dged.vercel.app/api/participants/${participantId}`, {
      method: 'DELETE',
    });
    fetchParticipants();
    setRemove(true);
  };

    const handleSave = async () => {
        const payload = { ...formData, trialId: Number(id) };
  
    if (isEditing && editingId !== null) {
      await fetch(`https://ctis-dged.vercel.app/api/participants/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, id: editingId }),
      });
    } 
    else {
      const maxId = participants.length > 0 ? Math.max(...participants.map(p => p.id)) : 0;
      const newParticipant = { ...payload, id: maxId + 1 };
  
      await fetch(`https://ctis-dged.vercel.app/api/participants/${newParticipant.trialId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newParticipant),
      });
    }
  
    setShowForm(false);
    setIsEditing(false);
    setEditingId(null);
    fetchParticipants();
  };
  

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4 bg-gray-300 p-2 rounded">
        <button
          className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
        <h1 className="text-3xl">Participants Data</h1>
        <button
          className="border bg-green-500 text-white px-6 py-3 text-xl rounded hover:bg-green-600"
          onClick={NEW}
        >
          + New
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-2xl mb-2">{isEditing ? 'Edit Participant' : 'Add New Participant'}</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="border p-2"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="border p-2"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
            <input
              className="border p-2"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
            />
            <input
              className="border p-2"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
            />
            <input
              className="border p-2 col-span-2"
              name="medicalHistory"
              placeholder="Medical History"
              value={formData.medicalHistory}
              onChange={handleChange}
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded mt-4"
          >
            {isEditing ? 'Update' : 'Save'}
          </button>
        </div>
      )}
      {isRemove && (<div className='bg-red-200'>{"Need authorization from GOVT. This action isn't Allowed."} </div>)}

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Id</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">DOB</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Contact</th>
            <th className="border border-gray-300 px-4 py-2">Medical History</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((parti) => (
            <tr key={parti.id}>
              <td className="border border-gray-300 px-4 py-2">{parti.id}</td>
              <td className="border border-gray-300 px-4 py-2">{parti.name}</td>
              <td className="border border-gray-300 px-4 py-2">{parti.dob?.split('T')[0]}</td>
              <td className="border border-gray-300 px-4 py-2">{parti.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{parti.contact}</td>
              <td className="border border-gray-300 px-4 py-2">{parti.medicalHistory}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                  onClick={() => edit(parti)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => remove(parti.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
