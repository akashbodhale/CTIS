'use client';
import Link from 'next/link';
import  { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type TD = {
  id: number;
  title: string;
  description: string;
  condition: string;
  treatment: string;
  phase: string;
  status: string;
  startDate: Date;
  endDate: Date;
  location: string;
};

export default function Trials() {
  const [trials, setTrials] = useState<TD[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Omit<TD, 'id'>>({
    title: '',
    description: '',
    condition: '',
    treatment: '',
    phase: '',
    status: '',
    startDate: new Date(),
    endDate: new Date('3025-01-01'),
    location: '',
  });
  const today = new Date().toISOString().split('T')[0];
  const minEndDate = formData.startDate.toISOString().split('T')[0];

  useEffect(() => {
    fetchTrials();
  }, []);

  async function fetchTrials() {
    const res = await fetch('https://ctis-dged.vercel.app/api/trials');
    const data = await res.json();

    setTrials(data);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name.includes('Date') ? new Date(value) : value,
    }));
  }

  function NEW() {
    setFormData({
      title: '',
      description: '',
      condition: '',
      treatment: '',
      phase: '',
      status: '',
      startDate: new Date(),
      endDate: new Date('3025-01-01'),
      location: '',
    });
    setIsEditing(false);
    setEditingId(null);
    setShowForm(true);
  }

  function edit(trial: TD) {
    setFormData({
      title: trial.title,
      description: trial.description,
      condition: trial.condition,
      treatment: trial.treatment,
      phase: trial.phase,
      status: trial.status,
      startDate: new Date(trial.startDate),
      endDate: new Date(trial.endDate),
      location: trial.location,
    });
    setIsEditing(true);
    setEditingId(trial.id);
    setShowForm(true);
  }
  const router = useRouter();
  async function  Back() {
    try
    {
      await fetch(`https://ctis-dged.vercel.app/api/logout`)
      router.push("/login")

    }
    catch(error)
    {
      if (error instanceof Error)
        console.log("why am i failed beacuse of : ",error.message)
    }
  }

  async function handleSave() {
    if (isEditing && editingId !== null) {
      const updatedTrial = { ...formData, id: editingId };
      await fetch(`https://ctis-dged.vercel.app/api/trials/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTrial),
      });
    } else {
      const maxId = trials.length > 0 ? Math.max(...trials.map((t) => t.id)) : 0;
      const newTrial = { ...formData, id: maxId + 1,researcherId:1};
      await fetch('https://ctis-dged.vercel.app/api/trials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTrial),
      });
    }

    setShowForm(false);
    setIsEditing(false);
    setEditingId(null);
    fetchTrials();
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4 bg-gray-300 p-2 rounded">
        <button
          onClick={Back}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          ← logout
        </button>
        <h1 className="text-3xl">Trial Data</h1>
        <button
          onClick={NEW}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          + New
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="text-2xl mb-2">{isEditing ? 'Edit Trial' : 'Add New Trial'}</h2>
          <div className="grid grid-cols-2 gap-4">
            <input className="border p-2" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
            <input className="border p-2" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
            <input className="border p-2" name="condition" placeholder="Condition" value={formData.condition} onChange={handleChange} />
            <input className="border p-2" name="treatment" placeholder="Treatment" value={formData.treatment} onChange={handleChange} />
            <input className="border p-2" name="phase" placeholder="Phase" value={formData.phase} onChange={handleChange} />
            <input className="border p-2" name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
            <input className="border p-2" name="startDate" type="date" min={today} value={formData.startDate.toISOString().split('T')[0]} onChange={handleChange} />
            <input className="border p-2" name="endDate" type="date" min={minEndDate} value={formData.endDate.toISOString().split('T')[0]} onChange={handleChange} />
            <input className="border p-2 col-span-2" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
          </div>
          <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded mt-4">
            {isEditing ? 'Update' : 'Save'}
          </button>
        </div>
      )}

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Id</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Condition</th>
            <th className="border border-gray-300 px-4 py-2">Treatment</th>
            <th className="border border-gray-300 px-4 py-2">Phase</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {trials.map((trial) => (
            <tr key={trial.id}>
              <td className="border border-gray-300 px-4 py-2">
                <Link
                  className="text-blue-600 hover:underline hover:text-blue-800 font-medium"
                  href={`/participants/${trial.id}`}
                >
                  {trial.id}
                </Link>
              </td>
              <td className="border border-gray-300 px-4 py-2">{trial.title}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.description}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.condition}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.treatment}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.phase}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.status}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.startDate.toString().split('T')[0]}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.endDate.toString().split('T')[0]}</td>
              <td className="border border-gray-300 px-4 py-2">{trial.location}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
                  onClick={() => edit(trial)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
