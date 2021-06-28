export type PassengerStatus = 'A' | 'B' | 'C';

export interface PassengerModel {
  id: number;
  bonusMiles: number;
  name: string;
  firstName: string;
  passengerStatus: PassengerStatus;
}

export interface PassengerUpdateModel extends Omit<PassengerModel, 'id'> {
  id?: number;
}
