import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Blurhash } from "react-blurhash";
import { Box } from "@mui/material";
// import useImageToBlurhash from "../../hooks/useImageToBlurhash";

function LazyImage({ imageUrl }) {
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };

  return (
    <Box position="relative">
      <LazyLoadImage
        key={imageUrl}
        src={imageUrl}
        onLoad={handleLoad}
        beforeLoad={handleLoadStarted}
        width={100}
        height={100}
      />
      {!isLoaded && isLoadStarted && (
        // <LazyLoadComponent>
        <Box zIndex={20} position="absolute" top={0} left={0}>
          <Blurhash
            hash="ZB7Jnd#m0|6NwK}Z-U5kACjFofbHR*oLofaxa|bH5QS#=y$4X8ACI:-B-AX8R%n%xaWBNaf+n%n%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
            width={100}
            height={100}
          />
        </Box>
        // </LazyLoadComponent>
      )}
    </Box>
  );
}

export default LazyImage;
