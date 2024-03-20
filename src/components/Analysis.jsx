/* eslint-disable react/prop-types */
import style from './Analysis.module.css';

export default function Analysis(props) {
    if (!props) return;
    if (props.data.error) {
        props.setGuideMsg(props.data.error);
        return <></>;
    }

    const {brand, model, similar_cars} = props.data;
    // const alternatives = similar_cars.map((car, i) => (
    //     <p key={`car-key-${i}`}>{`Model: ${car.model}\nYear: ${car.year}\nPrice: NZD$${car.price} `}</p>
    // ));

    const alternatives = similar_cars.map((car, i) => (
        <tr key={`car-key-${i}`}>
            <th>{car.model}</th>
            <th>{car.year}</th>
            <th>{`NZD$ ${car.price}`}</th>
        </tr>
    ));

    return (
        <div className={style.results}>
            <h3>Results:</h3>
            <h4>Your Car: {brand + ' ' + model}</h4>
            <h4>Similar Alternatives on our stock: </h4>
            <table className={style.resultsTable}>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{alternatives}</tbody>
            </table>
        </div>
    );
}
