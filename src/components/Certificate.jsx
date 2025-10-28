import React, {useRef, useState, useEffect} from 'react'
import html2canvas from 'html2canvas'

export default function Certificate(){
  const [certificateData, setCertificateData] = useState(null)
  const certRef = useRef()

  // Example: read last submission from localStorage
  useEffect(()=> {
    const pledges = JSON.parse(localStorage.getItem('pledges')||'[]')
    if(pledges.length) setCertificateData(pledges[0])
  },[])

  const hearts = (n) => '⭐'.repeat(Math.min(5, Math.max(1, Math.ceil(n/2))))

  const download = async () => {
    if(!certRef.current) return
    const canvas = await html2canvas(certRef.current, {scale:2})
    const dataURL = canvas.toDataURL('image/png')
    const a = document.createElement('a'); a.href = dataURL; a.download = 'certificate.png'; a.click()
  }

  if(!certificateData) return null

  return (
    <section className="container mx-auto p-6">
      <div ref={certRef} className="p-8 bg-white rounded-lg shadow text-center">
        <h2 className="text-3xl font-bold">Cool Enough to Care!</h2>
        <p className="mt-4 text-xl">{certificateData.name}</p>
        <p className="mt-2">for taking pledges to protect the planet</p>
        <div className="mt-4 text-2xl">{hearts(certificateData.commitments.length)}</div>
        <p className="mt-2 text-sm text-gray-600">Date: {certificateData.date}</p>
      </div>
      <div className="mt-4">
        <button onClick={download} className="bg-blue-600 text-white px-4 py-2 rounded">Download Certificate</button>
        <button onClick={()=>navigator.share && navigator.share({title:'My Climate Pledge', text:'I took the Climate Action Pledge!', url: window.location.href})} className="ml-3 bg-gray-200 px-4 py-2 rounded">Share</button>
      </div>
    </section>
  )
}
