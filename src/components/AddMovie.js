import React from 'react'
import './AddMovie.css'
import { GiFilmSpool } from 'react-icons/gi'; 


const AddMovie = () => {
  return (
    <div id="addMovie">
      <div className="addMovie-form">
        <h2><GiFilmSpool /> Add Movie</h2>
        <form onSubmit={() => alert("Movie Added")}>
          <fieldset>
            <legend>Add Movie</legend>
            <label>Image</label> <br />
            <input type="file" require /> <br />
            <label>Title</label> <br />
            <input type="text" require /> <br />
            <label>Genre</label> <br />
            <input type="text" require /> <br />
            <label>Date</label> <br />
            <input type="date" require /> <br />
            <label>Synopsis</label> <br />
            <textarea type="text" placeholder="About the movie"></textarea>
            <br />
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AddMovie