import styles from "../styles/formFieldPage.module.css";
import { userContext } from "../pages/_app";
import { useContext } from "react";
import { Button } from "@mui/material";
import { useState,useEffect } from "react";
import InstrPopUp from "../comps/instrPop";
import Image from "next/image";


const FormFieldPage = () => {
  const {
    setOpen,
    userName,
    setUserName,
    difficulty,
    setDifficulty,
    email,
    setEmail,
    category,
    setCategory,
  } = useContext(userContext);
  
  var [check, setCheck] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/server',{
      method:'POST',
      body: JSON.stringify({
        something:'true',
        userName:userName,
        email:email,
        difficulty:difficulty,
        category:category
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    const data = response = await response.json();
    console.log(data) 
    setOpen(check);
  };

  
  //difficulties levels
  const handleEasy = (e) => {
    setDifficulty(e.target.value);
  };
  const handleMedium = (e) => {
    setDifficulty(e.target.value);
  };
  const handleHard = (e) => {
    setDifficulty(e.target.value);
  };
  return (
    <>
      <form id={styles.form} action="/" method="post" onSubmit={handleSubmit}>
        <InstrPopUp />

        <div className={styles["text-field-div"]}>
          <label htmlFor="username">Enter your Name : </label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="username"
            autoFocus
            autoComplete="off"
            required
          />
        </div>
        <div className={styles["text-field-div"]}>
          <label htmlFor="email">Enter your Email : </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            autoFocus
            autoComplete="off"
            required
          />
        </div>

        <div className={styles["radio-field-div"]}>
          <p>Choose your difficulty level : </p>
          <div className={styles.container}>
            <label htmlFor="easy">
              Easy
              <div>
                <Image
                  className={styles["difficulty-img"]}
                  width={120}
                  height={120}
                  src="/easy.jpeg"
                />
              </div>
              <input
                id="easy"
                onChange={handleEasy}
                type="radio"
                value="easy"
                name="difficulty"
                required
              ></input>
            </label>
            <label>
              Medium
              <div>
                <Image
                  className={styles["difficulty-img"]}
                  width={120}
                  height={120}
                  src="/medium.jpg"
                />
              </div>
              <input
                type="radio"
                onChange={handleMedium}
                name="difficulty"
                value="medium"
              ></input>
            </label>
            <label>
              Hard
              <div>
                <Image
                  className={styles["difficulty-img"]}
                  width={120}
                  height={120}
                  src="/hard.jpg"
                />
              </div>
              <input
                type="radio"
                onChange={handleHard}
                name="difficulty"
                value="hard"
              ></input>
            </label>
          </div>
        </div>

        <div className={styles["category-div"]}>
          <p>Choose your category : </p>
          <div className={styles.container2}>
            <label>
              <p>Music</p>
              <input
                onChange={(e) => setCategory(e.target.value)}
                value="music"
                type="radio"
                name="category"
                required
              ></input>
            </label>
            <label>
              <p>Geography</p>
              <input
                onChange={(e) => setCategory(e.target.value)}
                value="geopgraphy"
                type="radio"
                name="category"
              ></input>
            </label>
            <label>
              <p>Science</p>
              <input
                onChange={(e) => setCategory(e.target.value)}
                value="science"
                type="radio"
                name="category"
              ></input>
            </label>
            <label>
              <p>History</p>
              <input
                onChange={(e) => setCategory(e.target.value)}
                value="history"
                type="radio"
                name="category"
              ></input>
            </label>
            <label>
              <p>Sports</p>
              <input
                onChange={(e) => setCategory(e.target.value)}
                value="sport_and_leisure"
                type="radio"
                name="category"
              ></input>
            </label>
          </div>
        </div>
        <div className={styles['play-button-div']}>
          <Button type="submit" id={styles["play-button"]}>
            PLAY
          </Button>  
        </div>
        
      </form>
    </>
  );
};

export default FormFieldPage;
