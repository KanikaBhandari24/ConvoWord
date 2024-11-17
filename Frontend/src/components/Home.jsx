import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa6";
import axios from "axios"
const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convert, setConvert]=useState("")
  const [downloadError, setDownloadError]=useState("")

  // console.log(selectedFile);

  const handleFileChange = (e) => {
    //console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };
//async to call frontend from backend
  const handleSubmit = async(event) => {
    event.preventDefault();
    if (!selectedFile) {
      setConvert("Please select a File");
      return;
    }
    const formData=new FormData()
    formData.append("file",selectedFile)
    try {
      //URL IS FROM POSTMAN 
      const response= await axios.post("http://localhost:3000/convoFile",formData,{
        //BLOB IS FOR BINARY OBJECTS-IMAGE, WORD FILE
        responseType: "blob",
      })
      console.log(response);
      
      const url=window.URL.createObjectURL(new Blob([response.data]))
      console.log(url);
      
      const link=document.createElement("a")
      console.log(link);
      
      link.href=url;
      console.log(link);
      
      link.setAttribute("download",selectedFile.name.replace(/\.[^/.]+$/,"")+".pdf")
      console.log(link);
      
      document.body.appendChild(link)
      console.log(link);
      
      link.click()
      link.parentNode.removeChild(link)
      setSelectedFile(null)
      setDownloadError("")
      setConvert("Yay! File Converted Successfully.")
    } catch (error) {
      console.log(error);
      if(error.response && error.response.status==400){
        setDownloadError("An Error occurred: ",error.response.data.message);
      }
      else{
        setConvert("");
      }
      
    }
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 md:px-40 font-serif">
        <div className="flex h-screen items-center justify-center">
          <div className="border-2 border-dotted px-4 py-2 md:px-8 md:py-6 border-pink-500 rounded-lg shadow-lg">
            <h1 className="text-center text-3xl font-bold font-serif mb-4">
              Word to Pdf
            </h1>
            <p className="text-center text-l font-serif mb-4">
              Convert all your Word files to PDF with ConvoWord
            </p>

            <div className="flex flex-col items-center space-y-2">
              <input
                type="file"
                accept=".doc, .docx"
                onChange={handleFileChange}
                className="hidden"
                id="File"
              />
              <label
                htmlFor="File"
                className="w-full flex items-center justify-center px-5 py-3 bg-gray-100 text-gray-700 border-pink-300 rounded-lg shadow-lg cursor-pointer hover:bg-pink-500 duration-300 hover:text-white"
              >
                <FaFileWord className="text-xl mr-2" />
                <span className="text-xl mr-2">
                  {selectedFile ? selectedFile.name : "Choose file"}
                </span>
              </label>
              <button
                onClick={handleSubmit}
                disabled={!selectedFile}
                className="disabled:bg-gray-400 disabled:pointer-events-none text-white bg-pink-400 rounded-lg shadow-lg cursor-pointer text-lg hover:bg-pink-500 duration-300 font-bold px-5 py-1"
              >
                Convert
              </button>
              {convert && (<div className="text-green-500 text-center">{convert}</div>)}
              {downloadError && (<div className="text-red-500 text-center">{downloadError}</div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
