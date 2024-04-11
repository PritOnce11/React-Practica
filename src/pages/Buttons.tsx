import styled from '@emotion/styled'
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../slices/counterHook';

interface CustomButtonProps {
    disabled: boolean,
    color?: 'red' | 'blue'
}

export default function Buttons() {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div className="d-flex justify-content-center p-3 mb-2 bg-black text-white">
            <div className="btn-group" role="group" aria-label="Basic example">
                <CustomButton
                    color='blue'
                    className="btn btn-primary"
                    onClick={() => dispatch(decrement())}
                    disabled={count <= 1}
                >Previous</CustomButton>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => dispatch(reset())}
                >First Page</button>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => dispatch(increment())}
                >Next Page</button>
            </div>
        </div>
    )
}

export const CustomButton = styled.span< CustomButtonProps >(
    {
      fontSize: 20
    },
    props => ({ color: props.color })
  )
