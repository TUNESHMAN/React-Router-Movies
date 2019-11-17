import React, { useState } from "react";
import Movie from "../src/Movies/Movie";
import MovieList from "../src/Movies/MovieList";
import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route  exact path="/movies/:id" render={props => <Movie {...props}
      addMovie ={addToSavedList} />} />
    </div>
  );
};

export default App;
