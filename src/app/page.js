"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./home.module.css";
import { Autocomplete, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { red } from "@mui/material/colors";

const Home = () => {
  const [city, setCity] = useState(false);
  const [resturant, setResturant] = useState([]);
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
    if (value?.label === "Kolkata") {
      setResturant([
        { name: "WoW Momos" },
        { name: "WoW China" },
        { name: "Arsalan Biryani" },
        { name: "Dominos" },
        { name: "Pizza Hut" },
        { name: "Behroz Biryani" },
        { name: "Oven Story pizza" },
        { name: "Hindustan Sweets" },
        { name: "Haldiram" },
      ]);
    } else {
      setResturant([]);
    }
  };

  const cardItems = [
    {
      title: "Order Online",
      desc: "Stay home and order to your doorstep",
      imageUrl:
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Dining",
      desc: "View the city's favourite dining venues",
      imageUrl:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "Nighlife and Clubs",
      desc: "Explore the city's top nightlife outlets",
      imageUrl:
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1429&q=80",
    },
  ];
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
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={resturant.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search for resturant, cuisine or dish"
                />
              )}
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
      <div className="flex ml-32 mt-12 mb-14">
        {cardItems.map((item) => (
          <Card sx={{ maxWidth: 345 }} className="mr-8 rounded-2xl">
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item?.imageUrl}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
