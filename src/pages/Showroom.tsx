import {useEffect, useState} from "react";
import {IEvent} from "../components/event/EventTable.tsx";
import EventTable from "../components/event/EventTable.tsx"
import {SubmitHandler, useForm} from "react-hook-form";

type FormFields = {
    dateMin: string,
    dateMax: string,
    prixMin: number,
    prixMax: number,
    enfant: boolean,
}

function Showroom() {
    const[events, setEvents] = useState<IEvent[]>([]);
    const[eventsFilter, setEventsFilter] = useState<IEvent[]>([]);
    const[loading, setLoading] = useState(true);
    const[searching, setSearching] = useState(false);

    // formulaire
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<FormFields>();

    useEffect(() => {
        const loadTime = setTimeout(() => {
            setLoading(false);
        }, 1000)

        fetchData();

        return () => {
            clearTimeout(loadTime);
        }
    }, []);

    // useEffect(() => {
    //     console.log("Le formulaire est en submit")
    //     setSearching(true);
    // }, [events]);

    const getData = () => {
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

        return eventsData;
    }

    const fetchData = async () => {
        setEvents(getData);
    }

    const filterData = async (data) => {
        setLoading(true);
        const minD = new Date(data.dateMin);
        const maxD = new Date(data.dateMax);

        let filtered = getData();

        if (data.dateMin !== '' && data.dateMin !== undefined) {
            filtered = filtered.filter(event => {
                return event.dateDebut >= minD && event.dateDebut <= maxD;
            })
        }

        if (data.prixMin !== '' && data.prixMin !== undefined) {
            filtered = filtered.filter(event => {
                return event.prix >= data.prixMin && event.prix <= data.prixMax;
            })
        }

        filtered = filtered.filter(event => {
            return event.enfant == data.enfant;
        })

        setEvents(filtered)
        setLoading(false)
        // console.log("Filtered", filtered)
    }

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
        filterData(data)
        setSearching(true);
    }

    return (
        <div>
            <h1>Evenements:</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="checkbox" { ...register("enfant") } id=""/>Enfants

                <div>
                    Date min<input type="date"
                       {
                           ...register("dateMin")
                       }
                        id=""/>
                    Date max<input type="date"
                       {
                           ...register("dateMax")
                       }
                       id=""/>
                </div>
                <div>
                    Prix min<input type="number" step="0.01"
                        {
                            ...register("prixMin")
                        }
                    id=""/>

                    Prix max<input type="number" step="0.01"
                       {
                           ...register("prixMax")
                       }
                    />
                </div>
                <button type="submit" >Filtrer</button>
            </form>

            {searching && <h2>Le résultat de votre recherche:</h2>}
            {loading && <p>Loading</p>}
            {!loading && <EventTable events={events}/>}

        </div>
    )
}

export default Showroom;