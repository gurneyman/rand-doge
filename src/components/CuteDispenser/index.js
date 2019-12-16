import React, { useEffect, useState } from "react";

import useDropdown from "../../ui/useDropdown";
import * as api from "../../api";
import PupFigure from "../PupFigure";

import PrimaryButton from "../../ui/PrimaryButton";

import "./CuteDispenser.css";

export default function CuteDispenser() {
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedSelector, setBreed] = useDropdown(
    "Please select a breed",
    "",
    breeds
  );
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    api.fetchBreeds().then(setBreeds);
  }, []);

  useEffect(() => {
    const firstBreed = breeds[0];
    setBreed(firstBreed);
    api.fetchRandomBreedImageUrl(firstBreed).then(setDogUrl);
  }, [breeds, setBreed]);

  function handleSubmit(e) {
    e.preventDefault();
    api.fetchRandomBreedImageUrl(breed).then((imgUrl) => {
      const img = new Image();
      img.src = dogUrl;
      img.onload = function () {
        setDogUrl(imgUrl);
      }
    });
  }

  return (
    <div className="CuteDispenser vertical-rhythm">
      <form className="vertical-rhythm" onSubmit={handleSubmit}>
        <BreedSelector />
        <PrimaryButton label={"Moar Cute Pls"} disabled={!breeds.length} />
      </form>
      <PupFigure dogUrl={dogUrl} breed={breed} />
    </div>
  );
}
