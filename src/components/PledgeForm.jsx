import React, {useState} from 'react'
import axios from 'axios'
import dayjs from 'dayjs'

const THEMES = [
  {title: 'Energy', items: ['Switch off lights', 'Use public transport', 'Unplug idle devices']},
  {title: 'Waste', items: ['Use reusable bottle', 'Compost', 'Reduce single-use plastics']},
  {title: 'Consumption', items: ['Buy local', 'Repair don’t replace', 'Choose sustainable fashion']}
]

export default function PledgeForm(){
  const [form,setForm] = useState({name:'',email:'',mobile:'',state:'',profile:'Student', commitments: []})
  const [submitted, setSubmitted]=useState(null)
  const handleCheck=(item)=>{
    setForm(prev => {
      const commits = prev.commitments.includes(item)
        ? prev.commitments.filter(i=>i!==item)
        : [...prev.commitments, item]
      return {...prev, commitments: commits}
    })
  }

  const submit = async (e) => {
    e.preventDefault()
    // basic validation
    if(!form.name || !form.email || !form.mobile) return alert('Please fill required fields.')
    const payload = {
      name: form.name,
      email: form.email,
      mobile: form.mobile,
      state: form.state,
      profile: form.profile,
      commitments: form.commitments,
      date: dayjs().format('YYYY-MM-DD HH:mm'),
      id: 'P' + Date.now()
    }

    // Save to backend (json-server or Google Sheets webhook); fallback to localStorage
    try {
      await axios.post('/api/pledges', payload) // json-server route
      setSubmitted(payload)
      // optional: also store locally for offline dev
      const existing = JSON.parse(localStorage.getItem('pledges')||'[]')
      localStorage.setItem('pledges', JSON.stringify([payload, ...existing]))
    } catch (err) {
      // fallback: store locally
      const existing = JSON.parse(localStorage.getItem('pledges')||'[]')
      localStorage.setItem('pledges', JSON.stringify([payload, ...existing]))
      setSubmitted(payload)
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold">Make your pledge</h3>
      <form onSubmit={submit} className="mt-4 grid gap-3">
        <input placeholder="Name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="p-2 border" required />
        <input placeholder="Email *" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="p-2 border" required />
        <input placeholder="Mobile *" value={form.mobile} onChange={e=>setForm({...form,mobile:e.target.value})} className="p-2 border" required />
        <input placeholder="State" value={form.state} onChange={e=>setForm({...form,state:e.target.value})} className="p-2 border" />
        <select value={form.profile} onChange={e=>setForm({...form, profile:e.target.value})} className="p-2 border">
          <option>Student</option>
          <option>Working Professional</option>
          <option>Other</option>
        </select>

        <div>
          <div className="text-sm font-semibold">Choose commitments (pick any)</div>
          {THEMES.map(t=>(
            <div key={t.title} className="mt-2">
              <div className="font-medium">{t.title}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                {t.items.map(item=>(
                  <label key={item} className="flex items-center space-x-2">
                    <input type="checkbox" checked={form.commitments.includes(item)} onChange={()=>handleCheck(item)} />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-gray-600">Mobile Number and Email are required for validation but never shown publicly. Data used only for verification and engagement.</div>

        <button className="mt-3 bg-green-600 text-white py-2 rounded">Submit & Generate Certificate</button>
      </form>

      {submitted && <div className="mt-4 p-4 bg-green-50 rounded">
        <div className="font-semibold">Thanks, {submitted.name} — your pledge is recorded.</div>
        {/* trigger certificate component via global state or simple localStorage flag */}
      </div>}
    </div>
  )
}


