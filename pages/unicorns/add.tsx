import type { NextPage } from "next";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const About: NextPage = () => {
  return (
    <div>
      <main>
        <h1>unicorn作成ページ</h1>
        <form>
          <div>
            <TextField
              id="name"
              label="name"
              margin="normal"
            />
            <TextField
              id="type"
              label="type"
              margin="normal"
            />
          </div>

          <Button variant="contained" style={{margin: "10px 0px"}}>Contained</Button>
        </form>
      </main>
    </div>
  );
};

export default About;
