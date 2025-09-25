import axios from "axios"
import { useState } from "react"

const ReviewForm = ({movieId, reloadReviews}) => {
  const apiUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;
  const initialData = {
    text: "",
    vote: "",
    name: "",
  }

  const [formData, setFormData] = useState (initialData);

  const setFieldValue = e => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiUrl, formData, { headers: { "content-Type": "application/json"}}).then ((resp) => {
      setFormData(initialData);
      reloadReviews();
    })
  }

  return (
    <div className="detail-card-2 p-3">
      <h2 className="text-light">Aggiungi la tua Recensione</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label htmlFor="" className="form-label text-light">
            Nome
          </label>
          <input 
           type="text" 
           className="form-control"
           placeholder="Nome"
           name="name"
           id="name"
           value={formData.name}
           onChange={setFieldValue}
          />
        </div>
             <div className="my-3">
          <label htmlFor="" className="form-label text-light">
            Voto
          </label>
          <input 
           type="number" 
           className="form-control"
           placeholder="Voto"
           min="0"
           max="5"
           name="vote"
           id="vote"
           value={formData.vote}
           onChange={setFieldValue}
          />
        </div>
             <div className="my-3">
          <label htmlFor="" className="form-label text-light">
            Testo recensione
          </label>
          <input 
           type="text" 
           className="form-control"
           placeholder="Testo recensione"
           name="text"
           id="text"
           value={formData.text}
           onChange={setFieldValue}
          />
        </div>
        <div className="my-3">
          <button className="btn-secondary" type="submit">Salva</button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm
