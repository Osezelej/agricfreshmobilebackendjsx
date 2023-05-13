import supabase from "../database.js";
function handleRequest(app, option, done) {
  // sign in user
  app.post("/v1/signup", async (req, res) => {
    const body = req.body;
    let attempt = true;

    // loggin in to a user_data to register new data
    const { data, error } = await supabase.from("user_data").insert([
      {
        name: body["name"],
        email: body["email"],
        password: body["password"],
      },
    ]);

    console.log(data);
    if (error) {
      attempt = false;
    }

    if (attempt) {
      res.send(body);
    } else {
      res.code(406);
      res.send("signup error");
      console.log(error.message);
    }
  });

  
  //  login user
  app.post("/v1/login", async (req, res) => {
    const body = req.body;
    console.log(body);
    // to select data
    const { data, error } = await supabase
      .from("user_data")
      .select("*")
      .eq("email", body["email"])
      .eq("password", body["password"]);
    console.log(error);

    if (data.length > 0) {
      res.send("succesfull");
    } else {
      res.code(403);
      res.send("un_succesfull");
    }
  });

  // forgot password
  app.get("/v1/frgtPswd", async (req, res) => {
    const { email } = req.query;

    const { data, error } = await supabase
      .from("user_data")
      .select("email")
      .eq("email", email);

    console.log(data);
    if (data.length > 0) {
      res.send(data);
    } else {
      res.code(401);
      res.send("error");
    }
  });
  done();
}
export default handleRequest;
