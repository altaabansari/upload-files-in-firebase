import React, { useState } from "react";
import { storage } from "./Firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Avatar from "@mui/material/Avatar";
import { style } from "@mui/system";
const FileUpload = () => {
  const [img, setImg] = useState(null);
  const [url, setUrl] = useState(null);
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };
  const uploadImg = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, "Resumes");

    uploadBytes(storageRef, img)
      .then(() => {
        getDownloadURL(storageRef)
          .then((url) => setUrl(url))
          .catch((error) => console.log(error.message, "Error in URL"));
        console.log(url);

        // setImg(null);
      })
      .catch((error) => console.log(error.message, "Error in URL"));

    //   document.write("Please Select Img");
  };
  console.log(img);

  //   console.log(img);

  return (
    <div>
      <form onSubmit={uploadImg}>
        <Avatar alt="Cindy Baker" src={url} />

        <input type="file" onChange={handleFileChange} />
        <button type="submit"> upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
