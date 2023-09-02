"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [city, setCity] = useState(false);
  const topCities = [
    { label: "Kolkata" },
    { label: "New Delhi" },
    { label: "Banglore" },
    { label: "Hyderabad" },
    { label: "Mumbai" },
    { label: "Pune" },
    { label: "Gurgaon" },
    { label: "Noida" },
    { label: "Chennai" },
  ];
  const onSelectCity = (e, value) => {
    setCity(value?.label);
  };
  return (
    <>
      <div className={styles.container}>
        <Image
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Picture of the food"
          width={1366}
          height={500}
          style={{ objectFit: "cover", maxHeight: "70vh" }}
        />
        <div className={styles.content}>
          <h1>Zwigato</h1>
          <p>Discover the best food & drinks {city ? "in" + " " + city : ""}</p>
          <div className="flex mt-8 w-[110%]">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={topCities}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} placeholder="Pick a location" />
              )}
              style={{
                background: "white",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              onChange={onSelectCity}
            />
            <TextField
              id="outlined-basic"
              placeholder="Search for resturant, cuisine or dish"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              style={{
                background: "white",
                width: "100%",
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
