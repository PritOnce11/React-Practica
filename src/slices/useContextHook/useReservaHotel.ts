// useReservaHotel.tsx
import { useContext } from 'react';
import { ReservaHotelContext, ReservaHotelContextType } from './ReservaHotelContext';

export function useReservaHotel(): ReservaHotelContextType {
  const context = useContext(ReservaHotelContext);
  if (!context) {
    throw new Error('useReservaHotel must be used within a ReservaHotelProvider');
  }
  return context;
}
