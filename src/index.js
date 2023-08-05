//const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //console.log(event)
    // const input = document.querySelector("#searchByID")
    // console.log(input.value)
    
    const searchValue = event.target.searchByID.value

    fetch(`http://localhost:3000/movies/${searchValue}`)
        .then(res => {
            if(res.ok){
                return res.json()
            }else{
                alert("This ID is not valid. Please enter another one.")
            }
        })
        .then(data => {
            const title = document.querySelector("#movieDetails h4")
            const summary = document.querySelector("#movieDetails p")

            title.textContent = data.title;
            summary.textContent = data.summary
        })
        .catch(err => console.log(err))

  });
//};

//document.addEventListener("DOMContentLoaded", init);
