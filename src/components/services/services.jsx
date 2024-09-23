import { Box, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "./serviceCard";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PetsIcon from "@mui/icons-material/Pets";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SpaIcon from "@mui/icons-material/Spa";

const Services = ({ servicesRef }) => {
  const servicesArray = [
    {
      id: 1,
      title: "Cat Bath",
      description:
        "Our gentle, stress-free baths use only the finest cat-friendly products to cleanse and refresh your cat's coat. With soothing water temperatures and expert handling, we ensure your cat stays calm and comfortable throughout, leaving them with a shiny, soft coat that looks and feels fantastic.",
      icon: <PetsIcon fontSize="large" />,
    },
    {
      id: 2,
      title: "Nail Trimming",
      description:
        "Proper nail care is essential for your cat’s comfort and health. Our trained professionals carefully trim your cat’s nails, reducing the risk of injury and preventing painful overgrowth. We make the process quick and stress-free, ensuring your cat’s paws are well-groomed and protected.",
      icon: <ContentCutIcon fontSize="large" />,
    },
    {
      id: 3,
      title: "Fur Brushing",
      description:
        "Keep your cat’s fur looking its best with our professional brushing and de-shedding services. We gently remove loose hair, reduce shedding, and prevent mats and tangles, leaving your cat’s coat smooth and healthy. Perfect for cats with long or short fur, this service helps keep your home fur-free, too!",
      icon: <HealthAndSafetyIcon fontSize="large" />,
    },
    {
      id: 4,
      title: "Cat Massage Therapy",
      description:
        "Pamper your cat with a calming massage that promotes relaxation and well-being. Our massage sessions help reduce anxiety, relieve tension, and improve circulation. Ideal for older cats or those prone to stress, this service ensures your feline leaves feeling refreshed and rejuvenated.",
      icon: <SpaIcon fontSize="large" />,
    },
  ];
  return (
    <Box
      ref={servicesRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: "4rem",
        mt: "100px",
        // justifyContent: "center",
        // gap: "1.5rem",
      }}
    >
      <Typography fontWeight={"bold"} fontSize={{ xs: "20px", md: "40px" }}>
        Our Grooming{" "}
        <span
          style={{
            color: "orange",
          }}
        >
          Services
        </span>
        {/* <Typography fontWeight={"inherit"} fontSize={"inherit"} color="primary">
          Services
        </Typography> */}
      </Typography>
      <Typography fontWeight={"light"} fontSize={"16px"} color="grey">
        Here are few of our most popular services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.8rem",
          justifyContent: "center",
          mt: "50px",
          // alignItems: "center",
        }}
      >
        {servicesArray.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default Services;
