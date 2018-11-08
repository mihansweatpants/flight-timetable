import React from 'react';
import { getTimeString } from 'helpers';
import {
	FlightTable, 
	FlightTableRow,
	Time,
	Airline,
	FlightNumber,
	Terminal,
	Status
} from './styles';

export default ({ flights }) => (
	<FlightTable>
		{flights.length !== 0 &&
			flights.map(
				({
					type,
					status,
					flight: { number, iataNumber, icaoNumber },
					uid,
					airline,
				}, index) => (
					<FlightTableRow key={uid}>
						<Time>
							{getTimeString(flights[index][type].scheduledTime)}{' '}
						</Time>
						<Airline>
							{airline.name}
						</Airline>
						<FlightNumber>
							<div>
								<b>{number}</b>
								<br/><br/>
								{iataNumber}
								<br/>
								{icaoNumber}
							</div>
						</FlightNumber>
						<Terminal>
							{flights[index][type].terminal}
						</Terminal>
						<Status isDelayed={status === 'delayed'}>
							{status}
						</Status>
					</FlightTableRow>
				)
			)}
	</FlightTable>
);