const button = document.querySelector(".searchButton");
const link = "https://api.nasa.gov/planetary/apod";
const key = "JehiTzWdfJItDBzA3cNBsZTaguKYv6mNdAp3Aczr";
let urlResult = `${link}?api_key=${key}`;

function searchData () {
    urlResult = `${link}?api_key=${key}&date=`
    let dataInput = document.querySelector("#dataInput").value;
    dataInput = `${urlResult}${dataInput}`;
    console.log(dataInput);
    feedAPI(dataInput);
}

async function feedAPI (url) {
    document.getElementById("rocket").hidden = false;
    let title = document.getElementById('titlePhoto');
    let dataDay = document.getElementById('date');
    let description = document.getElementById('description');
    try {
        await fetch(url)
            .then(async function (response) {
                if(response.ok){
                    return response.json();
                } else {
                    alert("Day not found.");
                    throw new Error("Day not found.");
                }
            })
            .then(async function (data) {
                console.log(data);
                let mediaType = data.media_type;

                title.innerHTML = data.title;
                dataDay.innerHTML = data.date;
                if (mediaType === "image") {
                    let photo = data.url;
                    getImage(photo);
                } else {
                    let video = data.url;
                    getVideo(video);
                }
                description.innerHTML = data.explanation;
                localStorage.setItem("url", url)
            });
    } catch (error) {
        console.log(error);
    }
    document.getElementById("rocket").hidden = true;
}

document
    .addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            document.getElementById("searchButton").click();
        }
    });

feedAPI(localStorage.getItem("url"));
