// ReservaHotelContext.tsx
import { createContext, Dispatch, SetStateAction } from 'react';

export type ReservaHotelContextType = {
  reserva: boolean;
  setReserva: Dispatch<SetStateAction<boolean>>;
};

export const ReservaHotelContext = createContext<ReservaHotelContextType | undefined>(undefined);
