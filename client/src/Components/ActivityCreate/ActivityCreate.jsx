import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, postActivities } from "../../Redux/actions";
import { SUMMER, FALL, WINTER, SPRING } from "../../Const/Const";
import NavBar from "../Nav_bar/NavBar";
import style from "./ActivityCreate.module.css";

function validate(input) {
  console.log(input.name.trim())
  //function with verificated to errors in the form
  let errors = {};
  if (!input.name || !input.name.trim().replace(/\s+/g, ' ') || !/^[a-zA-Z áéíóúÁÉÍÓÚñÑ\s]*$/.test(input.name) || input.name.length < 3) {
    errors.name = "Name of activity must contain only letters"; //.trim para quitar espacios vacios al principio y al final, .remplace para quitar espacios en blanco y expresion regular testeada con el .test para verificar que sea alfanumerico y 
  } else if (!input.duration) {
    errors.duration = "You must complete this field";
  } else if (!input.difficulty) {
    errors.difficulty = "You must select the complexity";
  } else if (!input.season) {
    errors.season = "You must select a station";
  } else if (input.countryId === []) {
    errors.countryId = "You must select a country";
  }
  return errors;
}

const ActivityCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const countries = useSelector((state) => state.allCountries);

  // const [error, setError] = useState("");
  // const [mostrarError, setMostrarError] = useState(false);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countryId: [],
  });

  function handleChange(e) {
    // console.log(input.name.trim());

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleDelete(i) {
    setInput({
      ...input,
      countryId: input.countryId.filter((el) => el !== i),
    });
  }

  function handleSelect(e) {
    if (!input.countryId.includes(e.target.value))
      //If input === a un input ya ingresado no se ingresa
      setInput({
        ...input,
        countryId: [...input.countryId, e.target.value],
      });
    console.log(input);
  }

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.name === "" ||
      input.duration === "" ||
      input.difficulty === "" ||
      input.season === "" ||
      input.countryId.length === 0
    )
      return alert("You must fill in the fields");

    dispatch(postActivities(input));
    alert("Actity Created");
    setInput({
      name: "",
      duration: "",
      difficulty: "",
      season: "",
      countryId: [],
    });
    history.push("/home");
  }

  return (
    <div>
      <div>
        <NavBar />
        <div className={style.container}>
          <div className={style.container2}>
            <div className={style.container3}></div>

            <form className={style.form} onSubmit={handleSubmit}>
              <h2> Create an Activity </h2>
              <div className={style.divInput}>
                <label>Name of the activities</label>
                <input
                  type="text"
                  placeholder="Place the Activity...  "
                  value={input.name}
                  name="name"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.name && <p className={style.error}>{errors.name}</p>}
              </div>

              <div className={style.divInput}>
                <label>Activity duration in minutes</label>
                <select
                  value={input.duration}
                  name="duration"
                  onChange={handleChange}
                >
                  <option value={"30"}>30</option>
                  <option value={"60"}>60</option>
                  <option value={"90"}>90</option>
                  <option value={"120"}>120</option>
                  <option value={"150"}>150</option>
                  <option value={"180"}>180</option>
                  <option value={"210"}>210</option>
                  <option value={"240"}>240</option>
                </select>
                {errors.duration && (
                  <p className={style.error}>{errors.duration}</p>
                )}
              </div>

              <div className={style.divInput}>
                <label> Difficulty </label>
                <select
                  name="difficulty"
                  value={input.difficulty}
                  onChange={(e) => handleChange(e)}
                >
                  <option value={"1"}>1</option>
                  <option value={"2"}>2</option>
                  <option value={"3"}>3</option>
                  <option value={"4"}>4</option>
                  <option value={"5"}>5</option>
                </select>
                {errors.difficulty && (
                  <p className={style.error}> {errors.difficulty}</p>
                )}
              </div>

              <div className={style.divInput}>
                <label>Season</label>
                <select
                  name="season"
                  value={input.season}
                  onChange={(e) => handleChange(e)}
                >
                  <option value={WINTER}>Winter</option>
                  <option value={SUMMER}>Summer</option>
                  <option value={FALL}>Fall</option>
                  <option value={SPRING}>Spring</option>
                </select>
                {errors.season && (
                  <p className={style.error}>{errors.season}</p>
                )}
              </div>
              {errors.countryId && (
                <p className={style.error}>{errors.countryId}</p>
              )}

              <div className={style.divInput}>
                <label>Enter country</label>
                <select className={style.selectCountries} onChange={(e) => handleSelect(e)}>
                  <option> Countries </option>
                  {countries.map((e) => (
                    <option value={e.id}>{e.name}</option>
                  ))}
                </select>
              </div>

              <div className={style.divCountrie}>
                {input.countryId.map((country) => (
                  <div className={style.divcountryId}>
                    <input
                      className={style.inputButton}
                      type="button"
                      value="X"
                      onClick={() => handleDelete(country)}
                    />
                    <p>{country}</p>
                  </div>
                ))}
              </div>

              <div>
                <button className={style.inputButton} type="submit">
                  Create Activity
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCreate;
