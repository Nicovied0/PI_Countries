import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, postActivities } from "../../Redux/actions";
import { SUMMER, FALL, WINTER, SPRING } from "../../Const/Const";
import NavBar from "../Nav_bar/NavBar";
import style from './ActivityCreate.module.css'

function validate(input) {
  //function with verificated to errors in the form
  let errors = {};
  if (!input.name) {
    errors.name = "You must complete this field";
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
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    duration: "",
    difficulty: "",
    season: "",
    countryId: [],
  });

  function handleChange(e) {
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
    setInput({
      ...input,
      countryId: [...input.countryId, e.target.value],
    });
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
    <div >
      <div>
        <NavBar />
        <div className={style.container}>
          <div className={style.container2}>
            <div className={style.container3}></div>

            <form className={style.form} onSubmit={handleSubmit}>
              <h2> Create an Activity </h2>
              <div className={style.divInput}>
                <label className="labelActivity">Name of the activities</label>
                <input
                  className="i"
                  type="text"
                  placeholder="Place the Activity...  "
                  value={input.name}
                  name="name"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.name && <p className="e">{errors.name}</p>}
              </div>
            
              <div  className={style.divInput}>
                <label>Activity duration in minutes</label>
                <select
                  nvalue={input.duration}
                  name="duration"
                  onChange={handleChange}
                >
                  <option className="op" value={"30"}>
                    30
                  </option>
                  <option className="op" value={"60"}>
                    60
                  </option>
                  <option className="op" value={"90"}>
                    90
                  </option>
                  <option className="op" value={"120"}>
                    120
                  </option>
                </select>
                {errors.duration && <p className="e">{errors.duration}</p>}
              </div>

              <div  className={style.divInput}>
                <label> Difficulty </label>
                <select
                  name="difficulty"
                  value={input.difficulty}
                  onChange={(e) => handleChange(e)}
                >
                  <option className="op" value={"1"}>
                    1
                  </option>
                  <option className="op" value={"2"}>
                    2
                  </option>
                  <option className="op" value={"3"}>
                    3
                  </option>
                  <option className="op" value={"4"}>
                    4
                  </option>
                  <option className="op" value={"5"}>
                    5
                  </option>
                </select>
                
                {errors.difficulty && <p className="e"> {errors.difficulty}</p>}
              </div>


              <div  className={style.divInput}>
                <label>Season</label>
                <select
                  className="i"
                  name="season"
                  value={input.season}
                  onChange={(e) => handleChange(e)}
                >
                  <option className="op" value={WINTER}>
                    Winter
                  </option>
                  <option className="op" value={SUMMER}>
                    Summer
                  </option>
                  <option className="op" value={FALL}>
                    Fall
                  </option>
                  <option className="op" value={SPRING}>
                    Spring
                  </option>
                </select>
                {errors.season && <p className="e">{errors.season}</p>}
              </div>
              {errors.countryId && <p className="e">{errors.countryId}</p>}

              <div  className={style.divInput}>
                <label>Enter country</label>
                <select className="i" onChange={(e) => handleSelect(e)}>
                  <option className="op"> Countries </option>
                  {countries.map((e) => (
                    <option className="op" value={e.id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={style.divCountrie}>
                {input.countryId.map((country) => (
                  <div className={style.divcountryId}>
                    <input
                      className={style.inputButton }
                      type="button"
                      value="X"
                      onClick={() => handleDelete(country)}
                    />
                    <p className="pOfCountry">{country}</p>
                  </div>
                ))}
              </div>

              <div>
                <button className={style.inputButton } type="submit">
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
