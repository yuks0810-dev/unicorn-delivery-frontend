import type { NextPage } from "next";
import { useForm, Controller } from "react-hook-form";
import { Button, Container, Stack, TextField, MenuItem } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";

const About: NextPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      checkBox: false,
      name: "",
      type: "",
    },
  });
  const onSubmit = async (props: any) => {
    const url = `${process.env.API_ORIGIN}/unicorns`;
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
  };

  return (
    <div>
      <main>
        <h1>unicorn作成ページ</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          action={`${process.env.API_ORIGIN}/unicorns`}
          method="post"
        >
          <Controller
            control={control}
            name="checkBox"
            render={({ field: { value, onChange } }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={value}
                    onChange={onChange}
                    color="primary"
                  />
                }
                label="チェックボックス"
              />
            )}
          />
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                label="名前"
                fullWidth
                margin="normal"
                placeholder="unicorn name"
                id="name"
              />
            )}
          />
          <Controller
            control={control}
            name="type"
            render={({ field }) => (
              <TextField
                {...field}
                label="種類"
                fullWidth
                margin="normal"
                id="type"
                select
              >
                <MenuItem value="1">The European Unicorn</MenuItem>
                <MenuItem value="2">
                  The Bright European (Rainbow) Unicorn
                </MenuItem>
                <MenuItem value="3">Eastern European Unicorn</MenuItem>
                <MenuItem value="4">Straight-Horned Unicorn</MenuItem>
                <MenuItem value="5">The Qilin – The Chinese Unicorn</MenuItem>
                <MenuItem value="6">The Nightmare</MenuItem>
                <MenuItem value="7">
                  The Magicorns – Most Powerful Unicorns
                </MenuItem>
                <MenuItem value="8">The Pegasus</MenuItem>
                <MenuItem value="9">The High-Flying Unicorn</MenuItem>
              </TextField>
            )}
          />
          <Button variant="contained" color="primary" type="submit">
            作成
          </Button>
        </form>
      </main>
    </div>
  );
};

export default About;
