export interface IEvent {
    nom: string;
    type: string;
    quartier: string;
    dateDebut: Date;
    dateFin: Date;
    prix: number;
    enfant: boolean;
}

function EventTable(props: {events: IEvent[]}) {
    if (props.events.length <= 0) {
        return <p>Aucun événement</p>;
    }

    return (
        <div>
            <table>
                <thead>
                <th>Nom</th>
                <th>Type</th>
                <th>Quartier</th>
                <th>Date debut</th>
                <th>Date fin</th>
                <th>Prix</th>
                <th>Autorisé enfant</th>
                </thead>
                <tbody>
                {props.events.map((event, index) =>
                        (
                            <tr key={index}>
                                <td>{event.nom}</td>
                                <td>{event.type}</td>
                                <td>{event.quartier}</td>
                                <td>{event.dateDebut.toDateString()}</td>
                                <td>{event.dateFin.toDateString()}</td>
                                <td>{event.prix}</td>
                                <td>{event.enfant ? "Oui" : "Non"}</td>
                            </tr>
                        )
                )}
                </tbody>
            </table>
        </div>
    )
}

export default EventTable