import type { NextPage } from "next";
import { Button, Container, Stack, TextField } from "@mui/material";

const About: NextPage = () => {
  return (
    <div>
      <main>
        <h1>unicorn作成ページ</h1>
        <Container maxWidth="sm" sx={{ pt: 5 }}>
          <form action={`${process.env.API_ORIGIN}/unicorns`} method="post">
            <Stack spacing={3}>
              <TextField required label="名前" />
              <TextField required label="タイプ" />
              <Button
                color="primary"
                variant="contained"
                size="large"
                type="submit"
              >
                作成
              </Button>
            </Stack>
          </form>
        </Container>
        {/* <form>
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
        </form> */}
      </main>
    </div>
  );
};

export default About;
