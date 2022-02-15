import React from 'react'
import axios from 'axios'

export const ImageUploadField = ({ value, setFormData, handleImageUrl }) => {

  const handleUpload = async event => {
    const data = new FormData()
    data.append('file', event.target.files[0])
    data.append('upload_preset', 'ayq31idv')
    const res = await axios.post('https://api.cloudinary.com/v1_1/dwcp0okfu/image/upload', data)
    console.log(res.data.url)
    handleImageUrl(res.data.url)
  }

  return (
    <>
      {value ?
        <div>
          <img src={value} alt='uploaded' />
        </div>
        :
        <>
          <label>Profile Image</label>
          <input
            className="input"
            type="file"
            onChange={handleUpload}
          />
        </>
      }
    </>
  )
}
