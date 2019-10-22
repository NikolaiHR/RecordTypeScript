import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface IRecord {
    title: string;
    artist: string;
    duration: number;
    yearOfPublication: number;
    album: string;
}

let baseURI: string = "http://localhost:62959/api/Records";

let GetAllButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllButton");
GetAllButton.addEventListener("click", GetAll);

function GetAll(): void {
    let getAllOutputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("getAllDivOutput");

    axios.get<IRecord[]>(baseURI)
        .then(function (response: AxiosResponse<IRecord[]>): void {
            let result: string = "<ul id=recordList>";
            response.data.forEach((record: IRecord) => {
                result += "<li>" + record.title + " " + record.artist + " " + record.duration + " " + record.yearOfPublication + " " + record.album + "</li>";
            });
            result += "</ul>";
            getAllOutputElement.innerHTML = result;
        })
        .catch(function (error: AxiosError): void {
            if (error.response) {
                getAllOutputElement.innerHTML = error.message;

            }
            else {
                getAllOutputElement.innerHTML = error.message;
            }
        }
        );
}