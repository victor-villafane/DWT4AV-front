import { useState } from 'react'

const ImageUpload = () => {
    const [ file, setFile ] = useState(null)

    const handleChange = (e) => {
      console.log(e.target.files[0])
      setFile(e.target.files[0])
    }

    const submit = (e) => {
      e.preventDefault()

      const formData = new FormData()
      formData.append("file", file)

      fetch( "http://localhost:2025/upload", {
        method: "POST",
        body: formData
      } )
        .then( (res) => res.json() )
        .then( (data)  => console.log(data) )
        .catch( (err) => console.log(err) )
    }

    return (
        <form onSubmit={submit} >
            <input onChange={handleChange} type="file" name="file" />
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default ImageUpload