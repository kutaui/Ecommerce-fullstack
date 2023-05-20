"use client"
import TextField from '@mui/material/TextField';
import Button, {ButtonProps} from "@mui/material/Button";

export default function Login(props:any) {
    return <>
        <div className="m-auto rounded-xl mt-10 bg-white max-w-[30%] min-w-[300px] h-96">
            <div className="pt-10 w-full h-full">
                <form className="w-full h-60 flex flex-col" action="">
                    <TextField sx={{margin: "auto", width: "80%"}} label="E-mail" variant="outlined"/>
                    <TextField sx={{margin: "auto", width: "80%"}} label="Password" type="password" variant="outlined"/>
                    <Button sx={{
                        margin: "auto", color: "white", width: "35%", "&.MuiButton-contained": {
                            backgroundColor: '#33393c',
                            "&:hover": {backgroundColor: '#000000'}
                        }
                    }} variant="contained">{props.button}</Button>
                </form>
            </div>
        </div>
    </>
}