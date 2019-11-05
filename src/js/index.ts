import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface IRecord {
    title: string;
    artist: string;
    duration: number;
    yearOfPublication: number;
}

let baseURI: string = "http://localhost:62959/api/Records";

let GetAllButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("getAllButton");
GetAllButton.addEventListener("click", GetAll);

function GetAll(): void {
    let getAllOutputElement: HTMLDivElement = <HTMLDivElement>document.getElementById("getAllDivOutput");

    axios.get<IRecord[]>(baseURI)
        .then(function (response: AxiosResponse<IRecord[]>): void {
            let result: string = "<ul class = 'list-group' id=recordList>";
            response.data.forEach((record: IRecord) => {
                result += "<li class='list-group-item' >" + record.title + " " + record.artist + " " + record.duration + " " + record.yearOfPublication + "</li>";
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