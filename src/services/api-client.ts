import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "62b7b72cddb54d9dbefeadc131123a29",
  },
});
