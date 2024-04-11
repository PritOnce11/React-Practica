import styled from "@emotion/styled"
import { Global } from "@emotion/react";
import { Titles } from "../css/StylesPage";

interface CustomDivProps {
    background: string,
    color: string,
}

export default function StyledEmotionApp() {

    return (
        <Content>
            <Global styles={{
                body: {
                    background: 'black',
                    margin: 0,
                    padding: 0,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }
            }} />

            <Titles>FORM STYLED</Titles>

            <div className="main-div">
            <CustomDiv
                background='#402872'
                color="white">
                <h3>Pagina estilizada con Emotion</h3>
                <Form>
                    <label htmlFor="fname">First name:</label>
                    <input type="text" id="fname" name="fname" />
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" />
                    <input type="submit" value="Submit" />
                </Form>
            </CustomDiv>
            </div>
        </Content>
    )
}

export const Content = styled.div(
    {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',

        ".main-div": {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 100px)',
            position: 'relative',
        }
    }
)


export const CustomDiv = styled.div<CustomDivProps>(
    {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '500px',
    width: '500px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    },
    props => ({ background: props.background, color: props.color }) 
)

export const Form = styled.form({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '500px',
    width: '80%',
    margin: '0 auto',
    '& label': {
        fontWeight: 'bold',
    },
    '& input[type="text"]': {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
    },
    '& input[type="submit"]': {
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'white',
        color: '#402872',
    },
})