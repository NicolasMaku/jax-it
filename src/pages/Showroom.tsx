import {useEffect, useState} from "react";
import {IEvent} from "../components/event/EventTable.tsx";
import EventTable from "../components/event/EventTable.tsx";

function Showroom() {
    const[events, setEvents] = useState<IEvent[]>([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const eventsData: IEvent[] = [
            {
                nom: "MadaJazzCar",
                type: "Musique",
                quartier: "Lumielle",
                dateDebut: new Date("2019-12-10"),
                dateFin: new Date("2019-12-10"),
                prix: 120,
                enfant: false,
            },
            {
                nom: "Fête de la musique",
                type: "Concert",
                quartier: "Centre-Ville",
                dateDebut: new Date("2020-06-21"),
                dateFin: new Date("2020-06-21"),
                prix: 0,
                enfant: true,
            },
            {
                nom: "Festival des Arts Visuels",
                type: "Exposition",
                quartier: "Rivière-Belle",
                dateDebut: new Date("2021-09-12"),
                dateFin: new Date("2021-09-19"),
                prix: 50,
                enfant: true,
            },
            {
                nom: "Marché Nocturne",
                type: "Marché",
                quartier: "Quartier Historique",
                dateDebut: new Date("2022-07-15"),
                dateFin: new Date("2022-07-15"),
                prix: 5,
                enfant: true,
            },
            {
                nom: "Festival des Plages",
                type: "Sport",
                quartier: "Plage de l'Est",
                dateDebut: new Date("2023-05-10"),
                dateFin: new Date("2023-05-12"),
                prix: 200,
                enfant: false,
            },
            {
                nom: "Cinéma en plein air",
                type: "Cinéma",
                quartier: "Parc Central",
                dateDebut: new Date("2023-08-05"),
                dateFin: new Date("2023-08-05"),
                prix: 15,
                enfant: true,
            },
            {
                nom: "Course de voitures électriques",
                type: "Sport",
                quartier: "Circuit de la Rivière",
                dateDebut: new Date("2024-02-14"),
                dateFin: new Date("2024-02-14"),
                prix: 150,
                enfant: false,
            },
            {
                nom: "Salon du livre",
                type: "Culture",
                quartier: "Salle des Expositions",
                dateDebut: new Date("2024-11-01"),
                dateFin: new Date("2024-11-03"),
                prix: 30,
                enfant: true,
            },
            {
                nom: "Concert Rock in the Park",
                type: "Musique",
                quartier: "Parc de la Ville",
                dateDebut: new Date("2025-04-05"),
                dateFin: new Date("2025-04-05"),
                prix: 80,
                enfant: false,
            },
            {
                nom: "Festival Culinaire",
                type: "Gastronomie",
                quartier: "Place de la République",
                dateDebut: new Date("2025-06-20"),
                dateFin: new Date("2025-06-22"),
                prix: 40,
                enfant: true,
            }
        ];


        setEvents(eventsData);
    }

    return (
        <div>
            <h1>Evenements:</h1>
            <EventTable events={events}/>
        </div>
    )
}

export default Showroom;